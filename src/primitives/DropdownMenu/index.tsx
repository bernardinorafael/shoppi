import { Root, Trigger, Portal } from '@radix-ui/react-dropdown-menu'
import { ReactNode } from 'react'

type DropdownMenuProps = {
  trigger: ReactNode
  children: ReactNode
  modal?: boolean
}

export default function DropdownMenu({
  trigger,
  children,
  modal = true,
}: DropdownMenuProps) {
  return (
    <Root modal={modal}>
      <Trigger asChild>{trigger}</Trigger>
      <Portal>{children}</Portal>
    </Root>
  )
}
