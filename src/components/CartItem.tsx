"use client";
import Image from "next/image";
import { MdOutlineClose } from "react-icons/md";
import { CartItemType } from "@/types";
import { convertPrice } from "@/utils/convertPrice";
import { useCartStore } from "@/utils/store";

const CartItem = ({ cartItem }: { cartItem: CartItemType }) => {
  const { removeFromCart } = useCartStore();

  const handleRemoveFromCart = () => {
    removeFromCart(cartItem);
  };

  return (
    <div className="justify-between mb-6 rounded-lg bg-white p-4 border sm:flex sm:justify-start">
      <div className="w-full sm:w-40 rounded-sm border">
        <div className="relative w-2/3 mx-auto my-2 pt-[70%] sm:pt-[80%] md:pt-[100%]">
          <Image src={cartItem.img} alt="" fill className="object-cover" />
        </div>
      </div>
      <div className="flex flex-col sm:ml-4 sm:flex-row sm:w-full items-center sm:justify-between">
        <div className="mt-5 sm:mt-0">
          <h2 className="text-lg font-bold text-gray-900">{cartItem.title}</h2>
          <p className="mt-1 text-xs text-gray-700 text-center">
            {cartItem.desc}
          </p>
        </div>
        <p className="text-sm">{convertPrice(cartItem.price)}</p>
        <MdOutlineClose size={20} onClick={handleRemoveFromCart} className="cursor-pointer"/>
      </div>
    </div>
  );
};

export default CartItem;
