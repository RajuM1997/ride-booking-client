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
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useUpdateProfileMutation } from "@/redux/features/user/user.api";
import type { IErrorResponse, IUser } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Edit2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const registerSchema = z.object({
  name: z.string(),
  phone: z.string(),
  licenseNumber: z.string(),
  vehicleType: z.string(),
  vehicleNumber: z.string(),
});

type Props = {
  profileData: IUser;
};

const UpdateProfileModal = ({ profileData }: Props) => {
  const [open, setOpen] = useState(false);
  const [updateProfile] = useUpdateProfileMutation();
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: profileData.name || "",
      phone: profileData.phone || "",
      licenseNumber: profileData.driver?.licenseNumber || "",
      vehicleType: profileData.driver?.vehicleType || "",
      vehicleNumber: profileData.driver?.vehicleNumber || "",
    },
  });

  const onSubmit = async (data: z.infer<typeof registerSchema>) => {
    const userInfo = {
      ...data,
      id: profileData._id,
    };
    const toastId = toast.loading("Profile updating...");
    try {
      const result = await updateProfile(userInfo).unwrap();
      if (result.success) {
        toast.success("Profile updated successfully", { id: toastId });
        setOpen(false);
      }
    } catch (error: unknown) {
      setOpen(false);
      const err = error as IErrorResponse;
      toast.error(err?.data?.errorSources[0]?.message, { id: toastId });
    }
  };
  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button size={"icon-sm"}>
            <Edit2 />
          </Button>
        </DialogTrigger>
        <Form {...form}>
          <form id="updateProfile" onSubmit={form.handleSubmit(onSubmit)}>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you&apos;re
                  done.
                </DialogDescription>
              </DialogHeader>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="MR. X" {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">
                      This is your public name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="017XXXXXXXX" {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">
                      This is your public phone.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="licenseNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>License Number</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Khulna"
                        type="#274765FGS44YE"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="sr-only">
                      This is your public license number.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="vehicleType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Vehicle Type</FormLabel>
                    <FormControl>
                      <Input placeholder="30" type="auto" {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">
                      This is your public vehicle type.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="vehicleNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Vehicle Number</FormLabel>
                    <FormControl>
                      <Input placeholder="30" type="DHAKA, 36A" {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">
                      This is your public vehicle number.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button form="updateProfile" type="submit" className="w-full">
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

export default UpdateProfileModal;
