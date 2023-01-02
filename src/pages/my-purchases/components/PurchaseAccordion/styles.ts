import styled, { keyframes } from 'styled-components'
import { Root, Item, Trigger, Content } from '@radix-ui/react-accordion'

export const Container = styled.div``

export const AccordionRoot = styled(Root)`
  background: ${({ theme }) => theme.COLORS.primary['800']};
  width: 100%;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
`

export const AccordionItem = styled(Item)`
  border: 1px solid ${(props) => props.theme.COLORS.primary['600']};

  &:first-child {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    margin-top: 0;
  }
  &:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  &:focus-within {
    position: relative;
    z-index: 99;
  }
`

export const AccordionTrigger = styled(Trigger)`
  align-items: center;
  background: ${({ theme }) => theme.COLORS.primary['800']};
  border-radius: 8px;
  border: none;
  display: flex;
  font-weight: 600;
  justify-content: space-between;
  outline: none;
  padding: 0.875rem;
  position: relative;
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.primary['900']};
    transition: background-color 200ms;
  }

  svg {
    transition: 400ms cubic-bezier(0.87, 0, 0.13, 1);

    [data-state='open']& {
      transform: rotate(90deg);
    }
  }
`

const slideDown = keyframes`
	from { height: 0 }
	to { height: var(--radix-accordion-content-height) }
`

const slideUp = keyframes`
	from { height: var(--radix-accordion-content-height) }
	to { height: 0 }
`

export const AccordionContent = styled(Content)`
  background: ${({ theme }) => theme.COLORS.primary['1000']};
  overflow: hidden;

  &[data-state='open'] {
    animation: ${slideDown} 400ms cubic-bezier(0.87, 0, 0.13, 1);
  }

  &[data-state='closed'] {
    animation: ${slideUp} 400ms cubic-bezier(0.87, 0, 0.13, 1);
  }
`
