import { NextApiRequest, NextApiResponse } from 'next'
import { unstable_getServerSession } from 'next-auth'
import Stripe from 'stripe'
import { stripe } from '../../../services/stripe'
import { authOptions } from '../auth/[...nextauth].api'

type Product = {
  id: string
  amount_total: number
  description: string
  quantity: number

  price: {
    unit_amount: number
    id: string

    product: {
      id: string
      images: Array<string>
      metadata: {
        size: string
      }
    }
  }
} & Stripe.LineItem

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') return res.status(405).end()

  const session = await unstable_getServerSession(req, res, authOptions)

  if (!session) {
    return res.status(401).end()
  }

  const { checkoutId } = req.body

  const checkout = await stripe.checkout.sessions.retrieve(checkoutId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const products = checkout.line_items.data.map((product: Product) => {
    return {
      id: product.id,
      amountTotal: product.amount_total,
      description: product.description,
      quantity: product.quantity,
      unitAmount: product.price.unit_amount,
      productId: product.price.product.id,
      priceId: product.price.id,
      size: product.price.product.metadata.size,
      imageUrl: product.price.product.images[0],
    }
  })

  return res.status(201).json({ products })
}
