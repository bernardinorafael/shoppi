import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1rem 0 0;
  width: 100%;

  > section {
    background: ${({ theme }) => theme.COLORS.primary['800']};
    border-top: 1px solid ${(props) => props.theme.COLORS.primary['500']};
    display: flex;
    gap: 0.5rem;
    justify-content: flex-end;
    padding: 0.5rem;

    button {
      background-color: transparent;
      border-radius: 6px;
      border: none;
      font-weight: 600;
      outline: none;
      padding: 0.5rem;

      &:hover {
        background-color: ${(props) => props.theme.COLORS.primary['900']};
        transition: background-color 150ms;
      }
    }
  }
`

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.5rem;

  & + & {
    border-top: 1px solid ${(props) => props.theme.COLORS.primary['500']};
  }

  section:first-child {
    display: flex;
    gap: 1rem;
    width: 100%;

    img {
      border: 1px solid ${({ theme }) => theme.COLORS.primary['500']};
      border-radius: 8px;

      &:active {
        transform: scale(1.04);
      }
    }

    > div {
      display: flex;
      flex-direction: column;
      gap: 0.225rem;

      > div {
        display: flex;
        gap: 1rem;
      }

      strong {
        font-size: 1.25rem;

        &:hover {
          text-decoration: underline;
        }
      }

      span {
        font-size: 0.875rem;
        font-weight: 600;

        > strong {
          font-size: 0.875rem;
        }
      }
    }

    > div:last-child {
      margin-left: auto;
    }
  }
`
