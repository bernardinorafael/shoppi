import styled from 'styled-components'

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.COLORS.primary[100]};
  display: flex;
  flex-direction: column;
  width: 100%;

  > section:first-child {
    background-color: ${({ theme }) => theme.COLORS.primary[100]};
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.secondary[400]};
    color: ${({ theme }) => theme.COLORS.primary[1200]};
    display: flex;
    gap: 1rem;
    justify-content: space-evenly;
    padding: 1.5rem;

    > a {
      align-items: center;
      border: 1px solid transparent;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      justify-content: center;
      padding: 1rem 0;
      width: 15%;

      &:hover {
        border: 1px solid ${({ theme }) => theme.COLORS.secondary[400]};
        transition: border-color 200ms;
      }

      span {
        font-weight: 600;
        text-transform: uppercase;
      }
    }
  }

  > section:last-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    color: ${({ theme }) => theme.COLORS.primary[1200]};

    > div:first-child {
      display: flex;
    }
  }
`

export const FooterTopicContainer = styled.div`
  padding: 3rem;
  gap: 1.5rem;
  display: flex;
  flex-direction: column;
  user-select: none;

  strong {
    font-size: 2rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.875rem;

    span {
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      cursor: pointer;
      align-self: flex-start;
      border-bottom: 1px solid transparent;

      &:hover {
        border-bottom: 1px solid ${({ theme }) => theme.COLORS.primary[200]};
      }
    }
  }
`
