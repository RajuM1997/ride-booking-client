import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { useGetSingleRideQuery } from "@/redux/features/rider/rider.api";
import type { ICurrentStatus } from "@/types/ride.type";
import { format } from "date-fns";
import { MapPin, Clock, User, Smartphone, Star } from "lucide-react";
import { Link, useParams } from "react-router";
import RideMap from "./RideMap";
import { getLatLng } from "@/utils/getLatLog";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";

interface ICoord {
  lat: number;
  lng: number;
}

export default function RideDetailsPage() {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleRideQuery({ id });
  const [pickup, setPickup] = useState<ICoord | null>(null);
  const [destination, setDestination] = useState<ICoord | null>(null);
  useEffect(() => {
    if (data?.data?.destination) {
      getLatLng(data?.data?.destination as string).then((data) =>
        setDestination(data)
      );
      getLatLng(data?.data?.pickup as string).then((data) => setPickup(data));
    }
  }, [data?.data?.destination, data?.data?.pickup]);
  const timeline = [
    { label: "Ride Requested", time: "10:15 AM", status: "done" },
    { label: "Driver Accepted", time: "10:17 AM", status: "done" },
    { label: "Driver Arriving", time: "10:20 AM", status: "done" },
    { label: "Ride Started", time: "10:25 AM", status: "done" },
    { label: "Ride Completed", time: "10:55 AM", status: "active" },
  ];
  console.log(pickup);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className=" mx-auto p-6 space-y-6">
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold">Ride Details</h1>
            <Link to="/rider/my-ride">
              <Button variant={"outline"}>Back to Dashboard</Button>
            </Link>
          </div>

          <Card className="rounded-2xl shadow-sm">
            <CardHeader className="flex">
              <h2 className="text-xl font-semibold">Route Overview</h2>
            </CardHeader>
            <CardContent>
              <div className="w-full h-86 bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
                {pickup?.lat ? (
                  <RideMap destination={destination} pickup={pickup} />
                ) : (
                  <p>(Map Preview)</p>
                )}
              </div>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Pickup Location</p>
                    <p className="text-sm text-muted-foreground">
                      {data?.data?.pickup}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary rotate-180" />
                  <div>
                    <p className="font-medium">Destination</p>
                    <p className="text-sm text-muted-foreground">
                      {data?.data?.destination}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl text-primary">৳</span>
                  <div>
                    <p className="font-medium">Fare</p>
                    <p className="text-sm text-muted-foreground">
                      {data?.data?.fare}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {data?.data?.status === "REQUESTED" ? (
            <Card className="rounded-2xl shadow-sm">
              <p className="px-5 text-center">
                No drivers are available right now. Please try again in a few
                minutes.
              </p>
            </Card>
          ) : (
            <>
              <Card className="rounded-2xl shadow-sm">
                <CardHeader>
                  <h2 className="text-xl font-semibold">Driver Information</h2>
                </CardHeader>
                <CardContent className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-muted rounded-full flex items-center justify-center">
                    <User className="h-7 w-7 text-muted-foreground" />
                  </div>

                  <div className="flex-1">
                    <p className="font-semibold text-lg">
                      {data?.data?.driver?.name}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Smartphone className="h-4 w-4" />
                      {data?.data?.driver?.phone}
                    </div>
                  </div>

                  <Badge variant="outline">
                    4.9 <Star className="text-yellow-500" />
                  </Badge>
                </CardContent>
              </Card>

              <Card className="rounded-2xl shadow-sm">
                <CardHeader>
                  <h2 className="text-xl font-semibold">
                    Ride Status Timeline
                  </h2>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {data?.data?.currentStatus?.map(
                      (item: ICurrentStatus, index: number) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="flex flex-col items-center">
                            <div
                              className={`w-3 h-3 rounded-full mt-1 ${
                                item.status === "COMPLETE"
                                  ? "bg-primary"
                                  : item.status === "ACCEPT"
                                  ? "bg-primary/70 animate-pulse"
                                  : "bg-muted-foreground"
                              }`}
                            />
                            {index !== timeline.length - 1 && (
                              <div className="w-0.5 h-10 bg-border" />
                            )}
                          </div>

                          <div>
                            <p className="font-medium">{item.status}</p>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Clock className="h-4 w-4" />
                              {format(
                                new Date(item.currentTimeTamp),
                                "yyyy-MM-dd"
                              )}
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </CardContent>
              </Card>
            </>
          )}
        </div>
      )}
    </>
  );
}
