"use client";

import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="bg-[#DEEDFF] text-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Subscribe to our Newsletter!
                </h2>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Email Here..."
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                />
                <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold">
                  SUBSCCRIBE
                </button>
              </div>
              <p className="text-gray-700 leading-relaxed text-md">
                Uncover the Wonders of Mongolia! Sign up for our exclusive
                newsletter, and embark on a journey filled with captivating
                Destination highlights, intriguing Event updates, deep dives
                into Nomadic Culture, and fascinating nuggets of History. Stay
                connected with the heart of Mongolia - your gateway to a world
                of enriching experiences. Don't miss out - subscribe now for a
                regular dose of Mongolian magic!
              </p>
              <div className="space-y-2 text-gray-700">
                <p className="font-medium">Phone: +976 8001-4904</p>
                <p className="font-medium">
                  Email: BraveNewMongoliaTours@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center space-y-6">
              {/* <Image
                src="/anar.png"
                alt="Mongolian Character"
                width={300}
                height={300}
                className="object-contain"
              /> */}
              <Image
                src="/whatsapp.png"
                alt="WhatsApp QR Code"
                width={290}
                height={290}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="bg-[#E8EFFF] py-28">
        <div className="container mx-auto px-4">
          <div className="bg-black w-full h-0.5 mb-4"></div>
          <div className="flex space-x-4">
            <button
              onClick={handleBack}
              className="flex items-center space-x-2 px-6 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-sm"
            >
              <svg
                className="w-5 h-5 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span className="text-gray-700 font-medium">Back</span>
            </button>
            <button
              onClick={handleHome}
              className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-sm"
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
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span className="font-medium">Home</span>
            </button>
            <button
              onClick={handleDestinations}
              className="flex items-center space-x-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300 shadow-sm"
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
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="font-medium">Destinations</span>
            </button>
          </div>
        </div>
      </div> */}

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Image
                  src="/footerlogo.png"
                  alt="BNM Logo"
                  width={160}
                  height={160}
                  // className="rounded-full ring-2 ring-blue-400/30"
                />
                {/* <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div> */}
              </div>
              {/* <div>
                <h2 className="text-2xl font-bold text-white">BNM</h2>
                <p className="text-blue-300 font-medium">Brave New Mongolia</p>
              </div> */}
            </div>

            <p className="text-gray-300 leading-relaxed max-w-md">
              Good day to everybody who is interested in our tours. We are a
              team of Mongolians that love nature and traveling.
            </p>

            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-sm">📞</span>
                </div>
                <span className="font-medium">+976 8625-6868</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-sm">✉️</span>
                </div>
                <span className="font-medium">bnmtours@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-300">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                  <span className="text-sm">📍</span>
                </div>
                <span className="font-medium text-sm leading-relaxed">
                  17-22, 7-r khoroo, Sukhbaatar District,
                  <br />
                  Ulaanbaatar, Mongolia
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white border-b-2 border-blue-500 pb-2 inline-block">
              Quick Links
            </h3>
            <div className="space-y-3">
              <a
                href="/about"
                className="block text-gray-300 hover:text-blue-300 transition-colors duration-300 hover:translate-x-2 transform"
              >
                → About us
              </a>
              <a
                href="/destinations"
                className="block text-gray-300 hover:text-blue-300 transition-colors duration-300 hover:translate-x-2 transform"
              >
                → Destinations
              </a>
              <a
                href="/tours"
                className="block text-gray-300 hover:text-blue-300 transition-colors duration-300 hover:translate-x-2 transform"
              >
                → Tours
              </a>
              <a
                href="/accommodation"
                className="block text-gray-300 hover:text-blue-300 transition-colors duration-300 hover:translate-x-2 transform"
              >
                → Accommodation
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-blue-300 transition-colors duration-300 hover:translate-x-2 transform"
              >
                → Package information
              </a>
            </div>
          </div>

          {/* Mobile App & Social Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white border-b-2 border-blue-500 pb-2 inline-block">
              Get Our App
            </h3>

            <div className="space-y-4">
              <a href="#" className="block group">
                <Image
                  src="/appstore.png"
                  alt="Download on App Store"
                  width={150}
                  height={80}
                  // className="w-full h-auto"
                />
              </a>

              <a href="#" className="block group">
                <Image
                  src="/googleplay.png"
                  alt="Get it on Google Play"
                  width={150}
                  height={80}
                  // className="w-full h-auto"
                />
              </a>
            </div>

            <div className="pt-4">
              <h4 className="text-sm font-semibold text-gray-400 mb-3">
                Follow Us
              </h4>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  <Image
                    src="/facebook.png"
                    alt="Facebook"
                    width={60}
                    height={60}
                  />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  <Image
                    src="/youtube.png"
                    alt="YouTube"
                    width={70}
                    height={70}
                  />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  <Image
                    src="/instagram.png"
                    alt="Instagram"
                    width={60}
                    height={60}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-gray-700 bg-gradient-to-r from-slate-800 to-blue-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-gray-300 text-sm">
              Copyright © 2023 Brave New Mongolia. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
