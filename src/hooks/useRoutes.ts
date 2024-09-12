import { useMemo } from "react";
import { usePathname } from "next/navigation";

const useRoutes = () => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        label: "TRANG CHỦ",
        href: "/",
        active: pathname === "/",
      },
      {
        label: "SẢN PHẨM",
        href: "/menu",
        active: pathname === "/menu",
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
