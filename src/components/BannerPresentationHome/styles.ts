import styled from 'styled-components'

export const Container = styled.div`
  height: 30rem;
  background-color: ${({ theme }) => theme.COLORS.primary[1000]};
  display: flex;
  align-items: center;
  position: relative;

  section {
    width: 100%;
    position: relative;

    > div {
      position: absolute;
      left: 100px;
      top: 50%;
      transform: translateY(-50%);
      z-index: 100;
      color: ${({ theme }) => theme.COLORS.primary[1200]};
      display: flex;
      flex-direction: column;

      span {
        font-size: 2rem;
      }

      strong {
        font-size: 3rem;
      }

      a {
        align-items: center;
        align-self: flex-start;
        background-color: ${({ theme }) => theme.COLORS.secondary[800]};
        display: flex;
        font-size: 1.25rem;
        font-weight: 600;
        justify-content: center;
        margin-top: 1.5rem;
        padding: 0.875rem;

        &:hover {
          background-color: ${({ theme }) => theme.COLORS.secondary[700]};
          transition: background-color 200ms;
        }
      }
    }

    > img {
      object-fit: cover;
      box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
        rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
        rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
    }
  }
`

const ButtonCaretSlide = styled.button`
  background-color: transparent;
  border: none;
  line-height: 0;
  outline: none;
  padding: 0.5rem;
  position: absolute;
  cursor: default;
  color: ${({ theme }) => theme.COLORS.primary[1200]};

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.primary[100]};
    transition: background-color 200ms;
  }
`

export const ButtonCaretSlideLeft = styled(ButtonCaretSlide)`
  left: 5px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
	border-radius: 8px;
`

export const ButtonCaretSlideRight = styled(ButtonCaretSlide)`
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
	border-radius: 8px;
`
