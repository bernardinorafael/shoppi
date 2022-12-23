import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto 3rem;
  max-width: 1440px;
  padding: 1.5rem;
  gap: 2rem;
  width: 100%;

  section {
    display: flex;
    margin-right: auto;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;
  }
`
