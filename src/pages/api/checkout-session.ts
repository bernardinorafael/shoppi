import { NextApiRequest, NextApiResponse } from 'next'
import { stripe } from '../../services/stripe'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { priceId } = req.body

  if (req.method !== 'POST') return res.status(405)
  if (!priceId) return res.status(400).json({ message: 'Price not found!' })

  const CANCEL_URL = `${process.env.NEXT_WEBSITE_URL}/`
  const SUCCESS_URL = `${process.env.NEXT_WEBSITE_URL}/success`

  const checkoutSession = await stripe.checkout.sessions.create({
    cancel_url: CANCEL_URL,
    success_url: SUCCESS_URL,
    mode: 'payment',
    payment_method_types: ['boleto', 'card'],
    phone_number_collection: {
      enabled: true,
    },
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  })
}
