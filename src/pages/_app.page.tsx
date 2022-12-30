import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { Provider as TooltipProvider } from '@radix-ui/react-tooltip'
import { GlobalProvider } from '../contexts/GlobalContext'
import { GlobalStyle } from '../styles/global-style'
import { lightTheme } from '../styles/themes/default-theme'
import Header from '../components/Header'
import BannerOfferClub from '../components/BannerOfferClub'
import Footer from '../components/Footer'
import { CartProvider } from 'use-shopping-cart'
import { SessionProvider } from 'next-auth/react'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY ?? ''

  const CANCEL_URL = `${process.env.NEXT_WEBSITE_URL}/`
  const SUCCESS_URL = `${process.env.NEXT_WEBSITE_URL}/success-purchase`

  return (
    <SessionProvider session={session}>
      <GlobalProvider>
        <CartProvider
          billingAddressCollection={false}
          cancelUrl={CANCEL_URL}
          cartMode="client-only"
          currency="BRL"
          mode="payment"
          shouldPersist={true}
          stripe={STRIPE_SECRET_KEY}
          successUrl={SUCCESS_URL}
        >
          <ThemeProvider theme={lightTheme}>
            <GlobalStyle />

            <TooltipProvider delayDuration={0}>
              <Header />
              <Component {...pageProps} />

              <BannerOfferClub />
              <Footer />
            </TooltipProvider>
          </ThemeProvider>
        </CartProvider>
      </GlobalProvider>
    </SessionProvider>
  )
}
