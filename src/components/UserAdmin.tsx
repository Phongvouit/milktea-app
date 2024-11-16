"use client";
import { useCallback } from "react";
import { User } from "@prisma/client";
import { useRouter } from "next/navigation";
import axios from "axios";

interface UserAdminProps {
  admin: User;
}

const UserAdmin: React.FC<UserAdminProps> = ({ admin }) => {
  const router = useRouter();

  const handleClick = useCallback(() => {
    axios
      .post("http://localhost:3000/api/conversations", {
        userId: admin.id,
      })
      .then((data) => router.push(`/chat/${data.data?.id}`));
  }, [admin, router]);
  return (
    <div className="overflow-y-auto h-screen p-3 mb-9 pb-20">
      <div
        className="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md"
        onClick={handleClick}
      >
        <div className="w-12 h-12 bg-gray-300 rounded-full mr-3">
          <img
            src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
            alt="User Avatar"
            className="w-12 h-12 rounded-full"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-lg font-semibold">{admin?.name}</h2>
          <p className="text-gray-600">Hoorayy!!</p>
        </div>
      </div>
    </div>
  );
};

export default UserAdmin;
