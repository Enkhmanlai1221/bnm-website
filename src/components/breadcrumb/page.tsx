"use client";

import { usePathname, useRouter } from "next/navigation";
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href: string;
  isActive?: boolean;
}

export default function Breadcrumb() {
  const pathname = usePathname();
  const router = useRouter();

  // Function to generate breadcrumb items from pathname
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = pathname.split("/").filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [];

    // Always add home as first item
    breadcrumbs.push({
      label: "Home",
      href: "/",
      isActive: pathname === "/",
    });

    // Build breadcrumbs from path segments
    let currentPath = "";
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const isLast = index === pathSegments.length - 1;

      // Convert segment to readable label
      const label = formatSegmentLabel(segment, currentPath);

      breadcrumbs.push({
        label,
        href: currentPath,
        isActive: isLast,
      });
    });

    return breadcrumbs;
  };

  // Function to format segment labels
  const formatSegmentLabel = (segment: string, fullPath: string): string => {
    // Handle dynamic routes and special cases
    if (segment.match(/^\[.*\]$/)) {
      // This is a dynamic route parameter, we might need to get the actual value
      // For now, we'll use a generic label
      return "Details";
    }

    // Special cases for BNM website routes
    const routeLabels: { [key: string]: string } = {
      "visit-ulaanbaatar": "Visit Ulaanbaatar",
      "bnm-tours": "BNM Tours",
      "day-trips": "Day Trips",
      accommodation: "Accommodation",
      destination: "Destinations",
      commercial: "Commercial",
      events: "Events",
      info: "Information",
      merchant: "Merchants",
    };

    // Check if we have a specific label for this route
    if (routeLabels[segment]) {
      return routeLabels[segment];
    }

    // Convert kebab-case to Title Case
    return segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const breadcrumbs = generateBreadcrumbs();

  // Don't show breadcrumb on home page
  if (pathname === "/") {
    return null;
  }

  return (
    <nav
      className="flex items-center space-x-1 text-sm text-gray-500 mb-4"
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center space-x-1">
        {breadcrumbs.map((item, index) => (
          <li key={item.href} className="flex items-center">
            {index > 0 && (
              <ChevronRightIcon className="h-4 w-4 text-gray-400 mx-1" />
            )}
            {item.isActive ? (
              <span className="font-medium text-gray-900" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="hover:text-gray-700 transition-colors duration-200"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
