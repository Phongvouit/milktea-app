# ☕ Coffee Shop App

## 📌 Mô tả dự án
Ứng dụng **Coffee Shop** cho phép người dùng:  
- Đặt đồ uống và thức ăn trực tuyến  
- Thêm vào giỏ hàng  
- Thanh toán trực tiếp qua **Stripe**  
- Quản lý đơn hàng  

Hệ thống được thiết kế với kiến trúc hiện đại, sử dụng **Next.js 13 (App Router)** để kết hợp cả **frontend** và **backend** trong cùng một ứng dụng.

---

## ⚙️ Công nghệ
- **Next.js 13 (App Router)** → xây dựng UI + backend API routes  
- **PostgreSQL** → lưu trữ dữ liệu sản phẩm, người dùng, đơn hàng  
- **Prisma ORM** → quản lý database schema và query đến PostgreSQL  
- **Auth.js (NextAuth)** → xác thực & quản lý session người dùng  
- **Stripe** → xử lý thanh toán online  
- **React Query** → quản lý data fetching (sản phẩm, đơn hàng, giỏ hàng)  
- **Zustand** → quản lý state client (cart, user, UI state)  
- **Tailwind CSS + Shadcn UI** → UI components hiện đại  

---

## 🏗️ Chức năng chính

### 🔑 Authentication
- Đăng ký / Đăng nhập bằng **Auth.js**  
- Quản lý session người dùng  
- Phân quyền (user / admin)  

### 🍽️ Đặt món & giỏ hàng
- Xem danh sách sản phẩm (coffee, đồ ăn, combo)  
- Thêm / xóa sản phẩm vào giỏ hàng (**Zustand** quản lý state)  
- Đồng bộ giỏ hàng theo user (**React Query + API routes**)  

### 💳 Thanh toán
- Tích hợp **Stripe Checkout** để thanh toán đơn hàng  
- Hiển thị trạng thái thanh toán (success, failed, pending)  
- Lưu lịch sử đơn hàng sau khi thanh toán thành công  

### 📦 Quản lý đơn hàng
- **Người dùng**: theo dõi trạng thái đơn hàng  
- **Admin**: quản lý sản phẩm, xác nhận / hoàn thành đơn hàng  

### 🎨 UI/UX
- **Trang chủ**: danh mục sản phẩm nổi bật  
- **Trang sản phẩm**: chi tiết sản phẩm, thêm vào giỏ hàng  
- **Giỏ hàng**: xem và cập nhật giỏ hàng trước khi thanh toán  
- **Thanh toán**: checkout bằng **Stripe**  
- **Dashboard admin**: quản lý menu, người dùng, đơn hàng  
