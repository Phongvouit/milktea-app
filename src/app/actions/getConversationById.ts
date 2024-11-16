import { prisma } from "@/utils/connect";

const getConversationById = async (conversationId: string) => {
  try {
    const conversation = await prisma.conversation.findUnique({
      where: {
        id: conversationId,
      },
      include: {
        users: true,
      },
    });
    return conversation;
  } catch (err) {
    return null;
  }
};
export default getConversationById;
