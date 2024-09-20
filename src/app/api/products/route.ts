import { prisma } from "@/utils/connect";
import { NextResponse } from "next/server";
import querystring from "query-string";
// import { normalizeString } from "@/utils/normalizeString";

//GET PRODUCTS BY CATEGORY
export const GET = async (request: Request) => {
  try {
    const { slug, type, price, search } = querystring.parse(
      request.url.split("?")[1]
    );

    // Kiểm tra nếu slug không phải là undefined
    if (!slug) {
      return new NextResponse(
        JSON.stringify({ message: "Missing query parameters!" }),
        { status: 400 }
      );
    }

    let products;

    if (price === "asc") {
      products = await prisma.product.findMany({
        where: {
          AND: [
            {
              catSlug: slug as string,
            },
            {
              typeSlug: (type as string) || undefined,
            },
            {
              title: {
                contains: search as string,
                mode: "insensitive",
              },
            },
          ],
        },
        orderBy: {
          price: "asc",
        },
      });
    } else if (price === "desc") {
      products = await prisma.product.findMany({
        where: {
          AND: [
            {
              catSlug: slug as string,
            },
            {
              typeSlug: (type as string) || undefined,
            },
            {
              title: {
                contains: search as string,
                mode: "insensitive",
              },
            },
          ],
        },
        orderBy: {
          price: "desc",
        },
      });
    } else {
      products = await prisma.product.findMany({
        where: {
          AND: [
            {
              catSlug: slug as string,
            },
            {
              typeSlug: (type as string) || undefined,
            },
            {
              title: {
                contains: search as string,
                mode: "insensitive",
              },
            },
          ],
        },
      });
    }

    return new NextResponse(JSON.stringify(products), { status: 200 });
  } catch (err) {
    console.error(err); // Ghi log lỗi để dễ dàng gỡ lỗi
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
