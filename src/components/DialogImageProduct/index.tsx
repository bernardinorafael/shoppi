import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import { X } from 'phosphor-react'
import { DialogContent, DialogOverlay, DialogClose } from './styles'

type DialogImageProductProps = {
  src: string
}

export default function DialogImageProduct({ src }: DialogImageProductProps) {
  return (
    <Dialog.Portal>
      <DialogOverlay />

      <DialogContent>
        <DialogClose>
          <X weight="bold" size={26} />
        </DialogClose>

        <Image height={1000} width={720} src={src} alt="" />
      </DialogContent>
    </Dialog.Portal>
  )
}
