import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";


// Path: admin/app/api/%5BstoreId%5D/categories/route.ts
export async function POST(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { name, billboardId } = body;

    // CHECK IF THE USER IS AUTHENTICATED

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 401 });
    }
    // CHECK IF THE NAME AND BILLBOARD ID EXISTS
    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }
    // CHECK IF THE BILLBOARD ID EXISTS
    if (!billboardId) {
      return new NextResponse("Billboard Id is required", { status: 400 });
    }
    // CHECK IF THE STORE ID EXISTS

    if (!params.storeId) {
      return new NextResponse("Store id is required", { status: 400 });
    }


    // CHECK IF THE STORE EXISTS
    const storeByUserId = await prismadb.store.findFirst({
      where: {
        id: params.storeId,
        userId,
      },
    });

    if (!storeByUserId) {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    // CREATE A CATEGORY
    const category = await prismadb.category.create({
      data: {
        name,
        billboardId,
        storeId: params.storeId,
      },
    });

    // RETURN THE CATEGORY
    return NextResponse.json(category);
  } catch (error) {
    console.log("[CATEGORY_POST]", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}

// Path: admin/app/api/%5BstoreId%5D/categories/route.ts
//  GET /api/:storeId/categories
export async function GET(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    if (!params.storeId) {
      return new NextResponse("Store id is required", { status: 400 });
    }

    // CREATE A QUERY TO GET ALL CATEGORIES BY STORE ID
    const category = await prismadb.category.findMany({
      where: {
        storeId: params.storeId,
      },
    });

    // RETURN THE CATEGORIES
    return NextResponse.json(category);
  } catch (error) {
    console.log("[CATEGORY_POST", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
