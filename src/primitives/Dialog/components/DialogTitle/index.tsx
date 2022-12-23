import { Title } from '@radix-ui/react-dialog'

type DialogTitleProps = {
  children: React.ReactNode
}

export default function DialogTitle({ children }: DialogTitleProps) {
  return <Title asChild>{children}</Title>
}
