/** @format */

import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import type { ReactNode } from "react";

type MainLayoutProps = {
  children: ReactNode;
};

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-white">
      <Navbar />

      <main className="pt-20">{children}</main>

      <Footer />
    </div>
  );
}

export default MainLayout;
