import { NextResponse } from "next/server";

export async function PATCH(
    req:Request,
    {params}:{params:{storeId: string}},
){
    try {
        
    } catch (error) {
        console.log("[STORE_PATCH]", error);
        return new NextResponse("Internal server error", { status: 500 });
        
    }
} 