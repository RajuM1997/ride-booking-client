import type { ISidebarItem } from "@/types";
import { lazy } from "react";

const Analytics = lazy(() => import("@/pages/Admin/Analytics"));

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
    title: "Ride",
    items: [
      {
        title: "Req a Ride",
        url: "/admin/analytic",
        component: Analytics,
      },
    ],
  },
];
