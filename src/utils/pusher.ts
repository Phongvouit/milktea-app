import PusherServer from "pusher";
import PusherClient from "pusher-js";

//Tạo một đối tượng pusherServer để quản lý việc gửi thông báo hoặc xử lý sự kiện real-time từ phía server.
export const pusherServer = new PusherServer({
  appId: process.env.PUSHER_APP_ID!,
  key: process.env.NEXT_PUBLIC_PUSHER_APP_KEY!,
  secret: process.env.PUSHER_SECRET!,
  cluster: "ap1",
  useTLS: true,
});

//Tạo một đối tượng pusherClient để quản lý kết nối và nhận sự kiện từ phía client (trình duyệt).
export const pusherClient = new PusherClient(
  process.env.NEXT_PUBLIC_PUSHER_APP_KEY!,
  {
    channelAuthorization: {
      endpoint: "/api/pusher/auth",
      transport: "ajax",
    },
    cluster: "ap1",
  }
);
