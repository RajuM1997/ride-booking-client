import RangeInput from "@/components/RangeInput";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { useGetMyRideQuery } from "@/redux/features/rider/rider.api";
import type { IRide } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { Calendar1Icon, Eye } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { z } from "zod";
import TableLoader from "../TableLoader";

const searchSchema = z.object({
  status: z.string().optional(),
  fare: z.any().optional(),
  date: z.date().optional(),
});

const MyRideTable = () => {
  const form = useForm<z.infer<typeof searchSchema>>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      status: "",
      fare: [1, 1000],
      date: undefined,
    },
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [date, setDate] = useState<string | undefined>();
  const [status, setStatus] = useState<string | undefined>();
  const [startFare, setStartFare] = useState<string | undefined>(undefined);
  const [endFare, setEndFare] = useState<string | undefined>(undefined);
  const [clearSearch, setClearSearch] = useState(false);

  const { data, isLoading } = useGetMyRideQuery({
    status,
    createdAt: date,
    startFare,
    endFare,
    limit: 5,
    page: currentPage,
  });

  const handleSearch = async (data: z.infer<typeof searchSchema>) => {
    if (data.date) {
      const newDate = data.date;
      setDate(newDate.toISOString());
    }
    if (data.status) {
      setStatus(data.status);
    }
    if (data.fare[0]) {
      setStartFare(data.fare[0]);
    }
    if (data.fare[1]) {
      setEndFare(data.fare[1]);
    }
    setClearSearch(true);
  };

  const handleClearSearch = () => {
    setDate(undefined);
    setStatus(undefined);
    setStartFare(undefined);
    setEndFare(undefined);
    setClearSearch(false);
    form.reset();
  };
  if (isLoading) {
    return <TableLoader />;
  }
  const totalPage = data?.meta?.total || 1;
  return (
    <div className="w-full max-w-7xl mx-auto">
      <Card className="p-5 mb-5">
        <Form {...form}>
          <form id="search-form" onSubmit={form.handleSubmit(handleSearch)}>
            <div className="flex flex-col gap-3">
              <div className="flex w-full justify-end flex-col gap-6">
                <CardContent className="grid grid-cols-1 md:items-end md:grid-cols-4 gap-6 pt-3">
                  <div className="grid gap-3">
                    <FormField
                      control={form.control}
                      name="fare"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Select a fare 1 to 1000</FormLabel>
                          <FormControl>
                            <RangeInput {...field} />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid gap-3">
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
                              <SelectValue placeholder="Select a status" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value={"REQUESTED"}>
                                Requested
                              </SelectItem>
                              <SelectItem value={"ACCEPTED"}>
                                Accepted
                              </SelectItem>
                              <SelectItem value={"PICKED_UP"}>
                                Picked-Up
                              </SelectItem>
                              <SelectItem value={"IN_TRANSIT"}>
                                In-Transit
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
                                  <Calendar1Icon className="ml-auto h-4 w-4 opacity-50" />
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
                  <div className="flex gap-3 ">
                    <Button form="search-form">Search</Button>
                    {clearSearch && (
                      <Button onClick={handleClearSearch}>Clear</Button>
                    )}
                  </div>
                </CardContent>
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
            <TableHead>Actions</TableHead>
            <TableHead>Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data?.length > 0 &&
            data?.data?.map((ride: IRide, i: number) => (
              <TableRow key={ride._id}>
                <TableCell className="font-medium">{i + 1}</TableCell>
                <TableCell>{ride.destination}</TableCell>
                <TableCell>{ride.pickup}</TableCell>
                <TableCell>{ride.fare}</TableCell>
                <TableCell>
                  {format(new Date(ride?.createdAt), "yyyy-MM-dd")}
                </TableCell>
                <TableCell className="lowercase"> {ride.status}</TableCell>
                <TableCell>
                  <Button disabled={ride.status !== "REQUESTED"}>
                    Cancel Ride
                  </Button>
                </TableCell>
                <TableCell>
                  <Link to={`/ride-details/${ride?._id}`}>
                    <Eye />
                  </Link>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      {totalPage > 1 && (
        <div className="flex justify-center mt-4">
          <div>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => setCurrentPage((prev) => prev - 1)}
                    className={
                      currentPage === 1
                        ? "pointer-events-none opacity-50"
                        : "cursor-pointer"
                    }
                  />
                </PaginationItem>
                {Array.from({ length: totalPage }, (_, index) => index + 1).map(
                  (page) => (
                    <PaginationItem
                      key={page}
                      onClick={() => setCurrentPage(page)}
                    >
                      <PaginationLink isActive={currentPage === page}>
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  )
                )}
                <PaginationItem>
                  <PaginationNext
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                    className={
                      currentPage === totalPage
                        ? "pointer-events-none opacity-50"
                        : "cursor-pointer"
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyRideTable;
