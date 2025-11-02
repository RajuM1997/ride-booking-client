import BookARide from "@/pages/Driver/BookARide";
import DriverAnalytics from "@/pages/Driver/DriverAnalytics";
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
    ],
  },
];
