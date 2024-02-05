import {format} from "date-fns";
import { SizesClient } from "./components/client";
import prismadb from "@/lib/prismadb";
import { SizeColumn } from "./components/columns";

const Sizes = async ({ params }: { params: { storeId: string } }) => {
  const sizes = await prismadb.size.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedSizes: SizeColumn[] = sizes.map(
    (size) => ({
      id: size.id,
      name: size.name,
      value: size.value,

    })
  );

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SizesClient data={formattedSizes} />
      </div>
    </div>
  );
};

export default Sizes;
