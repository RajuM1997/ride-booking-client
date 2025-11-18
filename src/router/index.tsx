import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import HomePage from "@/pages/HomePage";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { generateRoutes } from "@/utils/generateRoutes";
import { createBrowserRouter, Navigate } from "react-router";
import { adminSidebarItems } from "./adminSidebarItems";
import { riderSidebarItems } from "./rideSidebarItems";
import { driverSidebarItems } from "./driverSidebar";
import Unauthorized from "@/pages/Unauthorized";
import { withAuth } from "@/utils/withAuth";
import { role } from "@/constants/role";
import type { TRole } from "@/types";
import AboutUs from "@/pages/AboutUs";
import Features from "@/pages/Features";
import Contact from "@/pages/Contact";
import FAQ from "@/pages/FAQ";
import { lazy } from "react";
import NotFound from "@/pages/NotFoundPage";
import ErrorPage from "@/pages/ErrorPage";

const RiderDetails = lazy(() => import("@/pages/Rider/RiderDetails"));

export const router = createBrowserRouter([
  {
    Component: App,
    errorElement: <ErrorPage />,
    path: "/",
    children: [
      {
        Component: HomePage,
        index: true,
      },
      {
        Component: RiderDetails,
        path: "/ride-details/:id",
      },
      {
        Component: AboutUs,
        path: "/about-us",
      },
      {
        Component: Features,
        path: "/features",
      },
      {
        Component: Contact,
        path: "/contact",
      },
      {
        Component: FAQ,
        path: "/faq",
      },
    ],
  },
  {
    Component: withAuth(DashboardLayout, role.admin as TRole),
    path: "/admin",
    children: [
      { index: true, element: <Navigate to="/admin/analytic" /> },
      ...generateRoutes(adminSidebarItems),
    ],
  },
  {
    Component: withAuth(DashboardLayout, role.driver as TRole),
    path: "/driver",

    children: [
      { index: true, element: <Navigate to="/driver/analytic" /> },
      ...generateRoutes(driverSidebarItems),
    ],
  },
  {
    Component: withAuth(DashboardLayout, role.rider as TRole),
    path: "/rider",
    children: [
      { index: true, element: <Navigate to="/rider/my-ride" /> },
      ...generateRoutes(riderSidebarItems),
    ],
  },

  {
    Component: Login,
    path: "login",
  },
  {
    Component: Register,
    path: "register",
  },
  {
    Component: Unauthorized,
    path: "unauthorized",
  },
  {
    Component: NotFound,
    path: "*",
  },
]);
