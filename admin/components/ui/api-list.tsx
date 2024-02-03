"use client"

import { useOrigin } from "@/hooks/use-origin";
import { useParams } from "next/navigation";
import ApiAlert from "@/components/ui/api-alert";

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
        <>
        <ApiAlert />
        </>
    )
    }