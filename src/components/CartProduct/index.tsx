import Image from 'next/image'
import { Container, ProductContent } from './styles'

export default function CartProduct() {
  return (
    <Container>
      <div>
        <Image src="/products/prod_N0so2qrWSBThVj-a.webp" alt="" fill />
      </div>

      <ProductContent>
        <strong>Adidas Xbox NMD_V3</strong>

        <section>
          <div>
            <span>
              Tamanho: <strong>42</strong>
            </span>
            <span>
              Endereço: <strong>Casa</strong>
            </span>
            <em>1 unidade</em>
          </div>

          <div>
            <span>R$ 399,00</span>
            <span>R$ 299,00</span>
          </div>
        </section>
      </ProductContent>
    </Container>
  )
}
