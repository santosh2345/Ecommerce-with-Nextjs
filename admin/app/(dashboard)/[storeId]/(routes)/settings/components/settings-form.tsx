"use client"

import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Store } from "@prisma/client"
import { Trash } from "lucide-react";

interface SettingsFormProps {
    initialData: Store;
    }

const SettingsForm:React.FC<SettingsFormProps> = ({
    initialData
}) => {
  return (
    <>
    <div className="flex items-center justify-between">
        <Heading
        title = "Settings"
        description = "Update your store settings"
        />
        <Button
        variant='destructive'
        size='icon'
        onClick={()=>{}}
        >
            <Trash className="h-4 w-4" />

        </Button>
        </div>
        <Separator />   
        </>
  )
}

export default SettingsForm