"use client";

import { cn } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface NavigationItem {
  label: string;
  href: string;
}

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

export function Header() {
  const pathname = usePathname();
  const [language, setLanguage] = useState("EN");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const showDarkHeader = isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
          showDarkHeader
            ? "bg-white/80 backdrop-blur-xl shadow-sm"
            : "bg-black/30 backdrop-blur-md",
        )}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <Link href="/" className="flex-shrink-0">
              <div className="flex flex-nowrap items-center gap-2">
                <p
                  className={cn(
                    "text-xl sm:text-2xl font-bold transition-colors duration-200",
                    showDarkHeader ? "text-gray-900" : "text-white",
                  )}
                >
                  BNM
                </p>
                <Image
                  src="/round.png"
                  alt="Mongolia Tourism"
                  width={36}
                  height={36}
                  className="h-7 sm:h-9 w-auto"
                />
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navigationItems?.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-5 py-2 text-[13px] font-medium tracking-wide transition-all duration-200",
                    "hover:opacity-70",
                    showDarkHeader ? "text-gray-900" : "text-white",
                    pathname === item.href && "opacity-100",
                  )}
                >
                  {item.label}
                  {pathname === item.href && (
                    <span
                      className={cn(
                        "absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-6 rounded-full transition-colors duration-200",
                        showDarkHeader ? "bg-blue-600" : "bg-white",
                      )}
                    />
                  )}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={() => setLanguage(language === "EN" ? "MN" : "EN")}
                className={cn(
                  "px-3 sm:px-4 py-1.5 text-[12px] sm:text-[13px] font-medium tracking-wide rounded-full transition-all duration-200",
                  "hover:opacity-70",
                  showDarkHeader ? "text-gray-900" : "text-white",
                )}
              >
                {language}
              </button>

              <Link
                href="/login"
                className={cn(
                  "hidden sm:block px-5 py-1.5 text-[13px] font-medium tracking-wide rounded-full transition-all duration-200",
                  showDarkHeader
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-white/90 text-gray-900 hover:bg-white",
                )}
              >
                Log In
              </Link>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-full transition-all duration-200 hover:opacity-70"
              >
                <svg
                  className={cn(
                    "w-5 h-5 transition-all duration-200",
                    showDarkHeader ? "text-gray-900" : "text-white",
                  )}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      isMobileMenuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isMobileMenuOpen ? "max-h-[500px]" : "max-h-0",
          )}
        >
          <div
            className={cn(
              "px-4 py-4 space-y-1",
              showDarkHeader ? "bg-white/95" : "bg-black/40 backdrop-blur-md",
            )}
          >
            {navigationItems?.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "block px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200",
                  showDarkHeader
                    ? "text-gray-900 hover:bg-gray-100"
                    : "text-white hover:bg-white/10",
                  pathname === item.href &&
                    (showDarkHeader
                      ? "bg-blue-50 text-blue-600"
                      : "bg-white/20"),
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "block sm:hidden px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 text-center",
                showDarkHeader
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-white/90 text-gray-900 hover:bg-white",
              )}
            >
              Log In
            </Link>
          </div>
        </div>
      </nav>
      {pathname === "/" && (
        <div className="relative h-[50vh] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/header.png')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/60"></div>
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
            <Image
              src="/HOME/HEADERTEXT.png"
              alt="Header"
              width={500}
              height={500}
            />
          </div>
        </div>
      )}
    </>
  );
}
