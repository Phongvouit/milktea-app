import { prisma } from "@/utils/connect";
import { NextResponse } from "next/server";

import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export const POST = async (
  req: Request,
  { params }: { params: { orderId: string } }
) => {
  const { orderId } = params;

  //Tìm đơn hàng theo id
  const order = await prisma.order.findUnique({
    where: {
      id: orderId,
    },
  });

  //Tạo một payment intent nếu có đơn hàng
  if (order) {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 100 * 100,
      currency: "usd",
      // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
      automatic_payment_methods: {
        enabled: true,
      },
    });
    //Cập nhật lại đơn hàng đó (thêm intent_id)
    await prisma.order.update({
      where: {
        id: orderId,
      },
      data: {
        intent_id: paymentIntent.id,
      },
    });
    return new NextResponse(
      JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      {
        status: 200,
      }
    );
  } else {
    return new NextResponse(JSON.stringify({ message: "Order not found!" }), {
      status: 404,
    });
  }
};
