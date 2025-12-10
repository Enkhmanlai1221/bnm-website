"use client";

import { destinationApi, referenceApi } from "@/apis";
import { DynamicBreadcrumb } from "@/components/breadcrumb";
import DestinationSection from "@/components/destination-section";
import { PlacesToVisitSkeleton } from "@/components/loading";
import { IBeautifulPlace } from "@/interfaces/beautiful-place";
import { IResult } from "@/interfaces/result";
import { useParams } from "next/navigation";
import useSWR from "swr";

export default function VisitUlaanbaatarType() {
  const { id } = useParams();

  const { data: detailData } = useSWR<IBeautifulPlace>(
    `swr.destination.visitUlaanbaatar.detail.${id}`,
    () => destinationApi.get(id as string),
  );

  const { data: referenceData } = useSWR<IResult<IBeautifulPlace>>(
    `swr.destination.visitUlaanbaatar.${id}`,
    () =>
      referenceApi.list({
        page: 1,
        limit: 100,
        type: "VISIT_ULAANBAATAR",
      }),
    { revalidateOnFocus: false },
  );

  const referenceId = referenceData?.rows?.find(
    (item: any) => item.name === detailData?.name,
  )?._id;

  const { data: beautifulPlaces } = useSWR<IResult<IBeautifulPlace>>(
    `swr.destination.visitUlaanbaatar.beautifulPlaces.${referenceId}`,
    () =>
      destinationApi.list({
        page: 1,
        limit: 100,
        type: "VISIT_ULAANBAATAR",
        reference: referenceId,
      }),
  );

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Visit Ulaanbaatar", href: "/visit-ulaanbaatar" },
    {
      label: detailData?.name || "Detail",
      href: `/visit-ulaanbaatar/type/${id}`,
      isActive: true,
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 mb-6">
        <DynamicBreadcrumb items={breadcrumbItems} />
      </div>

      {!beautifulPlaces ? (
        <PlacesToVisitSkeleton />
      ) : (
        <DestinationSection
          path={`/visit-ulaanbaatar`}
          title={detailData?.name || "Detail"}
          destinations={beautifulPlaces?.rows ?? []}
          type={true}
        />
      )}
    </div>
  );
}
