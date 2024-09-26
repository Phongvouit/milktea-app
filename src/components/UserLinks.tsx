"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";

const UserLinks = () => {
  const { status } = useSession();
  return (
    <div className="text-sm font-bold">
      {status === "authenticated" ? (
        <Link href="/account">
          <FaUserCircle size={30} className="text-green-800 cursor-pointer" />
        </Link>
      ) : (
        <Link href="/login">Đăng nhập</Link>
      )}
    </div>
  );
};

export default UserLinks;
