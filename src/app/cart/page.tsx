import { MdOutlineClose } from "react-icons/md";
import Image from "next/image";

const CartPage = () => {
  return (
    <div className="w-full">
      <h1 className="my-10 text-center text-3xl font-bold text-green-800">
        Giỏ hàng
      </h1>
      <div className="mx-auto mb-10 max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          <div className="justify-between mb-6 rounded-lg bg-white p-4 border sm:flex sm:justify-start">
            <div className="w-full sm:w-40 rounded-sm border">
              <div className="relative w-2/3 mx-auto my-2 pt-[70%] sm:pt-[80%] md:pt-[100%]">
                <Image
                  src="/images/product.png"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col sm:ml-4 sm:flex-row sm:w-full items-center sm:justify-between">
              <div className="mt-5 sm:mt-0">
                <h2 className="text-lg font-bold text-gray-900">
                  Trà sữa Matcha
                </h2>
                <p className="mt-1 text-xs text-gray-700 text-center">Ice regular size</p>
              </div>
              <p className="text-sm">259.000 ₭</p>
              <MdOutlineClose size={20} />
            </div>
          </div>
          <div className="justify-between mb-6 rounded-lg bg-white p-4 border sm:flex sm:justify-start">
            <div className="w-full sm:w-40 rounded-sm border">
              <div className="relative w-2/3 mx-auto my-2 pt-[70%] sm:pt-[80%] md:pt-[100%]">
                <Image
                  src="/images/product.png"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col sm:ml-4 sm:flex-row sm:w-full items-center sm:justify-between">
              <div className="mt-5 sm:mt-0">
                <h2 className="text-lg font-bold text-gray-900">
                  Trà sữa Matcha
                </h2>
                <p className="mt-1 text-xs text-gray-700 text-center">Ice regular size</p>
              </div>
              <p className="text-sm">259.000 ₭</p>
              <MdOutlineClose size={20} />
            </div>
          </div>
        </div>
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">$129.99</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Shipping</p>
            <p className="text-gray-700">$4.99</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">$134.98 USD</p>
              <p className="text-sm text-gray-700">including VAT</p>
            </div>
          </div>
          <button className="mt-6 w-full rounded-md bg-green-800 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
            Check out
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
