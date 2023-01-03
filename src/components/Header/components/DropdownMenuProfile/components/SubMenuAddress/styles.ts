import { SubContent, Item } from '@radix-ui/react-dropdown-menu'
import styled, { keyframes } from 'styled-components'

const slideLeftFade = keyframes`
	from {
		opacity: 0;
    transform: translateX(-5px);
  }
  to {
		opacity: 1;
    transform: translateX(0);
  }
`

export const DropdownSubContent = styled(SubContent)`
  animation: ${slideLeftFade} 300ms cubic-bezier(0.16, 1, 0.3, 1);
  width: 220px;
  background-color: ${({ theme }) => theme.COLORS.primary[1000]};
  z-index: 210;
  padding: 0.5rem;
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
  border-radius: 6px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`

export const DropdownItem = styled(Item)`
  width: 100%;
  align-items: center;
  display: flex;
  font-weight: 600;
  width: 100%;
  height: 100%;
  gap: 0.5rem;
  padding: 0.225rem 1rem;
  position: relative;
  border-radius: 6px;

  &[data-highlighted] {
    background-color: ${({ theme }) => theme.COLORS.primary[600]};
  }
`
