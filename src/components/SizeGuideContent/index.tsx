import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { DialogContent, DialogOverlay, DialogClose, Content } from './styles'

export default function SizeGuideContent() {
  return (
    <Dialog.Portal>
      <DialogOverlay />

      <DialogContent>
        <DialogClose>
          <X size={20} />
        </DialogClose>

        <Content>
          <h1>MEDIDAS DO PRODUTO</h1>

          <p>
            Encontre o seu tamanho ideal utilizando as medidas do produto detalhadas
            abaixo. Para mais informações, consulte também a tabela de medidas e
            conversão.
          </p>

          <div>
            <table>
              <thead>
                <tr>
                  <th>Medição</th>
                  <th>21.6cm</th>
                  <th>22.5cm</th>
                  <th>23.8cm</th>
                  <th>24.2cm</th>
                  <th>24.6cm</th>
                  <th>25.0cm</th>
                  <th>25.9cm</th>
                  <th>28.8cm</th>
                  <th>30.1cm</th>
                  <th>31.0cm</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>BR</td>
                  <td>33</td>
                  <td>34</td>
                  <td>35</td>
                  <td>36</td>
                  <td>37</td>
                  <td>38</td>
                  <td>39</td>
                  <td>40</td>
                  <td>41</td>
                  <td>42</td>
                </tr>

                <tr>
                  <td>US/Homem</td>
                  <td>3.5</td>
                  <td>4.5</td>
                  <td>5.0</td>
                  <td>6.0</td>
                  <td>6.5</td>
                  <td>7.0</td>
                  <td>7.5</td>
                  <td>8.5</td>
                  <td>9.5</td>
                  <td>10</td>
                </tr>

                <tr>
                  <td>US/Mulher</td>
                  <td>5.5</td>
                  <td>5.5</td>
                  <td>6.0</td>
                  <td>7.0</td>
                  <td>7.5</td>
                  <td>8.0</td>
                  <td>8.5</td>
                  <td>9.5</td>
                  <td>10.5</td>
                  <td>11</td>
                </tr>
              </tbody>
            </table>
          </div>
          <span>Deslize horizontalmente para ver mais</span>

          <div>
            <strong>Encontrou tamanhos intermediários?</strong>

            <p>
              Se você encontrou um tamanho intermediário (exemplo 35,5), caso o 35 seja
              pequeno para você e o 36 seja grande, recomendamos que compre o tamanho
              intermediário.
            </p>
          </div>
        </Content>
      </DialogContent>
    </Dialog.Portal>
  )
}
