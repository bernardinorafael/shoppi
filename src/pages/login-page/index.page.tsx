import {
  ButtonLogin,
  Container,
  ContentBox,
  FormBox,
  Input,
  SocialLoginBox,
} from './styles'
import Head from 'next/head'
import Image from 'next/image'
import { signIn } from 'next-auth/react'

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Login | Shoppi</title>
      </Head>

      <Container>
        <h1>Faça login para continuar</h1>

        <ContentBox>
          <SocialLoginBox>
            <span>Faça login com o Google</span>
            <ButtonLogin onClick={() => signIn('google')}>
              <Image
                height={20}
                width={20}
                src="/google-icon.svg"
                alt="ícone do google"
              />
              Google
            </ButtonLogin>
          </SocialLoginBox>

          <FormBox>
            <label>
              Digite seu nome
              <Input placeholder="seu-email@exemplo.com" type="text" disabled />
            </label>

            <label>
              Digite uma senha forte
              <Input placeholder="************" type="password" disabled />
            </label>

            <button type="submit" disabled>
              Entrar
            </button>
          </FormBox>
        </ContentBox>
      </Container>
    </>
  )
}
