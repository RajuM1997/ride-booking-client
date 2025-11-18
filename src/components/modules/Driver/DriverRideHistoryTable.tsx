import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useGetDriverRideQuery } from "@/redux/features/driver/driver.api";
import type { IRide } from "@/types";
import { format } from "date-fns";
import { useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import TableLoader from "../TableLoader";

const searchSchema = z.object({
  pickup: z.string().optional(),
  destination: z.string().optional(),
  date: z.date().optional(),
});

const DriverRideHistoryTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const form = useForm<z.infer<typeof searchSchema>>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      pickup: "",
      destination: "",
      date: undefined,
    },
  });
  const [date, setDate] = useState<string | undefined>();
  const [pickup, setPickup] = useState<string | undefined>();
  const [destination, setDestination] = useState<string | undefined>(undefined);
  const [clearSearch, setClearSearch] = useState(false);
  const { data, isLoading } = useGetDriverRideQuery({
    page: currentPage,
    limit: 10,
    pickup,
    destination,
    createdAt: date,
  });

  const handleSearch = async (data: z.infer<typeof searchSchema>) => {
    if (data.date) {
      const newDate = data.date;
      setDate(newDate.toISOString());
    }
    if (data.pickup) {
      setPickup(data.pickup);
    }
    if (data.destination) {
      setDestination(data.destination);
    }
    setClearSearch(true);
  };

  const handleClearSearch = () => {
    setDate(undefined);
    setPickup(undefined);
    setDestination(undefined);
    setClearSearch(false);
    form.reset();
  };
  if (isLoading) {
    return <TableLoader />;
  }
  const totalPage = data?.meta?.totalPage || 1;

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
                      name="pickup"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Pickup</FormLabel>
                          <FormControl>
                            <Input placeholder="pickup" {...field} />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid gap-3">
                    <FormField
                      control={form.control}
                      name="destination"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Destination</FormLabel>
                          <FormControl>
                            <Input placeholder="destination" {...field} />
                          </FormControl>

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
      <Table className="min-h-[65vh]">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Serial No</TableHead>
            <TableHead>Destination</TableHead>
            <TableHead>Pickup</TableHead>
            <TableHead>Fare</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Payment Method</TableHead>
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
                <TableCell>৳{ride.fare}</TableCell>
                <TableCell>
                  {format(new Date(ride?.createdAt), "yyyy-MM-dd")}
                </TableCell>
                <TableCell className="">
                  {" "}
                  {ride?.paymentMethod || "Na"}
                </TableCell>
                <TableCell className="lowercase"> {ride.status}</TableCell>
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

export default DriverRideHistoryTable;
