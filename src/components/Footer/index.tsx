import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowUDownLeft,
  ArrowUpRight,
  CreditCard,
  FacebookLogo,
  Headset,
  InstagramLogo,
  Truck,
  TwitterLogo,
  YoutubeLogo,
} from 'phosphor-react'
import Tooltip from '../../primitives/Tooltip'

import { Container, FooterTopicContainer } from './styles'

export default function Footer() {
  return (
    <Container>
      <section>
        <Link href="#">
          <Truck weight="regular" size={32} />
          <span>Frete grátis</span>
        </Link>

        <Link href="#">
          <CreditCard weight="regular" size={32} />
          <span>Pagamento seguro</span>
        </Link>

        <Link href="#">
          <ArrowUDownLeft weight="regular" size={32} />
          <span>Devolução gratuita</span>
        </Link>

        <Link href="#">
          <Headset weight="regular" size={32} />
          <span>Precisa de ajuda?</span>
        </Link>
      </section>

      <section>
        <div>
          <FooterTopicContainer>
            <strong>Transparência</strong>

            <div>
              <span>
                Política de privacidade
                <ArrowUpRight />
              </span>
              <span>
                Política de compliance
                <ArrowUpRight />
              </span>
              <span>
                Política de Segurança
                <ArrowUpRight />
              </span>
              <span>
                Contratos
                <ArrowUpRight />
              </span>
              <span>
                LGPD
                <ArrowUpRight />
              </span>
            </div>
          </FooterTopicContainer>

          <FooterTopicContainer>
            <strong>Ouvidoria</strong>

            <div>
              <span>0800 998 0098</span>
              <span>ouvidoria@shoppi.com.br</span>
              <span>Atendimento das 9h às 18h (dias úteis)</span>
            </div>
          </FooterTopicContainer>

          <FooterTopicContainer>
            <strong>Pagamentos</strong>

            <div style={{ flexDirection: 'row' }}>
              <Tooltip
                align="start"
                alignOffset={40}
                render="Boleto bancário"
                side="bottom"
                sideOffset={0}
              >
                <Image height={39} width={50} src="/icons/boleto.svg" alt="" />
              </Tooltip>

              <Tooltip
                align="start"
                alignOffset={40}
                render="Master"
                side="bottom"
                sideOffset={0}
              >
                <Image height={39} width={50} src="/icons/mastercard.svg" alt="" />
              </Tooltip>

              <Tooltip
                align="start"
                alignOffset={40}
                render="Visa"
                side="bottom"
                sideOffset={0}
              >
                <Image height={39} width={50} src="/icons/visa.svg" alt="" />
              </Tooltip>

              <Tooltip
                align="start"
                alignOffset={40}
                render="Stripe"
                side="bottom"
                sideOffset={0}
              >
                <Image height={39} width={50} src="/icons/stripe.svg" alt="" />
              </Tooltip>
            </div>
          </FooterTopicContainer>

          <FooterTopicContainer>
            <strong>Redes sociais</strong>

            <div style={{ flexDirection: 'row' }}>
              <Tooltip render="Facebook">
                <Link href="#">
                  <FacebookLogo weight="regular" size={32} />
                </Link>
              </Tooltip>

              <Tooltip render="Twitter">
                <Link href="#">
                  <TwitterLogo weight="regular" size={32} />
                </Link>
              </Tooltip>

              <Tooltip render="Instagram">
                <Link href="#">
                  <InstagramLogo weight="regular" size={32} />
                </Link>
              </Tooltip>

              <Tooltip render="YouTube">
                <Link href="#">
                  <YoutubeLogo weight="regular" size={32} />
                </Link>
              </Tooltip>
            </div>
          </FooterTopicContainer>
        </div>
      </section>
    </Container>
  )
}
