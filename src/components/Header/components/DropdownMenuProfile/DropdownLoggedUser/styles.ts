import styled from 'styled-components'
import * as Avatar from '@radix-ui/react-avatar'

export const LogoutBox = styled.div`
  border-top: 1px solid ${({ theme }) => theme.COLORS.primary['800']};
  padding: 0.5rem 1rem;

  button {
    background-color: transparent;
    font-weight: 600;
    padding: 0.225rem 0.5rem;
    display: flex;
    border: 1px solid ${({ theme }) => theme.COLORS.primary['700']};
    border-radius: 6px;
    outline: none;
    align-items: center;
    justify-content: center;
    gap: 0.225rem;

    &:hover {
      border: 1px solid ${({ theme }) => theme.COLORS.primary['500']};
      transition: border-color 200ms;
    }
  }
`

export const AvatarBox = styled.div`
  padding: 0.5rem;
  display: flex;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;

    strong {
      font-size: 1rem;
    }

    span {
      font-size: 0.775rem;
    }
  }
`

export const AvatarRoot = styled(Avatar.Root)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  overflow: hidden;
  user-select: none;
  width: 50px;
  height: 50px;
  border-radius: 100%;
`

export const AvatarImage = styled(Avatar.Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`

export const AvatarFallback = styled(Avatar.Fallback)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--violet11);
  font-size: 1rem;
  line-height: 1;
  font-weight: 600;
`
