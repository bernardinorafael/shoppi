import * as Dialog from '@radix-ui/react-dialog'
import Link from 'next/link'
import { CaretDown, HeartStraight, MagnifyingGlass, ShoppingCart } from 'phosphor-react'
import React from 'react'
import DropdownMenu from '../../primitives/DropdownMenu'
import Popover from '../../primitives/Popover'
import Tooltip from '../../primitives/Tooltip'
import DialogCartContent from './components/DialogCartContent'
import DropdownMenuProfile from './components/DropdownMenuProfile'
import PopoverNavigateContent from './components/PopoverNavigateContent'
import PopoverWishListContent from './components/PopoverWishListContent'
import {
  ButtonMyProfile,
  ButtonNavbar,
  Container,
  SearchButton,
  SearchFormContainer,
} from './styles'

export default function Header() {
  const [isCartDialogOpen, setIsCartDialogOpen] = React.useState(false)

  function onCloseCartDialog() {
    setIsCartDialogOpen(!isCartDialogOpen)
  }

  return (
    <Container>
      <section>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link href="/">Shoppi</Link>
          <SearchFormContainer>
            <Popover
              side="bottom"
              align="center"
              onOpenAutoFocus
              sideOffset={10}
              render={<PopoverNavigateContent />}
            >
              <input placeholder="Procurar produtos e marcas" type="text" />
            </Popover>
            <Tooltip render="Procurar">
              <SearchButton type="button">
                <MagnifyingGlass size={24} />
              </SearchButton>
            </Tooltip>
          </SearchFormContainer>
        </div>

        <nav>
          <Link href="/">Homens</Link>
          <Link href="/">Mulheres</Link>
          <Link href="/">Promoções</Link>
          <Link href="/special">Especial</Link>
        </nav>

        <div>
          <Popover align="center" render={<PopoverWishListContent />}>
            <ButtonNavbar>
              <HeartStraight size={28} weight="regular" />
            </ButtonNavbar>
          </Popover>

          <Dialog.Root open={isCartDialogOpen} onOpenChange={onCloseCartDialog}>
            <Dialog.Trigger asChild>
              <ButtonNavbar>
                <ShoppingCart size={28} weight="regular" />
              </ButtonNavbar>
            </Dialog.Trigger>

            <DialogCartContent onCloseCartDialog={onCloseCartDialog} />
          </Dialog.Root>

          <DropdownMenu
            modal={false}
            trigger={
              <ButtonMyProfile>
                Minha conta
                <CaretDown size={16} weight="regular" />
              </ButtonMyProfile>
            }
          >
            <DropdownMenuProfile />
          </DropdownMenu>
        </div>
      </section>
    </Container>
  )
}
