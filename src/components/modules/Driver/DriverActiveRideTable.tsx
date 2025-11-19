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
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  useChangeRideStatusMutation,
  useGetDriverActiveRideQuery,
} from "@/redux/features/driver/driver.api";
import type { IErrorResponse, IRide } from "@/types";
import { format } from "date-fns";
import { toast } from "sonner";
import TableLoader from "../TableLoader";

const DriverActiveRideTable = () => {
  const { data, isLoading } = useGetDriverActiveRideQuery("ACCEPTED");
  const [changeRideStatus] = useChangeRideStatusMutation();

  const handleStatus = async (status: string, id: string) => {
    const data = {
      id,
      status,
    };
    console.log(data);

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
  if (isLoading) {
    return <TableLoader />;
  }
  return (
    <div className="w-full max-w-7xl mx-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Serial No</TableHead>
            <TableHead>Destination</TableHead>
            <TableHead>Pickup</TableHead>
            <TableHead>Fare</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Payment Method</TableHead>
            <TableHead>Action</TableHead>
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
                <TableCell className="lowercase">{ride.status}</TableCell>
                <TableCell>{ride?.paymentMethod || "NA"}</TableCell>
                <TableCell className="text-right">
                  <Select
                    onValueChange={(e) => handleStatus(e, ride._id)}
                    defaultValue={ride.status}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ACCEPTED">Accepted</SelectItem>
                      <SelectItem value="PICKED_UP">Picked-up</SelectItem>
                      <SelectItem value="IN_TRANSIT">In-transit</SelectItem>
                      <SelectItem value="COMPLETE">Complete</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
        {!data?.data?.length && (
          <TableCaption>
            You don’t have any active rides at the moment. Accept a ride to view
            your details here.
          </TableCaption>
        )}
      </Table>
    </div>
  );
};

export default DriverActiveRideTable;
