import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  div {
    display: flex;
    flex-direction: column;
    gap: 0.225rem;
    text-align: left;

    strong {
      text-transform: uppercase;

      &:last-child {
        text-transform: capitalize;
        font-weight: 500;
      }
    }

    span {
      font-size: 0.775rem;
      font-weight: 500;
    }
  }

  svg {
    justify-self: flex-end;
  }
`
