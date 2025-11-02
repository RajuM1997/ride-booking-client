import { Button } from "@/components/ui/button";
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
import { useReqARideMutation } from "@/redux/features/rider/ride.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const registerSchema = z.object({
  pickup: z.string(),
  destination: z.string(),
  fare: z.string(),
});

const RideForm = () => {
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      pickup: "",
      destination: "",
      fare: "",
    },
  });
  const [rideRequest] = useReqARideMutation();

  const onSubmit = async (data: z.infer<typeof registerSchema>) => {
    console.log(data);
    const rideInfo = {
      ...data,
      fare: Number(data.fare),
    };
    try {
      const toastId = toast.loading("Ride Making...");
      const result = await rideRequest(rideInfo).unwrap();
      console.log(result);
      if (result.success) {
        toast.success("You ride request successfully created", { id: toastId });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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

          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default RideForm;
