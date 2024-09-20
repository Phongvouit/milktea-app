"use client";
import ListProduct from "./ListProduct";
import queryString from "query-string";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import useFilter from "@/hooks/useFilter";
import axios from "axios";
import { Product, Type } from "@prisma/client";
import { GrPowerReset } from "react-icons/gr";
import useDebounce from "@/hooks/useDebounce";
import clsx from "clsx";
const FilterProduct = ({ type }: { type: Type[] }) => {
  const router = useRouter();
  const params = useParams();

  const [products, setProducts] = useState<Product[]>([]);

  const {
    filter,
    setFilter,
    resetFilter,
    getFilterFromLocalStorage,
    removeFilterFromLocalStorage,
  } = useFilter();

  const debounceSearch = useDebounce(filter.search, 2000);
  console.log("debounceSearch", debounceSearch);

  const handleTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilter({ type: e.target.value });
  };

  const handlePriceRangeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilter({ price: e.target.value });
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter({ search: e.target.value });
  };

  const handleReset = () => {
    removeFilterFromLocalStorage();
    resetFilter();
  };

  const handleClick = useCallback(
    (type: string, price: string, search: string) => {
      const query = {
        category: type,
        priceRange: price,
        search: search,
      };
      const url = queryString.stringifyUrl({
        url: `/menu/${params.category}`,
        query: query,
      });
      router.push(url);
    },
    [params.category, router]
  );

  useEffect(() => {
    console.log("filter", filter);
  }, [filter]);

  useEffect(() => {
    getFilterFromLocalStorage();
  }, [getFilterFromLocalStorage]);

  useEffect(() => {
    handleClick(filter.type, filter.price, debounceSearch);
  }, [filter.type, filter.price, debounceSearch, handleClick]);

  const getProductsByCategory = () => {
    axios
      .get(
        `http://localhost:3000/api/products?slug=${params.category}&type=${filter.type}&price=${filter.price}&search=${debounceSearch}`
      )
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProductsByCategory();
  }, [debounceSearch, filter.type, filter.price]);

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-4 border border-solid border-[#DCDCDC] mb-5">
        <form>
          <div className={clsx(`
           grid 
           grid-cols-1 
           md:gap-6 
           md:grid-cols-2
          `,
          params.category === "thuc-uong" && "md:grid-cols-3"
        )}
         >
            {params.category === "thuc-uong" && (
              <div className="flex flex-col gap-y-1 md:gap-y-0 md:flex-row md:items-center p-4 md:border-r">
                <label
                  htmlFor="manufacturer"
                  className="text-2xl md:text-sm font-bold w-full md:w-1/3"
                >
                  Nhóm sản phẩm
                </label>

                <select
                  className="block cursor-pointer w-full md:w-2/3 rounded-md border border-[#DCDCDC] px-2 py-2 outline-none focus:border-black focus:border-[2px] text-xs text-gray-400 hover:text-black"
                  value={filter.type}
                  onChange={handleTypeChange}
                >
                  <option value="">Chọn nhóm</option>
                  {type.map((item) => (
                    <option key={item.tslug} value={item.tslug}>
                      {item.title}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div className="flex flex-col gap-y-1 md:gap-y-0 md:flex-row md:items-center p-4 md:border-r">
              <label
                htmlFor="status"
                className="text-2xl md:text-sm font-bold w-full md:w-1/3"
              >
                Theo giá
              </label>

              <select
                id="status"
                className="block cursor-pointer w-full md:w-2/3 rounded-md border border-[#DCDCDC] px-2 py-2 outline-none focus:border-black focus:border-[2px] text-xs text-gray-400 hover:text-black"
                value={filter.price}
                onChange={(e) => handlePriceRangeChange(e)}
              >
                <option value="">Không lựa chọn</option>
                <option value="asc">Từ thấp đến cao</option>
                <option value="desc">Từ cao đến thấp</option>
              </select>
            </div>

            <div className="flex flex-col gap-y-1 md:gap-y-0 md:flex-row md:items-center p-4">
              <label
                htmlFor="date"
                className="text-2xl md:text-sm font-bold w-full md:w-1/3"
              >
                Tìm kiếm
              </label>
              <div className="relative w-full md:w-2/3 flex items-center justify-between rounded-md border border-[#DCDCDC] px-2 py-2 outline-none focus:border-black focus:border-[2px]">
                <input
                  type="name"
                  name="search"
                  className="w-full outline-none placeholder:text-black placeholder:text-xs"
                  placeholder="Tên sản phẩm"
                  value={filter.search}
                  onChange={(e) => handleSearchChange(e)}
                />
                <GrPowerReset
                  className="absolute right-2 text-gray-400 cursor-pointer hover:text-green-800"
                  size={20}
                  onClick={handleReset}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <ListProduct products={products} />
    </div>
  );
};

export default FilterProduct;
