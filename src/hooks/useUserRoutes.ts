import { signOut } from "next-auth/react";
import { useMemo } from "react";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { RiLogoutBoxLine } from "react-icons/ri";
import { usePathname } from "next/navigation";

const useUserRoutes = () => {
  const pathname = usePathname();
  const routes = useMemo(
    () => [
      {
        label: "Thông tin tài khoản",
        href: "/account",
        icon: FaRegUser,
        active: pathname === "/account",
      },
      {
        label: "Quản lý đơn hàng",
        href: "/orders",
        icon: AiOutlineProduct,
        active: pathname === `/orders`,
      },
      {
        label: "Sổ địa chỉ",
        href: "/address",
        icon: IoLocationOutline,
        active: pathname === "/address",
      },
      {
        label: "Đăng xuất",
        href: "#",
        onClick: () => signOut(),
        icon: RiLogoutBoxLine,
      },
    ],
    [pathname]
  );
  return routes;
};
export default useUserRoutes;
