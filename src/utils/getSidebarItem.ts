import { role } from "@/constants/role";
import { adminSidebarItems } from "@/router/adminSidebarItems";
import { driverSidebarItems } from "@/router/driverSidebar";
import { riderSidebarItems } from "@/router/rideSidebarItems";
import type { TRole } from "@/types";

export const getSidebarItem = (userRole: TRole) => {
  switch (userRole) {
    case role.admin:
      return [...adminSidebarItems];

    case role.driver:
      return [...driverSidebarItems];
    case role.rider:
      return [...riderSidebarItems];
    default:
      return [];
  }
};
