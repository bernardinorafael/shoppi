import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import AlertDialog from '../../../../primitives/AlertDialog'
import { Container, Product } from './styles'
import SkeletonLoader from '../../../../components/Skeleton'

type PurchaseContentProps = {
  id: string
  checkoutId: string
}

type Products = {
  id: string
  amountTotal: number
  description: string
  quantity: number
  unitAmount: number
  productId: string
  priceId: string
  size?: string
  imageUrl: string
}

export default function PurchaseContent(props: PurchaseContentProps) {
  const [products, setProducts] = useState<Products[]>([])
  const [isFetchingProducts, setIsFetchingProducts] = useState(false)

  async function handleDeleteCheckout(checkoutId: string) {
    await axios.post('/api/purchases/delete-purchase', { checkoutId })
    window.location.reload()
  }

  useEffect(() => {
    async function fetchProducts() {
      try {
        setIsFetchingProducts(true)

        const response = await axios.post('/api/purchases/list-products', {
          checkoutId: props.checkoutId,
        })

        setIsFetchingProducts(false)
        setProducts(response.data.products)
      } catch (err) {
        setIsFetchingProducts(false)

        console.error(err)
      }
    }

    fetchProducts()
  }, [props.checkoutId])

  const currencyFormatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 2,
  })

  return (
    <Container>
      {products.map((product) => {
        return (
          <Product key={product.id}>
            {isFetchingProducts ? (
              <SkeletonLoader />
            ) : (
              <section>
                <Link href={`/product/${product.productId}`}>
                  <Image src={product.imageUrl} width={40} height={40} alt="" />
                </Link>
                <div>
                  <Link href={`/product/${product.productId}`}>
                    <strong>{product.description}</strong>
                  </Link>

                  <div>
                    <span>
                      {currencyFormatted.format(product.unitAmount / 100)}/un
                    </span>
                  </div>
                </div>

                <div>
                  <span>
                    Qtd: {product.quantity} /{' '}
                    {currencyFormatted.format(product.amountTotal / 100)}
                  </span>
                </div>
              </section>
            )}
          </Product>
        )
      })}

      <section>
        <AlertDialog
          action="Excluir pedido"
          cancel="Cancelar"
          description="Essa ação não pode ser desfeita."
          execute={() => handleDeleteCheckout(props.id)}
          title="Você deseja excluir este pedido?"
        >
          <button>Excluir pedido</button>
        </AlertDialog>
      </section>
    </Container>
  )
}
