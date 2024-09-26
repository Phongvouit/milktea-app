import { prisma } from "@/utils/connect";
import { NextResponse } from "next/server";

interface IParams {
  id: string;
}

//GET A SINGLE PRODUCT
export const GET = async (req: Request, { params }: { params: IParams }) => {
  try {
    const { id } = params;
    const product = await prisma.product.findUnique({
      where: {
        id: id,
      },
    });
    return new NextResponse(JSON.stringify(product), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
