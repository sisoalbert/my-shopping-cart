import RemoveFromCart from "@/components/cart/removeFromCart";
import { getCartData } from "@/lib/actions";
import { CartProduct } from "@/types/type";
import Image from "next/image";

export default async function ShoppingCart() {
  const cartData = await getCartData();

  return (
    <div className="max-w-7xl mx-auto py-12">
      <h1 className="text-3xl font-semibold mb-6">Shopping Cart</h1>
      {cartData.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cartData.map((product: CartProduct) => (
            <div key={product.id} className="border p-4 rounded-md">
              <div className="aspect-w-1 aspect-h-1 overflow-hidden">
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  width={500}
                  height={500}
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
              <p className="mt-2 text-gray-600">
                Price: {product.price} {product.currency}
              </p>
              <p className="mt-2 text-gray-600">Quantity: {product.quantity}</p>
              <RemoveFromCart id={product.id} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
