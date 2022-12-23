import Link from 'next/link'
import { CaretRight } from 'phosphor-react'
import { Container } from './styles'

type HeaderNavProductProps = {
  brand: string
  name: string
}

export default function HeaderNavProduct({ brand, name }: HeaderNavProductProps) {
  const brands = {
    puma: 'Puma',
    adidas: 'Adidas',
    special: 'Especiais',
    converse: 'Converse',
  }

  return (
    <Container>
      <Link href="/">Início</Link>
      <CaretRight />
      {brand ? (
        <>
          <Link href={`/${brand}`}>{brands[brand]}</Link>
          <CaretRight />
        </>
      ) : null}

      <span>{name}</span>
    </Container>
  )
}
