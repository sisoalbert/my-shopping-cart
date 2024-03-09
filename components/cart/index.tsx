import CartModal from "@/components/cart/modal";
import { calculateTotalAmount, getCartData } from "@/lib/actions";

export default async function Cart() {
  const cartData = await getCartData();
  const { totalQuantity, totalAmount } = await calculateTotalAmount();
  return (
    <CartModal
      cartData={cartData}
      totalAmount={totalAmount}
      totalQuantity={totalQuantity}
    />
  );
}
