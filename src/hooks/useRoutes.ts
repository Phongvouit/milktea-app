import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { useParams } from "next/navigation";

const useRoutes = () => {
  const pathname = usePathname();
  const params = useParams();

  const routes = useMemo(
    () => [
      {
        label: "TRANG CHỦ",
        href: "/",
        active: pathname === "/",
      },
      {
        label: "SẢN PHẨM",
        href: "/menu/thuc-uong",
        active: pathname === `/menu/${params.category}`,
      },
      {
        label: "LIÊN HỆ",
        href: "/contact",
        active: pathname === "/contact",
      },
    ],
    [pathname]
  );

  return routes;
};
export default useRoutes;
