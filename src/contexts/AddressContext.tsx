import * as React from 'react'
import { v4 as uuid } from 'uuid'
import { Address } from '../@types/address'

type AddressContextType = {
  adresses: Address[]
  createNewAddress: (data: Address) => void
}

type AddressForm = {
  zip: string
  city: string
  state: string
  street: string
  number: string
  district: string
  complement: string
  addressName: string
  isCurrentAddress: boolean
}

export const AddressContext = React.createContext<AddressContextType | null>(
  null,
)

export function AddressContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [adresses, setAddresses] = React.useState<Address[]>([])

  function createNewAddress(data: AddressForm) {
    setAddresses((state) => [
      {
        id: uuid(),
        zip: data.zip,
        city: data.city,
        state: data.state,
        number: data.number,
        street: data.street,
        district: data.district,
        complement: data.complement,
        addressName: data.addressName,
        isCurrentAddress: data.isCurrentAddress,
      },
      ...state,
    ])
  }

  return (
    <AddressContext.Provider value={{ createNewAddress, adresses }}>
      {children}
    </AddressContext.Provider>
  )
}

export default function useAddressContext() {
  const context = React.useContext(AddressContext)

  if (!context) throw new Error('useCart cannot be used within AddressContext')

  return context
}
