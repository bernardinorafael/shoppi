import styled from 'styled-components'

export const BannerContainer = styled.div`
  padding: 2.5rem;
  background-color: ${({ theme }) => theme.COLORS.red[300]};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7rem;

  span {
    color: ${({ theme }) => theme.COLORS.primary[1200]};
    font-size: 2rem;
    font-weight: 700;
  }

  button {
    background-color: ${({ theme }) => theme.COLORS.secondary[900]};
    border: none;
    color: ${({ theme }) => theme.COLORS.primary[1200]};
    font-weight: 700;
    height: 3rem;
    border-radius: 12px;
    line-height: 0;
    outline: none;
    padding: 1.5rem;

    &:active {
      transform: scale(1.03);
    }
  }
`
