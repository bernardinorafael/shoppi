import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  max-width: 820px;
  min-height: 100vh;
  padding: 2rem 1rem;
  width: 100%;

  h1 {
    font-size: 2.5rem;
    margin: 2rem 0;
  }
`

export const ContentBox = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const ButtonAccordion = styled.button`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  svg {
    justify-self: flex-end;
  }

  > div {
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
`
