import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { CaretRight } from 'phosphor-react'
import HeaderInternalPageNavigation from '../../components/HeaderInternalPageNavigation'
import { prisma } from '../../services/prisma'
import ButtonAccordionBox from './components/ButtonAccordionBox'
import PurchaseAccordion from './components/PurchaseAccordion'
import PurchaseContent from './components/PurchaseContent'
import { Container, ContentBox } from './styles'

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
                content={
                  <PurchaseContent
                    id={checkout.id}
                    checkoutId={checkout.checkout_id}
                  />
                }
              >
                <button>
                  <ButtonAccordionBox
                    amount_total_checkout={checkout.amount_total_checkout}
                    created_at={checkout.created_at}
                    name={checkout.name}
                  />
                </button>
              </PurchaseAccordion>
            )
          })}
        </ContentBox>
      </Container>
    </>
  )
}
