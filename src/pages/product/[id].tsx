import * as Dialog from '@radix-ui/react-dialog'
import * as Select from '@radix-ui/react-select'
import axios from 'axios'
import 'keen-slider/keen-slider.min.css'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { CaretDown, CircleNotch, Ruler, Truck } from 'phosphor-react'
import * as React from 'react'
import Stripe from 'stripe'
import DialogImageProduct from '../../components/DialogImageProduct'
import HeaderNavProduct from '../../components/HeaderNavProduct'
import SelectAddress from '../../components/SelectAddress'
import SizeGuideContent from '../../components/SizeGuideContent'
import useGlobalContext from '../../contexts/GlobalContext'
import { stripe } from '../../services/stripe'
import {
  AddressContainer,
  ButtonCartContainer,
  ImagesContainer,
  NavigationContainer,
  OfferContainer,
  PriceContainer,
  ProductContainer,
  ProductDataContainer,
  RadioGroupItem,
  RadioGroupRoot,
  ShippingContainer,
  SizeContainer,
} from '../../styles/pages/product/product'
import { SelectTrigger } from '../../styles/pages/product/select-address'

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: 'prod_N0xGWDapTmEE8o' } },
      { params: { id: 'prod_N0xE6ztCFRjIcN' } },
      { params: { id: 'prod_N0xD9zrC0W9uQu' } },
      { params: { id: 'prod_N0xDYhNcfJs7w4' } },
      { params: { id: 'prod_N0xBILB5DsL1RR' } },
      { params: { id: 'prod_N0xAE2Cauq4vCv' } },
      { params: { id: 'prod_N0x9WySfGeeSa5' } },
      { params: { id: 'prod_N0x8cQCEua5wha' } },
      { params: { id: 'prod_N0x5ks007aEFmz' } },
      { params: { id: 'prod_N0x3lAbiwot8LA' } },
      { params: { id: 'prod_N0whTB2SsT06lK' } },
      { params: { id: 'prod_N0wgp5KsNOVi3x' } },
      { params: { id: 'prod_N0wf3tTxhzmehp' } },
      { params: { id: 'prod_N0weqPX5YlY3ZV' } },
      { params: { id: 'prod_N0wd5YSAJL1jF9' } },
      { params: { id: 'prod_N0wc9rJ0gBhxni' } },
      { params: { id: 'prod_N0was7AOOrQPSw' } },
      { params: { id: 'prod_N0wZWyX9wnHQIu' } },
      { params: { id: 'prod_N0wYGn0OvuSWns' } },
      { params: { id: 'prod_N0wVvxsG6d4FAR' } },
      { params: { id: 'prod_N0stwkNW7vS6M6' } },
      { params: { id: 'prod_N0sskM7E6FusWq' } },
      { params: { id: 'prod_N0ss2hDRgNGCaO' } },
      { params: { id: 'prod_N0sroWbatEvfie' } },
      { params: { id: 'prod_N0srCGtM8VR2Y6' } },
      { params: { id: 'prod_N0sqNeBHxbx7oB' } },
      { params: { id: 'prod_N0spaKvsiGpYzt' } },
      { params: { id: 'prod_N0sprfB8Ictyrh' } },
      { params: { id: 'prod_N0soS9sx0kqTQc' } },
      { params: { id: 'prod_N0so2qrWSBThVj' } },
      { params: { id: 'prod_N1fUla6gEpAfly' } },
      { params: { id: 'prod_N1fRonDK5nRRVS' } },
      { params: { id: 'prod_N1fOtDcZ2oVZfL' } },
      { params: { id: 'prod_N1fJhKDEuq5ADe' } },
      { params: { id: 'prod_N1fF7N7Zi64aNN' } },
      { params: { id: 'prod_N1fBSB3RMpBTr6' } },
      { params: { id: 'prod_N1f5WjNHGYTup0' } },
      { params: { id: 'prod_N1ezgGo0XFajMx' } },
      { params: { id: 'prod_N1euQEsql5eFQC' } },
      { params: { id: 'prod_N1eokhXeuOlwLV' } },
    ],

    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const productId = params.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        defaultPriceId: price.id,
        imageUrl: product.images[0],
        brand: product.metadata.brand,
        price: price.unit_amount / 100,
        promotion: product.metadata.promotion,
      },
    },

    revalidate: 60 * 60 * 24, // 24h
  }
}

