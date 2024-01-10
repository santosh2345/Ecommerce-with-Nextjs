import { Server } from "lucide-react";
import { Alert, AlertTitle } from "@/components/ui/alert";

interface ApiAlertProps{
    title: string;
    description: string;
    variant: "public" | "admin";
}

const textMap: Record<ApiAlertProps["variant"], string> = {
    public: "Public",
    admin: "Admin"
}

const VariantMap: Record<ApiAlertProps["variant"], string> = {
    public: "Secondary",
    admin: "Destructive"
}


const ApiAlert: React.FC<ApiAlertProps> = ({
    title,
    description,
    variant,
}) => {

    return (
        <Alert>
            <Server className="h-4 w-4" />

            <AlertTitle className="flex items-center gap-x-2">
                {title}
            </AlertTitle>

        </Alert>
    )
}

export default ApiAlert;