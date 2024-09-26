import Price from "@/components/Price";
import Image from "next/image";
import { Product } from "@prisma/client";

const getData = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed!");
  }
  return res.json();
};

const SingleProductPage = async ({ params }: { params: { id: string } }) => {
  const product: Product = await getData(params.id);
  return (
    <div className="w-full">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full rounded border border-gray-200">
            <div className="w-2/3 mx-auto my-4 relative pt-[80%] md:pt-[100%]">
              <Image
                alt="ecommerce"
                className="object-cover"
                src={product.img}
                fill
              />
            </div>
          </div>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-green-800 text-3xl title-font font-medium mb-6">
              {product.title}
            </h1>
            <p className="leading-relaxed font-normal text-base">
              {product.desc}
            </p>
            <Price product={product}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
