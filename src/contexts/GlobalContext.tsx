import { KeenSliderInstance } from 'keen-slider'
import * as React from 'react'

type GlobalContextType = {
  nextSlide: (ref: React.MutableRefObject<KeenSliderInstance>) => void
  prevSlide: (ref: React.MutableRefObject<KeenSliderInstance>) => void
  formatCurrency: Intl.NumberFormat
}

export const GlobalContext = React.createContext<GlobalContextType | null>(null)

export function GlobalProvider({ children }: { children: React.ReactNode }) {
  const formatCurrency = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  })

  function nextSlide(ref: React.MutableRefObject<KeenSliderInstance>) {
    ref.current.next()
  }

  function prevSlide(ref: React.MutableRefObject<KeenSliderInstance>) {
    ref.current.prev()
  }

  return (
    <GlobalContext.Provider value={{ nextSlide, prevSlide, formatCurrency }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default function useGlobalContext() {
  const context = React.useContext(GlobalContext)

  if (!context) throw new Error('useGlobalContext cannot be used outside GlobalProvider')

  return context
}
