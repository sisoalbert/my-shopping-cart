"use server";

import { Product } from "@/types/type";
import { cookies } from "next/headers";

const SITE_NAME = "NextAppCart!";

const CART_COOKIE_NAME = `${SITE_NAME}_cart`;
const CART_EXPIRATION_DAYS = 7;
const expirationDate = new Date(
  Date.now() + CART_EXPIRATION_DAYS * 24 * 60 * 60 * 1000
);

export const addToCart = (product: Product) => {
  // Get the existing cart from cookies or initialize an empty cart
  const existingCart = cookies().get(CART_COOKIE_NAME)
    ? JSON.parse(cookies().get(CART_COOKIE_NAME)?.value || "[]")
    : [];

  // Check if the product is already in the cart
  const productIndex = existingCart.findIndex(
    (item: Product) => item.id === product.id
  );

  if (productIndex !== -1) {
    // If the product is already in the cart, increment its quantity
    existingCart[productIndex].quantity += 1;
  } else {
    // If the product is not in the cart, add it with a quantity of 1
    existingCart.push({ ...product, quantity: 1 });
  }

  // Update the cart cookie with the new cart data
  cookies().set({
    name: CART_COOKIE_NAME,
    value: JSON.stringify(existingCart),
    httpOnly: true,
    path: "/",
    expires: expirationDate,
  });
};

export const removeFromCart = (productId: string) => {
  const existingCart = cookies().get(CART_COOKIE_NAME)
    ? JSON.parse(cookies().get(CART_COOKIE_NAME)?.value || "[]")
    : [];

  const updatedCart = existingCart.filter(
    (product: Product) => product.id !== productId
  );

  cookies().set({
    name: CART_COOKIE_NAME,
    value: JSON.stringify(updatedCart),
    httpOnly: true,
    path: "/",
    expires: expirationDate,
  });
};
