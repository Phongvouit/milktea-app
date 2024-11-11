"use client";
import { useCartStore } from "@/utils/store";
import CartItem from "@/components/CartItem";
import { convertPrice } from "@/utils/convertPrice";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { products, totalPrice } = useCartStore();

  if (status === "unauthenticated") {
    router.push("/login");
  }

  const handleCheckout = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          price: totalPrice,
          status: "Đang xử lý",
          email: session?.user.email,
          items: products,
        }),
      });
      const data = await res.json();
      router.push(`/pay/${data.id}`)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full">
      <h1 className="my-10 text-center text-3xl font-bold text-green-800">
        Giỏ hàng
      </h1>
      <div className="mx-auto mb-10 max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        {products.length ? (
          <div className="rounded-lg md:w-2/3">
            {products.map((item) => (
              <CartItem key={item.id} cartItem={item} />
            ))}
          </div>
        ) : (
          <div className="rounded-lg md:w-2/3">
            <div className="flex flex-col items-center justify-center">
              <div className="h-40 w-[148px] relative">
                <Image
                  src="https://frontend.tikicdn.com/_desktop-next/static/img/mascot_fail.svg"
                  fill
                  className="object-cover"
                  alt=""
                />
              </div>
              <p className="message my-3 text-gray-600 text-sm">
                Bạn chưa có thông tin giỏ hàng
              </p>
              <Link
                href="/menu/thuc-uong"
                className="back bg-yellow-400 py-2 px-4 text-black text-sm text-center rounded-sm"
              >
                Tiếp tục mua sắm
              </Link>
            </div>
          </div>
        )}
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Tạm tính</p>
            <p className="text-gray-700">{convertPrice(totalPrice)}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Giảm giá</p>
            <p className="text-gray-700">{convertPrice(0)}</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Tổng tiền</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">
                {convertPrice(totalPrice)}
              </p>
            </div>
          </div>
          <button
            className="mt-6 w-full rounded-md bg-green-800 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
            onClick={handleCheckout}
          >
            Thanh toán
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
