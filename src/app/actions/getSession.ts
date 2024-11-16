//getServerSession là một hàm của NextAuth, được thiết kế để lấy dữ liệu phiên của người dùng từ phía máy chủ (server-side), cho phép chúng ta có thể truy cập các thông tin phiên mà không cần phụ thuộc vào phía client.
import { getServerSession } from "next-auth";

import { authOptions } from "@/utils/auth";

//Hàm getSession này lấy và trả về dữ liệu phiên người dùng từ phía máy chủ (server-side), dựa trên cấu hình xác thực authOptions.
export default async function getSession() {
  return await getServerSession(authOptions);
}
