"use client";

import Link from "next/link";
import Image from "next/image";
import { EventCardData } from "@/components/data/data-card";
import { VisitBnmTours } from "@/components/events/visit-bnm-tours";
import { DynamicBreadcrumb } from "@/components/breadcrumb";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
];

export default function EventsPage() {
  const getCardInformationClasses = (size: string) => {
    switch (size) {
      case "WIDE":
        return "col-span-2 row-span-1";
      case "TALL":
        return "col-span-1 row-span-2";
      case "MEDIUM":
        return "col-span-1 row-span-1";
      case "LARGE":
        return "col-span-2 row-span-2";
      default:
        return "col-span-1 row-span-1";
    }
  };

  const getCardInformationHeight = (size: string) => {
    switch (size) {
      case "WIDE":
        return "h-72";
      case "TALL":
        return "h-[37rem]";
      case "MEDIUM":
        return "h-72";
      case "LARGE":
        return "h-[36rem]";
      default:
        return "h-72";
    }
  };
  return (
    <div className="min-h-screen">
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DynamicBreadcrumb items={breadcrumbItems} />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[18rem] gap-4">
            {EventCardData.map((event: any, index: number) => (
              <Link
                href={`/events/${event.id}`}
                key={event.id}
                className={`group relative overflow-hidden ${getCardInformationClasses(event.size)} ${getCardInformationHeight(event.size)} rounded-2xl`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white rounded-lg px-3 py-2 shadow-lg">
                  <div className="text-blue-600 font-semibold text-sm">
                    {event.date}
                  </div>
                  {event.day && (
                    <div className="text-red-600 font-bold text-lg">
                      {event.day}
                    </div>
                  )}
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-bold text-lg leading-tight">
                    {event.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
          <VisitBnmTours />
        </div>
      </div>
    </div>
  );
}
