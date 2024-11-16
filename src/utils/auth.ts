import { AuthOptions, User, getServerSession } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { prisma } from "./connect";

declare module "next-auth" {
  interface Session {
    user: User & {
      isAdmin: boolean;
    };
  }
}

export const authOptions: AuthOptions = {
  // Kết nối NextAuth với Prisma để quản lý dữ liệu người dùng trong cơ sở dữ liệu.
  adapter: PrismaAdapter(prisma),
  //Danh sách các nhà cung cấp phương thức xác thực.
  providers: [
    //sử dụng Google làm provider để người dùng có thể đăng nhập qua Google.
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    //Xác thực người dùng bằng email và mật khẩu do chính người dùng cung cấp
    CredentialsProvider({
      name: "credentials",
      //Định nghĩa các trường dữ liệu mà người dùng sẽ nhập vào khi đăng nhập
      credentials: {
        //Trường nhập email, có kiểu text
        email: { label: "email", type: "text" },
        //rường nhập mật khẩu, có kiểu password
        password: { label: "password", type: "password" },
      },
      // Hàm này được gọi khi người dùng nhập thông tin đăng nhập (email và mật khẩu).
      // Nó có nhiệm vụ kiểm tra thông tin người dùng và xác thực xem chúng có hợp lệ hay không. Nếu xác thực thành công,
      // hàm sẽ trả về đối tượng người dùng, nếu không sẽ ném ra lỗi.
      async authorize(credentials) {
        //kiểm tra xem người dùng có cung cấp đủ email và mật khẩu không
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid Credentials");
        }
        //Tìm người dùng trong CSDL dựa trên email(credentials.email)
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user || !user?.hashedPassword) {
          throw new Error("Invalid credentials");
        }
        //So sánh mật khẩu người dùng nhập với mật khẩu đã mã hóa lưu trong CSDL
        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );
        if (!isCorrectPassword) {
          throw new Error("Invalid credentials");
        }

        return user;
      },
    }),
  ],
  //Các hàm callback được thực thi trong quá trình xác thực.
  callbacks: {
    // Callback này được gọi khi NextAuth.js trả về một phiên người dùng.
    async session({ session }) {
      //Đầu tiên, nó tìm người dùng trong cơ sở dữ liệu dựa trên email từ session
      const userData = await prisma.user.findUnique({
        where: {
          email: session.user?.email as string,
        },
      });
      //Sau đó, nó bổ sung thêm thuộc tính isAdmin vào session (lấy giá trị từ trường isAdmin của người dùng trong cơ sở dữ liệu).
      session.user.isAdmin = userData?.isAdmin as boolean;
      return session;
    },
  },
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export const getAuthSession = async () => {
  return await getServerSession(authOptions);
};
