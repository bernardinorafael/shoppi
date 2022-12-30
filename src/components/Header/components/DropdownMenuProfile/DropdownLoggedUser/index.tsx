import { Sub, SubTrigger } from '@radix-ui/react-dropdown-menu'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { Bag, CaretRight, MapPinLine, SignOut } from 'phosphor-react'
import SubMenuAddress from '../components/SubMenuAddress'
import {
	Container,
	DropdownItem,
	DropdownSubTrigger,
	NavigationContainer
} from '../styles'
import {
	AvatarBox,
	AvatarFallback,
	AvatarImage,
	AvatarRoot,
	LogoutBox
} from './styles'

export default function DropdownLoggedUser() {
  const { data: session } = useSession()

  return (
    <Container align="end">
      <AvatarBox>
        <AvatarRoot>
          <AvatarImage src={session.user.avatar_url} alt={session.user.name} />
          <AvatarFallback />
        </AvatarRoot>

        <div>
          <strong>{session.user.name}</strong>
          <span>{session.user.email}</span>
        </div>
      </AvatarBox>

      <NavigationContainer>
        <Sub>
          <SubTrigger asChild>
            <DropdownSubTrigger>
              <MapPinLine weight="regular" size={24} />
              Meus endereços
              <CaretRight weight="bold" size={16} />
            </DropdownSubTrigger>
          </SubTrigger>

          <SubMenuAddress />
        </Sub>

        <Link href="#">
          <DropdownItem>
            <Bag weight="regular" size={24} />
            Meus pedidos
          </DropdownItem>
        </Link>
      </NavigationContainer>

      <LogoutBox>
        <button onClick={() => signOut()}>
          Sair
          <SignOut weight="regular" />
        </button>
      </LogoutBox>
    </Container>
  )
}
