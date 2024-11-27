"use client";

import OrderItem from "@/components/OrderItem";
import { FullOrderType } from "@/types";
import { convertPrice } from "@/utils/convertPrice";
import { format } from "date-fns";
import clsx from "clsx";

interface OrderFilterProps {
  order: FullOrderType;
  className?: string;
}

const OrderFilter: React.FC<OrderFilterProps> = ({ order, className }) => {
  return (
    <div className={clsx(`p-4 bg-white mt-5`, className)} key={order.id}>
      <div className="flex items-center justify-between">
        <div className="flex gap-10">
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-600 mb-2">
              Mã đơn hàng
            </span>
            <span className="text-xs text-green-800 font-semibold">
              {order.id}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-600 mb-2">
              Ngày đặt hàng
            </span>
            <span className="text-xs text-gray-700">
              {format(new Date(order.createAt), "dd-MM-yyyy")}
            </span>
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
        <OrderItem key={i.id} orderItem={i} />
      ))}
      <div className="flex justify-end items-center">
        <p className="text-sm font-bold mr-3 text-gray-600">Tổng tiền:</p>
        <p className="text-lg font-bold text-rose-600">
          {convertPrice(order.price)}
        </p>
      </div>
    </div>
  );
};

export default OrderFilter;
