"use client";
import { Category } from "@prisma/client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import Banner from "./Banner";
import useActiveCategory from "@/hooks/useActiveCategory";

const Heading = ({ menu }: { menu: Category[] }) => {
  const activeCategory = useActiveCategory(menu);
  return (
    <div>
      <Banner category={activeCategory!} />
      <div className="w-full py-3 text-center">
        <div className="max-w-screen-xl mx-auto px-4">
          <ul className="px-4 py-2 mb-5 flex items-center justify-center">
            <li>
              <Link href="/" className="text-[#B2B2B2]">
                Trang chủ
              </Link>
            </li>
            <li>
              <b className="px-2 text-[#B2B2B2] font-normal">/</b>
              <Link href={`/menu/${activeCategory?.slug}`}>{activeCategory?.title}</Link>
            </li>
          </ul>
          <h1 className="uppercase text-green-800 text-[36px] mb-3">
            Thức uống
          </h1>
          <div className="relative w-[300px] h-[50px] mx-auto mb-[40px]">
            <Image
              src="/images/icon_tealeaves.png"
              fill
              alt=""
              className="object-cover"
            />
          </div>
          <ul className="my-[30px] flex flex-col md:flex-row md:items-center justify-center uppercase text-[22px] text-[#797979] leading-10 gap-x-1">
            {menu?.map((item) => (
              <li
                key={item.slug}
                className={clsx(
                  `
                 px-[25px]
                 hover: border-y 
                 hover:border-green-800 
                 hover:text-green-800  
            `,
                  item.slug === activeCategory?.slug
                    ? "border-y border-green-800 text-green-800"
                    : ""
                )}
              >
                <Link href={`/menu/${item.slug}`}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Heading;
