import { Order, Item, Product } from "@prisma/client";

export type Menu = {
  id: number;
  slug: string;
  title: string;
  img?: string;
};

export type FullOrderItemType = Item & {
  product: Product;
};

export type FullOrderType = Order & {
  items: FullOrderItemType[];
};
