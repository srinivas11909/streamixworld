"use client"
import { useSidebar, SidebarProvider } from "@/lib/SidebarContext";
import AdminHeader from "../components/admin/Layout/Navbar";
import Footer from "../components/admin/Layout/Footer";


function AdminLayout({ children }) {
      const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  return (
    <div className="admin-layout">
        <div>
            <AdminHeader />
        </div>
        <div
        className={`flex-1 transition-all duration-300 ease-in-out ${
          isExpanded || isHovered ? "lg:ml-[290px]" : "lg:ml-[90px]"
        } ${isMobileOpen ? "ml-0" : ""}`}
      >
       <main>{children}</main>
      </div>


      <Footer />
    </div>
  );
}

export default function AppLayout({children}){
    return <>
     <SidebarProvider>
        <AdminLayout>{children}</AdminLayout>
     </SidebarProvider>
    </>
}