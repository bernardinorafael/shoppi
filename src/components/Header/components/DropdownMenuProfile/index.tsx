import { Item, Sub, SubTrigger } from '@radix-ui/react-dropdown-menu'
import Link from 'next/link'
import { Bag, CaretRight, MapPinLine, UserCircle } from 'phosphor-react'
import SubMenuAddress from './components/SubMenuAddress'
import {
  Container,
  DropdownItem,
  DropdownSubTrigger,
  LoginLinkButton,
  NavigationContainer,
  RegisterLinkButton,
} from './styles'

export default function DropdownMenuProfile() {
  return (
    <Container align="end">
      <div>
        <Item asChild>
          <RegisterLinkButton href="/register">Registrar</RegisterLinkButton>
        </Item>

        <Item asChild>
          <LoginLinkButton href="/login">Entrar</LoginLinkButton>
        </Item>
      </div>

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

        <Link href="/my-account">
          <DropdownItem>
            <UserCircle weight="regular" size={24} />
            Meu perfil
          </DropdownItem>
        </Link>

        <Link href="#">
          <DropdownItem>
            <Bag weight="regular" size={24} />
            Meus pedidos
          </DropdownItem>
        </Link>
      </NavigationContainer>
    </Container>
  )
}
