import styled, { keyframes } from 'styled-components'

const slideLeftAnimation = keyframes`
	from {
		opacity: 0.3;
    transform: translateY(-10px);
  }
	to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const Container = styled.div`
  animation: ${slideLeftAnimation} 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  padding: 1rem;
  background-color: ${({ theme }) => theme.COLORS.primary[1000]};
  z-index: 101;
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.COLORS.primary[900]};
  justify-content: center;
  transform-origin: var(--radix-popover-content-transform-origin);
  box-shadow: rgba(0, 0, 0, 0.25) 8px 10px 20px -5px, rgba(0, 0, 0, 0.1) 0px 8px 16px -8px;
  height: 100px;
  width: 400px;

  h1 {
    font-size: 1rem;
  }
`
