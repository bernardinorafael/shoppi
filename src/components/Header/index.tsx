import * as Dialog from '@radix-ui/react-dialog'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { CaretDown, ShoppingCartSimple } from 'phosphor-react'
import { useShoppingCart } from 'use-shopping-cart'
import DropdownMenu from '../../primitives/DropdownMenu'
import DialogCartContent from './components/DialogCartContent'
import DropdownMenuProfile from './components/DropdownMenuProfile'
import DropdownLoggedUser from './components/DropdownMenuProfile/DropdownLoggedUser'
import {
  ButtonAvatarLogged,
  ButtonMyProfile,
  ButtonNavbar,
  Container,
  NavbarBox,
} from './styles'

export default function Header() {
  const { status, data: session } = useSession()
  const { cartCount } = useShoppingCart()

  const isButtonCartDisable = cartCount <= 0
  const isUserAuthenticated = status === 'authenticated'

  // const name = session.user.name

  console.log(name)

  return (
    <Container>
      <section>
        <div>
          <Link href="/">Shoppi</Link>
        </div>

        <NavbarBox>
          <Link href="/adidas">Adidas</Link>
          <Link href="/converse">Converse</Link>
          <Link href="/puma">Puma</Link>
          <Link href="/special">Especial</Link>
        </NavbarBox>

        <div>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <ButtonNavbar disabled={isButtonCartDisable}>
                <ShoppingCartSimple size={28} weight="regular" />
                {cartCount >= 0 && <div>{cartCount}</div>}
              </ButtonNavbar>
            </Dialog.Trigger>

            <DialogCartContent />
          </Dialog.Root>

          <DropdownMenu
            modal={false}
            trigger={
              isUserAuthenticated ? (
                <ButtonAvatarLogged>
                  <Image
                    alt={session.user.name}
                    height={20}
                    src={session.user.image}
                    width={20}
                  />
                  <strong>{session.user.name.split(' ')[0]}</strong>
                  <CaretDown size={16} weight="regular" />
                </ButtonAvatarLogged>
              ) : (
                <ButtonMyProfile>
                  Minha conta
                  <CaretDown size={16} weight="regular" />
                </ButtonMyProfile>
              )
            }
          >
            {!isUserAuthenticated ? (
              <DropdownMenuProfile />
            ) : (
              <DropdownLoggedUser />
            )}
          </DropdownMenu>
        </div>
      </section>
    </Container>
  )
}
