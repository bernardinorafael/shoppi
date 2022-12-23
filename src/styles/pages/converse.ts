import styled from 'styled-components'

export const ConverseContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  section {
    position: relative;
    height: 600px;
    width: 100%;

    img {
      object-fit: cover;
    }
  }
`

export const ProductsContainer = styled.div`
  display: grid;
  padding: 4rem 0;
  grid-template-columns: repeat(5, 250px);
  gap: 1rem;
  margin: 0 auto;
`
