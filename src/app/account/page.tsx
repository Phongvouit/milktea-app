"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const AccountPage = () => {
  const { status } = useSession();
  const router = useRouter();

  if (status === "unauthenticated") {
    router.push("/");
  }

  return (
    <h2 className="md:w-1/3 uppercase tracking-wide text-sm sm:text-lg mb-6 text-gray-600 font-semibold">
      Thông tin cá nhân
    </h2>
  );
};

export default AccountPage;
