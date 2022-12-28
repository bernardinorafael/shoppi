import { KeenSliderInstance } from 'keen-slider'
import { ReactNode, createContext, useContext, MutableRefObject } from 'react'

type GlobalContextType = {
  nextSlide: (ref: MutableRefObject<KeenSliderInstance>) => void
  prevSlide: (ref: MutableRefObject<KeenSliderInstance>) => void
  formatCurrency: Intl.NumberFormat
}

export const GlobalContext = createContext<GlobalContextType | null>(null)

export function GlobalProvider({ children }: { children: ReactNode }) {
  const formatCurrency = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  })

  function nextSlide(ref: MutableRefObject<KeenSliderInstance>) {
    ref.current.next()
  }

  function prevSlide(ref: MutableRefObject<KeenSliderInstance>) {
    ref.current.prev()
  }

  return (
    <GlobalContext.Provider value={{ nextSlide, prevSlide, formatCurrency }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default function useGlobalContext() {
  const context = useContext(GlobalContext)

  if (!context)
    throw new Error('useGlobalContext cannot be used outside GlobalProvider')

  return context
}
