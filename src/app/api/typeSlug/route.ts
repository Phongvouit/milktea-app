import { prisma } from "@/utils/connect";
import { NextResponse } from "next/server";

//GET ALL TYPE OF SLUG
export const GET = async () => {
  try {
    const types = await prisma.type.findMany();
    return new NextResponse(JSON.stringify(types), { status: 200 });
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
