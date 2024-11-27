"use client";
import { FullOrderItemType } from "@/types";
import Image from "next/image";
import { convertPrice } from "@/utils/convertPrice";


const OrderItem = ({ orderItem }: { orderItem: FullOrderItemType }) => {
  return (
    <div>
      <div className="justify-between flex">
        <div
          className="
            relative
            inline-block
            overflow-hidden
            h-20
            w-20
            "
        >
          <Image alt="Avatar" src={orderItem.product.img} fill />
        </div>
        <div className="flex ml-4 w-full items-center justify-between">
          <div className="mt-5 sm:mt-0">
            <h2 className="text-sm font-bold text-gray-900">
              {orderItem.product.title}
            </h2>
            <p className="mt-1 text-xs text-gray-700">{orderItem.size}</p>
            <div className="flex">
              <span>{orderItem.quantity}</span>
              <span className="px-1">x</span>
              <span>
                {orderItem.size === "big size"
                  ? convertPrice(orderItem.product.price + 5000)
                  : convertPrice(orderItem.product.price)}
              </span>
            </div>
          </div>
          <p className="text-xs text-gray-900 font-bold">{convertPrice(orderItem.price)}</p>
        </div>
      </div>
      <div className="my-4 hidden items-center justify-between mobile:flex">
        <span className="border-b w-full"></span>
      </div>
    </div>
  );
};

export default OrderItem;
