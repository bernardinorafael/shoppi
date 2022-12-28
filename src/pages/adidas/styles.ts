import styled from 'styled-components'

export const AdidasContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  > section:first-child {
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
  padding: 2rem 0;
  grid-template-columns: repeat(5, 250px);
  gap: 1rem;
  margin: 0 auto;
`
