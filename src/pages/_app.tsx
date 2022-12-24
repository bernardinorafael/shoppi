import { Provider as TooltipProvider } from '@radix-ui/react-tooltip'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import BannerOfferClub from '../components/BannerOfferClub'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { AddressContextProvider } from '../contexts/AddressContext'
import { CartContextProvider } from '../contexts/CartContext'
import { GlobalProvider } from '../contexts/GlobalContext'
import { GlobalStyle } from '../styles/global-style'
import { lightTheme } from '../styles/themes/default-theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <CartContextProvider>
        <GlobalProvider>
          <GlobalStyle />

          <AddressContextProvider>
            <TooltipProvider delayDuration={100}>
              <Header />
              <Component {...pageProps} />

              <BannerOfferClub />
              <Footer />
            </TooltipProvider>
          </AddressContextProvider>
        </GlobalProvider>
      </CartContextProvider>
    </ThemeProvider>
  )
}
