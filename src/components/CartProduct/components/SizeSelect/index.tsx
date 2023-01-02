import * as Select from '@radix-ui/react-select'
import { CaretDown, Check } from 'phosphor-react'
import { Content, Item, ItemSelected, Root, Trigger, Viewport } from './styles'

type SizeSelectProps = {
  defaultSize: string
  sizes: string
}

export default function SizeSelect({ defaultSize, sizes }: SizeSelectProps) {
  return (
    <Root>
      <Trigger>
        <Select.Value placeholder={`${defaultSize}`} />
        <CaretDown weight="bold" size={16} />
      </Trigger>

      <Select.Portal>
        <Content>
          <Viewport>
            {sizes.split(',').map((size, i) => {
              return (
                <Item key={i} value={size}>
                  <ItemSelected>
                    <Check size={16} weight="bold" />
                  </ItemSelected>
                  <Select.ItemText>{size}</Select.ItemText>
                </Item>
              )
            })}
          </Viewport>
        </Content>
      </Select.Portal>
    </Root>
  )
}
