"use client";

import Image from "next/image";

const EmptyOrder = () => {
  return (
    <div className="bg-white mt-5 min-h-80">
      <div className="p-[35px] flex flex-col items-center">
        <div style={{ position: "relative", width: "300px", height: "400px" }}>
            <Image 
            src="/images/empty-order.png" 
            alt="Empty Order" 
            layout="fill" 
            objectFit="contain"
            />
        </div>
        <p className="mt-4 text-[16px] font-normal">Chưa có đơn hàng</p>
      </div>
    </div>
  );
};

export default EmptyOrder;
