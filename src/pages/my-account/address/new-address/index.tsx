import Head from "next/head";
import Link from "next/link";
import { CaretRight, CircleNotch } from "phosphor-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import HeaderInternalPageNavigation from "../../../../components/HeaderInternalPageNavigation";
import Checkbox from "../../../../primitives/Checkbox";
import {
  ButtonCreateNewAddress,
  Container,
  FormContainer,
  Input,
} from "../../../../styles/pages/new-address";
import useAddressContext from "../../../../contexts/AddressContext";

const newAddressValidationSchema = z.object({
  zip: z.number(),
  city: z.string(),
  state: z.string(),
  street: z.string().min(1, "Cidade é um campo obrigatório"),
  number: z.number().min(1, "Número é um campo obrigatório"),
  district: z.string().min(1, "Bairro é um campo obrigatório"),
  complement: z.string().optional(),
  isCurrentAddress: z.boolean().nullable(),
});

type NewAddressForm = z.infer<typeof newAddressValidationSchema>;

export default function NewAddress() {
  const { createNewAddress } = useAddressContext();
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<NewAddressForm>({
    resolver: zodResolver(newAddressValidationSchema),
    defaultValues: {
      isCurrentAddress: false,
    },
  });

  async function handleCreateNewAddress(data: NewAddressForm) {
    await new Promise((resolve) => setTimeout(resolve, 800));

    createNewAddress(data);
    reset();
  }

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
          <div>
            <label htmlFor="zip">CEP*</label>
            <Input
              error={!!errors.zip?.message}
              id="zip"
              type="text"
              placeholder="88915-000"
              {...register("zip", {
                valueAsNumber: true,
              })}
            />
            <span>{errors.zip?.message}</span>
          </div>

          <div>
            <label htmlFor="street">Endereço*</label>
            <Input
              error={!!errors.street?.message}
              placeholder="Rua 04 de novembro"
              id="street"
              type="text"
              {...register("street")}
            />
            <span>{errors.street?.message}</span>
          </div>

          <div>
            <label htmlFor="number">Número da residência*</label>
            <Input
              error={!!errors.number?.message}
              placeholder="192 ou S/N"
              id="number"
              type="text"
              {...register("number", {
                valueAsNumber: true,
              })}
            />
            <span>{errors.number?.message}</span>
          </div>

          <div>
            <label htmlFor="complement">Complemento</label>
            <Input
              error={!!errors.complement?.message}
              placeholder="Apartamento, casa, andar, etc..."
              id="complement"
              type="text"
              {...register("complement")}
            />
            <span>{errors.complement?.message}</span>
          </div>

          <div>
            <label htmlFor="district">Bairro*</label>
            <Input
              error={!!errors.district?.message}
              placeholder="São Fagundes"
              id="district"
              type="text"
              {...register("district")}
            />
            <span>{errors.district?.message}</span>
          </div>

          <div>
            <label htmlFor="city'">Cidade*</label>
            <Input
              error={!!errors.city?.message}
              placeholder="Florianópolis"
              id="city'"
              type="text"
              {...register("city")}
            />
            <span>{errors.city?.message}</span>
          </div>

          <div>
            <label htmlFor="state">Estado*</label>
            <Input
              error={!!errors.state?.message}
              placeholder="SC"
              id="state"
              type="text"
              {...register("state")}
            />
            <span>{errors.state?.message}</span>
          </div>

          <Controller
            control={control}
            name="isCurrentAddress"
            render={({ field }) => {
              return (
                <Checkbox onCheckedChange={field.onChange} id="main-address">
                  Salvar como endereço padrão
                </Checkbox>
              );
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
  );
}
