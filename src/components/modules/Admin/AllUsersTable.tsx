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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetAllUserQuery } from "@/redux/features/admin/admin.api";
import { useChangeRideStatusMutation } from "@/redux/features/driver/driver.api";
import type { IErrorResponse, IUser } from "@/types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const searchSchema = z.object({
  email: z.string().optional(),
  name: z.string().optional(),
  isActive: z.string().optional(),
});

const AllUsersTable = () => {
  const [activeTab, setActiveTab] = useState("RIDER");
  const { data } = useGetAllUserQuery({ role: activeTab });
  const [changeRideStatus] = useChangeRideStatusMutation();
  const form = useForm<z.infer<typeof searchSchema>>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      email: "",
      name: "",
      isActive: "",
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

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    console.log("Active tab value:", value);
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
                <CardContent className="grid grid-cols-1 md:items-end md:grid-cols-4 gap-6 pt-3">
                  <div className="grid gap-3">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid  gap-3">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="name" {...field} />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid  gap-3">
                    <FormField
                      control={form.control}
                      name="isActive"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormLabel>Activity</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select a activity type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value={"true"}>True</SelectItem>
                              <SelectItem value={"false"}>False</SelectItem>
                            </SelectContent>
                          </Select>
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
      <Tabs
        value={activeTab}
        onValueChange={handleTabChange}
        className="w-full"
      >
        <TabsList className="my-5 ml-auto">
          <TabsTrigger value="RIDER">Rider</TabsTrigger>
          <TabsTrigger value="DRIVER">Driver</TabsTrigger>
        </TabsList>
        <TabsContent value="RIDER">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Serial No</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Delete Status</TableHead>
                <TableHead>Active Status</TableHead>
                <TableHead>Verified Status</TableHead>
                <TableHead>Role</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data?.data?.length &&
                data?.data?.map((user: IUser, i: number) => (
                  <TableRow key={user._id}>
                    <TableCell className="font-medium">{i + 1}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.phone}</TableCell>
                    <TableCell>{user.isDeleted ? "true" : "false"}</TableCell>
                    <TableCell className="lowercase">{user.isActive}</TableCell>
                    <TableCell>{user.isVerified ? "true" : "false"}</TableCell>
                    <TableCell className="lowercase">{user.role}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TabsContent>
        <TabsContent value="DRIVER">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Serial No</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Delete Status</TableHead>
                <TableHead>Active Status</TableHead>
                <TableHead>Verified Status</TableHead>
                <TableHead>Role</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data?.data?.length &&
                data?.data?.map((user: IUser, i: number) => (
                  <TableRow key={user._id}>
                    <TableCell className="font-medium">{i + 1}</TableCell>
                    <TableCell className="capitalize">{user.name}</TableCell>
                    <TableCell className="capitalize">{user.email}</TableCell>
                    <TableCell>{user.phone}</TableCell>
                    <TableCell className="lowercase">
                      {user.isDeleted ? "True" : "False"}
                    </TableCell>
                    <TableCell className="lowercase">{user.isActive}</TableCell>
                    <TableCell className="lowercase">
                      {user.isVerified ? "True" : "False"}
                    </TableCell>
                    <TableCell className="lowercase">{user.role}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AllUsersTable;
