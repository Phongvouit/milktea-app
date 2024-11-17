import { NextResponse } from "next/server";
import { prisma } from "@/utils/connect";
import getCurrentUser from "@/app/actions/getCurrentUser";

export const POST = async (req: Request) => {
  try {
    //Lấy thông tin người dùng hiện tại đang đăng nhập
    const currentUser = await getCurrentUser();

    const body = await req.json();

    //Lấy userId từ dữ liệu body để xác định người dùng thứ hai (đối tượng của cuộc trò chuyện).
    const { userId } = body;

    //Nếu không có currentUser.id hoặc currentUser.email, nghĩa là người dùng chưa xác thực, nên trả về phản hồi HTTP 401 (Unauthorized) kèm thông báo lỗi.
    if (!currentUser?.id || !currentUser?.email) {
      return new NextResponse(JSON.stringify({ message: "Unauthorized" }), {
        status: 401,
      });
    }

    // // tìm các cuộc trò chuyện có tồn tại giữa currentUser.id và userId
    const exisitingConversations = await prisma.conversation.findMany({
      where: {
        AND: [
          {
            users: {
              some: { id: currentUser.id },
            },
          },
          {
            users: {
              some: { id: userId },
            },
          },
        ],
      },
    });

    //Nếu singleConversation tồn tại (khác null), trả về cuộc trò chuyện đó dưới dạng JSON, kết thúc xử lý ở đây.
    const singleConversation = exisitingConversations[0];

    if (singleConversation) {
      return new NextResponse(JSON.stringify(singleConversation));
    }

    //tạo cuộc trò chuyện mới giữa currentUser.id và userId nếu chưa tồn tại
    const newConversation = await prisma.conversation.create({
      data: {
        users: {
          connect: [
            {
              id: currentUser.id as string,
            },
            {
              id: userId as string,
            },
          ],
        },
      },
      include: {
        users: true,
      },
    });

    //Trả về thông tin cuộc trò chuyện mới được tạo dưới dạng JSON.
    return new NextResponse(JSON.stringify(newConversation));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
