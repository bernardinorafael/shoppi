import styled from 'styled-components'

export const SpecialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  section {
    position: relative;
    height: 400px;
    width: 100%;
    background-color: radial-gradient(
      circle,
      rgb(204 204 204) 20%,
      rgb(0 31 255 / 0%) 66%
    );

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
