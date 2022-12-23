import { Overlay, Content } from '@radix-ui/react-dialog'
import styled, { keyframes } from 'styled-components'

const showOverlay = keyframes`
	from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const OverlayDialog = styled(Overlay)`
  animation: ${showOverlay} 200ms cubic-bezier(0.16, 1, 0.3, 1);
  inset: 0;
  position: fixed;
`

export const DialogContent = styled(Content)`
  left: 50%;
  max-height: 85vh;
  max-width: 90vw;
  position: absolute;
  top: 4.5rem;
  transform: translateX(-50%);
  z-index: 150;
`
