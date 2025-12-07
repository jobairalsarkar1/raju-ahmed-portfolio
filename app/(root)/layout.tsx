import React from "react";
import Navbar from "@/components/common/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16 bg-red-500">{children}</main>
    </div>
  );
}
