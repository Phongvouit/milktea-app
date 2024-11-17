import {
  Order,
  Item,
  Product,
  Conversation,
  User,
  Message,
} from "@prisma/client";

export type Menu = {
  id: number;
  slug: string;
  title: string;
  img?: string;
};

export type ProductType = Product & {
  option?: { title: string; additionalPrice: number };
};

export type FullOrderItemType = Item & {
  product: Product;
};

export type FullOrderType = Order & {
  items: FullOrderItemType[];
};

export type CartItemType = {
  id: string;
  title: string;
  img: string;
  desc: string;
  price: number;
  size: string;
  quantity: number;
};

export type CartType = {
  products: CartItemType[];
  totalItems: number;
  totalPrice: number;
};

export type ActionTypes = {
  // addToSameCart: (item: CartItemType) => void;
  addToCart: (item: CartItemType) => void;
  removeFromCart: (item: CartItemType) => void;
};

export type FullConversationType = Conversation & {
  users: User[];
  messages: Message[];
};

export type FullMessageType = Message & {
  sender: User;
};
