import { NextResponse } from "next/server";
import { prisma } from "@/utils/connect";

export const PUT = async (req: Request,{ params }: { params: { orderId: string } }) => {
  const { orderId } = params;
  try {
    await prisma.order.update({
      where: {
        id: orderId,
      },
      data: {
        status: "Đã thanh toán",
      },
    });
    return new NextResponse(
      JSON.stringify({ message: "Order has been updated!" }),
      {
        status: 200,
      }
    );
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      {
        status: 500,
      }
    );
  }
};
