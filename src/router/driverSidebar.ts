import BookARide from "@/pages/Driver/BookARide";
import DriverActiveRide from "@/pages/Driver/DriverActiveRide";
import DriverAnalytics from "@/pages/Driver/DriverAnalytics";
import DriverRideHistory from "@/pages/Driver/DriverRideHistory";
import Profile from "@/pages/Profile";
import type { ISidebarItem } from "@/types";

export const driverSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Analytic",
        url: "/driver/analytic",
        component: DriverAnalytics,
      },
    ],
  },
  {
    title: "Ride",
    items: [
      {
        title: "Book a ride",
        url: "/driver/book-a-ride",
        component: BookARide,
      },
      {
        title: "Active Ride",
        url: "/driver/active-ride",
        component: DriverActiveRide,
      },
      {
        title: "Driver History",
        url: "/driver/my-rides",
        component: DriverRideHistory,
      },
    ],
  },
  {
    title: "Profile Management",
    items: [
      {
        title: "Profile",
        url: "/driver/my-profile",
        component: Profile,
      },
    ],
  },
];
