import Image from 'next/image'
import { Container, ProductBox, QuantityBox } from './styles'
import useGlobalContext from '../../contexts/GlobalContext'
import { TrashSimple } from 'phosphor-react'
import { useShoppingCart } from 'use-shopping-cart'
import ControlQuantityButton from './components/ControlQuantityButton'

type CardProductProps = {
  price: number
  name: string
  quantity: number
  imageUrl: string
  productId: string
  value: number
}

export default function CartProduct({
  imageUrl,
  name,
  price,
  value,
  quantity,
  productId,
}: CardProductProps) {
  const { formatCurrency } = useGlobalContext()

  return (
    <Container>
      <div>
        <Image src={imageUrl} alt="" fill />
      </div>

      <ProductBox>
        <strong>{name}</strong>

        <section>
          <div>
            <span>
              Tamanho: <strong>42</strong>
            </span>
            <span>
              Endereço: <strong>Casa</strong>
            </span>

            <QuantityBox>
              <strong>{quantity} un.</strong>
              <ControlQuantityButton productId={productId} />
            </QuantityBox>
          </div>

          <div>
            <span>{formatCurrency.format(price)} /un</span>
            <span>{formatCurrency.format(value)}</span>
          </div>
        </section>
      </ProductBox>
    </Container>
  )
}
