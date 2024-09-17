import { useMemo } from "react";
import { useParams } from "next/navigation";
import { Category } from "@prisma/client";


const useActiveCategory = (menu: Category[]) => {
  const params = useParams();
  const activeCategory = useMemo(() => {
    const activeCategory = menu.find((item) => item.slug === params.category);
    return activeCategory;
  }, [params?.category, menu]);
  return activeCategory;
};
export default useActiveCategory;
