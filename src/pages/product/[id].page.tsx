import * as Dialog from '@radix-ui/react-dialog'
import axios from 'axios'
import 'keen-slider/keen-slider.min.css'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { CaretRight, CircleNotch, Minus, Plus, Ruler } from 'phosphor-react'
import { FormEvent, useState } from 'react'
import Stripe from 'stripe'
import DialogImageProduct from '../../components/DialogImageProduct'
import HeaderInternalPageNavigation from '../../components/HeaderInternalPageNavigation'
import SizeGuideContent from '../../components/SizeGuideContent'
import useAddressContext from '../../contexts/AddressContext'
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
  QuantityBox,
  RadioGroupItem,
  RadioGroupRoot,
  SizeContainer,
} from './styles'
import { ConvertDiscount } from '../../helpers/convert-discount'
import { useShoppingCart } from 'use-shopping-cart'
import { useRouter } from 'next/router'

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const productId = String(params.id)

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
        size: product.metadata.size,
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
    size: string
  }
}

export default function Product({ product }: ProductProps) {
  const [quantityProduct, setQuantityProduct] = useState(1)
  const { addresses } = useAddressContext()
  const { formatCurrency } = useGlobalContext()
  const [isCreatingCheckout, setIsCreatingCheckout] = useState(false)
  const router = useRouter()
  const { addItem, cartDetails } = useShoppingCart()

  async function handleBuyUniqueProduct() {
    try {
      setIsCreatingCheckout(true)

      const response = await axios.post('/api/checkout-session', {
        priceId: product.defaultPriceId,
        quantity: quantityProduct,
      })

      const { checkoutUrl } = response.data
      window.location.href = checkoutUrl
    } catch (err) {
      setIsCreatingCheckout(false)
      console.error(err)
    }
  }

  function handleIncrementProductQuantity() {
    setQuantityProduct(quantityProduct + 1)
  }

  function handleDecrementProductQuantity() {
    if (quantityProduct === 1) return

    setQuantityProduct(quantityProduct - 1)
  }

  async function handleAddToCart(event: FormEvent<HTMLButtonElement>) {
    event.preventDefault()

    addItem({
      currency: 'BRL',
      id: String(router.query.id),
      image: product.imageUrl,
      name: product.name,
      price: product.price,
      price_id: product.defaultPriceId,
      quantity: quantityProduct,
    })
  }

  const isButtonQuantityProductDisabled = quantityProduct === 1
  const isProductAlreadyInCart = Object.values(cartDetails).find((item) => {
    return item.id === String(router.query.id)
  })

  return (
    <>
      <Head>
        <title>{product.name}</title>
      </Head>

      <NavigationContainer>
        <HeaderInternalPageNavigation current={product.name}>
          <Link href="/">Início</Link>
          <CaretRight />
          <Link href={`/${product.brand}`}>
            {product.brand === 'special' ? 'Especiais' : product.brand}
          </Link>
          <CaretRight />
        </HeaderInternalPageNavigation>
      </NavigationContainer>

      <ProductContainer>
        <ImagesContainer>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button>
                <Image src="/prod_N0so2qrWSBThVj-a.webp" alt="" fill />
              </button>
            </Dialog.Trigger>
            <Dialog.Trigger asChild>
              <button>
                <Image src="/prod_N0so2qrWSBThVj-a.webp" alt="" fill />
              </button>
            </Dialog.Trigger>
            <Dialog.Trigger asChild>
              <button>
                <Image src="/prod_N0so2qrWSBThVj-a.webp" alt="" fill />
              </button>
            </Dialog.Trigger>
            <Dialog.Trigger asChild>
              <button>
                <Image src="/prod_N0so2qrWSBThVj-a.webp" alt="" fill />
              </button>
            </Dialog.Trigger>

            <DialogImageProduct src="/prod_N0so2qrWSBThVj-a.webp" />
          </Dialog.Root>
        </ImagesContainer>

        <ProductDataContainer>
          <strong>{product.name}</strong>

          {product.promotion === 'true' && (
            <OfferContainer>
              <span>R${ConvertDiscount(product.price, 10)}</span>
              <span>OFERTA ESPECIAL</span>
            </OfferContainer>
          )}

          <PriceContainer>
            <span>{formatCurrency.format(product.price)}</span>

            <span>
              ou 10x de <strong>{ConvertDiscount(product.price)}</strong> sem
              juros
            </span>
          </PriceContainer>

          <SizeContainer>
            <div>
              <span>Tamanhos disponíveis</span>

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
              {product.size.split(',').map((product, i) => {
                return (
                  <RadioGroupItem value={product} key={i}>
                    {product}
                  </RadioGroupItem>
                )
              })}
            </RadioGroupRoot>
          </SizeContainer>

          <QuantityBox>
            <span>Quantidade para compra rápida:</span>

            <div>
              <button
                type="button"
                onClick={handleDecrementProductQuantity}
                disabled={isButtonQuantityProductDisabled}
              >
                <Minus size={16} weight="bold" />
              </button>

              <input
                value={quantityProduct}
                defaultValue={quantityProduct}
                type="text"
              />

              <button type="button" onClick={handleIncrementProductQuantity}>
                <Plus size={16} weight="bold" />
              </button>
            </div>
          </QuantityBox>

          <AddressContainer>
            <div>
              <strong>Endereço de entrega</strong>

              <span>
                {`
									${addresses[0].client} - 
									${addresses[0].street}, 
									${addresses[0].number} - 
									${addresses[0].district}
									${addresses[0].state}
								`}
              </span>
            </div>
            <Link href="#">Ver meus endereços</Link>
          </AddressContainer>

          <ButtonCartContainer>
            {isCreatingCheckout ? (
              <button
                disabled={isCreatingCheckout}
                onClick={handleBuyUniqueProduct}
              >
                <CircleNotch size={20} weight="bold" />
                Compra rápida
              </button>
            ) : (
              <button type="button" onClick={handleBuyUniqueProduct}>
                Compra rápida
              </button>
            )}
            {isProductAlreadyInCart ? (
              <button
                disabled={!!isProductAlreadyInCart}
                type="submit"
                onClick={handleAddToCart}
              >
                Adicionado ao carrinho
              </button>
            ) : (
              <button type="submit" onClick={handleAddToCart}>
                Adicionar ao carrinho
              </button>
            )}
          </ButtonCartContainer>
        </ProductDataContainer>
      </ProductContainer>
    </>
  )
}
