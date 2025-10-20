"use client";

import { destinationApi } from "@/apis";
import { DynamicBreadcrumb } from "@/components/breadcrumb";
import { VisitBnmTours } from "@/components/events/visit-bnm-tours";
import { BeautifulPlace } from "@/models/beautiful-place";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
];

export default function CommercialPage() {
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

  // Data fetching
  const {
    data: CommercialData,
    mutate,
    isLoading,
  } = useSWR<any>(
    `swr.destination.commercial`,
    () =>
      destinationApi.list({
        page: 1,
        limit: 100,
        type: "COMMERCIAL",
      }),
    {
      revalidateOnFocus: false,
    },
  );

  return (
    <div className="min-h-screen">
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DynamicBreadcrumb items={breadcrumbItems} />
          {isLoading ? (
            <div
              role="status"
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[18rem] gap-4"
            >
              <div className="h-2 bg-gray-300 rounded-xl max-w-[360px] min-h-[18rem] mb-2.5"></div>
              <div className="h-2 bg-gray-300 rounded-xl max-w-[330px] min-h-[18rem] mb-2.5"></div>
              <div className="h-2 bg-gray-300 rounded-xl max-w-[330px] min-h-[18rem] mb-2.5"></div>
              <div className="h-2 bg-gray-300 rounded-xl max-w-[330px] min-h-[18rem] mb-2.5"></div>
              <div className="h-2 bg-gray-300 rounded-xl max-w-[360px] min-h-[18rem] mb-2.5"></div>
              <div className="h-2 bg-gray-300 rounded-xl max-w-[330px] min-h-[18rem] mb-2.5"></div>
              <div className="h-2 bg-gray-300 rounded-xl max-w-[330px] min-h-[18rem] mb-2.5"></div>
              <div className="h-2 bg-gray-300 rounded-xl max-w-[330px] min-h-[18rem] mb-2.5"></div>
              <div className="h-2 bg-gray-300 rounded-xl max-w-[360px] min-h-[18rem] mb-2.5"></div>
              <div className="h-2 bg-gray-300 rounded-xl max-w-[330px] min-h-[18rem] mb-2.5"></div>
              <div className="h-2 bg-gray-300 rounded-xl max-w-[330px] min-h-[18rem] mb-2.5"></div>
              <div className="h-2 bg-gray-300 rounded-xl max-w-[330px] min-h-[18rem] mb-2.5"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[18rem] gap-4">
              {CommercialData?.rows?.map(
                (commercial: BeautifulPlace, index: number) => (
                  <Link
                    href={`/commercial/${commercial._id}`}
                    key={commercial._id}
                    className={`group relative overflow-hidden ${getCardInformationClasses(commercial.imagePosition)} ${getCardInformationHeight(commercial.imagePosition)} rounded-2xl`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Image
                      src={commercial?.mainImage?.url}
                      alt={commercial.name}
                      fill
                      className="duration-700 group-hover:scale-105"
                    />
                  </Link>
                ),
              )}
            </div>
          )}
          <VisitBnmTours />
        </div>
      </div>
    </div>
  );
}
