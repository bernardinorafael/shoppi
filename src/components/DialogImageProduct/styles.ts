import { Content, Overlay, Close } from '@radix-ui/react-dialog'
import styled, { keyframes } from 'styled-components'

const slideLeftAnimation = keyframes`
	from {
		opacity: 0;
		transform: translate(-50%, -48%) scale(0.96);
  }
	to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`

export const DialogContent = styled(Content)`
  animation: ${slideLeftAnimation} 500ms cubic-bezier(0.16, 1, 0.3, 1);
  background-color: transparent;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 200;

  img {
    object-fit: contain;
  }
`

export const DialogClose = styled(Close)`
  position: absolute;
  top: -25px;
  right: -50px;
  background-color: ${({ theme }) => theme.COLORS.primary[1100]};
  border: none;
  outline: none;
  line-height: 0;
  padding: 0.5rem;
  cursor: default;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.primary[600]};
    transition: background-color 200ms;
  }
`

export const DialogOverlay = styled(Overlay)`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 199;
`
