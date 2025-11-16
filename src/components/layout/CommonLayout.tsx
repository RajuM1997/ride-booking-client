import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function CommonLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 px-4 lg:px-0">{children}</div>
      <Footer />
    </div>
  );
}
