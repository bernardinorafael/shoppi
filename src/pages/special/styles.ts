import styled from 'styled-components'

export const SpecialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  section {
    height: 400px;
    position: relative;
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
  gap: 1rem;
  grid-template-columns: repeat(5, 250px);
  margin: 0 auto;
  padding: 4rem 0;
`

export const BannerBox = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.COLORS.secondary['900']};
  color: ${(props) => props.theme.COLORS.primary['1200']};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  padding: 2rem;

  strong {
    font-size: 3rem;
    text-transform: uppercase;
  }

  em {
    font-size: 1.15rem;
    font-weight: 400;
    max-width: 60%;
    text-align: center;
  }
`
