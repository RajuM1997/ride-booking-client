/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  riderApi,
  useReqARideMutation,
} from "@/redux/features/rider/rider.api";
import { useAppDispatch } from "@/redux/hook";
import type { IErrorResponse } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { z } from "zod";
import LocationAutocomplete from "./LocationAutoComplete";
import { useEffect, useState } from "react";
import RideReqMap from "./RideReqMap";

const registerSchema = z.object({
  pickup: z.string(),
  destination: z.string(),
  fare: z.string(),
  paymentMethod: z.string(),
});

interface LocationType {
  lat: number;
  lng: number;
}
const getDistanceInKm = (
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
) => {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

const RideForm = () => {
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      pickup: "",
      destination: "",
      fare: "",
      paymentMethod: "",
    },
  });
  const dispatch = useAppDispatch();
  const [rideRequest] = useReqARideMutation();
  const navigate = useNavigate();
  const [locations, setLocations] = useState<LocationType[]>([]);
  useEffect(() => {
    if (locations[0] && locations[1] && locations[0].lat && locations[1].lat) {
      const distance = getDistanceInKm(
        locations[0].lat,
        locations[0].lng,
        locations[1].lat,
        locations[1].lng
      );

      const baseFare = 30;
      const perKmFare = 10;
      const calculatedFare = baseFare + distance * perKmFare;

      form.setValue("fare", Math.round(calculatedFare).toString());
    }
  }, [locations]);

  const onSubmit = async (data: z.infer<typeof registerSchema>) => {
    const rideInfo = {
      ...data,
      fare: Number(data.fare),
    };
    console.log(rideInfo);

    const toastId = toast.loading("Ride Making...");
    try {
      const result = await rideRequest(rideInfo).unwrap();

      if (result.success) {
        toast.success("You ride request successfully created", { id: toastId });
        dispatch(riderApi.util.resetApiState());
        setTimeout(() => {
          navigate("/rider/my-ride");
        }, 1000);
      }
    } catch (error) {
      const err = error as IErrorResponse;
      toast.error(err?.data?.errorSources[0]?.message, { id: toastId });
    }
  };

  return (
    <div className="grid grid-cols-12 gap-6 place-items-center">
      <Card className="p-5 col-span-12 lg:col-span-4 w-full">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="pickup"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pickup</FormLabel>
                  <FormControl>
                    <LocationAutocomplete
                      value={field.value}
                      onChange={field.onChange}
                      placeholder="Search pickup location"
                      setLocations={setLocations}
                      index={0}
                    />
                  </FormControl>
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
                    <LocationAutocomplete
                      value={field.value}
                      onChange={field.onChange}
                      placeholder="Search destination"
                      setLocations={setLocations}
                      index={1}
                    />
                  </FormControl>
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
                    <Input disabled placeholder="30" type="string" {...field} />
                  </FormControl>
                  <FormDescription className="sr-only">
                    This is your public fare.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid gap-3">
              <FormField
                control={form.control}
                name="paymentMethod"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Payment Method</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a payment method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value={"CASH"}>Cash</SelectItem>
                        <SelectItem value={"CARD"}>Card</SelectItem>
                        <SelectItem value={"WALLET"}>Wallet</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" className="w-full">
              Req A Ride
            </Button>
          </form>
        </Form>
      </Card>
      <div className="col-span-12 lg:col-span-8 w-full">
        <RideReqMap pickup={locations[0]} destination={locations[1]} />
      </div>
    </div>
  );
};

export default RideForm;
