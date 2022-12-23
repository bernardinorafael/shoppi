import Head from 'next/head'
import Image from 'next/image'
import { GetStaticProps } from 'next/types'
import Stripe from 'stripe'
import { Product } from '../@types/product'
import ProductCard from '../components/ProductCard'
import { stripe } from '../services/stripe'
import { AdidasContainer, ProductsContainer } from '../styles/pages/adidas'

export const getStaticProps: GetStaticProps = async () => {
  const adidasResponse = await stripe.products.search({
    query: "metadata['brand']:'adidas'",
    expand: ['data.default_price'],
  })

  const products = adidasResponse.data.map((product) => {
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

type AdidasProps = {
  products: Product[]
}

export default function Adidas({ products }: AdidasProps) {
  return (
    <>
      <Head>
        <title>Adidas | Shoppi</title>
      </Head>

      <AdidasContainer>
        <section>
          <Image src="/adidas/adidas-banner.gif" alt="" fill />
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
      </AdidasContainer>
    </>
  )
}
