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
  price,
  order,
  name,
  imageUrl,
  id,
  promotion = 'false',
}: ProductCardProps) {
  const { formatCurrency } = useGlobalContext()

  return (
    <Container title={name} href={`/product/${id}`}>
      <div>
        <ImageInsideContainer>
          {promotion === 'true' ? <span>Promoção</span> : null}
          {order ? <strong>{order}</strong> : null}
        </ImageInsideContainer>

        <Image src={imageUrl} alt="" fill />
      </div>

      <div>
        <strong>{name}</strong>

        <PricingContainer>
          <strong>{formatCurrency.format(price)}</strong>
          <span>em 10x sem juros</span>
        </PricingContainer>
      </div>
    </Container>
  )
}
