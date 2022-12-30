import { NextApiRequest, NextApiResponse } from 'next'
import { stripe } from '../../services/stripe'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { priceId, quantity, email } = req.body

  if (req.method !== 'POST') return res.status(405).end()
  if (!priceId) return res.status(400).json({ message: 'Price not found!' })

  const CANCEL_URL = `${process.env.NEXT_WEBSITE_URL}/`
  const SUCCESS_URL = `${process.env.NEXT_WEBSITE_URL}/success-purchase?session_id={CHECKOUT_SESSION_ID}`

  const checkoutSession = await stripe.checkout.sessions.create({
    cancel_url: CANCEL_URL,
    success_url: SUCCESS_URL,
    mode: 'payment',
    payment_method_types: ['boleto', 'card'],
    phone_number_collection: { enabled: false },
    customer_email: email,
    currency: 'BRL',
    line_items: [{ price: priceId, quantity }],
    locale: 'pt-BR',
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  })
}
