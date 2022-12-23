import * as Select from '@radix-ui/react-select'
import styled from 'styled-components'

export const SelectTrigger = styled(Select.Trigger)`
  align-items: center;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.COLORS.primary[600]};
  cursor: default;
  display: flex;
  font-weight: 600;
  height: 3rem;
  justify-content: space-between;
  outline: none;
  padding: 0 0.5rem;
  position: relative;
  width: 100%;

  span {
    max-width: 40ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.8;
    pointer-events: none;
  }

  &:not(:disabled):hover {
    border: 1px solid ${({ theme }) => theme.COLORS.primary[200]};
  }
`
