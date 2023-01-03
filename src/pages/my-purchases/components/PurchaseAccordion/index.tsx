import { ReactNode } from 'react'
import {
  AccordionContent,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger,
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
    <AccordionRoot defaultValue="first" type="single" collapsible>
      <AccordionItem value="first">
        <AccordionTrigger asChild>{children}</AccordionTrigger>

        <AccordionContent>{content}</AccordionContent>
      </AccordionItem>
    </AccordionRoot>
  )
}
