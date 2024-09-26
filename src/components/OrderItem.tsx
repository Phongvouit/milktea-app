"use client";
import { FullOrderItemType } from "@/types";
import Image from "next/image";
import { convertPrice } from "@/utils/convertPrice";

const OrderItem = ({orderItem}: {orderItem : FullOrderItemType}) => {
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
        <div className="flex flex-col sm:ml-4 sm:flex-row sm:w-full items-center sm:justify-between">
          <div className="mt-5 sm:mt-0">
            <h2 className="text-sm font-bold text-gray-900">{orderItem.product.title}</h2>
            <p className="mt-1 text-xs text-gray-700">Ice regular size</p>
            <div className="flex">
              <span>{orderItem.quantity}</span>
              <span className="px-1">x</span>
              <span>{convertPrice(orderItem.product.price)}</span>
            </div>
          </div>
          <p className="text-xs text-gray-900 font-bold">259.000.000 VND</p>
        </div>
      </div>
      <div className="my-4 flex items-center justify-between">
        <span className="border-b w-full"></span>
      </div>
    </div>
  );
};

export default OrderItem;
