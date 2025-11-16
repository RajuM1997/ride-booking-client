import { Building2, Car, Check, Plane } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function OurServiceService() {
  return (
    <div>
      <div className="lg:px-40 py-10 text-center">
        <h2 className="py-5 text-2xl font-semibold">Our Services</h2>
        <p className="text-center">
          Whether you need a quick city ride, premium corporate travel, or a
          reliable airport transfer, we’ve got you covered with safe,
          comfortable, and convenient transportation options.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card className="pt-0 bg-linear-to-r from-blue-200/10 via-blue-100/10 to-blue-200/10 backdrop-blur-sm">
          <CardHeader className="pt-2">
            <span className=" w-10 h-10 flex items-center justify-center border border-foreground rounded-full p-2 mb-5">
              <Car />
            </span>
            <CardTitle className="text-lg">City Rides</CardTitle>
            <CardDescription className="text-base">
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
        </Card>

        <Card className="pt-0 bg-linear-to-r from-green-200/10 via-green-100/10 to-green-200/10 backdrop-blur-sm">
          <CardHeader className="pt-2">
            <span className=" w-10 h-10 flex items-center justify-center border border-foreground rounded-full p-2 mb-5">
              <Building2 />
            </span>
            <CardTitle className="text-lg">Business Travel</CardTitle>
            <CardDescription className="text-base">
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
        </Card>

        <Card className="pt-0 bg-linear-to-r from-purple-200/10 via-purple-100/10 to-purple-200/10 backdrop-blur-sm">
          <CardHeader className="pt-2">
            <span className="pt-2 w-10 h-10 flex items-center justify-center border border-foreground rounded-full p-2 mb-5">
              <Plane />
            </span>
            <CardTitle className="text-lg">Airport Transfer</CardTitle>
            <CardDescription className="text-base">
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
        </Card>
      </div>
    </div>
  );
}
