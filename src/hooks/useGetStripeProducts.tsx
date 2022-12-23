/* eslint-disable no-unused-expressions */
import { stripe } from '../services/stripe'

export const useGetStripeProducts = async (brand: string, page: number) => {
  const productResponse = await stripe.products.search({
    query: `metadata['brand']:'${brand}'`,
    expand: ['data.default_price'],
    limit: 5,
    page: String(page),
  })

  console.log(productResponse)

  return productResponse
}
