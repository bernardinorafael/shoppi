import { Portal, Root, Trigger } from '@radix-ui/react-dialog'
import { DialogContent, OverlayDialog } from './styles'

type DialogProps = {
  children: React.ReactNode
  render: React.ReactNode
  modal?: boolean
}

export default function Dialog({ children, render, modal = true }: DialogProps) {
  return (
    <Root modal={modal}>
      <Trigger asChild>{children}</Trigger>

      <Portal>
        <OverlayDialog />
        <DialogContent>{render}</DialogContent>
      </Portal>
    </Root>
  )
}
