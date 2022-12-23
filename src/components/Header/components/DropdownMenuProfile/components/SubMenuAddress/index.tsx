import { Portal } from '@radix-ui/react-dropdown-menu'
import Link from 'next/link'
import { PencilLine, UserList } from 'phosphor-react'
import { DropdownItem, DropdownSubContent } from './styles'

export default function SubMenuAddress() {
  return (
    <Portal>
      <DropdownSubContent sideOffset={-10}>
        <div>
          <Link href="/my-account/address">
            <DropdownItem>
              <PencilLine weight="regular" size={24} />
              Editar endereços
            </DropdownItem>
          </Link>
          <Link href="/my-account/address/new-address">
            <DropdownItem>
              <UserList weight="regular" size={24} />
              Criar novo endereço
            </DropdownItem>
          </Link>
        </div>
      </DropdownSubContent>
    </Portal>
  )
}
