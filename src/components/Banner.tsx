"use client";
import { Category } from "@prisma/client";
import Image from "next/image";

const Banner = ({category}: {category: Category}) => {
  return (
    <div className="w-full lg:h-[456px] relative pt-[50%] lg:pt-0">
      <Image
        src={category.img}
        alt="banner"
        fill
        className="object-cover"
      />
    </div>
  );
};

export default Banner;
