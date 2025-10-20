"use client";

import { usePathname } from "next/navigation";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href: string;
  isActive?: boolean;
}

interface DynamicBreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
  separator?: React.ReactNode;
}

export default function DynamicBreadcrumb({
  items,
  className = "",
  separator,
}: DynamicBreadcrumbProps) {
  const defaultSeparator = (
    <ChevronRightIcon className="h-4 w-4 text-gray-400 mx-1" />
  );

  return (
    <nav
      className={`flex items-center space-x-1 text-sm text-gray-500 mb-4 ${className}`}
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center space-x-1">
        {items.map((item, index) => (
          <li key={item.href || index} className="flex items-center">
            {index > 0 && (separator || defaultSeparator)}
            {item.isActive ? (
              <span
                className="font-medium text-2xl text-gray-900"
                aria-current="page"
              >
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="hover:text-gray-700 text-lg transition-colors duration-200"
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
