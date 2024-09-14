const Price = () => {
  return (
    <div>
      <div className="flex flex-col mt-6 pb-5 border-b-2 border-gray-200 mb-5">
        <div className="flex items-center mb-5">
          <span className="mr-3 font-bold">Kích cỡ</span>
          <button className="border border-gray-300 font-normal text-sm rounded-sm px-[10px] py-[5px] focus:outline-none hover:bg-green-800 hover:text-white">
            Ice regular size
          </button>
          <button className="border border-gray-300 font-normal text-sm ml-1 rounded-sm px-[10px] py-[5px] focus:outline-none hover:bg-green-800 hover:text-white">
            Big size ice
          </button>
        </div>
        <div className="flex items-center">
          <span className="mr-3 font-bold">Số lượng</span>
          <div
            className="py-2 px-3 inline-block bg-white border border-gray-300 rounded-lg"
            data-hs-input-number=""
          >
            <div className="flex items-center gap-x-1.5">
              <button
                type="button"
                className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-300 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                tabIndex={-1}
                aria-label="Decrease"
                data-hs-input-number-decrement=""
              >
                <svg
                  className="shrink-0 size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                </svg>
              </button>
              <input
                className="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                // style="-moz-appearance: textfield;"
                type="number"
                aria-roledescription="Number field"
                value="0"
                data-hs-input-number-input=""
              />
              <button
                type="button"
                className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-300 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                tabIndex={-1}
                aria-label="Increase"
                data-hs-input-number-increment=""
              >
                <svg
                  className="shrink-0 size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <span className="title-font font-medium text-2xl text-green-800">
          45.000 đ
        </span>
        <button className="flex ml-auto text-green-800 bg-white border border-green-800 py-2 px-6 focus:outline-none hover:bg-green-800 rounded hover:text-white">
          Đặt hàng
        </button>
      </div>
    </div>
  );
};

export default Price;
