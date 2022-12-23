import styled, { keyframes } from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

const slideLeftAnimation = keyframes`
	from {
		opacity: 1;
		transform: translateX(100%)
  }
	
	to {
		opacity: 1;
		transform: translateX(0);
  }
`

export const DialogOverlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 190;
`

export const DialogContent = styled(Dialog.Content)`
  animation: ${slideLeftAnimation} 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.primary[1000]};
  border: 1px solid ${({ theme }) => theme.COLORS.primary[900]};
  box-shadow: -4px 0px 28px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
  max-width: 500px;
  padding: 3rem 1rem;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 200;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 0.5rem;
    background: ${({ theme }) => theme.COLORS.primary[500]};
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.COLORS.primary[100]};
  }
`

export const DialogClose = styled(Dialog.Close)`
  position: absolute;
  right: 10px;
  cursor: default;
  top: 10px;
  border: none;
  outline: none;
  line-height: 0;
  padding: 0.225rem;
  background-color: transparent;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.primary[700]};
    transition: background-color 100ms;
  }
`

export const CartContent = styled.section`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
`

export const CheckoutPriceContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0 1rem;

  > div {
    display: flex;
    justify-content: space-between;
  }
`

export const PriceTotalContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;

  > span {
    font-weight: 600;
    font-size: 1rem;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    span {
      font-size: 1.5rem;
      font-weight: 600;
    }

    em {
      color: ${({ theme }) => theme.COLORS.primary[200]};
    }
  }
`

const spinnerLoading = keyframes`
	100% {
		transform: rotate(360deg);
	}
`

export const ButtonsContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 1rem;

  button {
    display: flex;
    height: 3.5rem;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
    font-weight: 600;
    background-color: ${({ theme }) => theme.COLORS.red[200]};
    color: ${({ theme }) => theme.COLORS.primary[1200]};
    border: 1px solid ${({ theme }) => theme.COLORS.primary[600]};
    outline: none;

    svg {
      animation: ${spinnerLoading} 1s ease-in-out infinite;
      position: absolute;
      left: 10px;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background-color: ${({ theme }) => theme.COLORS.red[300]};
      transition: background-color 200ms;
    }

    &:last-child {
      background-color: ${({ theme }) => theme.COLORS.secondary[800]};

      &:not(:disabled):hover {
        background-color: ${({ theme }) => theme.COLORS.secondary[900]};
        transition: background-color 200ms;
      }
    }
  }

  a {
    font-weight: 700;
    font-size: 1rem;

    &:hover {
      text-decoration: underline;
    }
  }
`
