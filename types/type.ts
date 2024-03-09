export type Product = {
  id: string;
  name: string;
  price: number;
  currency: string;
  imageSrc: string;
  imageAlt: string;
};

export type CartProduct = Product & {
  quantity: number;
};

export type CartData = CartProduct[];
