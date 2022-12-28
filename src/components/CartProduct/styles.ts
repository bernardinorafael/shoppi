import styled from 'styled-components'

export const Container = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.primary['500']};
  display: flex;
  gap: 1rem;
  padding: 1rem;

  > div:first-child {
    aspect-ratio: 1 / 1;
    background-color: #121216;
    height: 4rem;
    position: relative;
  }
`

export const ProductBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  > strong {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    max-width: 25ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  section {
    display: flex;
    justify-content: space-between;

    > div:first-child {
      display: flex;
      flex-direction: column;
    }

    > div:last-child {
      align-items: flex-end;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      line-height: 1;

      span:first-child {
        color: ${({ theme }) => theme.COLORS.primary[200]};
      }

      span:last-child {
        font-size: 2rem;
        font-weight: 600;
      }
    }
  }
`

export const QuantityBox = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-top: 1.5rem;

  strong {
    font-size: 1rem;
  }
`
