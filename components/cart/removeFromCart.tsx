"use client";

import { removeFromCart } from "@/lib/actions";
import { useTransition } from "react";

export default function RemoveFromCart({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition();

  const handleRemoveFromCartButton = () => {
    console.log("deleting", id);
    removeFromCart(id);
    startTransition(() => {});
  };
  return (
    <button
      aria-label="Add item to cart"
      title="Add Item to Cart"
      disabled={isPending}
      className="mt-4 w-full rounded-md bg-red-600 py-2 px-4 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
      onClick={handleRemoveFromCartButton}
    >
      <span> Remove from Cart</span>
    </button>
  );
}
