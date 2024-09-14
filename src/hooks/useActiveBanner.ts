import { useMemo } from "react";
import { useParams } from "next/navigation";
import { menu } from "@/data";

const useActiveBanner = () => {
  const params = useParams();
  const activeBanner = useMemo(() => {
    const activeBanner = menu.find((user) => user.slug === params.category);
    return activeBanner;
  }, [params?.category]);
  return activeBanner;
};
export default useActiveBanner;
