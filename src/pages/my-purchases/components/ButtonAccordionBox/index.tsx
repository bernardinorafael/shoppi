import { Container } from './styles'
import ptBR from 'date-fns/locale/pt-BR'
import { CaretRight } from 'phosphor-react'
import Tooltip from '../../../../primitives/Tooltip'
import { format, formatDistanceToNow } from 'date-fns'

interface ButtonAccordionBoxParams {
  created_at: string
  amount_total_checkout: number
  name: string
}

export default function ButtonAccordionBox(props: ButtonAccordionBoxParams) {
  const currencyFormatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  })

  const createdAtFormatted = format(
    new Date(props.created_at),
    "dd 'de' LLLL 'de' yyyy',' 'às' HH:mm",
    { locale: ptBR },
  )

  const createdAt = formatDistanceToNow(
		new Date(props.created_at), {
    addSuffix: true,
    locale: ptBR,
  })

  return (
    <Container>
      <Tooltip render={createdAtFormatted}>
        <div>
          <strong>Data do pedido:</strong>
          <span>{createdAt}</span>
        </div>
      </Tooltip>

      <div>
        <strong>Total:</strong>
        <span>{currencyFormatted.format(props.amount_total_checkout)}</span>
      </div>

      <div>
        <strong>Cliente:</strong>
        <strong>{props.name}</strong>
      </div>

      <CaretRight weight="bold" size={22} />
    </Container>
  )
}
