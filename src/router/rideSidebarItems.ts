import type { ISidebarItem } from "@/types";
import { lazy } from "react";
const Profile = lazy(() => import("@/pages/Profile"));
const MyRide = lazy(() => import("@/pages/Rider/MyRide"));
const RequestARide = lazy(() => import("@/pages/Rider/RequestARide"));
export const riderSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Request A Ride",
        url: "/rider/req-ride",
        component: RequestARide,
      },
      {
        title: "My Ride History",
        url: "/rider/my-ride",
        component: MyRide,
      },
    ],
  },
  {
    title: "Profile Management",
    items: [
      {
        title: "Profile",
        url: "/rider/my-profile",
        component: Profile,
      },
    ],
  },
];
