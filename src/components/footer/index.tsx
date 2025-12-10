"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";

  // Newsletter section component
  const NewsletterSection = () => (
    <div className="bg-[#DEEDFF] text-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Subscribe to our Newsletter!
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <input
              type="email"
              placeholder="Email Here..."
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            />
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              SUBSCRIBE
            </button>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Uncover the Wonders of Mongolia! Sign up for our exclusive
            newsletter, and embark on a journey filled with captivating
            Destination highlights, intriguing Event updates, deep dives into
            Nomadic Culture, and fascinating nuggets of History.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center text-gray-700">
            <p className="font-medium">Phone: +976 8001-4904</p>
            <p className="font-medium">
              Email: BraveNewMongoliaTours@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  // Main footer content component
  const FooterContent = () => (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="lg:col-span-2">
          <div className="flex items-center mb-6">
            <Image
              src="/footerlogo.png"
              alt="BNM Logo"
              width={120}
              height={120}
            />
          </div>

          <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
            Good day to everybody who is interested in our tours. We are a team
            of Mongolians that love nature and traveling.
          </p>

          <div className="space-y-3">
            <div className="flex items-center gap-3 text-gray-300">
              <span className="text-sm w-16">Phone</span>
              <span className="font-medium">+976 8625-6868</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <span className="text-sm w-16">Email</span>
              <span className="font-medium">bnmtours@gmail.com</span>
            </div>
            <div className="flex items-start gap-3 text-gray-300">
              <span className="text-sm w-16">Location</span>
              <span className="font-medium text-sm leading-relaxed">
                17-22, 7-r khoroo, Sukhbaatar District,
                <br />
                Ulaanbaatar, Mongolia
              </span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6 border-b-2 border-blue-500 pb-2">
            Quick Links
          </h3>
          <div className="space-y-3">
            {[
              { href: "/about", text: "About us" },
              { href: "/Package information", text: "Package information" },
              { href: "#", text: "Package information" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-gray-300 hover:text-blue-300 transition-colors hover:translate-x-2 transform"
              >
                → {link.text}
              </a>
            ))}
          </div>
        </div>

        {/* App & Social */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6 border-b-2 border-blue-500 pb-2">
            Get Our App
          </h3>

          <div className="space-y-4 mb-6">
            <a href="#" className="block">
              <Image
                src="/appstore.png"
                alt="Download on App Store"
                width={140}
                height={70}
                className="hover:opacity-80 transition-opacity"
              />
            </a>
            <a href="#" className="block">
              <Image
                src="/googleplay.png"
                alt="Get it on Google Play"
                width={140}
                height={70}
                className="hover:opacity-80 transition-opacity"
              />
            </a>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-400 mb-3">
              Follow Us
            </h4>
            <div className="flex gap-3">
              {[
                { src: "/facebook.png", alt: "Facebook" },
                { src: "/youtube.png", alt: "YouTube" },
                { src: "/instagram.png", alt: "Instagram" },
              ].map((social) => (
                <a
                  key={social.alt}
                  href="#"
                  className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all hover:scale-110"
                >
                  <Image
                    src={social.src}
                    alt={social.alt}
                    width={60}
                    height={60}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* {!isLoginPage && <NewsletterSection />} */}
      <FooterContent />

      {/* Copyright */}
      <div className="border-t border-gray-700 bg-slate-800">
        <div className="container mx-auto px-4 py-4">
          <p className="text-gray-300 text-sm text-center">
            Copyright © 2023 Brave New Mongolia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
