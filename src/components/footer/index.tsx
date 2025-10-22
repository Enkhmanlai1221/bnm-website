"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {!isLoginPage && (
        <div className="bg-[#DEEDFF] text-gray-800 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center max-w-7xl mx-auto">
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
              <Image
                src="/anar.png"
                alt="Mongolian Character"
                width={240}
                height={240}
                className="object-contain"
              />
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
      )}

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Image
                  src="/footerlogo.png"
                  alt="BNM Logo"
                  width={160}
                  height={160}
                />
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed max-w-md">
              Good day to everybody who is interested in our tours. We are a
              team of Mongolians that love nature and traveling.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <span className="text-sm">Phone</span>
                <span className="font-medium">+976 8625-6868</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <span className="text-sm">Email</span>
                <span className="font-medium">bnmtours@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-300">
                <span className="text-sm">Location</span>
                <span className="font-medium text-sm leading-relaxed">
                  17-22, 7-r khoroo, Sukhbaatar District,
                  <br />
                  Ulaanbaatar, Mongolia
                </span>
              </div>
            </div>
          </div>

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
                />
              </a>

              <a href="#" className="block group">
                <Image
                  src="/googleplay.png"
                  alt="Get it on Google Play"
                  width={150}
                  height={80}
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

      <div className="border-t border-gray-700 bg-gradient-to-r from-slate-800 to-blue-800">
        <div className="container mx-auto px-4 py-6">
          <p className="text-gray-300 text-sm">
            Copyright © 2023 Brave New Mongolia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
