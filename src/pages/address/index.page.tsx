import axios from 'axios'
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
import AlertDialog from '../../primitives/AlertDialog'
import { prisma } from '../../services/prisma'
import { authOptions } from '../api/auth/[...nextauth].api'
import {
  ActionButtonsBox,
  AddressBox,
  AddressInformationBox,
  ButtonAction,
  ButtonNewAddress,
  Content,
  Container,
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
  async function handleDeleteAddress(productId: string) {
    await axios.post('/api/address/delete-address', { productId })
    window.location.reload()
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
        </HeaderInternalPageNavigation>

        <h1>Seus endereços</h1>

        {addresses.length === 0 ? (
          <h1>Nenhum endereço cadastrado</h1>
        ) : (
          <Content>
            {addresses.map((address) => {
              return (
                <AddressBox key={address.id}>
                  <section>
                    <div>
                      {address.type === 'house' ? (
                        <House size={36} weight="regular" />
                      ) : (
                        <SuitcaseSimple size={36} weight="regular" />
                      )}
                    </div>

                    <AddressInformationBox>
                      <strong>
                        {address.street}, {address.number}
                      </strong>

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
                    </AddressInformationBox>
                  </section>

                  <ActionButtonsBox>
                    <Link href={`/address/edit-address/${address.id}`}>
                      <ButtonAction>
                        <Pen size={18} weight="bold" />
                        Editar
                      </ButtonAction>
                    </Link>

                    <AlertDialog
                      action="Sim, excluir endereço"
                      cancel="Cancelar"
                      description="Essa ação não pode ser desfeita. Isso excluirá permanentemente seu endereço e removerá os dados de nossos servidores."
                      title="Você tem certeza?"
                      execute={() => handleDeleteAddress(address.id)}
                    >
                      <ButtonAction>
                        <TrashSimple size={18} weight="bold" />
                        Excluir
                      </ButtonAction>
                    </AlertDialog>
                  </ActionButtonsBox>
                </AddressBox>
              )
            })}
          </Content>
        )}

        <ButtonNewAddress href="/address/new-address">
          Adicionar novo endereço
        </ButtonNewAddress>
      </Container>
    </>
  )
}
