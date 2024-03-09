import { removeFromCart } from "@/lib/actions";
import { CartData, CartProduct } from "@/types/type";
import { ShoppingCartIcon, XMarkIcon } from "@heroicons/react/16/solid";
import React from "react";

export function formatCurrencyString({
  value,
  currency,
}: {
  value: number;
  currency: string;
}) {
  return `${currency}${value.toFixed(2)}`;
}

export default function CartItems({ cartData }: { cartData: CartData }) {
  const renderCartMessages = (text: string) => {
    return (
      <div className="mt-20 flex w-full flex-col items-center justify-center overflow-hidden">
        <ShoppingCartIcon className="h-16" />
        <p className="mt-6 text-center text-2xl font-bold">{text}</p>
      </div>
    );
  };

  return (
    <div>
      {cartData && cartData.length > 0 ? (
        <>
          {Object.values(cartData ?? {}).map((product: CartProduct) => (
            <div className="flex items-center gap-4 py-3" key={product.id}>
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="w-12 h-12 object-contain"
              />
              <div>
                {product.name}{" "}
                <span className="text-xs">({product.quantity})</span>
              </div>
              <div className="ml-auto">
                {formatCurrencyString({
                  value: product.price,
                  currency: product.currency,
                })}
              </div>
              <button
                onClick={() => removeFromCart(product.id)}
                className="hover:bg-emerald-50 transition-colors rounded-full duration-500 p-1"
              >
                <XMarkIcon
                  className="h-4 w-4 text-red-500"
                  aria-hidden="true"
                />
              </button>
            </div>
          ))}{" "}
        </>
      ) : (
        renderCartMessages(
          "Your cart is empty.\n Add items to proceed to checkout."
        )
      )}{" "}
      {/* {status === "redirect-error" &&
        renderCartMessages("Unable to redirect to Stripe checkout page.")} */}
    </div>
  );
}
