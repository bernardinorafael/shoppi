import Head from 'next/head'
import Link from 'next/link'
import { CaretRight, TrashSimple } from 'phosphor-react'
import HeaderInternalPageNavigation from '../../../components/HeaderInternalPageNavigation'
import Tooltip from '../../../primitives/Tooltip'
import {
  AddressContainer,
  ButtonNewAddress,
  ButtonsContainer,
  Container,
  Content,
} from '../../../styles/pages/address'

export default function Address() {
  return (
    <>
      <Head>
        <title>Meus Endereços | Shoppi</title>
      </Head>

      <Container>
        <HeaderInternalPageNavigation current="Endereços">
          <Link href="/">Início</Link>
          <CaretRight />
          <Link href="/my-account">Minha conta</Link>
          <CaretRight />
        </HeaderInternalPageNavigation>

        <h1>Seus endereços</h1>

        <Content>
          <AddressContainer>
            <header>
              <strong>Casa</strong>
              <em>Endereço padrão</em>
            </header>

            <div>
              <span>Rua Marechal Humberto A.C. Branco, 394</span>
              <span>Apto 04</span>
              <span>Campo dos Velhos</span>
              <span>Sobral, CE - 62030173</span>
            </div>

            <ButtonsContainer>
              <button>Tornar endereço padrão</button>

              <Tooltip align="center" sideOffset={0} render="Apagar">
                <button>
                  <TrashSimple weight="bold" size={20} />
                </button>
              </Tooltip>
            </ButtonsContainer>
          </AddressContainer>

          <AddressContainer>
            <header>
              <strong>Trabalho</strong>
              <em>Endereço padrão</em>
            </header>

            <div>
              <span>Rodovia José Jovelino Costa, 1220</span>
              <span>Casa</span>
              <span>São Cristovão</span>
              <span>Maracajá, SC - 88915000</span>
            </div>

            <ButtonsContainer>
              <button>Tornar endereço padrão</button>

              <Tooltip align="center" sideOffset={0} render="Apagar">
                <button>
                  <TrashSimple weight="bold" size={20} />
                </button>
              </Tooltip>
            </ButtonsContainer>
          </AddressContainer>

          <AddressContainer>
            <header>
              <strong>Tia Cris</strong>
              <em>Endereço padrão</em>
            </header>

            <div>
              <span>Rodovia Governador Jorge Lacerda, 1730</span>
              <span>Próximo ao CTG</span>
              <span>Verdinho</span>
              <span>Criciúma, SC - 8814551</span>
            </div>

            <ButtonsContainer>
              <button>Tornar endereço padrão</button>

              <Tooltip align="center" sideOffset={0} render="Apagar">
                <button>
                  <TrashSimple weight="bold" size={20} />
                </button>
              </Tooltip>
            </ButtonsContainer>
          </AddressContainer>
        </Content>
        <ButtonNewAddress href="/my-account/address/new-address">
          Adicionar novo endereço
        </ButtonNewAddress>
      </Container>
    </>
  )
}
