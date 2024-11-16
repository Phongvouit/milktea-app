"use client";

import UserBox from "./UserBox";
import { User } from "@prisma/client";

interface UserListProps {
  items: User[];
}

export const UserList: React.FC<UserListProps> = ({ items }) => {
  return (
    <div className="overflow-y-auto h-screen p-3 mb-9 pb-20">
      {items.map((item) => (
        <UserBox key={item.id} data={item}/>
      ))}
    </div>
  );
};
