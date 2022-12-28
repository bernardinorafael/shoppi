import { Portal, Root, Trigger } from '@radix-ui/react-tooltip'
import { TooltipArrow, TooltipContent } from './styles'
import React from 'react'

type TooltipProps = {
  children: React.ReactNode
  render: string
  side?: 'top' | 'right' | 'bottom' | 'left'
  align?: 'center' | 'start' | 'end'
  alignOffset?: number
  sideOffset?: number
}

export default function Tooltip({
  children,
  render,
  align = 'center',
  alignOffset = 0,
  side = 'top',
  sideOffset = 10,
}: TooltipProps) {
  return (
    <Root>
      <Trigger asChild>{children}</Trigger>

      <Portal>
        <TooltipContent
          side={side}
          align={align}
          alignOffset={alignOffset}
          sideOffset={sideOffset}
        >
          <TooltipArrow width={15} height={10} />

          {render}
        </TooltipContent>
      </Portal>
    </Root>
  )
}
