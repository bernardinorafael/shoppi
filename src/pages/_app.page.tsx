import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { Provider as TooltipProvider } from '@radix-ui/react-tooltip'
import { AddressContextProvider } from '../contexts/AddressContext'
import { GlobalProvider } from '../contexts/GlobalContext'
import { GlobalStyle } from '../styles/global-style'
import { lightTheme } from '../styles/themes/default-theme'
import Header from '../components/Header'
import BannerOfferClub from '../components/BannerOfferClub'
import Footer from '../components/Footer'
import { CartProvider } from 'use-shopping-cart'

export default function App({ Component, pageProps }: AppProps) {
  const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY ?? ''
  const CANCEL_URL = `${process.env.NEXT_WEBSITE_URL}/`
  const SUCCESS_URL = `${process.env.NEXT_WEBSITE_URL}/success`

  return (
    <GlobalProvider>
      <CartProvider
        mode="payment"
        cartMode="client-only"
        stripe={STRIPE_SECRET_KEY}
        currency="BRL"
        billingAddressCollection={false}
        shouldPersist={true}
        cancelUrl={CANCEL_URL}
        successUrl={SUCCESS_URL}
      >
        <ThemeProvider theme={lightTheme}>
          <GlobalStyle />

          <AddressContextProvider>
            <TooltipProvider delayDuration={0}>
              <Header />
              <Component {...pageProps} />

              <BannerOfferClub />
              <Footer />
            </TooltipProvider>
          </AddressContextProvider>
        </ThemeProvider>
      </CartProvider>
    </GlobalProvider>
  )
}
