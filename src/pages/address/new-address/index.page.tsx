import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { GetServerSideProps } from 'next'
import { unstable_getServerSession } from 'next-auth'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { CaretRight, CircleNotch, House, SuitcaseSimple } from 'phosphor-react'
import { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import HeaderInternalPageNavigation from '../../../components/HeaderInternalPageNavigation'
import {
	normalizeCepNumber,
	normalizeFoneNumber
} from '../../../helpers/input-mask'
import {
	REGEX_CEP_VALIDATION,
	REGEX_FONE_VALIDATION
} from '../../../helpers/regex'
import { authOptions } from '../../api/auth/[...nextauth].api'
import {
	ButtonCreateNewAddress,
	Container,
	FormContainer,
	Input,
	InputContainer,
	InputDisabled,
	RadioItem,
	RadioRoot
} from './styles'

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await unstable_getServerSession(req, res, authOptions)

  if (!session) {
    return {
      redirect: {
        destination: '/login-page',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}

type AddressResponse = {
  bairro: string
  cep: string
  localidade: string
  logradouro: string
  uf: string
}

const newAddressValidationSchema = z.object({
  zip: z
    .string({ required_error: 'CEP é um campo obrigatório' })
    .regex(new RegExp(REGEX_CEP_VALIDATION), {
      message: 'Precisamos de um CEP válido',
    }),
  city: z.string(),
  state: z.string(),
  fone: z
    .string({ required_error: 'Telefone é um campo obrigatório' })
    .regex(
      new RegExp(REGEX_FONE_VALIDATION),
      'Precisamos de um telefone válido',
    ),
  client: z.string().min(1, 'Dê um nome ao seu endereço'),
  street: z.string().min(1, 'Endereço é um campo obrigatório'),
  number: z
    .string({ required_error: 'Número é um campo obrigatório' })
    .min(1, 'Número é um campo obrigatório')
    .max(8, 'Máximo permitido: 8'),
  district: z.string().min(1, 'Bairro é um campo obrigatório'),
  complement: z.string().optional(),
  type: z.enum(['work', 'house'], { required_error: 'Campo obrigatório' }),
})

type NewAddressForm = z.infer<typeof newAddressValidationSchema>

export default function NewAddress() {
  const router = useRouter()
  const {
    control,
    handleSubmit,
    register,
    setFocus,
    setValue,
    watch,
    formState: { isSubmitting, errors },
  } = useForm<NewAddressForm>({
    resolver: zodResolver(newAddressValidationSchema),
  })

  async function handleCreateNewAddress(data: NewAddressForm) {
    try {
      await axios.post('/api/create-address', {
        city: data.city,
        client: data.client,
        complement: data.complement,
        district: data.district,
        fone: data.fone,
        number: data.number,
        state: data.state,
        street: data.street,
        type: data.type,
        zip: data.zip,
      })

      await router.push('/my-account/address')
    } catch (err) {
      console.error(err)
    }
  }

  async function handleGetCepAddress(cep: string) {
    try {
      const response = await axios.get<AddressResponse>(
        `https://viacep.com.br/ws/${cep}/json/`,
      )

      setValue('city', response.data.localidade)
      setValue('district', response.data.bairro)
      setValue('state', response.data.uf)
      setValue('street', response.data.logradouro)

      setFocus('number')
    } catch (err) {
      console.error(err)
    }
  }

  function replaceInputValue(value: string | undefined) {
    if (!value) return
    return value.replace(/\D/g, '')
  }

  const zip = watch('zip')
  const number = watch('number')
  const fone = watch('fone')

  useEffect(() => {
    setValue('zip', normalizeCepNumber(zip))
    setValue('number', replaceInputValue(number))
    setValue('fone', normalizeFoneNumber(fone))
  }, [zip, number, fone, setValue])

  return (
    <>
      <Head>
        <title>Cadastrar endereço | Shoppi</title>
      </Head>

      <Container>
        <HeaderInternalPageNavigation current="Novo endereço">
          <Link href="/">Início</Link>
          <CaretRight />
          <Link href="/">Minha conta</Link>
          <CaretRight />
          <Link href="/my-account/address">Endereços</Link>
          <CaretRight />
        </HeaderInternalPageNavigation>

        <div>
          <h1>Adicione um novo endereço</h1>
          <p>Campos com * indicam obrigatório</p>
        </div>

        <FormContainer onSubmit={handleSubmit(handleCreateNewAddress)}>
          <InputContainer>
            <label htmlFor="address-name">Nome completo*</label>
            <Input
              error={!!errors.client}
              id="address-name"
              type="text"
              placeholder="João da Silva"
              {...register('client')}
            />
            <span>{errors.client?.message}</span>
          </InputContainer>

          <InputContainer>
            <label htmlFor="fone">Telefone*</label>
            <Input
              error={!!errors.fone}
              id="fone"
              type="tel"
              maxLength={15}
              placeholder="(99) 99999-9999"
              {...register('fone')}
            />
            <span>{errors.fone?.message}</span>
          </InputContainer>

          <InputContainer>
            <label htmlFor="zip">CEP*</label>
            <Input
              error={!!errors.zip}
              id="zip"
              type="text"
              maxLength={9}
              placeholder="88915-000"
              {...register('zip')}
              onBlur={() => handleGetCepAddress(zip)}
            />
            <span>{errors.zip?.message}</span>
          </InputContainer>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
            }}
          >
            <InputContainer>
              <label htmlFor="city'">Cidade*</label>
              <InputDisabled
                disabled
                id="city'"
                type="text"
                {...register('city')}
              />
            </InputContainer>

            <InputContainer>
              <label htmlFor="state">Estado*</label>
              <InputDisabled
                disabled
                id="state"
                type="text"
                {...register('state')}
              />
            </InputContainer>
          </div>

          <InputContainer>
            <label htmlFor="street">Endereço*</label>
            <Input
              error={!!errors.street}
              placeholder="Rua 04 de novembro"
              id="street"
              type="text"
              {...register('street')}
            />
            <span>{errors.street?.message}</span>
          </InputContainer>

          <InputContainer>
            <label htmlFor="number">Número da residência*</label>
            <Input
              error={!!errors.number}
              placeholder="192 ou S/N"
              id="number"
              type="text"
              maxLength={8}
              {...register('number')}
            />
            <span>{errors.number?.message}</span>
          </InputContainer>

          <InputContainer>
            <label htmlFor="complement">Complemento</label>
            <Input
              error={!!errors.complement}
              placeholder="Apartamento, casa, andar, etc..."
              id="complement"
              type="text"
              {...register('complement')}
            />
            <span>{errors.complement?.message}</span>
          </InputContainer>

          <InputContainer>
            <label htmlFor="district">Bairro*</label>
            <Input
              error={!!errors.district}
              placeholder="São Fagundes"
              id="district"
              type="text"
              {...register('district')}
            />
            <span>{errors.district?.message}</span>
          </InputContainer>

          <InputContainer>
            <label>Este é seu trabalho ou sua casa?*</label>

            <Controller
              control={control}
              name="type"
              render={({ field }) => {
                return (
                  <RadioRoot
                    error={!!errors.type}
                    onValueChange={field.onChange}
                  >
                    <RadioItem value="house">
                      <House size={24} />
                      <span>Casa</span>
                    </RadioItem>

                    <RadioItem value="work">
                      <SuitcaseSimple size={24} />
                      <span>Trabalho</span>
                    </RadioItem>
                  </RadioRoot>
                )
              }}
            />
          </InputContainer>

          {isSubmitting ? (
            <ButtonCreateNewAddress disabled={isSubmitting} type="submit">
              <CircleNotch size={20} weight="bold" />
              Salvar endereço
            </ButtonCreateNewAddress>
          ) : (
            <ButtonCreateNewAddress disabled={isSubmitting} type="submit">
              Salvar endereço
            </ButtonCreateNewAddress>
          )}
        </FormContainer>
      </Container>
    </>
  )
}
