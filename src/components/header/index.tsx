"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/utils";
import Image from "next/image";

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
    <div className="relative overflow-hidden h-[40vh]">
      <div className="position-absolute overflow-hidden h-[36vh]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/header.png')",
            // transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50"></div>
        </div>
        <div className="relative z-10 px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between mx-10">
            <div className="flex items-center space-x-4 sm:space-x-6 header-logo">
              <Image src="/logo.png" alt="logo" width={100} height={100} />
            </div>
            <div className="hidden md:flex flex-1 max-w-md lg:mx-8 header-search items-center">
              <a
                href="/about"
                className="hidden sm:block text-white hover:text-blue-200 transition-all duration-300 text-shadow hover:scale-105 transform min-w-[100px] font-medium"
              >
                About us
              </a>
              <div className="relative w-full group">
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
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full px-4 py-3 pr-12 rounded-lg bg-white/95 backdrop-blur-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-lg focus-ring transition-all duration-300 group-hover:shadow-xl"
                />
              </div>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4 header-login">
              <button className="px-4 sm:px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base hover:shadow-xl">
                Log In
              </button>
              <div className="relative group">
                <button
                  onClick={() => setLanguage(language === "EN" ? "MN" : "EN")}
                  className="w-[95px] h-[42px] bg-white/30 backdrop-blur-[10px] text-white rounded-[8px] border-[0.24px] border-white hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-[10px] text-sm font-medium shadow-lg hover:shadow-xl"
                  style={{
                    paddingTop: "10px",
                    paddingRight: "24px",
                    paddingBottom: "10px",
                    paddingLeft: "24px",
                  }}
                >
                  <span>{language}</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
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
        <div className="relative z-10 flex flex-col items-center justify-center flex-1 min-h-[30vh] sm:min-h-[30vh] text-center text-white px-4 header-slogan">
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

        <div className="absolute bottom-0 left-0 right-0 z-20">
          <div className="bg-[#E8EFFF] py-6">
            <div className="px-4 sm:px-6">
              <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={cn(
                      "px-4 py-3 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 shadow-sm",
                      selectedCategory === category
                        ? "bg-white text-blue-600 border-b-4 border-blue-600"
                        : "bg-white text-gray-700 hover:bg-gray-50",
                    )}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#E8EFFF] py-4">
        <div className="px-4 sm:px-6">
          <div className="flex items-center text-sm">
            <span className="text-gray-700">Home</span>
            <span className="mx-2 text-gray-700">&lt;</span>
            <span className="text-blue-600 font-medium">Destinations</span>
          </div>
        </div>
      </div>
    </div>
  );
}
