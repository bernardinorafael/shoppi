import { createContext, ReactNode, useContext, useState } from 'react'
import { v4 as uuid } from 'uuid'
import { Address } from '../@types/address'

type AddressContextType = {
  addresses: Address[]
  createNewAddress: (data: Address) => void
  deleteAddress: (id: string) => void
}

type AddressForm = {
  city: string
  client: string
  complement: string
  district: string
  fone: string
  isCurrentAddress: boolean
  number: string
  state: string
  street: string
  type: 'work' | 'house'
  zip: string
}

export const AddressContext = createContext<AddressContextType | null>(null)

export function AddressContextProvider({ children }: { children: ReactNode }) {
  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: '1',
      city: 'Sobral',
      client: 'Rafael Bernardino',
      district: 'Campo dos Velho',
      fone: '(48) 98856-6239',
      number: '1220',
      state: 'CE',
      street: 'Rua Marechal Humberto A.C. Branco',
      type: 'house',
      zip: '62030173',
    },
  ])

  function deleteAddress(id: string) {
    const newAddressList = addresses.filter((address) => {
      return address.id !== id
    })

    setAddresses(newAddressList)
  }

  function createNewAddress(data: AddressForm) {
    setAddresses((state) => [
      {
        city: data.city,
        client: data.client,
        complement: data.complement,
        district: data.district,
        fone: data.fone,
        id: uuid(),
        isCurrentAddress: data.isCurrentAddress,
        number: data.number,
        state: data.state,
        street: data.street,
        type: data.type,
        zip: data.zip,
      },
      ...state,
    ])
  }

  return (
    <AddressContext.Provider
      value={{ createNewAddress, deleteAddress, addresses }}
    >
      {children}
    </AddressContext.Provider>
  )
}

export default function useAddressContext() {
  const context = useContext(AddressContext)

  if (!context) throw new Error('useCart cannot be used outside AddressContext')
  return context
}
