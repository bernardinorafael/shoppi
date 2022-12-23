import styled, { keyframes } from 'styled-components'

const slideLeftAnimation = keyframes`
	from {
		opacity: 0;
    transform: translateY(-20px);
  }
	to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const Container = styled.div`
  animation: ${slideLeftAnimation} 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  background-color: ${({ theme }) => theme.COLORS.primary[1200]};
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.COLORS.primary[900]};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  transform-origin: var(--radix-popover-content-transform-origin);
  z-index: 101;
  user-select: none;
  width: 100vw;
  max-height: 85vh;

  strong {
    font-size: 2rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.primary[600]};
  }

  section {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    div {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      a {
        align-items: center;
        display: flex;
        font-size: 1.5rem;
        font-weight: 600;
        gap: 0.5rem;
        padding: 0.5rem;

        &:hover {
          background-color: ${({ theme }) => theme.COLORS.primary[1000]};
          transition: background-color 200ms;
        }
      }
    }
  }

  section:last-child {
    background-color: ${({ theme }) => theme.COLORS.primary[1000]};
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;

    div {
      display: flex;
      flex-direction: column;

      a {
        align-items: center;
        display: flex;
        font-weight: 600;
        gap: 0.5rem;
        padding: 0.5rem;

        &:hover {
          background-color: ${({ theme }) => theme.COLORS.primary[1000]};
          transition: background-color 200ms;
        }
      }
    }
  }
`
