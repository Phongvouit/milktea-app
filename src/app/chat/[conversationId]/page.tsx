import React from "react";
import Header from "@/app/admin/chat/[conversationId]/components/Header";
import getConversationById from "@/app/actions/getConversationById";
import getMessages from "@/app/actions/getMessages";
import Body from "@/app/admin/chat/[conversationId]/components/Body";
import Form from "@/app/admin/chat/[conversationId]/components/Form";

const ConversationId = async ({
  params,
}: {
  params: { conversationId: string };
}) => {
  const conversation = await getConversationById(params.conversationId);
  const messages = await getMessages(params.conversationId);
  return (
    <div>
      {/* <!-- Chat Header --> */}
      {/* <header className="bg-white p-4 text-gray-700">
        <h1 className="text-2xl font-semibold">Alice</h1>
      </header> */}
      <Header conversation={conversation!} />

      {/* <!-- Chat Messages --> */}
      <Body initialMessages={messages} />

      {/* <!-- Chat Input --> */}
      <Form />
    </div>
  );
};

export default ConversationId;
