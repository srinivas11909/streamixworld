"use client";
import Link from "next/link";
import { useSidebar } from "@/lib/SidebarContext";

export default function Sidebar() {
  const {
    isExpanded,
    isMobileOpen,
    activeItem,
    openSubmenu,
    toggleSidebar,
    toggleMobileSidebar,
    setActiveItem,
    toggleSubmenu,
  } = useSidebar();

  const menuItems = [
    {
      name: "Dashboard",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      ),
      subItems: [
        { name: "eCommerce", href: "/" },
        { name: "Analytics", href: "/analytics" },
        { name: "Marketing", href: "/marketing" },
        { name: "CRM", href: "/crm" },
        { name: "Stocks", href: "/stocks" },
      ],
    },
    {
      name: "Calendar",
      href: "/calendar",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" d="M8 2v2m8-2v2M4 7h16M4 21h16V7H4v14z" />
        </svg>
      ),
    },
    {
      name: "Profile",
      href: "/profile",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zM4 20c0-4 4-6 8-6s8 2 8 6"
          />
        </svg>
      ),
    },
  ];

  return (
    <aside
      className={`fixed top-0 left-0 z-50 h-screen border-r border-gray-200 bg-white dark:bg-black transition-all duration-300
      ${isExpanded ? "w-72" : "w-20"} 
      ${isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
    `}
    >
      {/* Header */}
      <div className="py-8  flex justify-start">
        <a href="/" data-discover="true">
         <img className="dark:hidden" alt="Logo" width="150" height="40" src="/images/logo/logo.svg" />
         <img className="hidden dark:block" alt="Logo" width="150" height="40" src="/images/logo/logo-dark.svg"/>
         </a>
         </div>
      <div className="flex items-center justify-between p-4">
        {isExpanded && <span className="text-lg font-bold">MyApp</span>}
        <button onClick={toggleSidebar} className="p-2">
          {isExpanded ? "<<" : ">>"}
        </button>
      </div>

      {/* Menu */}
      <nav className="flex flex-col gap-2 px-2">
        {menuItems.map((item) => (
          <div key={item.name}>
            {item.subItems ? (
              <>
                <button
                  onClick={() => toggleSubmenu(item.name)}
                  className={`flex items-center gap-2 p-2 rounded hover:bg-gray-100 ${
                    activeItem === item.name ? "bg-gray-200" : ""
                  }`}
                >
                  {item.icon}
                  {isExpanded && <span>{item.name}</span>}
                </button>
                {openSubmenu === item.name && (
                  <ul className="ml-8 mt-1 flex flex-col gap-1">
                    {item.subItems.map((sub) => (
                      <li key={sub.name}>
                        <Link
                          href={sub.href}
                          className="block p-2 text-sm hover:bg-gray-100 rounded"
                          onClick={() => setActiveItem(sub.name)}
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <Link
                href={item.href ?? "#"}
                className={`flex items-center gap-2 p-2 rounded hover:bg-gray-100 ${
                  activeItem === item.name ? "bg-gray-200" : ""
                }`}
                onClick={() => setActiveItem(item.name)}
              >
                {item.icon}
                {isExpanded && <span>{item.name}</span>}
              </Link>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}
