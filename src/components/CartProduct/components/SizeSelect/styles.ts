import styled from 'styled-components'
import * as Select from '@radix-ui/react-select'

export const Root = styled(Select.Root)`
  position: relative;
`

export const Trigger = styled(Select.Trigger)`
  align-items: center;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.COLORS.primary['600']};
  color: ${({ theme }) => theme.COLORS.primary['100']};
  display: inline-flex;
  font-weight: 600;
  height: 1.5rem;
  justify-content: space-between;
  line-height: 0;
  outline: none;
  padding: 0 0.5rem;

  &:hover {
    border: 1px solid ${({ theme }) => theme.COLORS.primary['500']};
    transition: background-color 100ms;
  }
`

export const Content = styled(Select.Content)`
  background-color: ${({ theme }) => theme.COLORS.primary['800']};
  border-radius: 6px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  font-weight: 600;
  overflow: hidden;
  width: 100%;
  z-index: 200;
`

export const Viewport = styled(Select.Viewport)`
  padding: 0.5rem;
`

export const ItemSelected = styled(Select.ItemIndicator)`
  position: absolute;
  right: 10px;
`

export const Item = styled(Select.Item)`
  align-items: center;
  border-radius: 4px;
  color: ${({ theme }) => theme.COLORS.primary['100']};
  display: flex;
  height: 1.5rem;
  line-height: 1;
  padding: 0.5rem;
  position: relative;
  user-select: none;

  &[data-highlighted] {
    background-color: ${({ theme }) => theme.COLORS.secondary['900']};
    color: ${({ theme }) => theme.COLORS.primary['1200']};
  }
`
