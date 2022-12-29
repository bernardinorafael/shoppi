import styled from 'styled-components'

export const Container = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 456px;
  justify-content: center;
  margin: 0 auto;

  h1 {
    font-size: 3rem;
    line-height: 1.6;
  }

  p {
    font-size: 1.5rem;
    font-weight: 500;
    
    strong {
      text-transform: uppercase;
    }
  }

  a {
    align-items: center;
    border-bottom: 1px solid transparent;
    display: flex;
    font-size: 1rem;
    font-weight: 600;
    gap: 0.5rem;

    &:hover {
      border-bottom: 1px solid #000;
    }
  }
`
