import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;

  button {
    height: 1.5rem;
    aspect-ratio: 1 / 1;
    border-radius: 6px;
    line-height: 0;
    border: none;
    outline: none;
    background-color: ${({ theme }) => theme.COLORS.primary['600']};
    cursor: default;

    &:not(:disabled):active {
      transform: scale(1.1);
    }

    &:disabled {
      opacity: 0.8;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background-color: ${({ theme }) => theme.COLORS.primary['500']};
      transition: background-color 100ms;
    }
  }
`
