import { Container } from './styles'
import { Plus, Minus } from 'phosphor-react'
import { useShoppingCart } from 'use-shopping-cart'

type ControlQuantityButtonProps = {
  productId: string
}

export default function ControlQuantityButton({
  productId,
}: ControlQuantityButtonProps) {
  const { incrementItem, decrementItem } = useShoppingCart()

  return (
    <Container>
      <button onClick={() => decrementItem(productId)} type="button">
        <Minus weight="bold" />
      </button>

      <button onClick={() => incrementItem(productId)} type="button">
        <Plus weight="bold" />
      </button>
    </Container>
  )
}
