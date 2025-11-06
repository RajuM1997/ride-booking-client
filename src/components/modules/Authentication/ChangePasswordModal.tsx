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
import Password from "@/components/ui/Password";
import {
  useChangePasswordMutation,
  useLoginMutation,
} from "@/redux/features/auth/auth.api";
import type { IErrorResponse } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { z } from "zod";

const registerSchema = z.object({
  oldPassword: z.string().min(8, {
    error: "Password is too short",
  }),
  newPassword: z.string().min(8, {
    error: "Password is too short",
  }),
});

const ChangePassword = () => {
  const [open, setOpen] = useState(false);
  const [logout] = useLoginMutation();
  const navigate = useNavigate();
  const [changePassword] = useChangePasswordMutation();
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      oldPassword: "",
      newPassword: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof registerSchema>) => {
    const toastId = toast.loading("Password updating...");
    try {
      const result = await changePassword(data).unwrap();
      console.log(result);

      if (result.success) {
        setOpen(false);

        setTimeout(async () => {
          await logout(undefined);
          navigate("/login");
        }, 1000);
        toast.success("Password updated successfully", { id: toastId });
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
          <Button variant={"outline"}>Reset Password</Button>
        </DialogTrigger>
        <Form {...form}>
          <form id="reset-password" onSubmit={form.handleSubmit(onSubmit)}>
            <DialogContent className="sm:max-w-[425px] py-5">
              <DialogHeader>
                <DialogTitle>Reset Password</DialogTitle>
                <DialogDescription>Change you password...</DialogDescription>
              </DialogHeader>
              <FormField
                control={form.control}
                name="oldPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Old Password</FormLabel>
                    <FormControl>
                      <Password {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">
                      This is your old password.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="newPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New Password</FormLabel>
                    <FormControl>
                      <Password {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">
                      This is your new password.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button form="reset-password" type="submit" className="w-full">
                  Reset Password
                </Button>
              </DialogFooter>
            </DialogContent>
          </form>
        </Form>
      </Dialog>
    </div>
  );
};

export default ChangePassword;
