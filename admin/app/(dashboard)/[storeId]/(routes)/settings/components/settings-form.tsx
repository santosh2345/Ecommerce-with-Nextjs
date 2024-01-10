"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { Store } from "@prisma/client";
import { Trash } from "lucide-react";
import { useForm } from "react-hook-form";
import { set, z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";

interface SettingsFormProps {
  initialData: Store;
}

const formSchema = z.object({
  name: z.string().min(1),
});

type SettingsFormValues = z.infer<typeof formSchema>;

const SettingsForm: React.FC<SettingsFormProps> = ({ initialData }) => {


    const params = useParams<{storeId: string}>();
    const router = useRouter();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useForm<SettingsFormValues>({
    defaultValues: initialData,
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: SettingsFormValues) => {
    try {

        setLoading(true);
        await axios.patch(`/api/stores/${params.storeId}`, data);
        router.refresh();
        toast.success("Store updated successfully");
        
    } catch (error) {
        toast.error("Something went wrong");
        
    }
    finally {
        setLoading(false);
    }
  };
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title="Settings" description="Update your store settings" />
        <Button disabled={loading} variant="destructive" size="icon" onClick={() => setOpen(true)}>
          <Trash className="h-4 w-4" />
        </Button>
      </div>
      <Separator />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <div className="grid grid-cols-3 gap-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>

                  <Input {...field} disabled={loading} placeholder="Store Name" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button disabled={loading} className="ml-auto" type="submit" >
            Save Changes
          </Button>
        </form>
      </Form>
    </>
  );
};

export default SettingsForm;
