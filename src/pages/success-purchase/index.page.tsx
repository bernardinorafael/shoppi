import { GetServerSideProps } from 'next'
import { unstable_getServerSession } from 'next-auth'
import Head from 'next/head'
import Link from 'next/link'
import { ArrowBendDownLeft } from 'phosphor-react'
import { useEffect } from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import { prisma } from '../../services/prisma'
import { stripe } from '../../services/stripe'
import { authOptions } from '../api/auth/[...nextauth].api'
import { Container } from './styles'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  if (!ctx.query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const session = await unstable_getServerSession(ctx.req, ctx.res, authOptions)
  const checkoutId = String(ctx.query.session_id)

  const checkout = await stripe.checkout.sessions.retrieve(checkoutId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const customer = checkout.customer_details.name

  await prisma.purchase.create({
    data: {
      amount_total_checkout: checkout.amount_total,
      checkout_id: checkoutId,
      email: checkout.customer_details.email,
      name: checkout.customer_details.name,

      userId: session.user.id,
    },
  })

  return {
    props: { customer },
  }
}

type SuccessPurchaseProps = {
  customer: string
}

export default function SuccessPurchase({ customer }: SuccessPurchaseProps) {
  const { clearCart } = useShoppingCart()

  useEffect(() => {
    clearCart()
  }, [clearCart])

  return (
    <>
      <Head>
        <title>{`Parabéns pela sua compra, ${customer}`}</title>
      </Head>

      <Container>
        <h1>Parabéns pela sua compra!! 🛍️</h1>
        <p>
          Uhuull! <strong>{customer}</strong>, sua compra já está sendo
          processada!
        </p>

        <Link href="/">
          Voltar ao catálogo!
          <ArrowBendDownLeft weight="bold" size="18" />
        </Link>
      </Container>
    </>
  )
}
