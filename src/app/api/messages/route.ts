import { NextResponse } from "next/server";
import { prisma } from "@/utils/connect";
import getCurrentUser from "@/app/actions/getCurrentUser";

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
    });

    //Cập nhật thời gian tin nhắn cuối cùng và liên kết tin nhắn mới với cuộc hội thoại.
    await prisma.conversation.update({
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
