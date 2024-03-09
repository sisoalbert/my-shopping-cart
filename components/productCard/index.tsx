import { Product } from "@/types/type";
import Image from "next/image";
import AddToCart from "../cart/addToCart";
import { formatCurrencyString } from "../cart/cartItems";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <div className="group">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <Image
          src={product.imageSrc}
          alt={product.imageAlt}
          width={500}
          height={500}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">
        {formatCurrencyString({
          value: product.price,
          currency: product.currency,
        })}
      </p>
      <AddToCart product={product} />
    </div>
  );
}
