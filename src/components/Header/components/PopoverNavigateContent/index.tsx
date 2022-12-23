import { Container } from './styles'
import Link from 'next/link'

export default function PopoverNavigateContent() {
  return (
    <Container>
      <section>
        <strong>Marcas</strong>

        <div>
          <Link href="#">Nike</Link>
          <Link href="#">Adidas</Link>
          <Link href="#">Puma</Link>
          <Link href="#">Converse</Link>
          <Link href="#">Vans</Link>
          <Link href="#">Lacoste</Link>
        </div>
      </section>

      <section>
        <strong>Categorias</strong>

        <div>
          <Link href="#">Masculino</Link>
          <Link href="#">Feminino</Link>
          <Link href="#">Infantil</Link>
        </div>
      </section>

      <section>
        <strong>Recentes</strong>

        <div>
          <Link href="#">nike air force</Link>
          <Link href="#">vans old school</Link>
          <Link href="#">nike jordan</Link>
          <Link href="#">puma smash</Link>
          <Link href="#">converse</Link>
        </div>
      </section>
    </Container>
  )
}
