import { Root } from '@radix-ui/react-checkbox'
import styled from 'styled-components'

export const Container = styled.section`
  align-items: center;
  display: flex;
  gap: 0.5rem;

  label {
    cursor: pointer;
    font-weight: 700;
    user-select: none;
  }
`

export const CheckboxRoot = styled(Root)`
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.primary[1200]};
  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.COLORS.primary[500]};
  display: flex;
  height: 25px;
  justify-content: center;
  line-height: 0;
	border-radius: 6px;
  outline: none;
  width: 25px;

  svg {
    --animate-duration: 600ms;
  }

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.COLORS.secondary['100']};
  }
`
