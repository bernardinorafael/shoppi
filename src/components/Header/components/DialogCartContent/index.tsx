import * as Dialog from '@radix-ui/react-dialog'
import * as React from 'react'
import { useState } from 'react'
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
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

export default function DialogCartContent() {
  const [isCreatingCheckout, setIsCreatingCheckout] = useState(false)
  const { formatCurrency } = useGlobalContext()
  const { cartDetails, totalPrice, cartCount } = useShoppingCart()
  const session = useSession()
  const cartProducts = Object.values(cartDetails ?? {})
  const router = useRouter()

  const isUserAuthenticated = session.status === 'authenticated'

  async function handleBuyProductsCart() {
    if (!isUserAuthenticated) {
      return router.push('/login-page')
    }

    try {
      setIsCreatingCheckout(true)

      const response = await axios.post('/api/checkout-session-cart', {
        cartProducts,
        email: session.data.user.email,
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
        <div>
          <strong>{`Carrinho (${cartCount})`}</strong>

          <DialogClose>
            <X weight="bold" size={26} />
          </DialogClose>
        </div>

        <CartContent>
          {cartProducts.map((product) => {
            return (
              <CartProduct
                key={product.id}
                value={product.value}
                name={product.name}
                price={product.price}
                quantity={product.quantity}
                imageUrl={product.image}
                productId={product.id}
                size={product.size}
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
              Finalizar compra
            </button>
          ) : (
            <button type="button" onClick={handleBuyProductsCart}>
              Finalizar compra
            </button>
          )}
        </ButtonsContainer>
      </DialogContent>
    </Dialog.Portal>
  )
}
