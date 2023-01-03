import styled from 'styled-components'
import * as Avatar from '@radix-ui/react-avatar'

export const LogoutBox = styled.div`
  border-top: 1px solid ${({ theme }) => theme.COLORS.primary['800']};
  padding: 0.5rem 1rem;

  button {
    align-items: center;
    background-color: transparent;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.COLORS.primary['700']};
    display: flex;
    font-weight: 600;
    gap: 0.225rem;
    justify-content: center;
    outline: none;
    padding: 0.225rem 0.5rem;

    &:hover {
      border: 1px solid ${({ theme }) => theme.COLORS.primary['500']};
      transition: border-color 200ms;
    }
  }
`

export const AvatarBox = styled.div`
  align-items: center;
  display: flex;
  padding: 0.5rem;

  strong {
    font-size: 1.25rem;
  }
`

export const AvatarRoot = styled(Avatar.Root)`
  align-items: center;
  border-radius: 100%;
  display: inline-flex;
  height: 40px;
  justify-content: center;
  overflow: hidden;
  user-select: none;
  vertical-align: middle;
  width: 40px;
`

export const AvatarImage = styled(Avatar.Image)`
  border-radius: inherit;
  height: 100%;
  object-fit: cover;
  width: 100%;
`

export const AvatarFallback = styled(Avatar.Fallback)`
  align-items: center;
  color: var(--violet11);
  display: flex;
  font-size: 1rem;
  font-weight: 600;
  height: 100%;
  justify-content: center;
  line-height: 1;
  width: 100%;
`
