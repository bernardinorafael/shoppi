import { Content, Arrow } from '@radix-ui/react-popover'
import styled from 'styled-components'

export const PopoverContent = styled(Content)`
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.25) 8px 10px 20px -5px, rgba(0, 0, 0, 0.1) 0px 8px 16px -8px;
  max-height: 85vh;
  max-width: 90vw;
  transform-origin: var(--radix-popover-content-transform-origin);
  z-index: 150;
`

export const PopoverArrow = styled(Arrow)`
  fill: ${({ theme }) => theme.COLORS.primary[1200]};
`
