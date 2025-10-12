"use client";

import { useRouter, usePathname } from "next/navigation";
import { cn } from "@/utils";

interface NavigationItem {
  label: string;
  href: string;
}

export default function NavigationPage() {
  const router = useRouter();
  const pathname = usePathname();

  const navigationItems: NavigationItem[] = [
    {
      label: "Visit Ulaanbaatar",
      href: "/visit-ulaanbaatar",
    },
    {
      label: "Destinations",
      href: "/destination",
    },
    {
      label: "Accommodation",
      href: "/accommodation",
    },
    {
      label: "BNM Tours",
      href: "/bnm-tours",
    },
    {
      label: "Events",
      href: "/events",
    },
    {
      label: "Info",
      href: "/info",
    },
    {
      label: "Commercial",
      href: "/commercial",
    },
  ];

  const handleNavigation = (href: string) => {
    router.push(href);
  };

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden md:block">
          <div className="flex items-center justify-center space-x-8 py-4">
            {navigationItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavigation(item.href)}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg",
                  isActive(item.href)
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50",
                )}
              >
                {item.label}
                {isActive(item.href) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-blue-600 rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="md:hidden">
          <div className="flex overflow-x-auto py-3 space-x-1 scrollbar-hide">
            {navigationItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavigation(item.href)}
                className={cn(
                  "flex-shrink-0 px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                  isActive(item.href)
                    ? "text-blue-600 bg-blue-100"
                    : "text-gray-600 hover:text-blue-600 hover:bg-gray-100",
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
