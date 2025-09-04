"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/utils";

export function Header() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Destinations");
  const [language, setLanguage] = useState("EN");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

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
    const handleScroll = () => setScrollY(window.scrollY);
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
    <div className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000"
        style={{
          backgroundImage: "url('/header-bg.png')",
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50"></div>
      </div>

      <div className="relative z-10 px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 sm:space-x-6 header-logo">
            <div className="flex items-center space-x-2 group">
              <div className="text-2xl sm:text-3xl font-bold text-white text-shadow group-hover:text-blue-200 transition-all duration-300">
                BNM
              </div>
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-blue-400 bg-gradient-to-r from-blue-400 to-yellow-400 shadow-lg group-hover:scale-110 transition-transform duration-300"></div>
            </div>
            <a
              href="/about"
              className="hidden sm:block text-white hover:text-blue-200 transition-all duration-300 text-shadow hover:scale-105 transform"
            >
              About us
            </a>
          </div>
          <div className="hidden md:flex flex-1 max-w-md mx-4 lg:mx-8 header-search">
            <div className="relative w-full group">
              <input
                type="text"
                placeholder="Search destinations, tours, hotels..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full px-4 py-3 pr-12 rounded-lg bg-white/95 backdrop-blur-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-lg focus-ring transition-all duration-300 group-hover:shadow-xl"
              />
              <button
                onClick={handleSearch}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-500 transition-all duration-300 hover:scale-110"
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
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4 header-login">
            <button className="px-4 sm:px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base hover:shadow-xl">
              Log In
            </button>
            <div className="relative group">
              <button
                onClick={() => setLanguage(language === "EN" ? "MN" : "EN")}
                className="px-3 sm:px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-700 rounded-lg hover:bg-white transition-all duration-300 flex items-center space-x-1 sm:space-x-2 text-sm sm:text-base shadow-lg hover:shadow-xl"
              >
                <span>{language}</span>
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white hover:bg-white hover:bg-opacity-20 rounded-lg transition-all duration-300 hover:scale-110"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden mt-4 header-search">
          <div className="relative group">
            <input
              type="text"
              placeholder="Search destinations, tours, hotels..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full px-4 py-3 pr-12 rounded-lg bg-white/95 backdrop-blur-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-lg focus-ring transition-all duration-300 group-hover:shadow-xl"
            />
            <button
              onClick={handleSearch}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-500 transition-all duration-300 hover:scale-110"
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
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-xl animate-in slide-in-from-top-2 duration-300">
            <div className="space-y-2">
              <a
                href="/about"
                className="block text-gray-700 hover:text-blue-600 py-2 transition-all duration-300 hover:bg-blue-50 rounded px-2"
              >
                About us
              </a>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setIsMobileMenuOpen(false);
                  }}
                  className={cn(
                    "block w-full text-left py-2 px-3 rounded transition-all duration-300 hover:bg-gray-50",
                    selectedCategory === category
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-700",
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Main Slogan */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 min-h-[50vh] sm:min-h-[60vh] text-center text-white px-4 header-slogan">
        <h1 className="text-4xl sm:text-6xl font-bold mb-2 text-shadow-lg hover:text-blue-200 transition-colors duration-500">
          Welcome
        </h1>
        <h2 className="text-2xl sm:text-4xl font-medium mb-4 text-shadow hover:text-blue-100 transition-colors duration-500">
          to the Land of Stories
        </h2>
        <h3
          className="text-6xl sm:text-8xl font-serif font-bold text-shadow-lg hover:text-yellow-200 transition-colors duration-500 cursor-pointer"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Mongolia
        </h3>
      </div>

      {/* Bottom Category Navigation */}
      <div className="relative z-10 px-4 sm:px-6 pb-8 header-categories">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base transform hover:scale-105 hover:shadow-xl",
                selectedCategory === category
                  ? "bg-white text-gray-900 shadow-xl transform -translate-y-1 scale-105 ring-2 ring-blue-200"
                  : "bg-white/90 backdrop-blur-sm text-gray-700 hover:bg-white hover:transform hover:-translate-y-1 shadow-lg",
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Enhanced floating elements for visual appeal */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-yellow-400 rounded-full opacity-60 animate-pulse shadow-lg"></div>
      <div
        className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full opacity-60 animate-pulse shadow-lg"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-40 left-20 w-2 h-2 bg-white rounded-full opacity-60 animate-pulse shadow-lg"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-60 left-1/4 w-2 h-2 bg-red-400 rounded-full opacity-60 animate-pulse shadow-lg"
        style={{ animationDelay: "0.5s" }}
      ></div>
      <div
        className="absolute bottom-60 right-1/4 w-3 h-3 bg-green-400 rounded-full opacity-60 animate-pulse shadow-lg"
        style={{ animationDelay: "1.5s" }}
      ></div>
    </div>
  );
}
