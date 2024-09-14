import Image from "next/image";
import Link from "next/link";

const ItemProduct = () => {
  return (
    <div className="rounded-md bg-white px-[15px] py-[30px] hover:shadow-lg hover:border-[2px]">
      <div className="w-2/3 mx-auto relative mb-3 pt-[80%] md:h-48 md:pt-0">
        <Image
          className="object-cover"
          src="/images/product.png"
          alt="Product Image"
          fill
        />
      </div>
      <div className="flex flex-col items-center">
        <h2 className="mb-[10px] text-base font-bold text-[#010101]">
          Trà Sữa Matcha
        </h2>
        <p className="mb-[15px] text-[14px] leading-3 font-normal text-[#171717]">
          Matcha Milk Tea
        </p>
        <p className="mb-[15px] text-lg font-black text-green-800">45.000 đ</p>
        <Link href="/product/1">
          <button className="rounded-md border border-green-800 px-4 py-1 text-green-800 hover:bg-green-800 hover:text-white">
            Đặt hàng
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ItemProduct;
