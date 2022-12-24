import { Indicator } from '@radix-ui/react-checkbox'
import 'animate.css'
import { Check } from 'phosphor-react'
import { CheckboxRoot, Container } from './styles'
import React from 'react'

type CheckboxProps = {
  children: React.ReactNode
  id: string
  checked?: boolean
  onCheckedChange?: () => void
}

export default function Checkbox({
  id,
  children,
  checked,
  onCheckedChange,
}: CheckboxProps) {
  return (
    <Container>
      <CheckboxRoot checked={checked} onCheckedChange={onCheckedChange} id={id}>
        <Indicator asChild>
          <Check
            size={20}
            weight="bold"
            className="animate__animated animate__bounceIn animate__faster"
          />
        </Indicator>
      </CheckboxRoot>

      <label htmlFor={id}>{children}</label>
    </Container>
  )
}
