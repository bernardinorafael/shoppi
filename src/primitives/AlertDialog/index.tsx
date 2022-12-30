import { Root, Portal, Trigger } from '@radix-ui/react-alert-dialog'
import { ReactNode, useState } from 'react'
import {
  ContentBox,
  AlertOverlay,
  CancelButton,
  ActionButton,
  AlertDescription,
  AlertTitle,
  ActionsButtonBox,
} from './styles'

type AlertDialogProps = {
  action: string
  cancel: string
  children?: ReactNode
  description: string
  title: string
  execute?: () => void
}

export default function AlertDialog(props: AlertDialogProps) {
  const [isOpen, setIsOpen] = useState(false)

  async function handleCloseAlertDialog() {
    props.execute()
    setIsOpen(!isOpen)
  }

  return (
    <Root open={isOpen} onOpenChange={setIsOpen}>
      <Trigger asChild>{props.children}</Trigger>

      <Portal>
        <AlertOverlay />

        <ContentBox>
          <AlertTitle>{props.title}</AlertTitle>

          <AlertDescription>{props.description}</AlertDescription>

          <ActionsButtonBox>
            <CancelButton>{props.cancel}</CancelButton>
            <ActionButton onClick={handleCloseAlertDialog}>
              {props.action}
            </ActionButton>
          </ActionsButtonBox>
        </ContentBox>
      </Portal>
    </Root>
  )
}
