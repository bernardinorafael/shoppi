import * as Select from '@radix-ui/react-select'
import { SelectContent, SelectItem, SelectViewport } from './styles'

export default function SelectAddress() {
  return (
    <Select.Portal>
      <SelectContent>
        <SelectViewport>
          <SelectItem value="home-address">
            <Select.ItemText asChild>
              <strong>
                Casa -{' '}
                <span>
                  Rua Marechal Humberto A.C. Branco, 394 - Campo dos Velhos, Sobral-CE
                </span>
              </strong>
            </Select.ItemText>
          </SelectItem>

          <SelectItem value="work-address">
            <Select.ItemText asChild>
              <strong>
                Trabalho -{' '}
                <span>
                  Rua Marechal Humberto A.C. Branco, 394 - Campo dos Velhos, Sobral-CE
                </span>
              </strong>
            </Select.ItemText>
          </SelectItem>

          <SelectItem value="personal-address">
            <Select.ItemText asChild>
              <strong>
                Criscia -{' '}
                <span>
                  Rua Marechal Humberto A.C. Branco, 394 - Campo dos Velhos, Sobral-CE
                </span>
              </strong>
            </Select.ItemText>
          </SelectItem>
        </SelectViewport>
      </SelectContent>
    </Select.Portal>
  )
}
