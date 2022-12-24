import styled, { css, keyframes } from 'styled-components'

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
      font-size: 0.725rem;
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
  border: 1px solid ${({ theme }) => theme.COLORS.primary[500]};
  font-weight: 600;
  height: 2.5rem;
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

export const InputCep = styled(InputBase)`
  max-width: 50px;
`

export const Input = styled(InputBase)`
  width: 100%;
`

const spinnerLoading = keyframes`
	100% { transform: rotate(360deg); }
`

export const ButtonCreateNewAddress = styled.button`
  height: 3rem;
  font-weight: 600;
  font-size: 1rem;
  margin-top: 1rem;
  background-color: transparent;
  position: relative;
  border: 1px solid ${({ theme }) => theme.COLORS.primary[600]};

  &:active {
    transform: scale(1.05);
  }

  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    border: 1px solid ${({ theme }) => theme.COLORS.primary[400]};
    transition: border-color 200ms;
  }

  svg {
    animation: ${spinnerLoading} 1s ease-in-out infinite;
    position: absolute;
    left: 10px;
  }
`
