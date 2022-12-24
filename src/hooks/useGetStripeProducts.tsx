import { stripe } from '../services/stripe'

export async function useGetStripeProducts(metadata: string, key: string) {
  const response = await stripe.products.search({
    query: `metadata['${metadata}']:'${key}'`,
    expand: ['data.default_price'],
  })

  return response.data
}
