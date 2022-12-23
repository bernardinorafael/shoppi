import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.primary[500]};

  > div:first-child {
    height: 5rem;
    width: 5rem;
    background-color: #121216;
		position: relative;
  }
`

export const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  > strong {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    max-width: 20ch;
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

			em {
				margin-top: 1rem;
				font-size: 1rem;
			}
    }

    > div:last-child {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: flex-end;
      line-height: 1;

      span:first-child {
        text-decoration: line-through;
        color: ${({ theme }) => theme.COLORS.primary[200]};
        text-decoration-color: ${({ theme }) => theme.COLORS.red[200]};
      }

      span:last-child {
        font-size: 2rem;
        font-weight: 600;
      }
    }
  }
`
