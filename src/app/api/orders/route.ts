import { NextResponse } from "next/server";
import { getAuthSession } from "@/utils/auth";
import { prisma } from "@/utils/connect";
import { CartItemType } from "@/types";

//GET ALL ORDERS
export const GET = async () => {
  const session = await getAuthSession();
  if (session) {
    try {
      if (session.user.isAdmin) {
        const orders = await prisma.order.findMany({
          include: {
            items: {
              include: {
                product: true,
              },
            },
          },
        });
        return new NextResponse(JSON.stringify(orders), { status: 200 });
      }
      const orders = await prisma.order.findMany({
        where: {
          userEmail: session.user.email!,
        },
        include: {
          items: {
            include: {
              product: true,
            },
          },
        },
      });
      return new NextResponse(JSON.stringify(orders), { status: 200 });
    } catch (err) {
      console.log(err);
      return new NextResponse(
        JSON.stringify({ message: "Something went wrong!" }),
        { status: 500 }
      );
    }
  } else {
    return new NextResponse(
      JSON.stringify({ message: "You are not authenticated!" }),
      { status: 401 }
    );
  }
};

//CREATE ORDER
export const POST = async (req: Request) => {
  const session = await getAuthSession();
  if (session) {
    try {
      const body = await req.json();
      const { price, status, email, items } = body;

      const order = await prisma.order.create({
        data: {
          price: price,
          status: status,
          user: {
            connect: {
              email: email,
            },
          },
        },
      });

      await prisma.item.createMany({
        data: items.map((item: CartItemType) => ({
          orderId: order.id,
          productId: item.id,
          quantity: item.quantity,
          size: item.size,
          price: item.price,
        })),
      });

      const createdOrder = await prisma.order.findUnique({
        where: { id: order.id },
        include: {
          user: true,
          items: {
            include: {
              product: true,
            },
          },
        },
      });
      return new NextResponse(JSON.stringify(createdOrder), { status: 201 });
    } catch (err) {
      console.log(err);
      return new NextResponse(
        JSON.stringify({ message: "Something went wrong!" }),
        { status: 500 }
      );
    }
  } else {
    return new NextResponse(
      JSON.stringify({ message: "You are not authenticated!" }),
      { status: 401 }
    );
  }
};
