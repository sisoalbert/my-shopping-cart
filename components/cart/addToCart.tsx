"use client";

import { useCartModal } from "@/data/hooks/useCartModal";
import { addToCart } from "@/lib/actions";
import { Product } from "@/types/type";
import { useTransition } from "react";

export default function AddToCart({ product }: { product: Product }) {
  const [isPending, startTransition] = useTransition();
  const { toggleCartModal } = useCartModal();

  const handleAddToCartButton = () => {
    addToCart(product);
    toggleCartModal();
    startTransition(() => {});
  };
  return (
    <button
      aria-label="Add item to cart"
      title="Add Item to Cart"
      disabled={isPending}
      className="w-full border mt-4 py-2 px-8 rounded-lg hover:bg-black hover:text-white"
      onClick={handleAddToCartButton}
    >
      <span>Add To Cart</span>
    </button>
  );
}
