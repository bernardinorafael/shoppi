import styled, { keyframes } from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

const slideLeftAnimation = keyframes`
	from {
		opacity: 1;
		transform: translateX(100%)
  }
	
	to {
		opacity: 1;
		transform: translateX(0%);
  }
`

export const DialogOverlay = styled(Dialog.Overlay)`
  background-color: transparent;
  inset: 0;
  position: fixed;
  z-index: 190;
`

export const DialogContent = styled(Dialog.Content)`
  align-items: center;
  animation: ${slideLeftAnimation} 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  background-color: ${({ theme }) => theme.COLORS.primary[1000]};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.COLORS.primary[900]};
  box-shadow: rgba(0, 0, 0, 0.4) 0 2px 4px, rgba(0, 0, 0, 0.3) 0 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 95%;
  max-width: 500px;
  overflow-y: auto;
  position: fixed;
  right: 10px;
  top: 1rem;
  width: 100%;
  z-index: 200;

  > div {
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.primary['800']};
    border-bottom: 1px solid ${(props) => props.theme.COLORS.primary['500']};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0) 0px 1px 3px -1px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 10;
  }

  ::-webkit-scrollbar {
    background: ${({ theme }) => theme.COLORS.primary[500]};
    width: 0px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.COLORS.primary[100]};
  }
`

export const CheckoutBox = styled.div`
  background-color: ${({ theme }) => theme.COLORS.primary['800']};
  border-top: 1px solid ${(props) => props.theme.COLORS.primary['500']};
  bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 0.875rem;
  position: sticky;
  z-index: 10;
`

export const DialogClose = styled(Dialog.Close)`
  background-color: transparent;
  border-radius: 6px;
  border: none;
  cursor: default;
  line-height: 0;
  outline: none;
  padding: 0.225rem;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.primary['600']};
    transition: background-color 100ms;
  }
`

export const CartContent = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.875rem;
  width: 100%;
`

export const CheckoutPriceContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0 1rem;
  width: 100%;

  > div {
    display: flex;
    justify-content: space-between;
  }
`

export const PriceTotalContainer = styled.div`
  align-items: center;
  display: flex;

  > span {
    font-size: 1rem;
    font-weight: 600;
  }

  div {
    align-items: flex-end;
    display: flex;
    flex-direction: column;

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
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  > button {
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.red[200]};
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.COLORS.primary[600]};
    color: ${({ theme }) => theme.COLORS.primary[1200]};
    display: flex;
    font-size: 1rem;
    font-weight: 600;
    height: 3.5rem;
    justify-content: center;
    outline: none;
    position: relative;
    width: 100%;

    svg {
      animation: ${spinnerLoading} 1s ease-in-out infinite;
      left: 10px;
      position: absolute;
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }

    &:not(:disabled):hover {
      background-color: ${({ theme }) => theme.COLORS.red[300]};
      transition: background-color 200ms;
    }
  }
`
