import styled from 'styled-components'

export const Container = styled.div`
  padding: 1rem;
  width: 100%;
  max-width: 100%;
  margin: 1rem auto;
  gap: 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const ContentBox = styled.main`
  background-color: ${({ theme }) => theme.COLORS.primary['800']};
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 2rem;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px,
    rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
  margin: 0 auto;
  flex-direction: column;
  max-width: 520px;
  padding: 1rem;
  width: 100%;

  strong {
    font-size: 1.25rem;
  }
`

export const FormBox = styled.form`
  gap: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  label {
    font-weight: 600;
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0.225rem;
  }

  button[type='submit'] {
    height: 2.5rem;
    width: 100%;
    border-radius: 6px;
    border: none;
    outline: none;
    font-weight: 600;
    font-size: 1rem;
    color: ${({ theme }) => theme.COLORS.primary['1200']};
    background-color: ${({ theme }) => theme.COLORS.red['200']};

    &:focus {
      box-shadow: 0 0 0 2px ${({ theme }) => theme.COLORS.primary['100']};
    }

    &:disabled {
      opacity: 0.8;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background-color: ${({ theme }) => theme.COLORS.red['300']};
      transition: background-color 200ms;
    }
  }
`

export const Input = styled.input`
  height: 2.5rem;
  background-color: ${({ theme }) => theme.COLORS.primary['600']};
  border-radius: 6px;
  color: ${({ theme }) => theme.COLORS.primary['100']};
  font-weight: 600;
  border: none;
  outline: none;
  padding: 0 0.5rem;

  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.COLORS.secondary['400']};
  }
`

export const SocialLoginBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 1rem;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.primary['400']};
  padding-bottom: 1rem;

  span {
    font-size: 1rem;
    font-weight: 600;
  }
`

export const ButtonLogin = styled.button`
  height: 2.5rem;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.COLORS.primary['500']};
  outline: none;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: transparent;
  font-weight: 600;
  font-size: 1rem;
  color: ${({ theme }) => theme.COLORS.primary['100']};

  &:hover {
    border: 1px solid ${({ theme }) => theme.COLORS.primary['400']};
    transition: border-color 200ms;
  }
`
