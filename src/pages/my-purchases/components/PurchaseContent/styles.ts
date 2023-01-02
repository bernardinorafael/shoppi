import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem 0 0;
  display: flex;
  flex-direction: column;

  > section {
    padding: 0.5rem;
    display: flex;
    gap: 0.5rem;
    justify-content: flex-end;
    border-top: 1px solid ${(props) => props.theme.COLORS.primary['500']};
    background: ${({ theme }) => theme.COLORS.primary['800']};

    button {
      background-color: transparent;
      border: none;
      outline: none;
      font-weight: 600;
      padding: 0.5rem;
      border-radius: 6px;

      &:hover {
        background-color: ${(props) => props.theme.COLORS.primary['900']};
        transition: background-color 150ms;
      }
    }
  }
`

export const Product = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & + & {
    border-top: 1px solid ${(props) => props.theme.COLORS.primary['500']};
  }

  section:first-child {
    width: 100%;
    display: flex;
    gap: 1rem;

    > div {
      display: flex;
      flex-direction: column;
      gap: 0.225rem;

      strong {
        font-size: 1.25rem;
      }

      span {
        font-size: 0.875rem;

        > strong {
          font-size: 0.875rem;
        }
      }
    }
  }
`

export const ButtonAddToCart = styled.button`
  margin-left: auto;
  padding: 0.5rem;
  line-height: 0;
  border: none;
  outline: none;
  align-self: flex-start;
  border-radius: 6px;

  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme.COLORS.primary['900']};
    transition: background-color 150ms;
  }
`
