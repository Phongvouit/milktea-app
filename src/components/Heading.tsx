"use client";
import { Menu } from "@/types";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

const Heading = ({ menu }: { menu: Menu }) => {
  return (
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
            <Link href={`/menu/${menu.slug}`}>{menu?.title}</Link>
          </li>
        </ul>
        <h1 className="uppercase text-green-800 text-[36px] mb-3">
          {menu?.title}
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
          <li
            className={clsx(
              `
                 px-[25px]
                 hover: border-y 
                 hover:border-green-800 
                 hover:text-green-800  
            `,
              menu.slug === "thuc-uong"
                ? "border-y border-green-800 text-green-800"
                : ""
            )}
          >
            <Link href="/menu/thuc-uong">Thức uống</Link>
          </li>
          <li
            className={clsx(
              `
             px-[25px]
             hover: border-y 
             hover:border-green-800 
             hover:text-green-800 
        `,
              menu.slug === "snacks"
                ? "border-y border-green-800 text-green-800"
                : ""
            )}
          >
            <Link href="/menu/snacks">Snacks</Link>
          </li>
          <li
            className={clsx(
              `
             px-[25px]
             hover: border-y 
             hover:border-green-800 
             hover:text-green-800
        `,
              menu.slug === "bakery"
                ? "border-y border-green-800 text-green-800"
                : ""
            )}
          >
            <Link href="/menu/bakery">Bakery</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Heading;
