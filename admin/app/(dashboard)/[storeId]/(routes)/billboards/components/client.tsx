"use client";

import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { Billboard } from "@prisma/client";

interface  BillboardClientProps{
  data: Billboard[],
}

export const BillboardClient: React.FC<BillboardClientProps> = ({data}) => {

    const router = useRouter()
    const params = useParams()




  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Billboards (${data.length})`}
          description="Mange billboards for your store"
        />

        <Button onClick={()=> router.push(`/${params.storeId}/billboards/new`)}>
          <Plus className="mr-2 h-4 w-4" />
          Add new
        </Button>
      </div>

      <Separator />
    </>
  );
};
