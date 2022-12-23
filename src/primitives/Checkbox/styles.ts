import { Root } from '@radix-ui/react-checkbox'
import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  label {
    font-weight: 700;
    user-select: none;
  }
`

export const CheckboxRoot = styled(Root)`
  height: 20px;
  background-color: ${({ theme }) => theme.COLORS.primary[1200]};
  width: 20px;
  border: 1px solid ${({ theme }) => theme.COLORS.primary[500]};
  outline: none;
  line-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`
