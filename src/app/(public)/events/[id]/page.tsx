"use client";

import { destinationApi } from "@/apis";
import { EventDetailContent } from "@/components/accommodation-detail-content/event-detail";
import { DynamicBreadcrumb } from "@/components/breadcrumb";
import { IBeautifulPlace } from "@/interfaces/beautiful-place";
import { useParams } from "next/navigation";
import useSWR from "swr";

export default function DestinationDetailPage() {
  const { id } = useParams();

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Events", href: "/events" },
    {
      label: "Detail",
      href: `/events/${id}`,
      isActive: true,
    },
  ];

  const { data, isLoading } = useSWR<IBeautifulPlace>(
    `swr.destination.events.detail.${id}`,
    () => destinationApi.get(id as string),
    {
      revalidateOnFocus: false,
    },
  );

  return (
    <div className="min-h-screen">
      <div className="my-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DynamicBreadcrumb items={breadcrumbItems} />
          <EventDetailContent
            feature={data?.features || []}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
}