type ProductProps = {
  product: {
    id: string
    name: string
    imageUrl: string
    price: number
    brand: string
    promotion: 'true' | 'false'
    defaultPriceId: string
    gender?: string | null
  }
}

export default function Product({ product }: ProductProps) {
  const [isCreatingCheckout, setIsCreatingCheckout] = React.useState(false)
  const { formatCurrency } = useGlobalContext()

  const images = [
    { image: `/products/${product.id}-a.webp` },
    { image: `/products/${product.id}-b.webp` },
    { image: `/products/${product.id}-c.webp` },
    { image: `/products/${product.id}-d.webp` },
  ]

  async function handleBuyUniqueProduct() {
    try {
      setIsCreatingCheckout(true)

      const response = await axios.post('/api/checkout-session', {
        priceId: product.defaultPriceId,
      })

      const { checkoutUrl } = response.data
      window.location.href = checkoutUrl
    } catch (err) {
      setIsCreatingCheckout(false)

      console.error(err)
    }
  }

  return (
    <>
      <Head>
        <title>{product.name}</title>
      </Head>

      <NavigationContainer>
        <HeaderNavProduct brand={product.brand} name={product.name} />

        <ShippingContainer>
          <Truck weight="duotone" size={42} />
          <strong>FRETE GRÁTIS PARA TODO BRASIL</strong>
        </ShippingContainer>
      </NavigationContainer>

      <ProductContainer>
        <ImagesContainer>
          {images.map((image) => {
            return (
              <Dialog.Root key={image.image}>
                <Dialog.Trigger asChild>
                  <button>
                    <Image src={image.image} alt="" fill />
                  </button>
                </Dialog.Trigger>

                <DialogImageProduct src={image.image} />
              </Dialog.Root>
            )
          })}
        </ImagesContainer>

        <ProductDataContainer>
          <strong>{product.name}</strong>

          {product.promotion === 'true' ? (
            <OfferContainer>
              <span>
                R$ {(product.price + product.price / 10).toFixed(2).replace('.', ',')}
              </span>
              <span>OFERTA ESPECIAL</span>
            </OfferContainer>
          ) : null}

          <PriceContainer>
            <span>{formatCurrency.format(product.price)}</span>

            <span>
              ou 10x de{' '}
              <strong>R$ {(product.price / 10).toFixed(2).replace('.', ',')}</strong> sem
              juros
            </span>
          </PriceContainer>

          <SizeContainer>
            <div>
              <span>Tamanho</span>

              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <button>
                    Guia de tamanhos
                    <Ruler size={20} />
                  </button>
                </Dialog.Trigger>

                <SizeGuideContent />
              </Dialog.Root>
            </div>

            <RadioGroupRoot>
              <RadioGroupItem value="36">
                <span>36</span>
              </RadioGroupItem>
              <RadioGroupItem value="38">
                <span>38</span>
              </RadioGroupItem>
              <RadioGroupItem value="40">
                <span>40</span>
              </RadioGroupItem>
              <RadioGroupItem value="42">
                <span>42</span>
              </RadioGroupItem>
              <RadioGroupItem value="44">
                <span>44</span>
              </RadioGroupItem>
              <RadioGroupItem value="46">
                <span>46</span>
              </RadioGroupItem>
            </RadioGroupRoot>
          </SizeContainer>

          <AddressContainer>
            <Select.Root>
              <SelectTrigger disabled>
                <Select.Value placeholder="Selecione o endereço" />
                <CaretDown size={22} />
              </SelectTrigger>

              <SelectAddress />
            </Select.Root>

            <Link href="/my-account/address">Ver meus endereços</Link>
          </AddressContainer>

          <ButtonCartContainer>
            {isCreatingCheckout ? (
              <button disabled={isCreatingCheckout} onClick={handleBuyUniqueProduct}>
                <CircleNotch size={20} weight="bold" />
                Compra rápida
              </button>
            ) : (
              <button onClick={handleBuyUniqueProduct}>Compra rápida</button>
            )}
            <button>Adicionar ao carrinho</button>
          </ButtonCartContainer>
        </ProductDataContainer>
      </ProductContainer>
    </>
  )
}
