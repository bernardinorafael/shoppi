import Link from 'next/link'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  height: 100vh;
  padding: 2rem 1rem;

  h1 {
    margin: 2rem 0;
    font-size: 2.5rem;
  }
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin: 2rem 0;
`

export const ButtonNewAddress = styled(Link)`
  border: none;
  outline: none;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.5rem;
  background-color: transparent;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.primary[800]};
    transition: background-color 100ms;
  }
`

export const AddressContainer = styled.div`
  padding: 0 1rem;
  background-color: ${({ theme }) => theme.COLORS.primary[1200]};
  border: none;
  box-shadow: 0 2px 1px 0 rgb(0 0 0 / 16%);

  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.primary[700]};
    padding: 0.625rem 0;

    > strong {
      font-size: 1rem;
      text-transform: capitalize;
    }

    em {
      font-weight: 600;
      color: ${({ theme }) => theme.COLORS.red[200]};
    }
  }

  div {
    display: flex;
    flex-direction: column;
    line-height: 1.6;
    padding: 0.5rem 0;

    span {
      font-weight: 500;
    }
  }
`

export const ButtonsContainer = styled.section`
  display: flex;
  padding: 0.5rem 0;
  justify-content: space-between;
  border-top: 1px solid ${({ theme }) => theme.COLORS.primary[700]};

  button {
    align-items: center;
    background-color: transparent;
    border: none;
    display: flex;
    font-weight: 600;
    outline: none;
    padding: 0.225rem;

    &:hover {
      background-color: ${({ theme }) => theme.COLORS.primary[900]};
      transition: background-color 200ms;
    }

    &:last-child:hover {
      background-color: transparent;

      svg {
        color: ${({ theme }) => theme.COLORS.red[200]};
        transition: color 200ms;
      }
    }
  }
`
