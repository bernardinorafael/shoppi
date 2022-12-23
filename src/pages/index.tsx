/* eslint-disable react-hooks/rules-of-hooks */
import 'keen-slider/keen-slider.min.css'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import AdidasOfferContainer from '../components/AdidasOfferContainer'
import BannerPresentationHome from '../components/BannerPresentationHome'
import CaseStudies from '../components/CaseStudies'
import ConverseOfferContainer from '../components/ConverseOfferContainer'
import PumaOfferContainer from '../components/PumaOfferContainer'
import { useGetStripeProducts } from '../hooks/useGetStripeProducts'
import { stripe } from '../services/stripe'
import { BannerConverse, BannerOffers, Container } from '../styles/pages/home'

async function Home() {
  const productResponse = await stripe.products.search({
    query: `metadata['brand']:'adidas'`,
    expand: ['data.default_price'],
    limit: 5,
    page: '1',
  })

  console.log(productResponse)

  // useEffect(() => {
  //   useGetStripeProducts('adidas', 1)
  // }, [])

  return (
    <>
      <Head>
        <title>Shoppi</title>
      </Head>

      {/* <Container>
        <BannerPresentationHome />

        <CaseStudies />

        <BannerOffers>
          <Image src="/adidas/adidas-banner.jpg" alt="" fill />
        </BannerOffers>
        <AdidasOfferContainer adidasOfferProducts={adidasOfferProducts.value.data} />

        <BannerOffers>
          <Image src="/puma/puma-banner.png" alt="" fill />
        </BannerOffers>
        <PumaOfferContainer pumaOfferProducts={pumaOfferProducts.value.data} />

        <BannerConverse>
          <Image src="/converse/converse-banner.gif" alt="" fill />
        </BannerConverse>
        <ConverseOfferContainer
          converseOfferProducts={converseOfferProducts.value.data}
        />
      </Container> */}
    </>
  )
}

export default Home
