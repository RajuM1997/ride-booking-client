import BookARide from "@/pages/Driver/BookARide";
import DriverAnalytics from "@/pages/Driver/DriverAnalytics";
import DriverProfile from "@/pages/Driver/DriverProfile";
import DriverRideHistory from "@/pages/Driver/DriverRideHistory";
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
        component: DriverProfile,
      },
    ],
  },
];
