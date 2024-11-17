"use client";
import { FullMessageType } from "@/types";
import { useEffect, useState } from "react";
import MessageBox from "./MessageBox";
import useConversation from "@/hooks/useConversation";
import { pusherClient } from "@/utils/pusher";
import { find } from "lodash";

interface BodyProps {
  initialMessages: FullMessageType[];
}

const Body: React.FC<BodyProps> = ({ initialMessages }) => {
  const [messages, setMessages] = useState(initialMessages);

  const conversationId = useConversation();

  useEffect(() => {
    //Client đăng ký kênh conversationId, client sẽ nhận được sự kiện "messages:new" phát ra từ server trên kênh conversationId
    pusherClient.subscribe(conversationId);

    const messageHandler = (message: FullMessageType) => {
      // Hàm setMessages nhận một callback, trong đó:
      // current đại diện cho danh sách tin nhắn hiện tại (state hiện tại).
      // Callback trả về danh sách tin nhắn mới sau khi xử lý.
      setMessages((current) => {
        if (find(current, { id: message.id })) {
          return current;
        }

        return [...current, message];
      });
    };

    // const updateMessageHandler = (newMessage: FullMessageType) => {
    //   setMessages((current) =>
    //     current.map((currentMessage) => {
    //       if (currentMessage.id === newMessage.id) {
    //         return newMessage;
    //       }
    //       return currentMessage;
    //     })
    //   );
    // };

    //Sau khi client nhận được sự kiện "messages:new", hàm messageHandler  được gọi để xử lý dữ liệu
    pusherClient.bind("messages:new", messageHandler);

    //Sau khi client nhận được sự kiện "message:update", hàm updatedMessageHandler  được gọi để xử lý dữ liệu
    // pusherClient.bind("message:update", updateMessageHandler);

    return () => {
      //Khi component bị unmount thì client hủy đăng ký kênh conversationId
      pusherClient.unsubscribe(conversationId);
      // Khi component bị unmount thì hủy liên kết sự kiện "messages:new" với handler messageHandler.
      pusherClient.unbind("messages:new");
      // Khi component bị unmount thì hủy liên kết sự kiện "message:update" với handler updateMessageHandler.
      // pusherClient.unbind("message:update", updateMessageHandler);
    };
  }, [conversationId]);
  console.log("messages", messages)

  return (
    <div className="h-full overflow-y-auto p-4 pb-36">
      {messages.map((message) => (
        <MessageBox key={message.id} data={message} />
      ))}
    </div>
  );
};

export default Body;
