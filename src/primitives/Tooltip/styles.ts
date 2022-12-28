import { Arrow, Content } from '@radix-ui/react-tooltip'
import styled from 'styled-components'

export const TooltipContent = styled(Content)`
  background-color: ${({ theme }) => theme.COLORS.primary[600]};
  border-radius: 2px;
  //border: 1px solid ${({ theme }) => theme.COLORS.primary[500]};
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.5rem;
  position: relative;
  z-index: 150;
`

export const TooltipArrow = styled(Arrow)`
  fill: ${({ theme }) => theme.COLORS.primary[600]};
`
