import * as React from 'react'

type CartContextType = {}

export const CartContext = React.createContext<CartContextType | null>(null)

export function CartContextProvider({ children }: { children: React.ReactNode }) {
  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>
}

export default function useCart() {
  const context = React.useContext(CartContext)

  if (!context) throw new Error('useCart cannot be used within CartContext')

  return context
}
