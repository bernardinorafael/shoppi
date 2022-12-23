export type Product = {
  brand?: string
  order?: string
  defaultPriceId: string
  gender?: 'male' | 'female'
  id: string
  imageUrl: string
  name: string
  price: number
  promotion: 'true' | 'false'
}
