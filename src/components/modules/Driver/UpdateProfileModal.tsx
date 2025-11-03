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
import { zodResolver } from "@hookform/resolvers/zod";
import { Edit2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const registerSchema = z.object({
  pickup: z.string(),
  destination: z.string(),
  fare: z.string(),
});

const UpdateProfileModal = () => {
  const [open, setOpen] = useState(false);
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      pickup: "",
      destination: "",
      fare: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof registerSchema>) => {
    console.log(data);
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
          <form onSubmit={form.handleSubmit(onSubmit)}>
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
                name="pickup"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pickup</FormLabel>
                    <FormControl>
                      <Input placeholder="Dhaka" {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">
                      This is your public pickup.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="destination"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Destination</FormLabel>
                    <FormControl>
                      <Input placeholder="Khulna" type="string" {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">
                      This is your public destination.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="fare"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Fare</FormLabel>
                    <FormControl>
                      <Input placeholder="30" type="string" {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">
                      This is your public fare.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit" className="w-full">
                  Submit
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
