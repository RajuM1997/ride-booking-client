import { Building2, Car, Check, Plane } from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function OurServiceService() {
  return (
    <div>
      <h2 className="py-10 text-2xl font-semibold">Our Services</h2>
      <div className="grid grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <span className=" w-10 h-10 flex items-center justify-center border border-foreground rounded-full p-2 mb-5">
              <Car />
            </span>
            <CardTitle>City Rides</CardTitle>
            <CardDescription>
              Quick, comfortable rides within the city. Perfect for daily
              commute, meetings, or leisure trips.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="flex gap-3 items-center">
              <span>
                <Check size={20} />
              </span>
              <span className="text-base">24/7 Availability</span>
            </p>
            <p className="flex gap-3 items-center pt-2">
              <span>
                <Check size={20} />
              </span>
              <span className="text-base">Professional Drivers</span>
            </p>
            <p className="flex gap-3 items-center pt-2">
              <span>
                <Check size={20} />
              </span>
              <span className="text-base">Multiple Payment Options</span>
            </p>
          </CardContent>
          <CardFooter>
            <Button>Learn More</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <span className=" w-10 h-10 flex items-center justify-center border border-foreground rounded-full p-2 mb-5">
              <Building2 />
            </span>
            <CardTitle>Business Travel</CardTitle>
            <CardDescription>
              Premium transportation solutions for corporate clients with
              priority service and dedicated support.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="flex gap-3 items-center">
              <span>
                <Check size={20} />
              </span>
              <span className="text-base">Corporate Accounts</span>
            </p>
            <p className="flex gap-3 items-center pt-2">
              <span>
                <Check size={20} />
              </span>
              <span className="text-base">Executive Vehicles</span>
            </p>
            <p className="flex gap-3 items-center pt-2">
              <span>
                <Check size={20} />
              </span>
              <span className="text-base">Priority Booking</span>
            </p>
          </CardContent>
          <CardFooter>
            <Button>Learn More</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <span className=" w-10 h-10 flex items-center justify-center border border-foreground rounded-full p-2 mb-5">
              <Plane />
            </span>
            <CardTitle>Airport Transfer</CardTitle>
            <CardDescription>
              Reliable airport pickup and drop-off services with flight tracking
              and waiting time included.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="flex gap-3 items-center">
              <span>
                <Check size={20} />
              </span>
              <span className="text-base">Flight Tracking</span>
            </p>
            <p className="flex gap-3 items-center pt-2">
              <span>
                <Check size={20} />
              </span>
              <span className="text-base">Meet & Greet</span>
            </p>
            <p className="flex gap-3 items-center pt-2">
              <span>
                <Check size={20} />
              </span>
              <span className="text-base">Luggage Assistance</span>
            </p>
          </CardContent>
          <CardFooter>
            <Button>Learn More</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
