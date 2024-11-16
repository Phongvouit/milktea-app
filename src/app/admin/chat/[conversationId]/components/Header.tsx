"use client";
import { FullConversationType } from "@/types";
import useOtherUser from "@/hooks/useOtherUser";

interface HeaderProps {
  conversation: FullConversationType;
}

const Header: React.FC<HeaderProps> = ({ conversation }) => {
  const otherUser = useOtherUser(conversation);
  return (
    <header className="bg-white p-4 text-gray-700">
      <h1 className="text-2xl font-semibold">{otherUser?.name}</h1>
    </header>
  );
};

export default Header;
