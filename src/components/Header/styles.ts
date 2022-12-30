import styled from 'styled-components'

export const Container = styled.header`
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.primary[1000]};
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.primary[700]};
  display: flex;
  height: 4rem;
  width: 100%;
  z-index: 110;

  section {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1440px;
    padding: 0 1.5rem;
    width: 100%;

    > div:first-child {
      display: flex;
      gap: 2rem;
      justify-content: flex-start;

      > a {
        font-family: ${({ theme }) => theme.FONT_FAMILY.cursive};
        font-size: 2.5rem;
        letter-spacing: -3px;
        text-decoration: underline;
        user-select: none;
      }
    }

    > div:last-child {
      align-items: center;
      display: flex;
      gap: 0.125rem;

      svg {
        color: ${({ theme }) => theme.COLORS.primary[100]};
      }
    }
  }
`

export const NavbarBox = styled.nav`
  align-items: center;
  display: flex;
  flex: 1;
  gap: 0.5rem;
  justify-content: center;

  a {
    background-color: transparent;
    border: 1px solid transparent;
    font-family: ${({ theme }) => theme.FONT_FAMILY.sans};
    font-weight: 600;
    letter-spacing: 0;
    padding: 0.225rem 0.5rem;
    position: relative;
    text-decoration: none;

    &:last-child {
      color: ${({ theme }) => theme.COLORS.red[200]};
      font-weight: 700;

      &::after {
        background-color: ${({ theme }) => theme.COLORS.red[200]};
      }
    }

    &:hover::after {
      opacity: 1;
      transform: translateY(0);
      transition: all 200ms;
    }

    &::after {
      background-color: ${({ theme }) => theme.COLORS.primary[200]};
      bottom: -4px;
      content: '';
      height: 2px;
      left: 0;
      opacity: 0;
      pointer-events: none;
      position: absolute;
      transform: translateY(8px);
      width: 100%;
    }
  }
`

export const ButtonNavbar = styled.button`
  background-color: transparent;
  border-radius: 1px;
  border: none;
  font-weight: 600;
  line-height: 0;
  outline: none;
  padding: 0.5rem;
  position: relative;

  > div {
    position: absolute;
    background-color: ${({ theme }) => theme.COLORS.red['200']};
    top: 0;
    right: 2px;
    color: ${({ theme }) => theme.COLORS.primary['1200']};
    font-size: 0.775rem;
    height: 20px;
    aspect-ratio: 1 / 1;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const ButtonMyProfile = styled.button`
  align-items: center;
  background-color: transparent;
  border-radius: 1px;
  border: 1px solid transparent;
  cursor: default;
  display: flex;
  font-weight: 500;
  gap: 0.5rem;
  justify-content: center;
  line-height: 0;
  outline: none;
  padding: 0.5rem;

  &:not(:disabled):hover {
    border: 1px solid ${({ theme }) => theme.COLORS.primary[700]};
    transition: border-color 200ms;
  }
`
