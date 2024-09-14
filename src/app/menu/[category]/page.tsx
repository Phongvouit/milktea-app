"use client"
import Banner from "@/components/Banner"
import FilterProduct from "@/components/FilterProduct";
import Heading from "@/components/Heading";
import ListProduct from "@/components/ListProduct";
import useActiveBanner from "@/hooks/useActiveBanner";

const CategoryPage = () => {
  const activeBanner = useActiveBanner();
  return (
    <div>
      <Banner banner={activeBanner!}/>
      <Heading menu={activeBanner!}/>
      <FilterProduct/>
      <ListProduct/>
    </div>
  )
}

export default CategoryPage