"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

const SuccessPage = () => {
  // Sử dụng useSearchParams để lấy giá trị tham số truy vấn orderId
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");
  console.log(orderId);

  const router = useRouter();

  //useEffect được gọi mỗi khi paymentIntent, router thay đổi
  useEffect(() => {
    //Hàm gọi API cập nhật trạng thái đơn hàng
    const makeRequest = async () => {
      try {
        await fetch(`http://localhost:3000/api/confirm/${orderId}`, {
          method: "PUT",
        });
        router.push("/orders");
      } catch (err) {
        console.log(err);
      }
    };

    makeRequest();
  }, [orderId, router]);

  return <div>SuccessPage</div>;
};

export default SuccessPage;
