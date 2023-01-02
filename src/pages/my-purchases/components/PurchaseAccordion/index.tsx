import { ReactNode } from 'react'
import {
  AccordionItem,
  AccordionRoot,
  AccordionTrigger,
  AccordionContent,
} from './styles'

type PurchaseAccordionProps = {
  children: ReactNode
  content: ReactNode
}

export default function PurchaseAccordion({
  children,
  content,
}: PurchaseAccordionProps) {
  return (
    <AccordionRoot type="single" collapsible>
      <AccordionItem value="first">
        <AccordionTrigger asChild>{children}</AccordionTrigger>

        <AccordionContent>{content}</AccordionContent>
      </AccordionItem>
    </AccordionRoot>
  )
}
