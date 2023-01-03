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
  normalizeFoneNumber,
} from '../../../helpers/input-mask'
import {
  REGEX_CEP_VALIDATION,
  REGEX_FONE_VALIDATION,
} from '../../../helpers/regex'
import { prisma } from '../../../services/prisma'
import { authOptions } from '../../api/auth/[...nextauth].api'
import {
  ButtonCreateNewAddress,
  Container,
  FormContainer,
  Input,
  InputContainer,
  InputDisabled,
  RadioItem,
  RadioRoot,
} from '../new-address/styles'

export const getServerSideProps: GetServerSideProps<
  any,
  { address_id: string }
> = async ({ req, res, params }) => {
  const session = await unstable_getServerSession(req, res, authOptions)

  if (!session) {
    return {
      redirect: {
        destination: '/login-page',
        permanent: false,
      },
    }
  }

  const addressId = params.address_id

  const address = await prisma.address.findUnique({
    where: {
      id: addressId,
    },
  })

  return {
    props: { address },
  }
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

type AddressResponse = {
  bairro: string
  cep: string
  localidade: string
  logradouro: string
  uf: string
}

type EditAddressProps = {
  address: {
    city: string
    client: string
    complement: string
    district: string
    fone: string
    id: string
    number: string
    state: string
    street: string
    type: 'work' | 'house'
    userId?: string
    zip: string
  }
}

export default function EditAddress({ address }: EditAddressProps) {
  const {
    control,
    register,
    setFocus,
    setValue,
    watch,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<NewAddressForm>({
    resolver: zodResolver(newAddressValidationSchema),
    defaultValues: {
      type: address.type,
    },
  })

  async function handleGetCepAddress(zip: string) {
    try {
      const response = await axios.get<AddressResponse>(
        `https://viacep.com.br/ws/${zip}/json/`,
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

  const router = useRouter()

  async function handleEditAddress(data: NewAddressForm) {
    try {
      await axios.post('/api/address/update-address', {
        addressId: String(router.query.address_id),
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

      await router.push('/address')
    } catch (err) {
      alert(err)
      console.error(err)
    }
  }

  return (
    <>
      <Head>
        <title>Editar endereço | Shoppi</title>
      </Head>

      <Container>
        <HeaderInternalPageNavigation current={address.client}>
          <Link href="/">Início</Link>
          <CaretRight />
          <Link href="/address">Endereços</Link>
          <CaretRight />
        </HeaderInternalPageNavigation>

        <div>
          <h1>Edite seu endereço</h1>
          <p>Campos com * indicam obrigatório</p>
        </div>

        <FormContainer onSubmit={handleSubmit(handleEditAddress)}>
          <InputContainer>
            <label htmlFor="address-name">Nome completo*</label>
            <Input
              defaultValue={address.client}
              error={!!errors.client}
              id="address-name"
              placeholder="João da Silva"
              type="text"
              {...register('client')}
            />
            <span>{errors.client?.message}</span>
          </InputContainer>

          <InputContainer>
            <label htmlFor="fone">Telefone*</label>
            <Input
              error={!!errors.fone}
              id="fone"
              maxLength={15}
              placeholder="(99) 99999-9999"
              type="tel"
              {...register('fone')}
            />
            <span>{errors.fone?.message}</span>
          </InputContainer>

          <InputContainer>
            <label htmlFor="zip">CEP*</label>
            <Input
              error={!!errors.zip}
              id="zip"
              maxLength={9}
              placeholder="88915-000"
              type="text"
              {...register('zip')}
              onBlur={() => handleGetCepAddress(zip)}
            />
            <span>{errors.zip?.message}</span>
          </InputContainer>

          <div
            style={{
              display: 'grid',
              gap: '1rem',
              gridTemplateColumns: '1fr 1fr',
            }}
          >
            <InputContainer>
              <label htmlFor="city'">Cidade*</label>
              <InputDisabled
                defaultValue={address.city}
                disabled
                id="city'"
                type="text"
                {...register('city')}
              />
            </InputContainer>

            <InputContainer>
              <label htmlFor="state">Estado*</label>
              <InputDisabled
                defaultValue={address.state}
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
              defaultValue={address.street}
              error={!!errors.street}
              id="street"
              placeholder="Rua 04 de novembro"
              type="text"
              {...register('street')}
            />
            <span>{errors.street?.message}</span>
          </InputContainer>

          <InputContainer>
            <label htmlFor="number">Número da residência*</label>
            <Input
              defaultValue={address.number}
              error={!!errors.number}
              id="number"
              maxLength={8}
              placeholder="192 ou S/N"
              type="text"
              {...register('number')}
            />
            <span>{errors.number?.message}</span>
          </InputContainer>

          <InputContainer>
            <label htmlFor="complement">Complemento</label>
            <Input
              defaultValue={address.complement}
              error={!!errors.complement}
              id="complement"
              placeholder="Apartamento, casa, andar, etc..."
              type="text"
              {...register('complement')}
            />
            <span>{errors.complement?.message}</span>
          </InputContainer>

          <InputContainer>
            <label htmlFor="district">Bairro*</label>
            <Input
              defaultValue={address.district}
              error={!!errors.district}
              id="district"
              placeholder="São Fagundes"
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
                    defaultValue={address.type}
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
