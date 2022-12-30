import * as Dialog from '@radix-ui/react-dialog'
import axios from 'axios'
import 'keen-slider/kefen-slider.min.css'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useSession } from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { CaretRight, CircleNotch, Minus, Plus, Ruler } from 'phosphor-react'
import { FormEvent, useState } from 'react'
import Stripe from 'stripe'
import { useShoppingCart } from 'use-shopping-cart'
import DialogImageProduct from '../../components/DialogImageProduct'
import HeaderInternalPageNavigation from '../../components/HeaderInternalPageNavigation'
import SizeGuideContent from '../../components/SizeGuideContent'
import useGlobalContext from '../../contexts/GlobalContext'
import { ConvertDiscount } from '../../helpers/convert-discount'
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

    revalidate: 60 * 60 * 24,
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
  const router = useRouter()
  const { formatCurrency } = useGlobalContext()
  const { addItem, cartDetails } = useShoppingCart()
  const session = useSession()
  const [quantityProduct, setQuantityProduct] = useState(1)
  const [isCreatingCheckout, setIsCreatingCheckout] = useState(false)
  const [productSize, setProductSize] = useState('')

  const isUserAuthenticated = session.status === 'authenticated'

  async function handleBuyUniqueProduct() {
    if (!isUserAuthenticated) {
      return router.push('/login-page')
    }

    try {
      setIsCreatingCheckout(true)

      const response = await axios.post('/api/checkout-session', {
        priceId: product.defaultPriceId,
        quantity: quantityProduct,
        email: session.data.user.email,
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
      size: productSize,
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

            <RadioGroupRoot onValueChange={setProductSize}>
              {product.size.split(',').map((product, i) => {
                return (
                  <RadioGroupItem
                    key={i}
                    value={product}
                    disabled={!!isProductAlreadyInCart}
                  >
                    {product}
                  </RadioGroupItem>
                )
              })}
            </RadioGroupRoot>
            {isProductAlreadyInCart ? (
              <span>Altere o tamanho no carrinho</span>
            ) : (
              <span></span>
            )}
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

              <span></span>
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
                type="submit"
                onClick={handleAddToCart}
                disabled={!!isProductAlreadyInCart}
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
