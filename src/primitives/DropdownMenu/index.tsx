import { Root, Trigger, Portal } from '@radix-ui/react-dropdown-menu'

type DropdownMenuProps = {
  trigger: React.ReactNode
  children: React.ReactNode
  modal?: boolean
}

export default function DropdownMenuD({
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
