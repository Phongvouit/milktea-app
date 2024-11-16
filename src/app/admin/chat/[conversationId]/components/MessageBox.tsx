"use client";

import { FullMessageType } from "@/types";
import { useSession } from "next-auth/react";
import clsx from "clsx";
import Avatar from "@/components/Avatar";

interface MessageBoxProps {
  data: FullMessageType;
}

const MessageBox: React.FC<MessageBoxProps> = ({ data }) => {
  const session = useSession();
  const isOwn = session?.data?.user?.email === data?.sender?.email;

  const container = clsx("flex mb-4 cursor-pointer items-center gap-4", isOwn && "justify-end");
  const body = clsx(
    "flex max-w-90 rounded-lg p-3 gap-3",
    isOwn ? "bg-green-500 text-white" : "bg-white text-gray-700"
  );
  const avatar = clsx(isOwn && "order-2 mr-2");
  return (
    <div className={container}>
      {/* <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2">
        <img
          src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
          alt="User Avatar"
          className="w-8 h-8 rounded-full"
        />
      </div> */}
      <div className={avatar}>
        <Avatar user={data.sender} />
      </div>
      <div className={body}>
        <p>{data.body}</p>
      </div>
    </div>
  );
};

export default MessageBox;
