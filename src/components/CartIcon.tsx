import Link from "next/link";
import { BsCart3 } from "react-icons/bs";

const CartIcon = () => {
  return (
    <Link href="/cart">
      <div className="flex items-center border border-green-800 rounded-md p-2 gap-x-1">
        <span className="text-xs text-green-800">Giỏ hàng</span>
        <BsCart3 size={20} color="rgb(22 101 52)"/>
      </div>
    </Link>
  );
};

export default CartIcon;
