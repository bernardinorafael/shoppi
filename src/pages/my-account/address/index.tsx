import Head from 'next/head'
import Link from 'next/link'
import { CaretRight, TrashSimple } from 'phosphor-react'
import HeaderInternalPageNavigation from '../../../components/HeaderInternalPageNavigation'
import Tooltip from '../../../primitives/Tooltip'
import {
  AddressContainer,
  ButtonNewAddress,
  ButtonsContainer,
  Container,
  Content,
} from '../../../styles/pages/address'
import useAddressContext from '../../../contexts/AddressContext'

export default function Address() {
  const { adresses } = useAddressContext()

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

        <Content>
          {adresses.map((address) => {
            return (
              <AddressContainer key={address.id}>
                <header>
                  <strong>{address.addressName}</strong>
                  <em>Endereço padrão</em>
                </header>

                <div>
                  <span>{address.street}</span>
                  <span>{address.complement}</span>
                  <span>{address.district}</span>
                  <span>{`${address.city}, ${address.state} - ${address.zip}`}</span>
                </div>

                <ButtonsContainer>
                  <button>Tornar endereço padrão</button>

                  <Tooltip align="center" sideOffset={0} render="Apagar">
                    <button>
                      <TrashSimple weight="bold" size={20} />
                    </button>
                  </Tooltip>
                </ButtonsContainer>
              </AddressContainer>
            )
          })}
        </Content>
        <ButtonNewAddress href="/my-account/address/new-address">
          Adicionar novo endereço
        </ButtonNewAddress>
      </Container>
    </>
  )
}
