import 'stripe'

declare module 'stripe' {
  namespace Stripe {
    interface Product {
      product: {
        id: string
        metadata: string
        images: string[]
      }
    }
  }
}
