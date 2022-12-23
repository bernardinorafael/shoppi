import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  width: 100%;
  margin: 2rem 0;

  div {
    height: 10rem;
    background-color: ${({ theme }) => theme.COLORS.primary[100]};
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 3rem;
      text-align: center;
      color: ${({ theme }) => theme.COLORS.primary[1200]};
    }
  }

  > section {
    display: grid;
    gap: 3rem;
    grid-template-columns: repeat(3, 1fr);
    height: 100vh;
    justify-content: center;
    padding: 2rem;

    a {
      transition: all 400ms;
    }

    &:has(a:hover) a:not(:hover) {
      opacity: 0.5;
      scale: 0.95;
    }

    a {
      align-items: center;
      background-color: transparent;
      border: 1px solid ${({ theme }) => theme.COLORS.primary[500]};
      display: flex;
      justify-content: center;

      &:hover {
        border: 1px solid ${({ theme }) => theme.COLORS.secondary[100]};
      }

      img {
        object-fit: contain;
      }
    }
  }
`
