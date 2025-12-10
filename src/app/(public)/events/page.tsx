"use client";

import { destinationApi } from "@/apis";
import { DynamicBreadcrumb } from "@/components/breadcrumb";
import DestinationSection from "@/components/destination-section";
import { IBeautifulPlace } from "@/interfaces/beautiful-place";
import { IResult } from "@/interfaces/result";
import Image from "next/image";
import useSWR from "swr";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
];

export default function EventsPage() {
  const { data: NorthernMongoliaData, mutate: NorthernMongoliaMutate } = useSWR<
    IResult<IBeautifulPlace>
  >(
    `swr.destination.events`,
    () =>
      destinationApi.list({
        page: 1,
        limit: 100,
        type: "EVENTS",
        reference: "6937a9e988056a5118591476",
        isHomeScreen: true,
      }),
    { revalidateOnFocus: false },
  );
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <DynamicBreadcrumb items={breadcrumbItems} />
      </div>
      <div className="space-y-12 mt-6">
        <DestinationSection
          type={true}
          isEvents={true}
          path="/events"
          title=""
          destinations={NorthernMongoliaData?.rows}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <Image
          src="/ESCAPESTORIES.png"
          alt="Visit BNM Tours"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
