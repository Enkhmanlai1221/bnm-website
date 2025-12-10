"use client";

import { destinationApi } from "@/apis";
import { DynamicBreadcrumb } from "@/components/breadcrumb";
import { ImageSkeleton, VisitUlaanbaatarSkeleton } from "@/components/loading";
import { IBeautifulPlace } from "@/interfaces/beautiful-place";
import { IResult } from "@/interfaces/result";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import useSWR from "swr";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Visit Ulaanbaatar", href: "/visit-ulaanbaatar" },
];

export default function VisitUlaanbaatarPage() {
  const [loadedAnar, setLoadedAnar] = useState(false);

  const getCardInformationClasses = (size: string) => {
    switch (size) {
      case "WIDE":
        return "col-span-3 row-span-1";
      case "MEDIUM":
        return "col-span-2 row-span-1";
      default:
        return "col-span-1 row-span-1";
    }
  };

  const getCardInformationHeight = (size: string) => {
    switch (size) {
      case "WIDE":
        return "h-72";
      case "TALL":
        return "h-[36rem]";
      case "MEDIUM":
        return "h-72";
      case "LARGE":
        return "h-[36rem]";
      default:
        return "h-72";
    }
  };

  const { data: visitUlaanbaatarData, isLoading: visitUlaanbaatarLoading } =
    useSWR<IResult<IBeautifulPlace>>(
      `swr.destination.visitUlaanbaatar`,
      () =>
        destinationApi.list({
          page: 1,
          limit: 100,
          type: "VISIT_ULAANBAATAR",
          // isHomeScreen: true,
        }),
      {
        revalidateOnFocus: false,
      },
    );

  return (
    <div className="min-h-screen">
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {visitUlaanbaatarLoading ? (
            <VisitUlaanbaatarSkeleton />
          ) : (
            <>
              <DynamicBreadcrumb items={breadcrumbItems} />
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-6 auto-rows-[18rem] gap-4 mt-6">
                {visitUlaanbaatarData?.rows?.map((place: IBeautifulPlace) => (
                  <Link
                    key={place._id}
                    href={`/visit-ulaanbaatar/type/${place._id}`}
                    className={`group relative overflow-hidden ${getCardInformationClasses(place.imagePosition)} ${getCardInformationHeight(place.imagePosition)} rounded-2xl`}
                  >
                    <Image
                      src={place.mainImage?.url}
                      alt={place.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 16vw"
                    />
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      <div
        className="py-20 bg-rgba(174, 197, 246, 0.7) mb-16 relative"
        style={{ backgroundColor: "#abc2f3" }}
      >
        <div className="absolute bottom-0 left-8 w-[20rem] h-[20rem] flex-shrink-0 z-10">
          {!loadedAnar && (
            <div className="absolute inset-0">
              <ImageSkeleton className="w-full h-full rounded-2xl" />
            </div>
          )}
          <Image
            src="/VISIT_UB/ANAR.png"
            alt="Virtual Tour Guide Anar"
            fill
            sizes="320px"
            className="object-contain"
            onLoadingComplete={() => setLoadedAnar(true)}
          />
        </div>
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="flex flex-col lg:flex-row items-start gap-6">
              <div className="flex-1 space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-transparent bg-clip-text">
                  Virtual City Tour
                </h1>
                <p className="text-gray-700 text-lg leading-relaxed">
                  The virtual Tour Guide Anar from BraveNewMongoliaTours is here
                  to guide you through the most optimal itinerary to experience
                  our Capital City.
                </p>
                <div className="flex justify-end">
                  <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 uppercase tracking-wide">
                    See Details
                  </button>
                </div>
              </div>
            </div>
            {/* <div className="relative w-full h-80 lg:h-96 rounded-3xl overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/cPtSIPk2ETo?autoplay=1&mute=1&loop=1&playlist=cPtSIPk2ETo"
                title="Virtual City Tour"
                className="w-full h-full object-cover"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
