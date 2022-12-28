import styled, { css, keyframes } from 'styled-components'
import { Item, Root } from '@radix-ui/react-radio-group'

export const Container = styled.div`
  margin: 0 auto;
  max-width: 620px;
  padding: 2rem 1rem;
  width: 100%;

  > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    margin: 2rem 0;

    h1 {
      font-size: 2.5rem;
    }

    p {
      font-weight: 500;
    }
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    align-items: center;
    display: flex;
    font-weight: 700;
    gap: 0.225rem;
    user-select: none;
  }

  span {
    color: ${({ theme }) => theme.COLORS.red[200]};
    font-size: 0.725rem;
    font-weight: 700;
  }
`

type InputProps = {
  error?: boolean
}

const InputBase = styled.input<InputProps>`
  background-color: ${({ theme }) => theme.COLORS.primary[1200]};
  border-radius: 2px;
  font-weight: 600;
  height: 3rem;
  border-radius: 8px;
  outline: none;
  padding: 0 0.875rem;

  &:focus::-webkit-input-placeholder {
    color: transparent;
    transition: color 200ms;
  }

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.COLORS.secondary[100]};
  }

  &::placeholder {
    font-weight: 500;
  }

  ${({ error }) =>
    error === true &&
    css`
      border: 1px solid transparent;
      box-shadow: 0 0 0 2px ${(props) => props.theme.COLORS.red[200]} !important;
    `}
`

export const Input = styled(InputBase)`
  border: 1px solid ${({ theme }) => theme.COLORS.primary[500]};
  width: 100%;
`

export const InputDisabled = styled(InputBase)`
  border: 3px dashed ${({ theme }) => theme.COLORS.primary[500]};
  cursor: not-allowed;
  background-color: ${({ theme }) => theme.COLORS.primary['800']};
`

const spinnerLoading = keyframes`
	100% { transform: rotate(360deg); }
`

type RadioRootProps = {
  error: boolean
}

export const RadioRoot = styled(Root)<RadioRootProps>`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  ${({ error }) =>
    error === true &&
    css`
      > button {
        border: 1px solid transparent;
        box-shadow: 0 0 0 2px ${({ theme }) => theme.COLORS.red[200]} !important;
      }
    `}
`

export const RadioItem = styled(Item)`
  align-items: center;
  background-color: transparent;
  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.COLORS.primary['500']};
  color: ${({ theme }) => theme.COLORS.primary['100']};
  cursor: default;
  border-radius: 8px;
  display: flex;
  gap: 0.5rem;
  height: 3rem;
  justify-content: center;
  outline: none;

  &[data-state='checked'] {
    border: 1px solid ${({ theme }) => theme.COLORS.primary['200']};
    background-color: ${({ theme }) => theme.COLORS.primary['100']};
    color: ${({ theme }) => theme.COLORS.primary['1200']};

    span {
      color: ${({ theme }) => theme.COLORS.primary['1200']};
    }
  }

  &[data-state='unchecked']:hover {
    border: 1px solid ${({ theme }) => theme.COLORS.primary['200']};
  }

  span {
    font-size: 1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.COLORS.primary['100']};
  }
`

export const ButtonCreateNewAddress = styled.button`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.COLORS.primary[600]};
  font-size: 1rem;
  font-weight: 600;
  height: 3rem;
  margin-top: 1rem;
  border-radius: 8px;
  position: relative;

  &:active {
    transform: scale(1.05);
  }

  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.COLORS.secondary['700']};
    color: ${({ theme }) => theme.COLORS.primary['1200']};
    transition: background-color 150ms, color 150ms;
  }

  svg {
    animation: ${spinnerLoading} 1s ease-in-out infinite;
    left: 10px;
    position: absolute;
  }
`
