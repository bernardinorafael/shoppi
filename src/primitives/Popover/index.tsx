import { Content, Portal, Root, Trigger } from '@radix-ui/react-popover'
import * as React from 'react'

type PopoverProps = {
  children: React.ReactNode
  render: React.ReactNode
  align?: 'center' | 'end' | 'start'
  side?: 'bottom' | 'top' | 'right' | 'left'
  sideOffset?: number
  alignOffset?: number
  onOpenAutoFocus?: boolean
}

export default function Popover({
  align = 'end',
  alignOffset = 0,
  children,
  onOpenAutoFocus = false,
  render,
  side = 'bottom',
  sideOffset = 10,
}: PopoverProps) {
  const [isPopoverOpen, setIsPopoverOpen] = React.useState(false)

  function onOpenFocusPreventDefault(event: Event) {
    if (onOpenAutoFocus) event.preventDefault()
  }

  return (
    <Root open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
      <Trigger asChild>{children}</Trigger>

      <Portal>
        <Content
          side={side}
          align={align}
          sideOffset={sideOffset}
          alignOffset={alignOffset}
          onOpenAutoFocus={onOpenFocusPreventDefault}
        >
          {render}
        </Content>
      </Portal>
    </Root>
  )
}
