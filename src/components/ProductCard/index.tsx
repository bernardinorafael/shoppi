import Image from 'next/image'
import useGlobalContext from '../../contexts/GlobalContext'
import { Container, ImageInsideContainer, PricingContainer } from './styles'

type ProductCardProps = {
  imageUrl: string
  name: string
  price: number
  order?: string
  id: string
  promotion?: 'true' | 'false'
}

export default function ProductCard({
  promotion = 'false',
  ...product
}: ProductCardProps) {
  const { formatCurrency } = useGlobalContext()

  return (
    <Container title={product.name} href={`/product/${product.id}`}>
      <div>
        <ImageInsideContainer>
          {promotion === 'true' ? <span>Promoção</span> : null}
          {product.order ? <strong>{product.order}</strong> : null}
        </ImageInsideContainer>

        <Image src={product.imageUrl} alt="" fill />
      </div>

      <div>
        <strong>{product.name}</strong>

        <PricingContainer>
          <strong>{formatCurrency.format(product.price)}</strong>
          <span>em 10x sem juros</span>
        </PricingContainer>
      </div>
    </Container>
  )
}
