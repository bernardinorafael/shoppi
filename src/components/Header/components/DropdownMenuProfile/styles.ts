import Link from 'next/link'
import * as Dropdown from '@radix-ui/react-dropdown-menu'
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

export const DropdownItem = styled(Dropdown.Item)`
  width: 100%;
  align-items: center;
  display: flex;
  font-weight: 500;
  width: 100%;
  height: 100%;
  gap: 0.5rem;
  padding: 0.225rem 1rem;
  position: relative;

  svg:nth-child(2) {
    position: absolute;
    right: 10px;
  }

  &[data-highlighted] {
    background-color: ${({ theme }) => theme.COLORS.primary[700]};
  }
`

export const DropdownSubTrigger = styled(Dropdown.SubTrigger)`
  width: 100%;
  align-items: center;
  display: flex;
  font-weight: 500;
  width: 100%;
  height: 100%;
  gap: 0.5rem;
  padding: 0.225rem 1rem;
  position: relative;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.primary[700]};
  }

  &[data-highlighted] {
    background-color: ${({ theme }) => theme.COLORS.primary[700]};
  }

  &[data-state='open'] {
    background-color: ${({ theme }) => theme.COLORS.primary[700]};
  }

  svg:nth-child(2) {
    position: absolute;
    right: 10px;
  }
`

export const Container = styled(Dropdown.Content)`
  animation: ${slideLeftAnimation} 300ms cubic-bezier(0.16, 1, 0.3, 1);
  background-color: ${({ theme }) => theme.COLORS.primary[1000]};
  border: 1px solid ${({ theme }) => theme.COLORS.primary[900]};
  box-shadow: rgba(0, 0, 0, 0.25) 8px 10px 20px -5px, rgba(0, 0, 0, 0.1) 0px 8px 16px -8px;
  display: flex;
  flex-direction: column;
  max-height: 85vh;
  max-width: 300px;
  padding: 0.875rem 0;
  transform-origin: var(--radix-popover-content-transform-origin);
  user-select: none;
  width: 90vw;
  z-index: 200;

  > div:first-child {
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.primary[900]};
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr;
    padding: 0 0.875rem 0.5rem;
  }
`

export const LoginLinkButton = styled(Link)`
  align-items: center;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.COLORS.primary[800]};
  display: flex;
  font-weight: 600;
  justify-content: center;
  padding: 0.5rem;

  &:active {
    transform: scale(1.04);
  }

  &:hover {
    border: 1px solid ${({ theme }) => theme.COLORS.primary[500]};
    transition: border-color 200ms;
  }
`

export const RegisterLinkButton = styled(Link)`
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.secondary[400]};
  border: 1px solid transparent;
  color: ${({ theme }) => theme.COLORS.primary[1200]};
  display: flex;
  font-weight: 600;
  justify-content: center;
  padding: 0.5rem;

  &:active {
    transform: scale(1.04);
  }

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.primary[1200]};
    border: 1px solid ${({ theme }) => theme.COLORS.primary[800]};
    color: ${({ theme }) => theme.COLORS.primary[100]};
    transition: background-color 200ms, color 200ms, border-color 200ms;
  }
`

export const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.225rem;
  padding: 0.5rem 0;
`
