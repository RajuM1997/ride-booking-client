import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Car, User, ShieldCheck } from "lucide-react";

export default function Features() {
  return (
    <div className="py-20 container mx-auto">
      <title>GoTogether-Features-Page</title>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
          Features
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-base">
          Explore the capabilities of our platform for Riders, Drivers, and
          Admins. Every feature is designed to ensure smooth, safe, and
          efficient ride experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:px-40">
        <Card className="bg-linear-to-r from-blue-200/10 via-blue-100/10 shadow-md to-blue-200/10 backdrop-blur-sm   rounded-md">
          <CardHeader className="text-center">
            <User className="mx-auto mb-4 text-green-500" size={48} />
            <CardTitle>Rider</CardTitle>
            <CardDescription>
              Manage your rides effortlessly with user-friendly features.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-gray-700 dark:text-gray-200 text-sm">
            <ul className="space-y-2">
              <li>📍 Request rides with pickup and destination</li>
              <li>🕒 Real-time ride tracking</li>
              <li>💳 Multiple payment options</li>
              <li>⭐ Rate drivers & provide feedback</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="bg-linear-to-r from-green-200/10 via-green-100/10 to-green-200/10 backdrop-blur-sm shadow-md  rounded-md">
          <CardHeader className="text-center">
            <Car className="mx-auto mb-4 text-green-500" size={48} />
            <CardTitle>Driver</CardTitle>
            <CardDescription>
              Tools to manage rides efficiently and maximize earnings.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-gray-700 dark:text-gray-200 text-sm">
            <ul className="space-y-2">
              <li>🛣 Accept ride requests instantly</li>
              <li>📍 Navigate to pickup & drop-off locations</li>
              <li>💰 Track earnings & completed rides</li>
              <li>✅ Manage ride availability</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="bg-linear-to-r from-purple-200/10 via-purple-100/10 to-purple-200/10 backdrop-blur-sm shadow-md rounded-md">
          <CardHeader className="text-center">
            <ShieldCheck className="mx-auto mb-4 text-green-500" size={48} />
            <CardTitle>Admin</CardTitle>
            <CardDescription>
              Oversee the platform, ensuring smooth operations and compliance.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-gray-700 dark:text-gray-200 text-sm">
            <ul className="space-y-2">
              <li>📊 Monitor rides and user activity</li>
              <li>📝 Manage drivers and riders</li>
              <li>⚡ Handle disputes & feedback</li>
              <li>🔧 Configure platform settings</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
