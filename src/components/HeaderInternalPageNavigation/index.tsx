import { Container } from './styles'
import { ReactNode } from 'react'

type HeaderInternalPageNavigationProps = {
  children: ReactNode
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
