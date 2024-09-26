"use client";

import LayoutUser from "@/components/LayoutUser";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import OrderItem from "@/components/OrderItem";
import { FullOrderType } from "@/types";
import { convertPrice } from "@/utils/convertPrice";
import {format} from "date-fns"

const fetchOrders = () => {
  return fetch("http://localhost:3000/api/orders").then((res) => {
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    return res.json(); // Trả về dữ liệu
  });
};

const OrdersPage = () => {
  const { status } = useSession();
  const router = useRouter();

  if (status === "unauthenticated") {
    router.push("/");
  }

  const { data: orders, error, isLoading } = useQuery({
    queryKey: ["orders"],
    queryFn: fetchOrders,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching orders: {error.message}</div>;
  }

  console.log(orders);
  return (
    <LayoutUser>
      <div className="bg-white px-3">
        <nav className="flex flex-wrap gap-4 justify-between">
          <a
            href="#"
            className="inline-flex whitespace-nowrap border-b-2 border-transparent py-2 px-3 text-sm font-medium text-gray-600 transition-all duration-200 ease-in-out hover:border-b-green-800 hover:text-green-800"
          >
            {" "}
            Tất cả đơn{" "}
          </a>

          <a
            href="#"
            className="inline-flex whitespace-nowrap border-b-2 border-transparent py-2 px-3 text-sm font-medium text-gray-600 transition-all duration-200 ease-in-out hover:border-b-green-800 hover:text-green-800"
          >
            {" "}
            Đang xử lý{" "}
          </a>

          <a
            href="#"
            className="inline-flex whitespace-nowrap border-b-2 border-transparent border-b-green-800 py-2 px-3 text-sm font-semibold text-green-800 transition-all duration-200 ease-in-out"
          >
            {" "}
            Đã giao{" "}
          </a>

          <a
            href="#"
            className="inline-flex whitespace-nowrap border-b-2 border-transparent py-2 px-3 text-sm font-medium text-gray-600 transition-all duration-200 ease-in-out hover:border-b-green-800 hover:text-green-800"
          >
            {" "}
            Đã hủy{" "}
          </a>
        </nav>
      </div>
      {orders.map((order: FullOrderType) => (
        <div className="p-4 bg-white mt-5" key={order.id}>
        <div className="flex items-center justify-between">
          <div className="flex gap-10">
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-gray-600 mb-2">
                Mã đơn hàng
              </span>
              <span className="text-xs text-green-800 font-semibold">{order.id}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-gray-600 mb-2">
                Ngày đặt hàng
              </span>
              <span className="text-xs text-gray-700">{format(new Date(order.createAt),"dd-MM-yyyy")}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-gray-600 mb-2">
                Địa chỉ
              </span>
              <span className="text-xs text-gray-700">Hoàn Kiếm, Hà Nội</span>
            </div>
          </div>

          <span className="font-bold text-green-800">{order.status}</span>
        </div>

        <div className="my-4 flex items-center justify-between">
          <span className="border-b w-full"></span>
        </div>
        {order.items?.map((i) => (
          <OrderItem key={i.id} orderItem={i}/>
        ))}
        <div className="flex justify-end items-center">
          <p className="text-sm font-bold mr-3 text-gray-600">Tổng tiền:</p>
          <p className="text-lg font-bold text-rose-600">{convertPrice(order.price)}</p>
        </div>
      </div>
      ))}
    </LayoutUser>
  );
};

export default OrdersPage;
