import styled from 'styled-components'
import Link from 'next/link'

export const Container = styled(Link)`
  padding: 0.875rem;
  border: 1px solid transparent;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  user-select: none;

  &:hover {
    border: 1px solid ${({ theme }) => theme.COLORS.primary[200]};
  }

  > div:first-child {
    height: 250px;
    position: relative;

    img {
      object-fit: contain;
    }
  }

  > div:last-child {
    border-top: 1px solid ${({ theme }) => theme.COLORS.primary[600]};
    flex: 1;
    padding: 1rem;
    z-index: 100;

    > strong {
      display: block;
      font-size: 1rem;
      margin-bottom: 1rem;
      max-width: 22ch;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`

export const PricingDiscountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  span:first-child {
    color: ${({ theme }) => theme.COLORS.primary[400]};
    text-decoration: line-through;
  }

  span:last-child {
    color: ${({ theme }) => theme.COLORS.green[200]};
    font-size: 1rem;
    font-weight: 700;
  }
`

export const PricingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  strong {
    font-size: 2rem;
  }

  span {
    color: ${({ theme }) => theme.COLORS.primary[400]};
    font-size: 0.725rem;
  }
`

export const ImageInsideContainer = styled.div`
  position: absolute;
  width: 100%;
  z-index: 90;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  strong {
    position: absolute;
    top: -5px;
    right: -5px;
    font-size: 1.25rem;
    padding: 0.5rem;
    background-color: ${({ theme }) => theme.COLORS.secondary[900]};
    color: ${({ theme }) => theme.COLORS.primary[1200]};
  }

  span {
    padding: 0.325rem;
    background-color: ${({ theme }) => theme.COLORS.red[300]};
    font-size: 0.625rem;
    font-weight: 700;
    text-transform: uppercase;
    color: ${({ theme }) => theme.COLORS.primary[1200]};
  }
`
