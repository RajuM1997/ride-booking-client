import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetMyRideQuery } from "@/redux/features/rider/ride.api";
import type { IRide } from "@/types";
import { format } from "date-fns";

const MyRideTable = () => {
  const { data } = useGetMyRideQuery(undefined);

  return (
    <Table className="w-full max-w-7xl mx-auto">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Serial No</TableHead>
          <TableHead>Destination</TableHead>
          <TableHead>Pickup</TableHead>
          <TableHead>Fare</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.data?.length &&
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
              <TableCell className="text-right">
                <Button>Cancel Ride</Button>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default MyRideTable;
