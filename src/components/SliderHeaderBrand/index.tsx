import { ButtonCaretSlide, Container } from './styles'
import { CaretLeft, CaretRight } from 'phosphor-react'
import Link from 'next/link'

type SliderHeaderBrandProps = {
  children?: React.ReactNode
  href: string
  handlePreviousSlide?: () => void
  handleNextSlide?: () => void
}

export default function SliderHeaderBrand({
  href,
  children,
  handleNextSlide,
  handlePreviousSlide,
}: SliderHeaderBrandProps) {
  return (
    <Container>
      <strong>{children}</strong>

      <div>
        <Link href={href}>Ver mais produtos</Link>

        <ButtonCaretSlide onClick={handlePreviousSlide}>
          <CaretLeft size={24} weight="bold" />
        </ButtonCaretSlide>

        <ButtonCaretSlide onClick={handleNextSlide}>
          <CaretRight size={24} weight="bold" />
        </ButtonCaretSlide>
      </div>
    </Container>
  )
}
