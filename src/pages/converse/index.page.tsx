import Head from 'next/head'
import Image from 'next/image'
import { GetStaticProps } from 'next/types'
import Stripe from 'stripe'
import { Product } from '../../@types/product'
import ProductCard from '../../components/ProductCard'
import { GetStripeProducts } from '../../helpers/get-stripe-products'
import { ConverseContainer, ProductsContainer } from './styles'

export const getStaticProps: GetStaticProps = async () => {
  const converseResponse = await GetStripeProducts('brand', 'converse')

  const products = converseResponse.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount / 100,
      promotion: product.metadata.promotion,
    }
  })

  return {
    props: {
      products,
    },

    revalidate: 60 * 60 * 24, // 24h
  }
}

type ConverseProps = {
  products: Product[]
}

export default function Converse({ products }: ConverseProps) {
  return (
    <>
      <Head>
        <title>Converse | Shoppi</title>
      </Head>

      <ConverseContainer>
        <section>
          <Image src="/converse/converse-page-banner.png" alt="" fill />
        </section>

        <ProductsContainer>
          {products.map((product) => {
            return (
              <ProductCard
                id={product.id}
                key={product.id}
                name={product.name}
                price={product.price}
                imageUrl={product.imageUrl}
                promotion={product.promotion}
              />
            )
          })}
        </ProductsContainer>
      </ConverseContainer>
    </>
  )
}
