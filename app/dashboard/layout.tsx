"use client";
import { Navbar } from "~/components";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-full">
      <Navbar />
      {children}
    </div>
  );
}
