import styled from 'styled-components'

export const Container = styled.header`
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.primary[1000]};
  display: flex;
  height: 4rem;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.primary[700]};
  z-index: 110;

  section {
    align-items: center;
    display: flex;
    justify-content: space-evenly;
    margin: 0 auto;
    max-width: 1440px;
    padding: 0 1.5rem;
    width: 100%;

    a {
      font-family: ${({ theme }) => theme.FONT_FAMILY.cursive};
      font-size: 2.25rem;
      letter-spacing: -3px;
      text-decoration: underline;
      user-select: none;
    }

    > div:first-child {
      display: flex;
      gap: 5rem;
      flex: 1;
    }

    nav {
      display: flex;
      flex: 1;
      gap: 0.5rem;
      justify-content: center;
      align-items: center;

      a {
        background-color: transparent;
        border: 1px solid transparent;
        font-family: ${({ theme }) => theme.FONT_FAMILY.sans};
        font-size: 0.875rem;
        font-weight: 600;
        text-decoration: none;
        letter-spacing: 0;
        padding: 0.225rem 0.5rem;
        position: relative;

        &:last-child {
          font-weight: 700;
          color: ${({ theme }) => theme.COLORS.red[200]};

          &::after {
            background-color: ${({ theme }) => theme.COLORS.red[200]};
          }
        }

        &:hover::after {
          opacity: 1;
          transition: all 200ms;
          transform: translateY(0);
        }

        &::after {
          background-color: ${({ theme }) => theme.COLORS.primary[200]};
          bottom: -4px;
          content: '';
          height: 2px;
          pointer-events: none;
          transform: translateY(8px);
          left: 0;
          opacity: 0;
          position: absolute;
          width: 100%;
        }
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

export const SearchFormContainer = styled.form`
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.primary[1200]};
  border: 1px solid ${({ theme }) => theme.COLORS.primary[900]};
  display: flex;
  height: 2.5rem;
  justify-content: space-between;
  border-radius: 6px;
  max-width: 500px;
  padding-left: 1rem;
  width: 100%;

  svg {
    color: ${({ theme }) => theme.COLORS.primary[100]};
  }

  input {
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.primary[100]};
    flex: 1;
    font-size: 1rem;
    font-weight: 600;
    height: 2rem;
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.primary[400]};
    }

    &:focus {
      box-shadow: none;
    }
  }
`

export const SearchButton = styled.button`
  background: transparent;
  border-radius: 1px;
  border: none;
  height: inherit;
  outline: none;
  padding: 0 1rem;

  svg {
    color: ${({ theme }) => theme.COLORS.primary[400]};
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
