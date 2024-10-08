import { NextResponse } from "next/server";
import { getAuthSession } from "@/utils/auth";
import { prisma } from "@/utils/connect";

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
