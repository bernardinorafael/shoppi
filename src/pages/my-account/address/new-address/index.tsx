import Head from 'next/head'
import Link from 'next/link'
import { CaretRight, CircleNotch } from 'phosphor-react'
import { z } from 'zod'
import * as React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import HeaderInternalPageNavigation from '../../../../components/HeaderInternalPageNavigation'
import Checkbox from '../../../../primitives/Checkbox'
import {
  ButtonCreateNewAddress,
  Container,
  FormContainer,
  Input,
  InputCep,
  InputContainer,
} from '../../../../styles/pages/new-address'
import useAddressContext from '../../../../contexts/AddressContext'
import { useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

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
    .regex(
      new RegExp('(^\\d{5})\\-?(\\d{3}$).*'),
      'Precisamos de um CEP válido',
    ),
  city: z.string(),
  state: z.string(),
  addressName: z.string().min(1, 'Dê um nome ao seu endereço'),
  street: z.string().min(1, 'Endereço é um campo obrigatório'),
  number: z
    .string({ required_error: 'Número é um campo obrigatório' })
    .min(1, 'Número é um campo obrigatório')
    .max(8, 'Máximo permitido: 8'),
  district: z.string().min(1, 'Bairro é um campo obrigatório'),
  complement: z.string().optional(),
  isCurrentAddress: z.boolean().nullable(),
})

type NewAddressForm = z.infer<typeof newAddressValidationSchema>

export default function NewAddress() {
  const router = useRouter()
  const { createNewAddress } = useAddressContext()
  const {
    register,
    handleSubmit,
    watch,
    control,
    setValue,
    setFocus,
    formState: { isSubmitting, errors },
  } = useForm<NewAddressForm>({
    resolver: zodResolver(newAddressValidationSchema),
    defaultValues: {
      isCurrentAddress: false,
    },
  })

  async function handleCreateNewAddress(data: NewAddressForm) {
    await new Promise((resolve) => setTimeout(resolve, 800))

    createNewAddress(data)
    await router.push('/my-account/address')
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

  useEffect(() => {
    setValue('zip', replaceInputValue(zip))
    setValue('number', replaceInputValue(number))
  }, [zip, number])

  return (
    <>
      <Head>
        <title>Cadastrar Endereço | Shoppi</title>
      </Head>

      <Container>
        <HeaderInternalPageNavigation current="Novo endereço">
          <Link href="/">Início</Link>
          <CaretRight />
          <Link href="/my-account">Minha conta</Link>
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
            <label htmlFor="address-name">Nome do endereço*</label>
            <Input
              autoFocus
              error={!!errors.addressName}
              id="address-name"
              type="text"
              placeholder="Ex: Casa"
              {...register('addressName')}
            />
            <span>{errors.addressName?.message}</span>
          </InputContainer>

          <InputContainer>
            <label htmlFor="zip">CEP*</label>
            <Input
              autoFocus
              error={!!errors.zip}
              id="zip"
              type="text"
              maxLength={8}
              placeholder="88915000"
              {...register('zip')}
              onBlur={() => handleGetCepAddress(zip)}
            />
            <span>{errors.zip?.message}</span>
          </InputContainer>

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

          <div style={{ display: 'flex', width: '100%', gap: '2rem' }}>
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
              <label htmlFor="city'">Cidade*</label>
              <Input
                placeholder="Florianópolis"
                id="city'"
                type="text"
                disabled
                {...register('city')}
              />
            </InputContainer>

            <InputContainer>
              <label htmlFor="state">Estado*</label>
              <InputCep
                placeholder="UF"
                id="state"
                disabled
                type="text"
                {...register('state')}
              />
            </InputContainer>
          </div>

          <Controller
            control={control}
            name="isCurrentAddress"
            render={({ field }) => {
              return (
                <Checkbox onCheckedChange={field.onChange} id="main-address">
                  Salvar como endereço padrão
                </Checkbox>
              )
            }}
          />

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
