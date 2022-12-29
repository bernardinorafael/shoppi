import { Container } from './styles'
import Link from 'next/link'
import { GetServerSideProps } from 'next'
import { stripe } from '../../services/stripe'
import { ArrowBendDownLeft } from 'phosphor-react'

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
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
  return (
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
  )
}
