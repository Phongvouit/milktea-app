import { NextResponse } from "next/server";
import { prisma } from "@/utils/connect";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { pusherServer } from "@/utils/pusher";

export const POST = async (req: Request) => {
  try {
    //Nhận dữ liệu từ yêu cầu HTTP.
    const body = await req.json();
    const { message, image, conversationId } = body;
    const currentUser = await getCurrentUser();

    //Tạo một bản ghi tin nhắn mới trong cơ sở dữ liệu.
    const newMessage = await prisma.message.create({
      data: {
        body: message,
        image: image,
        converation: {
          connect: {
            id: conversationId,
          },
        },
        sender: {
          connect: {
            id: currentUser?.id,
          },
        },
      },
      include: {
        sender: true,
      }
    });

    //Cập nhật thời gian tin nhắn cuối cùng và liên kết tin nhắn mới với cuộc hội thoại.
    const updatedConversation = await prisma.conversation.update({
      where: {
        id: conversationId,
      },
      data: {
        lastMessageAt: new Date(),
        messages: {
          connect: {
            id: newMessage.id,
          },
        },
      },
      include: {
        users: true,
        messages: true,
      },
    });

    //Server phát ra sự kiện real-time có tên là "messages:new" với dữ liệu newMessage đến client đã đăng ký kênh conversationId
    await pusherServer.trigger(conversationId, "messages:new", newMessage);

    //Tìm tin nhắn cuối cùng trong danh sách tin nhắn của cuộc trò chuyện updatedConversation.
    const lastMessage =
      updatedConversation.messages[updatedConversation.messages.length - 1];

    //Server phát ra sự kiện real-time có tên là "message:update" với dữ liệu lastMessage đến client đã đăng ký kênh conversationId
    await pusherServer.trigger(conversationId!, "message:update", lastMessage)

    //Server phát ra sự kiện real-time có tên là "conversation:updated" với dữ liệu conversationId, lastMessage đến client đã đăng ký kênh user.email
    updatedConversation.users.map((user) => {
      pusherServer.trigger(user.email!, "conversation:update", {
        id: conversationId,
        messages: [lastMessage],
      });
    });



    //Trả về phản hồi thành công với dữ liệu tin nhắn mới.
    return new NextResponse(JSON.stringify(newMessage), { status: 200 });

    //Xử lý lỗi nếu có bất kỳ bước nào thất bại.
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
