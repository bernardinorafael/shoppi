import * as Select from '@radix-ui/react-select'
import styled from 'styled-components'

export const SelectContent = styled(Select.Content)`
  overflow: hidden;
  position: absolute;
  left: 0;
  width: 100%;
  background-color: transparent;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

export const SelectViewport = styled(Select.Viewport)`
  background-color: ${({ theme }) => theme.COLORS.primary[1100]};
  display: flex;
  position: absolute;
  flex-direction: column;
  padding: 0.5rem;
  gap: 0.225rem;
`

export const SelectItem = styled(Select.Item)`
  display: inline-flex;
  align-items: center;
  height: 3rem;
  padding: 0 0.5rem;
  font-weight: 600;
  user-select: none;
  border: 1px solid ${({ theme }) => theme.COLORS.primary[500]};

  &:hover {
    border: 1px solid ${({ theme }) => theme.COLORS.primary[300]};
    z-index: 10;
  }

  strong {
    font-size: 1rem;
    display: block;
    max-width: 50ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    span {
      font-size: 0.875rem;
      font-weight: 400;
    }
  }

  &[data-highlighted] {
    background-color: ${({ theme }) => theme.COLORS.primary[900]};
  }
`
