import { stripe } from '../services/stripe'

export async function GetStripeProducts(
  metadata: string,
  key: string,
  limit?: number,
) {
  const response = await stripe.products.search({
    query: `metadata['${metadata}']:'${key}'`,
    expand: ['data.default_price'],
    limit,
  })

  return response.data
}
