import { GetServerSideProps } from 'next'
import { unstable_getServerSession } from 'next-auth'
import Head from 'next/head'
import Link from 'next/link'
import {
  CaretRight,
  House,
  Pen,
  SuitcaseSimple,
  TrashSimple,
} from 'phosphor-react'
import HeaderInternalPageNavigation from '../../components/HeaderInternalPageNavigation'
import Tooltip from '../../primitives/Tooltip'
import { prisma } from '../../services/prisma'
import { authOptions } from '../api/auth/[...nextauth].api'
import {
  AddressContainer,
  AddressContent,
  ButtonAction,
  ButtonNewAddress,
  Container,
  Content,
} from './styles'

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await unstable_getServerSession(req, res, authOptions)

  if (!session) {
    return {
      redirect: {
        destination: '/login-page',
        permanent: false,
      },
    }
  }

  const addresses = await prisma.address.findMany()

  return {
    props: {
      addresses,
    },
  }
}

type Addresses = {
  addresses: {
    city: string
    client: string
    complement: string
    district: string
    fone: string
    number: string
    state: string
    street: string
    type: 'work' | 'house'
    zip: string
    id: string
  }[]
}

export default function Address({ addresses }: Addresses) {
  return (
    <>
      <Head>
        <title>Meus Endereços | Shoppi</title>
      </Head>

      <Container>
        <HeaderInternalPageNavigation current="Endereços">
          <Link href="/">Início</Link>
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
                      <ButtonAction>
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
