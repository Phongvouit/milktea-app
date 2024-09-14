import { IoSearchOutline } from "react-icons/io5";
const FilterProduct = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-4 border border-solid border-[#DCDCDC] mb-5">
        <form>
          <div className="grid grid-cols-1 md:gap-6 md:grid-cols-3">
            <div className="flex flex-col gap-y-1 md:gap-y-0 md:flex-row md:items-center p-4 md:border-r">
              <label htmlFor="manufacturer" className="text-2xl md:text-sm font-bold w-full md:w-1/3">
                Nhóm sản phẩm
              </label>

              <select
                id="manufacturer"
                className="block cursor-pointer w-full md:w-2/3 rounded-md border border-[#DCDCDC] px-2 py-2 outline-none focus:border-black focus:border-[2px] text-xs text-gray-400 hover:text-black"
              >
                <option>Chọn nhóm</option>
                <option>Cadberry</option>
                <option>Starbucks</option>
                <option>Hilti</option>
              </select>
            </div>

            <div className="flex flex-col gap-y-1 md:gap-y-0 md:flex-row md:items-center p-4 md:border-r">
              <label htmlFor="status" className="text-2xl md:text-sm font-bold w-full md:w-1/3">
                Theo giá
              </label>

              <select
                id="status"
                className="block cursor-pointer w-full md:w-2/3 rounded-md border border-[#DCDCDC] px-2 py-2 outline-none focus:border-black focus:border-[2px] text-xs text-gray-400 hover:text-black"
              >
                <option>Không lựa chọn</option>
                <option>Từ thấp đến cao</option>
                <option>Từ cao đến thấp</option>
              </select>
            </div>

            <div className="flex flex-col gap-y-1 md:gap-y-0 md:flex-row md:items-center p-4">
              <label htmlFor="date" className="text-2xl md:text-sm font-bold w-full md:w-1/3">
                Tìm kiếm
              </label>
              <div className="relative w-full md:w-2/3 flex items-center justify-between rounded-md border border-[#DCDCDC] px-2 py-2 outline-none focus:border-black focus:border-[2px]">
                <input
                  type="name"
                  name="search"
                  className="w-full outline-none placeholder:text-black placeholder:text-xs"
                  placeholder="Tên sản phẩm"
                />
                <IoSearchOutline
                  className="absolute right-2 text-gray-400 cursor-pointer hover:text-green-800"
                  size={20}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FilterProduct;
