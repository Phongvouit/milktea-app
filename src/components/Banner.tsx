import { Menu } from "@/types";
import Image from "next/image";

const Banner = ({ banner }: { banner: Menu }) => {
  return (
    <div className="w-full lg:h-[456px] relative pt-[50%] lg:pt-0">
      <Image src={banner.img!} alt="banner" fill className="object-cover" />
    </div>
  );
};

export default Banner;
