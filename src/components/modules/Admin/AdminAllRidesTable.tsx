import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useChangeRideStatusMutation } from "@/redux/features/driver/driver.api";
import type { IErrorResponse, IRide } from "@/types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useGetAllRidesQuery } from "@/redux/features/admin/admin.api";
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
import { Input } from "@/components/ui/input";
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
  const { data } = useGetAllRidesQuery(undefined);
  const [changeRideStatus] = useChangeRideStatusMutation();
  const form = useForm<z.infer<typeof searchSchema>>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      driver: "",
      rider: "",
      status: "",
      date: new Date(),
    },
  });
  const [email, setEmail] = useState<string | undefined>();
  const [name, setName] = useState<string | undefined>();
  const [isActive, setIsActive] = useState<string | undefined>();
  const [clearSearch, setClearSearch] = useState(false);
  const handleStatus = async (status: string, id: string) => {
    const data = {
      id,
      status,
    };

    const toastId = toast.loading("Status Updating...");
    try {
      const res = await changeRideStatus(data).unwrap();
      if (res.success) {
        toast.success(`Currently status is ${data.status}`, { id: toastId });
      }
    } catch (error) {
      const err = error as IErrorResponse;
      toast.error(err?.data?.errorSources[0]?.message, { id: toastId });
    }
  };

  const handleSearch = async (data: z.infer<typeof searchSchema>) => {
    if (data.email) {
      setEmail(data.email);
    }
    if (data.email) {
      setName(data.email);
    }
    if (data.isActive) {
      setIsActive(data.isActive);
    }
    setClearSearch(true);
  };

  const handleClearSearch = () => {
    setEmail(undefined);
    setName(undefined);
    setIsActive(undefined);
    setClearSearch(false);
    form.reset();
  };

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
                            defaultValue={field.value}
                          >
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select a driver" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value={"REQUESTED"}>
                                Requested
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
                      name="rider"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormLabel>Rider</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select a driver" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value={"REQUESTED"}>
                                Requested
                              </SelectItem>
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
                            defaultValue={field.value}
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
