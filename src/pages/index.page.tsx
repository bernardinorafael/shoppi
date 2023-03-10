/* eslint-disable react-hooks/rules-of-hooks */
import 'keen-slider/keen-slider.min.css'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Stripe from 'stripe'
import { Product } from '../@types/product'
import AdidasOfferContainer from '../components/AdidasOfferContainer'
import BannerPresentationHome from '../components/BannerPresentationHome'
import CaseStudies from '../components/CaseStudies'
import ConverseOfferContainer from '../components/ConverseOfferContainer'
import PumaOfferContainer from '../components/PumaOfferContainer'
import { GetStripeProducts } from '../helpers/get-stripe-products'
import { BannerConverse, BannerOffers, Container } from '../styles/pages/home'

export const getStaticProps: GetStaticProps = async () => {
  const pumaResponse = await GetStripeProducts('brand', 'puma')
  const adidasResponse = await GetStripeProducts('brand', 'adidas')
  const converseResponse = await GetStripeProducts('brand', 'converse')

  const converseProducts = converseResponse.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount / 100,
      promotion: product.metadata.promotion,
    }
  })

  const pumaProducts = pumaResponse.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount / 100,
      promotion: product.metadata.promotion,
    }
  })

  const adidasProducts = adidasResponse.map((product) => {
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
      pumaProducts,
      adidasProducts,
      converseProducts,
    },
  }
}

type HomeProps = {
  pumaProducts: Product[]
  adidasProducts: Product[]
  converseProducts: Product[]
}

export default function Home({
  pumaProducts,
  adidasProducts,
  converseProducts,
}: HomeProps) {
  return (
    <>
      <Head>
        <title>Shoppi | T??nis e material esportivo</title>
      </Head>

      <Container>
        <BannerPresentationHome />
        <CaseStudies />

        <BannerOffers>
          <Image src="/adidas/adidas-banner.jpg" alt="" fill />
        </BannerOffers>
        <AdidasOfferContainer adidasProducts={adidasProducts} />

        <BannerOffers>
          <Image src="/puma/puma-banner.png" alt="" fill />
        </BannerOffers>
        <PumaOfferContainer pumaProducts={pumaProducts} />

        <BannerConverse>
          <Image src="/converse/converse-banner.gif" alt="" fill />
        </BannerConverse>
        <ConverseOfferContainer converseProducts={converseProducts} />
      </Container>
    </>
  )
}
