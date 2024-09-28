"use client";
import Link from "next/link";
import { BsCart3 } from "react-icons/bs";
import { useCartStore } from "@/utils/store";
import { useSession } from "next-auth/react";
import { useMemo } from "react";

const CartIcon = () => {
  const { products } = useCartStore();
  const { status } = useSession();

  const cartNumber = useMemo(() => {
    if (status === "unauthenticated") {
      return 0;
    } else {
      return products.length;
    }
  }, [status, products.length]);

  return (
    <Link href="/cart">
      <div className="flex items-center border border-green-800 rounded-md p-2 gap-x-1">
        <span className="text-xs text-green-800">Giỏ hàng</span>
        <div className="relative">
          <BsCart3 size={20} color="rgb(22 101 52)" />
          <span className="absolute bottom-3 left-2 rounded-full h-3 w-3 bg-green-800 text-white  text-center text-[8px]">
            {cartNumber}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CartIcon;
