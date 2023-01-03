import Head from 'next/head'
import Image from 'next/image'
import { GetStaticProps } from 'next/types'
import Stripe from 'stripe'
import { Product } from '../../@types/product'
import ProductCard from '../../components/ProductCard'
import { GetStripeProducts } from '../../helpers/get-stripe-products'
import { BannerBox, ProductsContainer, SpecialsContainer } from './styles'

export const getStaticProps: GetStaticProps = async () => {
  const specialsResponse = await GetStripeProducts('special', 'true')

  const products = specialsResponse.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      order: product.metadata.order,
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

type SpecialsProps = {
  products: Product[]
}

export default function Specials({ products }: SpecialsProps) {
  return (
    <>
      <Head>
        <title>Especiais | Shoppi</title>
      </Head>

      <SpecialsContainer>
        <section>
          <Image src="/converse/converse-banner-logo.png" alt="" fill />
        </section>

        <BannerBox>
          <strong>Um Top 10 especial</strong>

          <em>
            Aqui temos um top 10 de itens especiais escolhidos pela minha
            companheira. Sendo uma forma de homenagem, para alguém especial em
            minha trajetória.
          </em>
        </BannerBox>

        <ProductsContainer>
          {products.map((product) => {
            return (
              <ProductCard
                id={product.id}
                key={product.id}
                name={product.name}
                order={product.order}
                price={product.price}
                imageUrl={product.imageUrl}
                promotion={product.promotion}
              />
            )
          })}
        </ProductsContainer>
      </SpecialsContainer>
    </>
  )
}
