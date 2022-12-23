import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;

  strong {
    font-size: 2rem;
  }

  > div:last-child {
    align-items: center;
    align-self: flex-end;
    display: flex;
    gap: 0.5rem;

    a {
      border-bottom: 1px solid transparent;
      border-top: 1px solid transparent;
      font-size: 1.25rem;
      font-weight: 600;
      margin-right: 1rem;
      padding-bottom: 0.125rem;

      &:hover {
        border-bottom: 1px solid ${({ theme }) => theme.COLORS.primary[100]};
      }
    }
  }
`

export const ButtonCaretSlide = styled.button`
  background-color: transparent;
  border: none;
  line-height: 0;
  outline: none;
  padding: 0.5rem;
  cursor: default;

  &:active {
    transform: scale(1.1);
  }

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.primary[900]};
    transition: background-color 200ms;
  }
`
