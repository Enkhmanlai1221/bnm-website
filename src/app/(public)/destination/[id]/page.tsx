"use client";

import { destinationApi } from "@/apis";
import { AccommodationDetailContent } from "@/components/accommodation-detail-content";
import { DynamicBreadcrumb } from "@/components/breadcrumb";
import { PageLoading } from "@/components/loading";
import { IBeautifulPlace } from "@/interfaces/beautiful-place";
import { useParams } from "next/navigation";
import useSWR from "swr";

export default function DestinationDetailPage() {
  const { id } = useParams();

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Destinations", href: "/destination" },
    {
      label: "Detail",
      href: `/destination/${id}`,
      isActive: true,
    },
  ];

  const { data, isLoading } = useSWR<IBeautifulPlace>(
    `swr.destination.detail.${id}`,
    () => destinationApi.get(id as string),
    {
      revalidateOnFocus: false,
    },
  );

  // if (!data) {
  //   return <PageLoading />;
  // }

  return (
    <div className="min-h-screen">
      <div className="my-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DynamicBreadcrumb items={breadcrumbItems} />
          <AccommodationDetailContent
            feature={data?.features || []}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
}
