import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { CaretRight } from 'phosphor-react'
import HeaderInternalPageNavigation from '../../components/HeaderInternalPageNavigation'
import Tooltip from '../../primitives/Tooltip'
import { prisma } from '../../services/prisma'
import PurchaseAccordion from './components/PurchaseAccordion'
import PurchaseContent from './components/PurchaseContent'
import { ButtonAccordion, Container, ContentBox } from './styles'

export const getServerSideProps: GetServerSideProps = async () => {
  const checkoutsList = await prisma.purchase.findMany({
    orderBy: {
      created_at: 'desc',
    },
  })

  const checkouts = checkoutsList.map((checkout) => {
    return {
      ...checkout,
      created_at: String(checkout.created_at),
      amount_total_checkout: checkout.amount_total_checkout / 100,
    }
  })

  return {
    props: { checkouts },
  }
}

type MyPurchasesProps = {
  checkouts: {
    amount_total_checkout: number
    checkout_id: string
    created_at: string
    email: string
    id: string
    name: string
    userId: string
  }[]
}

export default function MyPurchases({ checkouts }: MyPurchasesProps) {
  const currencyFormatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  })

  return (
    <>
      <Head>
        <title>Minhas compras | Shoppi</title>
      </Head>

      <Container>
        <HeaderInternalPageNavigation current="Minhas compras">
          <Link href="/">Início</Link>
          <CaretRight />
        </HeaderInternalPageNavigation>

        <h1>Suas compras</h1>

        <ContentBox>
          {checkouts.map((checkout) => {
            return (
              <PurchaseAccordion
                key={checkout.id}
                content={<PurchaseContent id={checkout.id} />}
              >
                <ButtonAccordion>
                  <Tooltip
                    render={format(
                      new Date(checkout.created_at),
                      "dd 'de' LLLL 'de' yyyy',' 'às' HH:mm",
                      { locale: ptBR },
                    )}
                  >
                    <div>
                      <strong>Data do pedido:</strong>
                      <span>
                        {formatDistanceToNow(new Date(checkout.created_at), {
                          addSuffix: true,
                          locale: ptBR,
                        })}
                      </span>
                    </div>
                  </Tooltip>

                  <div>
                    <strong>Total:</strong>
                    <span>
                      {currencyFormatted.format(checkout.amount_total_checkout)}
                    </span>
                  </div>

                  <div>
                    <strong>Cliente:</strong>
                    <strong>{checkout.name}</strong>
                  </div>

                  <CaretRight weight="bold" size={22} />
                </ButtonAccordion>
              </PurchaseAccordion>
            )
          })}
        </ContentBox>
      </Container>
    </>
  )
}
