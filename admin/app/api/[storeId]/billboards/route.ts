import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request,
    {params}: {params: {storeId: string}}) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { label, imageUrl } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    if (!label) {
      return new NextResponse("Label is required", { status: 400 });
    }
    if (!imageUrl) {
        return new NextResponse("Image URL is required", { status: 400 });
      }


    const billboard = await prismadb.billboard.create({
        data: {
            label,
            imageUrl,
            storeId: params.storeId,
        },
        });

        return NextResponse.json(store);
  } catch (error) {
    console.log("[STORES_POST", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}