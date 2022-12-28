import * as Dialog from '@radix-ui/react-dialog'
import * as React from 'react'
import Link from 'next/link'
import { CircleNotch, X } from 'phosphor-react'
import {
  ButtonsContainer,
  CartContent,
  CheckoutPriceContainer,
  DialogClose,
  DialogContent,
  DialogOverlay,
  PriceTotalContainer,
} from './styles'
import CartProduct from '../../../CartProduct'
import { useShoppingCart } from 'use-shopping-cart'
import useGlobalContext from '../../../../contexts/GlobalContext'
import axios from 'axios'
import { useState } from 'react'

type DialogCartContentProps = {
  onCloseCartDialog: () => void
}

export default function DialogCartContent({
  onCloseCartDialog,
}: DialogCartContentProps) {
  const [isCreatingCheckout, setIsCreatingCheckout] = useState(false)
  const { formatCurrency } = useGlobalContext()
  const { cartDetails, totalPrice } = useShoppingCart()

  const cartProducts = Object.values(cartDetails ?? {})

  async function handleBuyProductsCart() {
    try {
      setIsCreatingCheckout(true)

      const response = await axios.post('/api/checkout-session-cart', {
        cartProducts,
      })

      const { checkoutUrl } = response.data
      window.location.href = checkoutUrl
    } catch (err) {
      setIsCreatingCheckout(false)
      console.error(err)
    }
  }

  return (
    <Dialog.Portal>
      <DialogOverlay />

      <DialogContent>
        <DialogClose>
          <X weight="bold" size={26} />
        </DialogClose>

        <CartContent>
          {cartProducts.map((product) => {
            return (
              <CartProduct
                value={product.value}
                name={product.name}
                price={product.price}
                quantity={product.quantity}
                imageUrl={product.image}
                productId={product.id}
              />
            )
          })}
        </CartContent>

        <CheckoutPriceContainer>
          <PriceTotalContainer>
            <span>TOTAL</span>

            <div>
              <span>{formatCurrency.format(totalPrice)}</span>
              <em>
                em até 10x de R$ {`${formatCurrency.format(totalPrice / 10)}`}
              </em>
            </div>
          </PriceTotalContainer>
        </CheckoutPriceContainer>

        <ButtonsContainer>
          {isCreatingCheckout ? (
            <button
              disabled={isCreatingCheckout}
              onClick={handleBuyProductsCart}
            >
              <CircleNotch size={20} weight="bold" />
              Avançar para o Checkout
            </button>
          ) : (
            <button type="button" onClick={handleBuyProductsCart}>
              Avançar para o Checkout
            </button>
          )}
          <Link onClick={onCloseCartDialog} href="/cart">
            Editar carrinho
          </Link>
        </ButtonsContainer>
      </DialogContent>
    </Dialog.Portal>
  )
}
