import prismadb from "@/lib/prismadb";
import BillboardForm from "./components/billboard-form";

const SizePage = async ({
  params,
}: {
  params: { sizeId: string };
}) => {
  const size = await prismadb.size.findUnique({
    where: {
      id: params.sizeId,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
      <BillboardForm  initialData={size}/>
      </div>
     
    </div>
  );
};

export default SizePage;
