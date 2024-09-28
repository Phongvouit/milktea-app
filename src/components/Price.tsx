"use client";
import { ProductType } from "@/types";
import { convertPrice } from "@/utils/convertPrice";
import clsx from "clsx";
import { useMemo, useState } from "react";
import { useCartStore } from "@/utils/store";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
const Price = ({ product }: { product: ProductType }) => {
  const {status} = useSession();
  const router = useRouter();
  const [size, setSize] = useState("regular size");
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCartStore();

  const totalPrice = useMemo(() => {
    if (size === "big size") {
      return (product.price + 5000) * quantity;
    }
    return product.price * quantity;
  }, [size, product, quantity]);

  const handleAddToCart = () => {
    if(status === "unauthenticated") {
      router.push("/login")
      toast.success("Vui lòng đăng nhập!")
    } else {
      addToCart({
        id: product.id,
        title: product.title,
        img: product.img,
        desc: product.desc,
        price: totalPrice,
        size: size,
        quantity: quantity,
      });
      toast.success("Đã thêm sản phẩm vào giỏ hàng");
    }
  };

  return (
    <div>
      <div className="flex flex-col mt-6 pb-5 border-b-2 border-gray-200 mb-5">
        <div className="flex items-center mb-5">
          <span className="mr-3 font-bold">Kích cỡ</span>
          <button
            className={clsx(
              `
           border 
          border-gray-300 
          font-normal 
          text-sm 
          rounded-sm 
          px-[10px] 
          py-[5px] 
          focus:outline-none 
          hover:bg-green-800 
          hover:text-white`,
              size === "regular size" && "bg-green-800 text-white"
            )}
            onClick={() => setSize("regular size")}
          >
            Ice regular size
          </button>
          <button
            className={clsx(
              `
          border 
          border-gray-300 
          font-normal 
          text-sm ml-1 
          rounded-sm 
          px-[10px] 
          py-[5px] 
          focus:outline-none
          hover:bg-green-800 
          hover:text-white
          `,
              size === "big size" && "bg-green-800 text-white"
            )}
            onClick={() => setSize("big size")}
          >
            Big size ice
          </button>
        </div>
        <div className="flex items-center">
          <span className="mr-3 font-bold">Số lượng</span>
          <div
            className="py-2 px-3 inline-block bg-white border border-gray-300 rounded-lg"
            data-hs-input-number=""
          >
            <div className="flex items-center gap-x-1.5">
              <button
                type="button"
                className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-300 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
              >
                <svg
                  className="shrink-0 size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                </svg>
              </button>
              <span className="p-0 w-6 bg-transparent border-0 text-gray-800 text-center">
                {quantity}
              </span>
              <button
                type="button"
                className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-300 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
              >
                <svg
                  className="shrink-0 size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <span className="title-font font-medium text-2xl text-green-800">
          {convertPrice(totalPrice)}
        </span>
        <button
          className="flex ml-auto text-green-800 bg-white border border-green-800 py-2 px-6 focus:outline-none hover:bg-green-800 rounded hover:text-white"
          onClick={handleAddToCart}
        >
          Đặt hàng
        </button>
      </div>
    </div>
  );
};

export default Price;
