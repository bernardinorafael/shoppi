import * as Dialog from "@radix-ui/react-dialog";
import * as React from "react";
import Link from "next/link";
import { X } from "phosphor-react";
import {
  ButtonsContainer,
  CartContent,
  CheckoutPriceContainer,
  DialogClose,
  DialogContent,
  DialogOverlay,
  PriceTotalContainer,
} from "./styles";
import CartProduct from "../../../CartProduct";

type DialogCartContentProps = {
  onCloseCartDialog: () => void;
};

export default function DialogCartContent({
  onCloseCartDialog,
}: DialogCartContentProps) {
  return (
    <Dialog.Portal>
      <DialogOverlay />

      <DialogContent>
        <DialogClose>
          <X weight="bold" size={26} />
        </DialogClose>

        <CartContent>
          <CartProduct />
          <CartProduct />
          <CartProduct />
          <CartProduct />
          <CartProduct />
        </CartContent>

        <CheckoutPriceContainer>
          <div>
            <span>SUBTOTAL</span>
            <span>R$ 499,99</span>
          </div>

          <div>
            <span>DESCONTO:</span>
            <span> -R$ 87.98</span>
          </div>

          <PriceTotalContainer>
            <span>TOTAL</span>

            <div>
              <span>R$ 417,99</span>
              <em>em até 10x de R$ 41,79</em>
            </div>
          </PriceTotalContainer>
        </CheckoutPriceContainer>

        <ButtonsContainer>
          <button>AVANÇAR PARA O CHECKOUT</button>
          <Link onClick={onCloseCartDialog} href="/cart">
            Editar carrinho
          </Link>
        </ButtonsContainer>
      </DialogContent>
    </Dialog.Portal>
  );
}
