import { Product } from "@prisma/client";
import ItemProduct from "./ItemProduct";

const ListProduct = ({ products }: { products: Product[] }) => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 mb-10 grid grid-cols-2 md:grid-cols-4">
      {products.map((item) => (
        <ItemProduct key={item.id} product={item} />
      ))}
    </div>
  );
};

export default ListProduct;
