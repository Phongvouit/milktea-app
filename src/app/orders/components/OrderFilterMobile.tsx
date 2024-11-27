"use client";
import OrderItem from "@/components/OrderItem";
import { FullOrderType } from "@/types";
import { convertPrice } from "@/utils/convertPrice";
import { format } from "date-fns";
import clsx from "clsx";

interface OrderFilterMobileProps {
  order: FullOrderType;
  className?: string;
}

const OrderFilterMobile: React.FC<OrderFilterMobileProps> = ({
  order,
  className,
}) => {
  return (
    <div className={clsx(`p-4 bg-white mt-5`, className)}>
      <div className="flex mb-2 items-center w-full">
        <span className="text-sm w-1/3 font-semibold text-gray-600">
          Mã đơn hàng:
        </span>
        <span className="text-xs w-2/3 font-semibold">{order.id}</span>
      </div>
      <div className="flex mb-2 items-center w-full">
        <span className="text-sm w-1/3 font-semibold text-gray-600">
          Địa chỉ nhận:
        </span>
        <span className="text-xs w-2/3 font-semibold">Hoàn Kiếm, Hà Nội</span>
      </div>
      <div className="flex mb-2 items-center w-full">
        <span className="text-sm w-1/3 font-semibold text-gray-600">
          Ngày đặt hàng:
        </span>
        <span className="text-xs w-2/3 font-semibold">
          {format(new Date(order.createAt), "dd-MM-yyyy")}
        </span>
      </div>
      <div className="flex mb-4 items-center w-full">
        <span className="text-sm w-1/3 font-semibold text-gray-600">
          Trạng thái:
        </span>
        <span className="text-xs w-2/3 font-semibold">{order.status}</span>
      </div>
      {order.items?.map((i) => (
        <div key={i.id} className="py-2 mb-4 border-b-2 border-y-rose-600">
          <OrderItem key={i.id} orderItem={i} />
        </div>
      ))}
      <div className="flex justify-end items-center">
        <p className="text-lg font-bold mr-3 text-rose-600">Tổng Tiền:</p>
        <p className="text-lg font-bold text-rose-600">
          {convertPrice(order.price)}
        </p>
      </div>
    </div>
  );
};

export default OrderFilterMobile;
