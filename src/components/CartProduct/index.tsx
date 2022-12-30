import Image from 'next/image'
import Link from 'next/link'
import useGlobalContext from '../../contexts/GlobalContext'
import ControlQuantityButton from './components/ControlQuantityButton'
import { Container, ProductBox, QuantityBox } from './styles'

type CardProductProps = {
  price: number
  name: string
  quantity: number
  imageUrl: string
  productId: string
  value: number
  size: string
}

export default function CartProduct({
  imageUrl,
  name,
  price,
  value,
  quantity,
  productId,
  size,
}: CardProductProps) {
  const { formatCurrency } = useGlobalContext()

  return (
    <Container>
      <Link href={`/product/${productId}`}>
        <Image src={imageUrl} alt="" fill />
      </Link>

      <ProductBox>
        <strong>{name}</strong>

        <section>
          <div>
            <span>
              Tamanho: <strong>{size}</strong>
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
