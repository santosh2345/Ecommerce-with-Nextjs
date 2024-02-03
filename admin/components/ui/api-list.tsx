"use client"

import { useOrigin } from "@/hooks/use-origin";
import { useParams } from "next/navigation";

interface ApiListProps {
    entityName: string;
    entitiyIdName: string;
}


export const ApiList:React.FC<ApiListProps> = ({
    entityName,
    entitiyIdName
}) => {

    const params = useParams()
    const origin = useOrigin()

    const baseUrl = `${origin}/api/${params.storeId}`
    return (
        <div>
        <h1>API List</h1>
        </div>
    )
    }