import CartModal from "@/components/cart/modal";
import { cookies } from "next/headers";

export default async function Cart() {
  const SITE_NAME = "NextAppCart!";
  const CART_COOKIE_NAME = `${SITE_NAME}_cart`;

  const cartData = cookies().get(CART_COOKIE_NAME)
    ? JSON.parse(cookies().get(CART_COOKIE_NAME)?.value || "[]")
    : [];

  return <CartModal cartData={cartData} />;
}
