import MyRide from "@/pages/Rider/MyRide";
import RequestARide from "@/pages/Rider/RequestARide";
import type { ISidebarItem } from "@/types";

export const riderSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "My Ride",
        url: "/rider/my-ride",
        component: MyRide,
      },
      {
        title: "Request A Ride",
        url: "/rider/req-ride",
        component: RequestARide,
      },
    ],
  },
];
