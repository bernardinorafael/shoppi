import Image from 'next/image'
import Link from 'next/link'
import { Container } from './styles'

export default function CaseStudies() {
  return (
    <Container>
      <div>
        <h1>CONHEÇA NOSSAS MARCAS</h1>
      </div>

      <section>
        <Link href="/adidas">
          <Image height={200} width={200} src="/adidas/adidas-logo.svg" alt="" />
        </Link>

        <Link href="/converse">
          <Image height={200} width={200} src="/converse/converse-logo.svg" alt="" />
        </Link>

        <Link href="/puma">
          <Image height={200} width={200} src="/puma/puma-logo.svg" alt="" />
        </Link>
      </section>
    </Container>
  )
}
