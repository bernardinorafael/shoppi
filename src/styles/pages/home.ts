import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const BannerConverse = styled.div`
  height: 30rem;
  background-color: ${({ theme }) => theme.COLORS.primary[1000]};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  div {
    position: absolute;
    z-index: 1;
    right: 5rem;
    top: 50%;
    transform: translateY(-50%);
    padding: 10rem;

    img {
      object-fit: contain;
    }
  }

  > img {
    object-fit: cover;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
      rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
      rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  }
`

export const BannerOffers = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.primary[1000]};
  display: flex;
  height: 30rem;
  justify-content: center;
  position: relative;

  img {
    object-fit: cover;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
      rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
      rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  }
`

export const PriceContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.425rem;

    > span:first-child {
      color: ${({ theme }) => theme.COLORS.red[400]};
      font-size: 0.725rem;
      font-weight: 600;
      text-decoration: line-through;
    }

    strong {
      display: flex;
      line-height: 0.7;

      > span {
        align-self: flex-start;
        font-size: 0.725rem;
      }
    }

    > span:last-child {
      font-size: 0.725rem;
      font-weight: 500;
    }
  }
`

export const ButtonContainer = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;

  button {
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.secondary[300]};
    border: none;
    display: flex;
    font-size: 1rem;
    font-weight: 600;
    height: 3rem;
    justify-content: center;
    line-height: 0;
    outline: none;
    width: 3rem;

    &:hover {
      background-color: ${({ theme }) => theme.COLORS.secondary[400]};
      transition: background-color 200ms;
    }
  }
`

export const BannerContainer = styled.div`
  height: 85vh;
  padding: 1rem;
  width: 90vw;

  section {
    align-items: center;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    display: flex;
    justify-content: center;
    position: relative;

    &:hover {
      > div {
        opacity: 1;
        transition: all 200ms ease-out;
      }
    }

    strong {
      font-size: 3rem;
    }

    img {
      object-fit: cover;
    }

    > div {
      align-items: center;
      backdrop-filter: blur(7px) saturate(148%);
      background-color: rgba(0, 0, 0, 0.4);
      box-shadow: rgb(0, 0, 0, 0.5) 0px 20px 30px -10px;
      color: ${({ theme }) => theme.COLORS.white};
      display: flex;
      flex-direction: column;
      max-width: 600px;
      opacity: 0;
      padding: 1rem;
      position: absolute;
      right: 1rem;
      top: 1rem;

      > div {
        align-items: center;
        display: flex;
        justify-content: space-between;
        margin-top: 0.5rem;
        padding: 0.5rem;
        width: 100%;
      }

      a {
        align-items: center;
        align-self: flex-end;
        border-bottom: 1px solid transparent;
        display: flex;
        font-size: 1rem;
        font-weight: 600;
        gap: 0.225rem;

        &:hover {
          border-bottom: 1px solid ${({ theme }) => theme.COLORS.white};
        }
      }
    }
  }
`
