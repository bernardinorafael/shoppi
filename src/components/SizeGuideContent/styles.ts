import * as Dialog from '@radix-ui/react-dialog'
import styled, { keyframes } from 'styled-components'

const slideLeftAnimation = keyframes`
	from {
		opacity: 0;
  }
	to {
    opacity: 1;
  }
`

export const DialogClose = styled(Dialog.Close)`
  border: none;
  cursor: default;
  line-height: 0;
  outline: none;
  padding: 0.5rem;
  position: absolute;
  right: 10px;
  top: 10px;
  border-radius: 8px;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.primary[900]};
  }
`

export const DialogContent = styled(Dialog.Content)`
  animation: ${slideLeftAnimation} 300ms cubic-bezier(0.16, 1, 0.3, 1);
  background-color: ${({ theme }) => theme.COLORS.primary[1000]};
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  left: 50%;
	border-radius: 8px;
  max-height: 85vh;
  max-width: 750px;
  padding: 2rem 1rem;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
`

export const DialogOverlay = styled(Dialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.3);
  inset: 0;
  position: fixed;
`

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  h1 {
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    text-align: center;
  }

  > div {
    margin-top: 2rem;
    overflow: auto;
    width: 100%;

    &::-webkit-scrollbar {
      height: 10px;
    }

    &::-webkit-scrollbar-track {
      background-color: ${({ theme }) => theme.COLORS.primary[900]};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.primary[100]};
    }

    table {
      border-collapse: collapse;
      min-width: 400px;

      th {
        background-color: ${({ theme }) => theme.COLORS.primary[100]};
        color: ${({ theme }) => theme.COLORS.primary[1200]};
        padding: 1rem;
        text-align: left;
      }

      td {
        font-weight: 600;
        padding: 1rem;
        text-align: center;

        &:first-child {
          background-color: ${({ theme }) => theme.COLORS.primary[600]};
          font-weight: 700;
        }
      }
    }
  }

  span {
    align-self: flex-start;
    font-weight: 600;
    margin-top: 0.5rem;
  }

  > div:last-child {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    strong {
      font-size: 2rem;
    }
  }
`
