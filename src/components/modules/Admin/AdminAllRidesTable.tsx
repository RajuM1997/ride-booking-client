import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { IRide, IUser } from "@/types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  useGetAllRidesQuery,
  useGetDriversQuery,
  useGetRidersQuery,
} from "@/redux/features/admin/admin.api";
import { format } from "date-fns";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const searchSchema = z.object({
  driver: z.string().optional(),
  rider: z.string().optional(),
  status: z.string().optional(),
  date: z.date().optional(),
});

const AdminAllRidesTable = () => {
  const form = useForm<z.infer<typeof searchSchema>>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      driver: "",
      rider: "",
      status: "",
      date: undefined,
    },
  });
  const [driver, setDriver] = useState<string | undefined>();
  const [rider, setRider] = useState<string | undefined>();
  const [status, setStatus] = useState<string | undefined>();
  const [date, setDate] = useState<Date | undefined>();
  const [clearSearch, setClearSearch] = useState(false);
  const { data } = useGetAllRidesQuery({
    driver,
    rider,
    status,
    createdAt: date,
  });
  const { data: drivers, isLoading: driverLoading } =
    useGetDriversQuery(undefined);
  const { data: riders, isLoading: riderLoading } =
    useGetRidersQuery(undefined);

  const handleSearch = async (data: z.infer<typeof searchSchema>) => {
    if (data.rider) {
      setRider(data.rider);
    }
    if (data.driver) {
      setDriver(data.driver);
    }
    if (data.status) {
      setStatus(data.status);
    }
    if (data.date) {
      setDate(data.date);
    }
    setClearSearch(true);
  };

  const handleClearSearch = () => {
    setDriver(undefined);
    setRider(undefined);
    setStatus(undefined);
    setDate(undefined);
    setClearSearch(false);
    setClearSearch(false);
    form.reset({
      driver: "",
      rider: "",
      status: "",
      date: undefined,
    });
  };
  console.log(riders);

  return (
    <div className="w-full max-w-7xl mx-auto">
      <Card className="p-5 mb-5">
        <Form {...form}>
          <form id="search-form" onSubmit={form.handleSubmit(handleSearch)}>
            <div className="flex flex-col gap-3">
              <div className="flex w-full justify-end flex-col gap-6">
                <CardContent className="grid grid-cols-1 px-0 md:items-end md:grid-cols-4 gap-6 pt-3">
                  <div className="grid gap-3">
                    <FormField
                      control={form.control}
                      name="driver"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormLabel>Driver</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            disabled={driverLoading}
                            value={field.value}
                          >
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select a driver" />
                            </SelectTrigger>
                            <SelectContent>
                              {drivers?.data?.map((driver: IUser) => (
                                <SelectItem value={driver._id} key={driver._id}>
                                  {driver?.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid gap-3">
                    <FormField
                      control={form.control}
                      name="rider"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormLabel>Riders</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            disabled={riderLoading}
                            value={field.value}
                          >
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select a rider" />
                            </SelectTrigger>
                            <SelectContent>
                              {riders?.data?.riders?.map((rider: IUser) => (
                                <SelectItem key={rider._id} value={rider._id}>
                                  {rider.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid  gap-3">
                    <FormField
                      control={form.control}
                      name="status"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormLabel>Status</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select a activity type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value={"REQUESTED"}>
                                Requested
                              </SelectItem>
                              <SelectItem value={"ACCEPTED"}>
                                Accepted
                              </SelectItem>
                              <SelectItem value={"PICKED_UP"}>
                                Pickup
                              </SelectItem>
                              <SelectItem value={"IN_TRANSIT"}>
                                In-transit
                              </SelectItem>
                              <SelectItem value={"COMPLETE"}>
                                Complete
                              </SelectItem>
                              <SelectItem value={"CANCELLED"}>
                                Cancelled
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid gap-3">
                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem className="flex flex-col flex-1">
                          <FormLabel>Select A Date</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "w-full pl-3 text-left font-normal",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, "PPP")
                                  ) : (
                                    <span>Pick a date</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent
                              className="w-auto p-0"
                              align="start"
                            >
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                captionLayout="dropdown"
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </CardContent>
                <div className="flex gap-3 ml-auto">
                  <Button form="search-form">Search</Button>
                  {clearSearch && (
                    <Button onClick={handleClearSearch}>Clear</Button>
                  )}
                </div>
              </div>
            </div>
          </form>
        </Form>
      </Card>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Serial No</TableHead>
            <TableHead>Destination</TableHead>
            <TableHead>Pickup</TableHead>
            <TableHead>Fare</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data?.length > 0 &&
            data?.data?.map((ride: IRide, i: number) => (
              <TableRow key={ride._id}>
                <TableCell className="font-medium">{i + 1}</TableCell>
                <TableCell className="capitalize">{ride.destination}</TableCell>
                <TableCell className="capitalize">{ride.pickup}</TableCell>
                <TableCell>{ride.fare}</TableCell>
                <TableCell>
                  {format(new Date(ride?.createdAt), "yyyy-MM-dd")}
                </TableCell>
                <TableCell className="lowercase"> {ride.status}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminAllRidesTable;
