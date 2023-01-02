import { ButtonAddToCart, Container, Product } from './styles'
import Image from 'next/image'
import { ShoppingCartSimple } from 'phosphor-react'
import Tooltip from '../../../../primitives/Tooltip'
import AlertDialog from '../../../../primitives/AlertDialog'
import axios from 'axios'

type PurchaseContentProps = {
  id: string
}

export default function PurchaseContent({ id }: PurchaseContentProps) {
  async function handleDeleteCheckout(checkoutId: string) {
    await axios.post('/api/purchases/delete-purchase', { checkoutId })
    window.location.reload()
  }

  return (
    <Container>
      <Product>
        <section>
          <Image
            src="/prod_N0so2qrWSBThVj-a.webp"
            width={60}
            height={60}
            alt=""
          />

          <div>
            <strong>Converse All Star Run Star Motion Canvas</strong>
            <div>
              <span>
                R$ 699,99 / <strong>1 un</strong>
              </span>
            </div>
          </div>

          <Tooltip align="center" sideOffset={5} render="Adicionar no carrinho">
            <ButtonAddToCart>
              <ShoppingCartSimple size={22} />
            </ButtonAddToCart>
          </Tooltip>
        </section>
      </Product>
      <Product>
        <section>
          <Image
            src="/prod_N0so2qrWSBThVj-a.webp"
            width={60}
            height={60}
            alt=""
          />

          <div>
            <strong>Converse All Star Run Star Motion Canvas</strong>
            <span>R$ 699,99/un</span>
          </div>

          <Tooltip align="center" sideOffset={5} render="Adicionar no carrinho">
            <ButtonAddToCart>
              <ShoppingCartSimple size={22} />
            </ButtonAddToCart>
          </Tooltip>
        </section>
      </Product>
      <Product>
        <section>
          <Image
            src="/prod_N0so2qrWSBThVj-a.webp"
            width={60}
            height={60}
            alt=""
          />

          <div>
            <strong>Converse All Star Run Star Motion Canvas</strong>
            <span>R$ 699,99/un</span>
          </div>

          <Tooltip align="center" sideOffset={5} render="Adicionar no carrinho">
            <ButtonAddToCart>
              <ShoppingCartSimple size={22} />
            </ButtonAddToCart>
          </Tooltip>
        </section>
      </Product>

      <section>
        <button>Ver mais detalhes</button>

        <AlertDialog
          action="Excluir pedido"
          cancel="Cancelar"
          title="Você deseja excluir este pedido?"
          description="Essa ação não pode ser desfeita."
          execute={() => handleDeleteCheckout(id)}
        >
          <button>Excluir pedido</button>
        </AlertDialog>
      </section>
    </Container>
  )
}
