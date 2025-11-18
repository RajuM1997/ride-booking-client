import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetDriverRideQuery } from "@/redux/features/driver/driver.api";
import type { IRide } from "@/types";
import { format } from "date-fns";
import TableLoader from "../TableLoader";

const DriverRideTable = () => {
  const { data, isLoading } = useGetDriverRideQuery(undefined);
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
            <TableHead className="text-right">Status</TableHead>
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
                <TableCell className="text-right lowercase">
                  {ride.status}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DriverRideTable;
