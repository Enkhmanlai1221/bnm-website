"use client";

import { DaylightDiscoveries } from "@/components/bnm-tours/daylight-discoveries";
import { Overview } from "@/components/bnm-tours/overview";
import { TourItinerary } from "@/components/bnm-tours/tour-irinerary";
import { DynamicBreadcrumb } from "@/components/breadcrumb";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "BNM Tours", href: "/bnm-tours" },
  {
    label: "KharaKhorum Tour",
    href: "/bnm-tours/kharkhorum",
    isActive: true,
  },
];

export default function BnmToursDetailPage() {
  return (
    <div className="min-h-screen my-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <DynamicBreadcrumb items={breadcrumbItems} />
        <Overview />
        <TourItinerary />
        <div className="mt-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-8">
              <Image
                src="/pricing.svg"
                alt="Tour Itinerary"
                width={24}
                height={24}
                className="w-8 h-8"
              />
              <h2 className="text-2xl text-blue-700 font-bold">
                Pricing & Inclusions
              </h2>
            </div>
            <p className="text-xl font-bold">PRICING OVERVIEW</p>
            <p>
              We know that every traveler is unique. That’s why we offer
              flexible pricing options to suit your style and budget—each
              designed to let you explore Mongolia your way.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-2/3 space-y-4">
                <p className="text-xl font-bold">
                  Adventurer Package | $70–$100 per day
                </p>
                <p>
                  Perfect for the independent traveler, this option is priced
                  per day so you can decide when to go, where to stop, and how
                  long to linger. Enjoy complete freedom on the road while
                  consulting with our experts on your itinerary. For those who
                  crave a true camping adventure, we also offer tent and
                  sleeping bag rentals, adjusting the rate to the higher end of
                  the range. Choose your vehicle—whether it’s the rugged Uaz
                  Purgon, a versatile 4-wheeled drive like a Landcruiser, or a
                  Starex—and set off on an adventure that’s truly yours.
                </p>
              </div>
              <div className="w-1/3">
                <Image
                  src="/BNM-TOURS1.png"
                  alt="Adventurer Package"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="h-4 border-b border-stone-900 my-12" />
            <div className="flex items-center gap-4">
              <div className="w-1/3">
                <Image
                  src="/BNM-TOURS1.png"
                  alt="Adventurer Package"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="w-2/3 space-y-4">
                <p className="text-xl font-bold">
                  Adventurer Package | $70–$100 per day
                </p>
                <p>
                  Perfect for the independent traveler, this option is priced
                  per day so you can decide when to go, where to stop, and how
                  long to linger. Enjoy complete freedom on the road while
                  consulting with our experts on your itinerary. For those who
                  crave a true camping adventure, we also offer tent and
                  sleeping bag rentals, adjusting the rate to the higher end of
                  the range. Choose your vehicle—whether it’s the rugged Uaz
                  Purgon, a versatile 4-wheeled drive like a Landcruiser, or a
                  Starex—and set off on an adventure that’s truly yours.
                </p>
              </div>
            </div>
            <div className="h-4 border-b border-stone-900 my-12" />
            <div className="flex items-center gap-4">
              <div className="w-2/3 space-y-4">
                <p className="text-xl font-bold">
                  Adventurer Package | $70–$100 per day
                </p>
                <p>
                  Perfect for the independent traveler, this option is priced
                  per day so you can decide when to go, where to stop, and how
                  long to linger. Enjoy complete freedom on the road while
                  consulting with our experts on your itinerary. For those who
                  crave a true camping adventure, we also offer tent and
                  sleeping bag rentals, adjusting the rate to the higher end of
                  the range. Choose your vehicle—whether it’s the rugged Uaz
                  Purgon, a versatile 4-wheeled drive like a Landcruiser, or a
                  Starex—and set off on an adventure that’s truly yours.
                </p>
              </div>
              <div className="w-1/3">
                <Image
                  src="/BNM-TOURS1.png"
                  alt="Adventurer Package"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            <p className="mt-12">
              No matter which package you choose, our fleet options—ranging from
              Uaz Purgon to Landcruisers and Starex—ensure we can match the
              perfect vehicle to your tour and budget. And remember, anything is
              possible! With open communication, we can tailor the itinerary and
              pricing to create the exact tour you envision.
            </p>
          </div>
          <div
            className="relative overflow-hidden rounded-2xl mt-20 mb-8 bg-cover bg-center"
            style={{
              backgroundImage: "url('/START_JOURNEY/START_JOURNEY1.png')",
            }}
          >
            <div className="relative z-10 flex items-center min-h-[280px] lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-7xl mx-auto">
                <div className="relative flex items-end justify-end border border-white">
                  <Image
                    src="/START_JOURNEY/START_JOURNEY2.png"
                    alt="Mongolian Guide"
                    width={400}
                    height={400}
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
                <div className="flex flex-col justify-center text-white space-y-6">
                  <div className="pt-4">
                    <p className="text-2xl font-bold">
                      Discover Mongolia the right way guided by those who know
                      it best.
                    </p>
                    <p className="mt-4">
                      Let’s talk about how your adventure could unfold in the
                      land of eternal blue sky. From remote mountains to nomadic
                      camps, we offer flexible routes and authentic experiences
                      designed just for you.
                    </p>
                    <button className="relative group mt-6">
                      <Image
                        src="/START_JOURNEY/START_JOURNEY3.png"
                        alt="Start Your Journey Button"
                        width={200}
                        height={60}
                        className="hover:scale-105 transition-transform duration-300"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="text-xl font-bold mb-4">TOUR PACKAGE INCLUSIONS</p>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <CheckIcon className="w-6 h-6 text-green-800" />
                <p>
                  Airport Pickup and Departure Transfers - We ensure a
                  hassle-free start and end to your journey, with transportation
                  provided to and from the airport.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="w-6 h-6 text-green-800" />
                <p>
                  4x4 Off-road Vehicle - Travel across Mongolia’s diverse
                  terrain in comfort and safety.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="w-6 h-6 text-green-800" />
                <p>
                  Accommodation - Stay in traditional Ger camps in rural areas
                  and comfortable hotels in cities.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="w-6 h-6 text-green-800" />
                <p>
                  Meals - All meals throughout your journey are included, and
                  fresh water will be provided daily to keep you hydrated on
                  your adventure.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="w-6 h-6 text-green-800" />
                <p>
                  All Activity Fees - From camel riding and horseback adventures
                  to boating, all activity fees are included to provide a fully
                  immersive experience.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="w-6 h-6 text-green-800" />
                <p>
                  Professional Camera Guide - Every tour is led by me, your
                  personal guide and photographer. I’ll capture your journey in
                  high-quality photos and videos, delivered daily so you can
                  share your experiences with friends and family in real-time.
                </p>
              </div>
            </div>
          </div>
          <div className="h-4 border-b border-stone-900 my-12" />
          <div>
            <p className="text-xl font-bold mb-4">TOUR PACKAGE EXCLUSIONS</p>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <XMarkIcon className="w-6 h-6 text-red-800" />
                <p>
                  International Airfare - You’ll need to arrange your own
                  flights to and from Mongolia.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <XMarkIcon className="w-6 h-6 text-red-800" />
                <p>
                  Personal Expenses - This includes souvenirs, snacks, and
                  beverages beyond those provided.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <XMarkIcon className="w-6 h-6 text-red-800" />
                <p>
                  Optional Activities - Any activities outside the listed
                  itinerary may have an additional cost.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <XMarkIcon className="w-6 h-6 text-red-800" />
                <p>
                  Camera Fees in Museums/Monasteries - Some locations may charge
                  additional fees for photography.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <XMarkIcon className="w-6 h-6 text-red-800" />
                <p>
                  Travel Insurance - We highly recommend travel insurance, but
                  it is not included in the price.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <XMarkIcon className="w-6 h-6 text-red-800" />
                <p>
                  Single Supplement - For those who prefer private
                  accommodation, a single supplement fee applies.
                </p>
              </div>
            </div>
          </div>
        </div>
        <DaylightDiscoveries />
      </div>
    </div>
  );
}
