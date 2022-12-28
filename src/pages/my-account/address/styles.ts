import Link from 'next/link'
import styled from 'styled-components'
import { Root } from '@radix-ui/react-radio-group'

export const Container = styled.div`
  height: 100vh;
  margin: 0 auto;
  max-width: 820px;
  padding: 2rem 1rem;
  width: 100%;

  h1 {
    font-size: 2.5rem;
    margin: 2rem 0;
  }
`

export const Content = styled(Root)`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
  margin: 2rem 0;
`

export const ButtonNewAddress = styled(Link)`
  background-color: transparent;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  outline: none;
  padding: 0.5rem;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.primary['800']};
    transition: background-color 100ms;
  }
`

export const AddressContainer = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.primary['1200']};
  border: 1px solid ${({ theme }) => theme.COLORS.primary['600']};
  display: flex;
  gap: 1rem;
  padding: 1rem;

  > div {
    height: 100%;
  }

  > strong {
    font-size: 1rem;
    text-transform: capitalize;
  }

  > button {
    margin-left: auto;
  }
`

export const AddressContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 100%;
  text-transform: capitalize;
  width: 100%;

  strong {
    font-size: 1.5rem;
    max-width: 40ch;
    overflow: hidden;
    text-overflow: ellipsis;
    user-select: none;
    white-space: nowrap;
  }

  > div {
    align-items: center;
    display: flex;
    gap: 0.5rem;

    span {
      color: ${({ theme }) => theme.COLORS.primary['200']};
      font-size: 1rem;
      font-weight: 500;
    }
  }
`

export const ButtonAction = styled.button`
  align-items: center;
  background-color: transparent;
  border-radius: 4px;
  border: none;
  cursor: default;
  display: flex;
  font-weight: 600;
  outline: none;
  padding: 0.325rem;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.primary['700']};
    transition: background-color 200ms;
  }
`
