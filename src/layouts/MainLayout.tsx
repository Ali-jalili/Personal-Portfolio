/** @format */

import type { ReactNode } from "react";
import Navbar from "../components/common/Navbar";

type MainLayoutProps = {
  children: ReactNode;
};

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-white">
      <Navbar />

      <main>{children}</main>

      {}
    </div>
  );
}

export default MainLayout;
