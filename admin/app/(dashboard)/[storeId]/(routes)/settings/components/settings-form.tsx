"use client"

import Heading from "@/components/ui/heading";
import { Store } from "@prisma/client"

interface SettingsFormProps {
    initialData: Store;
    }

const SettingsForm:React.FC<SettingsFormProps> = ({
    initialData
}) => {
  return (
    <div className="flex items-center justify-between">
        <Heading
        title = "Settings"
        description = "Update your store settings"
        />
        SettingsForm</div>
  )
}

export default SettingsForm