"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { cn } from "@/utils";
import Image from "next/image";

export function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Destinations");
  const [language, setLanguage] = useState("EN");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  // Check if we're on the home page (where the hero image is visible)
  const isHomePage = pathname === "/";
  const showDarkHeader = !isHomePage || isScrolled;

  const categories = [
    "Visit Ulaanbaatar",
    "Destinations",
    "Accommodation",
    "BNM Tours",
    "Events",
    "Info",
    "Commercial",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      {/* Apple-style Navigation Bar */}
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
          showDarkHeader
            ? "bg-dark-200/95 backdrop-blur-xl shadow-lg border-b border-gray-700/50"
            : "bg-transparent",
        )}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="Mongolia Tourism"
                width={40}
                height={40}
                className="h-8 w-auto"
              />
            </div>

            {/* <div className="hidden lg:flex items-center space-x-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={cn(
                    "relative text-sm font-medium transition-all duration-200 ease-out nav-link",
                    isScrolled
                      ? "text-gray-900 hover:text-blue-600"
                      : "text-white hover:text-blue-200",
                    selectedCategory === category && "text-blue-600",
                  )}
                >
                  {category}
                  {selectedCategory === category && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full"></div>
                  )}
                </button>
              ))}
            </div> */}

            <div className="flex items-center space-x-4">
              <div className="relative hidden sm:block">
                <div className="relative group">
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className={cn(
                      "w-64 px-4 py-2 text-sm rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 apple-search",
                      "bg-white/20 text-white placeholder-white/70 focus:bg-white/30 backdrop-blur-sm",
                    )}
                  />
                  <button
                    onClick={handleSearch}
                    className={cn(
                      "absolute right-3 top-1/2 transform -translate-y-1/2 transition-colors duration-200",
                      "text-gray-400 hover:text-blue-600",
                    )}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="relative group">
                <button
                  onClick={() => setLanguage(language === "EN" ? "MN" : "EN")}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 apple-button",
                    "bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm",
                  )}
                >
                  {language}
                </button>
              </div>

              <button
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 apple-button",
                  showDarkHeader
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-white text-gray-900 hover:bg-gray-100",
                )}
              >
                Log In
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-full transition-all duration-200"
              >
                <svg
                  className={cn(
                    "w-6 h-6 transition-all duration-200",
                    showDarkHeader ? "text-white" : "text-white",
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

        {isMobileMenuOpen && (
          <div
            className={cn(
              "lg:hidden backdrop-blur-xl border-t mobile-menu-enter",
              showDarkHeader
                ? "bg-gray-900/95 border-gray-700/50"
                : "bg-white/95 border-gray-200/50",
            )}
          >
            <div className="px-6 py-4 space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search destinations, tours, hotels..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className={cn(
                    "w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20",
                    showDarkHeader
                      ? "text-white bg-gray-800 border border-gray-700 focus:bg-gray-700"
                      : "text-gray-900 bg-gray-100 focus:bg-white",
                  )}
                />
                <button
                  onClick={handleSearch}
                  className={cn(
                    "absolute right-3 top-1/2 transform -translate-y-1/2 transition-colors duration-200",
                    showDarkHeader
                      ? "text-gray-400 hover:text-blue-400"
                      : "text-gray-400 hover:text-blue-600",
                  )}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setIsMobileMenuOpen(false);
                    }}
                    className={cn(
                      "block w-full text-left py-3 px-4 rounded-lg transition-all duration-200",
                      showDarkHeader
                        ? selectedCategory === category
                          ? "bg-blue-900/50 text-blue-400 font-medium"
                          : "text-gray-300 hover:bg-gray-800"
                        : selectedCategory === category
                          ? "bg-blue-50 text-blue-600 font-medium"
                          : "text-gray-900 hover:bg-gray-50",
                    )}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      <div className="relative h-[40vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/header.png')",
            transform: `translateY(${scrollY * 0.5}px)`,
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
          {/* <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
              Welcome to the
            </h1>
            <h2 className="text-2xl sm:text-4xl font-light tracking-wide">
              Land of Stories
            </h2>
            <h3 className="text-4xl sm:text-6xl font-serif font-bold tracking-wider">
              Mongolia
            </h3>
          </div> */}
        </div>
      </div>

      {!isHomePage && (
        <div
          className={cn(
            "border-b",
            showDarkHeader
              ? "bg-gray-900 border-gray-700"
              : "bg-gray-50 border-gray-200",
          )}
        >
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div
              className={cn(
                "flex items-center text-sm",
                showDarkHeader ? "text-gray-400" : "text-gray-600",
              )}
            >
              <span>Home</span>
              <svg
                className="mx-2 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-blue-600 font-medium">
                {selectedCategory}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
