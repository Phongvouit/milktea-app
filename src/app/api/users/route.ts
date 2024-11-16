import { NextResponse } from "next/server";
import { prisma } from "@/utils/connect";

//GET ALL USERS
export const GET = async () => {
  try {
    const users = await prisma.user.findMany({
      where: {
        isAdmin: false,
      },
    });
    return new NextResponse(JSON.stringify(users), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
