import type { ISidebarItem } from "@/types";
import { lazy } from "react";

const Analytics = lazy(() => import("@/pages/Admin/Analytics"));
const AdminAllRides = lazy(() => import("@/pages/Admin/AdminAllRides"));
const AllUser = lazy(() => import("@/pages/Admin/AllUser"));
const Profile = lazy(() => import("@/pages/Profile"));

export const adminSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",

    items: [
      {
        title: "Analytic",
        url: "/admin/analytic",
        component: Analytics,
      },
    ],
  },
  {
    title: "User Management",
    items: [
      {
        title: "All User",
        url: "/admin/user-management",
        component: AllUser,
      },
    ],
  },
  {
    title: "Ride Oversight",
    items: [
      {
        title: "All Rides",
        url: "/admin/all-rides",
        component: AdminAllRides,
      },
    ],
  },
  {
    title: "Profile Management",
    items: [
      {
        title: "Profile",
        url: "/admin/my-profile",
        component: Profile,
      },
    ],
  },
];
