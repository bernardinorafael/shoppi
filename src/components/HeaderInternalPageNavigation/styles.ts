import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  gap: 0.5rem;
  margin: 1rem auto;
  max-width: 1440px;

  a {
    font-size: 1rem;
    font-weight: 600;

    &::first-letter {
      text-transform: capitalize;
    }

    &:hover {
      text-decoration: underline;
    }
  }

  span {
    color: ${({ theme }) => theme.COLORS.amber[100]};
    font-size: 1rem;
    font-weight: 600;
    text-transform: capitalize;
  }
`
