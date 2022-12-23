import styled, { keyframes } from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const RadioGroupRoot = styled(RadioGroup.Root)`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(6, 1fr);
  width: 100%;
`

export const RadioGroupItem = styled(RadioGroup.Item)`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.COLORS.primary[600]};
  cursor: default;
  height: 4rem;
  margin-bottom: 2rem;
  outline: none;

  &:hover {
    border: 1px solid ${({ theme }) => theme.COLORS.primary[200]};
  }

  &[data-state='checked'] {
    background-color: ${({ theme }) => theme.COLORS.secondary[900]};
    border: 1px solid ${({ theme }) => theme.COLORS.primary[200]};
    color: ${({ theme }) => theme.COLORS.primary[1200]};
  }

  span {
    font-weight: 600;
    font-size: 1rem;
  }
`

const ButtonCaretSlide = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.COLORS.primary[100]};
  cursor: default;
  line-height: 0;
  outline: none;
  padding: 0.5rem;
  position: absolute;

  &:active {
    transform: scale(1.1);
  }

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.primary[100]};
    color: ${({ theme }) => theme.COLORS.primary[1200]};
    transition: background-color 200ms;
  }
`

export const ButtonCaretSlideLeft = styled(ButtonCaretSlide)`
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
`

export const ButtonCaretSlideRight = styled(ButtonCaretSlide)`
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
`

export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  height: 900px;
  max-width: 1440px;
  padding-bottom: 2rem;
  width: 100%;
`

export const ImagesContainer = styled.div`
  display: grid;
  gap: 0.225rem;
  grid-template-columns: 1fr 1fr;

  button {
    background-color: transparent;
    border: none;
    outline: none;
    position: relative;

    img {
      border: 1px solid transparent;
      object-fit: cover;

      &:hover {
        border: 1px solid ${({ theme }) => theme.COLORS.primary[400]};
      }
    }
  }
`

export const NavigationContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1440px;
  padding: 1rem 0;
  user-select: none;
  width: 100%;
`

export const ProductDataContainer = styled.section`
  display: block;
  display: flex;
  flex-direction: column;
  max-height: 100%;
  padding: 0 1rem;
  user-select: none;
  width: 100%;

  > strong {
    display: block;
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
`

export const PriceContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;

  span:first-child {
    font-size: 1.875rem;
    font-weight: 700;
  }

  span:last-child {
    color: ${({ theme }) => theme.COLORS.primary[100]};

    strong {
      color: ${({ theme }) => theme.COLORS.primary[100]};
    }
  }
`

export const SizeContainer = styled.section`
  border-top: 1px solid ${({ theme }) => theme.COLORS.primary[400]};
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  width: 100%;

  > div:first-child {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;

    span {
      font-weight: 600;
      font-size: 1rem;
    }

    > button {
      align-items: center;
      background-color: transparent;
      border: none;
      cursor: default;
      display: flex;
      font-weight: 600;
      gap: 0.225rem;
      justify-content: center;
      line-height: 0;
      outline: none;
      padding: 0.225rem;

      &:hover {
        background-color: ${({ theme }) => theme.COLORS.primary[800]};
        transition: background-color 100ms;
      }
    }
  }
`

export const AddressContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;

  a {
    align-self: flex-end;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`

export const ShippingContainer = styled.section`
  align-items: center;
  align-self: flex-end;
  display: flex;
  gap: 1rem;

  strong {
    font-size: 1rem;
  }
`

export const OfferContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;

  > span:first-child {
    color: ${({ theme }) => theme.COLORS.primary[200]};
    font-size: 0.825rem;
    font-weight: 500;
    text-decoration-color: ${({ theme }) => theme.COLORS.red[200]};
    text-decoration: line-through;
  }

  > span:last-child {
    background-color: ${({ theme }) => theme.COLORS.red[300]};
    color: ${({ theme }) => theme.COLORS.primary[1200]};
    font-size: 0.625rem;
    font-weight: 700;
    padding: 0.325rem;
    text-transform: uppercase;
  }
`

const spinnerLoading = keyframes`
	100% {
		transform: rotate(360deg);
	}
`

export const ButtonCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 6rem;
  width: 100%;

  > button {
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.red[200]};
    border: 1px solid ${({ theme }) => theme.COLORS.primary[600]};
    color: ${({ theme }) => theme.COLORS.primary[1200]};
    display: flex;
    flex: 1;
    font-size: 1rem;
    font-weight: 600;
    justify-content: center;
    outline: none;
    position: relative;
    width: 100%;

    svg {
      animation: ${spinnerLoading} 1s ease-in-out infinite;
      position: absolute;
      left: 10px;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background-color: ${({ theme }) => theme.COLORS.red[300]};
      transition: background-color 200ms;
    }

    &:last-child {
      background-color: ${({ theme }) => theme.COLORS.secondary[800]};

      &:not(:disabled):hover {
        background-color: ${({ theme }) => theme.COLORS.secondary[900]};
        transition: background-color 200ms;
      }
    }
  }
`
