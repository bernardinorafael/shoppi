import {
  Action,
  Cancel,
  Content,
  Description,
  Overlay,
  Title,
} from '@radix-ui/react-alert-dialog'
import styled, { keyframes } from 'styled-components'

const contentShow = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -48%) scale(0.96);
  }

  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
 }
`

export const AlertOverlay = styled(Overlay)`
  inset: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.2);
`

export const AlertTitle = styled(Title)`
  font-size: 1.25rem;
  line-height: 1.6;
	margin-bottom: .5rem;
`

export const AlertDescription = styled(Description)`
  color: ${(props) => props.theme.COLORS.primary['200']};
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 2rem;
`

export const ContentBox = styled(Content)`
  animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
  background-color: ${(props) => props.theme.COLORS.primary['1000']};
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  left: 50%;
  max-height: 85vh;
  max-width: 550px;
  padding: 1.5rem;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
`

export const ActionsButtonBox = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
  width: 100%;
`

export const ActionButton = styled(Action)`
  all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding: 0 1rem;
  font-size: 1rem;
  line-height: 0;
  font-weight: 600;
  height: 2.5rem;
  border: none;
  color: ${(props) => props.theme.COLORS.red['100']};
  background-color: ${(props) => props.theme.COLORS.red['400']};

  &:disable {
    opacity: 0.8;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme.COLORS.red['500']};
    transition: background-color 150ms;
  }
`

export const CancelButton = styled(Cancel)`
  all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding: 0 1rem;
  border: 1px solid ${(props) => props.theme.COLORS.primary['500']};
  font-size: 1rem;
  line-height: 0;
  font-weight: 600;
  height: 2.5rem;

  &:disable {
    opacity: 0.8;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    border: 1px solid ${(props) => props.theme.COLORS.primary['400']};
    transition: border-color 150ms;
  }
`
