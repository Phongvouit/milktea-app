import FilterProduct from "@/components/FilterProduct";
import Heading from "@/components/Heading";
import axios from "axios";

const getData = async () => {
  const res = await axios.get("http://localhost:3000/api/categories");
  return res.data;
};

const getTypes = async () => {
  const res = await axios.get("http://localhost:3000/api/typeSlug");
  return res.data;
}

const CategoryPage = async () => {
  const menu = await getData();
  const type = await getTypes();

  return (
    <div>
      <Heading menu={menu} />
      <FilterProduct type={type}/>
    </div>
  );
};

export default CategoryPage;
