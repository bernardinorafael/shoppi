import { Container } from './styles'

type HeaderInternalPageNavigationProps = {
  children: React.ReactNode
  current: string
}

export default function HeaderInternalPageNavigation({
  current,
  children,
}: HeaderInternalPageNavigationProps) {
  return (
    <Container>
      {children}
      <span>{current}</span>
    </Container>
  )
}
