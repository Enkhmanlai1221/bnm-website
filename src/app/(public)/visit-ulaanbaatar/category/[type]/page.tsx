"use client";

import { destinationApi } from "@/apis";
import { DynamicBreadcrumb } from "@/components/breadcrumb";
import DestinationSection from "@/components/destination-section";
import { IBeautifulPlace } from "@/interfaces/beautiful-place";
import { IResult } from "@/interfaces/result";
import { useParams } from "next/navigation";
import useSWR from "swr";

export default function VisitUlaanbaatarTypePage() {
  const { type } = useParams();

  const types = {
    PLACES_TO_VISIT: "68f53b59631d038d455580fe",
    STATUES_MONUMENTS: "68f53b66631d038d45558104",
    MUSEUMS: "68f53b66631d038d45558104",
    HISTORY_CAPITAL: "68f53b7d631d038d4555810e",
    INFORMATION_CENTERS: "68f53b95631d038d4555811a",
  };

  const { data, mutate } = useSWR<IResult<IBeautifulPlace>>(
    `swr.destination.visitUlaanbaatar.${type}`,
    () =>
      destinationApi.list({
        page: 1,
        limit: 100,
        type: "VISIT_ULAANBAATAR",
        reference: types[type as keyof typeof types],
        isHomeScreen: true,
      }),
    { revalidateOnFocus: false },
  );

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Visit Ulaanbaatar", href: "/visit-ulaanbaatar" },
    {
      label: type as string,
      href: `/visit-ulaanbaatar/category/${type}`,
      isActive: true,
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <DynamicBreadcrumb items={breadcrumbItems} />
      </div>
      <DestinationSection
        path={`/visit-ulaanbaatar`}
        title={type as string}
        destinations={data?.rows ?? []}
        type={true}
      />
    </div>
  );
}
