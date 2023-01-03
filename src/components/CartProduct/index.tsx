import Image from 'next/image'
import Link from 'next/link'
import useGlobalContext from '../../contexts/GlobalContext'
import ControlQuantityButton from './components/ControlQuantityButton'
import { Container, ProductBox, QuantityBox } from './styles'

type CardProductProps = {
  imageUrl: string
  name: string
  price: number
  productId: string
  quantity: number
  value: number
}

export default function CartProduct(props: CardProductProps) {
  const { formatCurrency } = useGlobalContext()

  return (
    <Container>
      <Link href={`/product/${props.productId}`}>
        <Image src={props.imageUrl} alt="" fill />
      </Link>

      <ProductBox>
        <Link href={`/product/${props.productId}`}>{props.name}</Link>

        <section>
          <div>
            <QuantityBox>
              <strong>{props.quantity} un.</strong>
              <ControlQuantityButton productId={props.productId} />
            </QuantityBox>
          </div>

          <div>
            <span>{formatCurrency.format(props.price)} /un</span>
            <span>{formatCurrency.format(props.value)}</span>
          </div>
        </section>
      </ProductBox>
    </Container>
  )
}
