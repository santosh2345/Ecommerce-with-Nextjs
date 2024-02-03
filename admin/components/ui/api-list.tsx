"use client"

interface ApiListProps {
    entityName: string;
    entitiyIdName: string;
}


export const ApiList:React.FC<ApiListProps> = ({
    entityName,
    entitiyIdName
}) => {
    return (
        <div>
        <h1>API List</h1>
        </div>
    )
    }