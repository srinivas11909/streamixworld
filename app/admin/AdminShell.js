"use client";

import { useSidebar, SidebarProvider } from "@/lib/SidebarContext";
import AdminHeader from "../components/admin/Layout/Navbar";

function AdminLayoutInner({ children }) {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  return (
    <div className="admin-layout bg-gray-50 min-h-screen">
      <AdminHeader />
      <div
        className={`transition-all duration-300 ease-in-out ${
          isExpanded || isHovered ? "lg:ml-[290px]" : "lg:ml-[90px]"
        } ${isMobileOpen ? "ml-0" : ""}`}
      >
        <main>{children}</main>
      </div>
    </div>
  );
}

export default function AdminShell({ children }) {
  return (
    <SidebarProvider>
      <AdminLayoutInner>{children}</AdminLayoutInner>
    </SidebarProvider>
  );
}
