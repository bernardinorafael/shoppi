import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
	flex: 1;
  margin: 0 auto;
  max-width: 1440px;
  padding: 0 1.5rem;

  a {
    font-weight: 600;
    font-size: 1rem;
    text-transform: capitalize;

    &:hover {
      text-decoration: underline;
    }
  }

  span {
    font-size: 1rem;
    color: ${({ theme }) => theme.COLORS.primary[300]};
  }
`
