import {format} from "date-fns";
import { SizesClient } from "./components/client";
import prismadb from "@/lib/prismadb";
import { ColorColumn } from "./components/columns";

const Colors = async ({ params }: { params: { storeId: string } }) => {
  const colors = await prismadb.color.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedColors: ColorColumn[] = colors.map(
    (color) => ({
      id: color.id,
      name: color.name,
      value: color.value,
      createdAt: format(color.createdAt, "MMMM do, yyyy"),

    })
  );

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SizesClient data={formattedColors} />
      </div>
    </div>
  );
};

export default Colors;
