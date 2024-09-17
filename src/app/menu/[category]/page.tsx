import FilterProduct from "@/components/FilterProduct";
import Heading from "@/components/Heading";
import ListProduct from "@/components/ListProduct";
import axios from "axios";

const getData = async () => {
  const res = await axios.get("http://localhost:3000/api/categories");
  return res.data;
};

const CategoryPage = async () => {
  const menu = await getData();
  return (
    <div>
      <Heading menu={menu} />
      <FilterProduct />
      <ListProduct />
    </div>
  );
};

export default CategoryPage;
