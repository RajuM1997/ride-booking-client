import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAdminUpdateDriverMutation } from "@/redux/features/admin/admin.api";
import type { IErrorResponse, IUser } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const registerSchema = z.object({
  isActive: z.string(),
});

type Props = {
  profileData: IUser;
};

const AdminUserActivityUpdate = ({ profileData }: Props) => {
  const [open, setOpen] = useState(false);
  const [updateDriverProfile] = useAdminUpdateDriverMutation();

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      isActive: profileData.isActive || "",
    },
  });

  const onSubmit = async (data: z.infer<typeof registerSchema>) => {
    const userInfo = {
      ...data,
      id: profileData._id,
    };
    const toastId = toast.loading("Updating driver status...");
    try {
      console.log(userInfo);

      const result = await updateDriverProfile(userInfo).unwrap();
      if (result.success) {
        toast.success("Driver status updated successfully", { id: toastId });
        setOpen(false);
      }
    } catch (error: unknown) {
      setOpen(false);
      const err = error as IErrorResponse;
      console.log(err);

      toast.error(err?.data?.errorSources[0]?.message, { id: toastId });
    }
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button size={"sm"}>Update Activity</Button>
        </DialogTrigger>
        <Form {...form}>
          <form id="update-user-active" onSubmit={form.handleSubmit(onSubmit)}>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Updated Activity Status</DialogTitle>
                <DialogDescription>
                  Make changes to user activity here. Click save when
                  you&apos;re done.
                </DialogDescription>
              </DialogHeader>
              <FormField
                control={form.control}
                name="isActive"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Status</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a activity type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value={"ACTIVE"}>Active</SelectItem>
                        <SelectItem value={"BLOCKED"}>Block</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button
                  form="update-user-active"
                  type="submit"
                  className="w-full"
                >
                  Update
                </Button>
              </DialogFooter>
            </DialogContent>
          </form>
        </Form>
      </Dialog>
    </div>
  );
};

export default AdminUserActivityUpdate;
