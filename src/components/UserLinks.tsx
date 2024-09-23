"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const UserLinks = () => {
  const { status } = useSession();
  return (
    <div className="text-sm font-bold">
      {status === "authenticated" ? (
        <div>
          <Link href="/orders">Đơn hàng</Link>
          <span className="ml-4 cursor-pointer" onClick={() => signOut()}>
            Thoát
          </span>
        </div>
      ) : (
        <Link href="/login">Đăng nhập</Link>
      )}
    </div>
  );
};

export default UserLinks;
