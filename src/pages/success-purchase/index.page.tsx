import { Container } from './styles'
import Link from 'next/link'
import { GetServerSideProps } from 'next'
import { stripe } from '../../services/stripe'
import { ArrowBendDownLeft } from 'phosphor-react'
import Head from 'next/head'
import { useShoppingCart } from 'use-shopping-cart'
import { useEffect } from 'react'

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const customerName = session.customer_details.name

  return {
    props: { customerName },
  }
}

type SuccessPurchaseProps = {
  customerName: string
}

export default function SuccessPurchase({
  customerName,
}: SuccessPurchaseProps) {
  const { clearCart } = useShoppingCart()

  useEffect(() => {
    clearCart()
  }, [clearCart])

  return (
    <>
      <Head>
        <title>{`Parabéns pela sua compra, ${customerName}`}</title>
      </Head>

      <Container>
        <h1>Parabéns pela sua compra!! 🛍️</h1>
        <p>
          Uhuull! <strong>{customerName}</strong>, sua compra já está à caminho!
        </p>

        <Link href="/">
          Voltar ao catálago!
          <ArrowBendDownLeft weight="bold" size="18" />
        </Link>
      </Container>
    </>
  )
}
