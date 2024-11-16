"use client";
import { User } from "@prisma/client";
import axios from "axios";
import { useCallback } from "react";
import { useRouter } from "next/navigation";

interface UserBoxProps {
  data: User;
}

const UserBox: React.FC<UserBoxProps> = ({ data }) => {
  const router = useRouter();

  const handleClick = useCallback(() => {
    axios
      .post("http://localhost:3000/api/conversations", {
        userId: data.id,
      })
      .then((data) => router.push(`/admin/chat/${data.data?.id}`));
  }, [data, router]);

  return (
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
        <h2 className="text-lg font-semibold">{data?.name}</h2>
        <p className="text-gray-600">Hoorayy!!</p>
      </div>
    </div>
  );
};

export default UserBox;
