import React from "react";
import Navbar from "@/components/common/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16 container mx-auto px-4 lg:px-8 xl:px-16">{children}</main>
    </div>
  );
}
