import Link from 'next/link'
import { CaretRight, House, Pen, SuitcaseSimple, TrashSimple } from 'phosphor-react'
import HeaderInternalPageNavigation from '../../../components/HeaderInternalPageNavigation'
import {
  AddressContainer,
  ButtonAction,
  AddressContent,
  ButtonNewAddress,
  Container,
  Content,
} from './styles'
import Head from 'next/head'
import useAddressContext from '../../../contexts/AddressContext'
import Tooltip from '../../../primitives/Tooltip'

export default function Address() {
  const { addresses, deleteAddress } = useAddressContext()

  async function handleDeleteAddress(id: string) {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    deleteAddress(id)
  }

  return (
    <>
      <Head>
        <title>Meus Endereços | Shoppi</title>
      </Head>

      <Container>
        <HeaderInternalPageNavigation current="Endereços">
          <Link href="/">Início</Link>
          <CaretRight />
          <Link href="/my-account">Minha conta</Link>
          <CaretRight />
        </HeaderInternalPageNavigation>

        <h1>Seus endereços</h1>

        {addresses.length === 0 ? (
          <h1>Nenhum endereço cadastrado</h1>
        ) : (
          <Content>
            {addresses.map((address) => {
              return (
                <AddressContainer key={address.id}>
                  <div>
                    {address.type === 'house' ? (
                      <House size={36} weight="regular" />
                    ) : (
                      <SuitcaseSimple size={36} weight="regular" />
                    )}
                  </div>

                  <AddressContent>
                    <Tooltip
                      align="start"
                      sideOffset={-5}
                      render={`${address.street}, ${address.number} - ${address.city}/${address.state}`}
                    >
                      <strong>
                        {address.street}, {address.number}
                      </strong>
                    </Tooltip>

                    <div>
                      <span>CEP - {address.zip}</span>
                      <span>
                        {address.city} - {address.state}
                      </span>
                    </div>

                    <div>
                      <span>
                        {address.client} - {address.fone}
                      </span>
                    </div>
                  </AddressContent>

                  <div>
                    <Tooltip side="left" render="Editar">
                      <ButtonAction>
                        <Pen size={20} weight="bold" />
                      </ButtonAction>
                    </Tooltip>

                    <Tooltip side="left" render="Excluir">
                      <ButtonAction onClick={() => handleDeleteAddress(address.id)}>
                        <TrashSimple size={20} weight="bold" />
                      </ButtonAction>
                    </Tooltip>
                  </div>
                </AddressContainer>
              )
            })}
          </Content>
        )}

        <ButtonNewAddress href="/my-account/address/new-address">
          Adicionar novo endereço
        </ButtonNewAddress>
      </Container>
    </>
  )
}
