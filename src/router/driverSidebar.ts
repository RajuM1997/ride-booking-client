import type { ISidebarItem } from "@/types";
import { lazy } from "react";

const DriverAnalytics = lazy(() => import("@/pages/Driver/DriverAnalytics"));
const BookARide = lazy(() => import("@/pages/Driver/BookARide"));
const DriverActiveRide = lazy(() => import("@/pages/Driver/DriverActiveRide"));
const DriverRideHistory = lazy(
  () => import("@/pages/Driver/DriverRideHistory")
);
const Profile = lazy(() => import("@/pages/Profile"));

export const driverSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Driver Earnings",
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
