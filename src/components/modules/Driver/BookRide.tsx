import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import {
  useDriverCancelRideMutation,
  useDriverRideBookingMutation,
  useGetAllRideQuery,
} from "@/redux/features/driver/driver.api";
import type { IErrorResponse, IRide } from "@/types";
import type { IDriverStatus } from "@/types/ride.type";
import { format } from "date-fns";
import { toast } from "sonner";

const BookRide = () => {
  const { data } = useGetAllRideQuery(undefined);
  const { data: userData } = useUserInfoQuery(undefined);
  const [cancelRide] = useDriverCancelRideMutation();
  const [bookingRide] = useDriverRideBookingMutation();

  const handleRideBooking = async (rideId: string) => {
    const toastId = toast.loading("Ride booking...");
    try {
      const result = await bookingRide(rideId).unwrap();
      if (result.success) {
        toast.success("Ride booking successfully", { id: toastId });
      }
    } catch (error: unknown) {
      const err = error as IErrorResponse;

      toast.error(err?.data?.message, { id: toastId });
    }
  };

  const handleCancelRide = async (rideId: string) => {
    const toastId = toast.loading("Ride cancelling...");
    try {
      const result = await cancelRide(rideId).unwrap();
      if (result.success) {
        toast.success("Ride cancel successfully", { id: toastId });
      }
    } catch (error: unknown) {
      const err = error as IErrorResponse;
      toast.error(err?.data?.message, { id: toastId });
    }
  };

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
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {userData?.data?.driver?.isAvailability === "ONLINE" && (
            <>
              {data?.data?.length > 0 &&
                data?.data?.map((ride: IRide, i: number) => (
                  <TableRow key={ride._id}>
                    <TableCell className="font-medium">{i + 1}</TableCell>
                    <TableCell className="capitalize">
                      {ride.destination}
                    </TableCell>
                    <TableCell className="capitalize">{ride.pickup}</TableCell>
                    <TableCell>{ride.fare}</TableCell>
                    <TableCell>
                      {format(new Date(ride?.createdAt), "yyyy-MM-dd")}
                    </TableCell>
                    <TableCell className="lowercase"> {ride.status}</TableCell>
                    <TableCell className="text-right">
                      <Button
                        disabled={ride?.driverRideStatus?.some(
                          (rideStatus: IDriverStatus) =>
                            rideStatus.driverId === userData?.data?._id
                        )}
                        size={"sm"}
                        onClick={() => handleRideBooking(ride._id)}
                      >
                        Book A Ride
                      </Button>
                      <Button
                        disabled={ride?.driverRideStatus?.some(
                          (rideStatus: IDriverStatus) =>
                            rideStatus.driverId === userData?.data?._id
                        )}
                        size={"sm"}
                        className="ml-2 min-w-[140px]"
                        onClick={() => handleCancelRide(ride._id)}
                      >
                        {ride?.driverRideStatus?.some(
                          (rideStatus: IDriverStatus) =>
                            rideStatus.driverId === userData?.data?._id
                        )
                          ? "All-Ready Cancel"
                          : "Cancel A Ride"}
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </>
          )}
        </TableBody>
        {userData?.data?.driver?.isAvailability === "OFFLINE" && (
          <TableCaption>
            You are currently Offline. To accept ride requests, switch your
            status to Online.
          </TableCaption>
        )}
      </Table>
    </div>
  );
};

export default BookRide;
