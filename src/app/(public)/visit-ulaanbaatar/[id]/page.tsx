"use client";

import { destinationApi } from "@/apis";
import { AccommodationDetailContent } from "@/components/accommodation-detail-content";
import { DynamicBreadcrumb } from "@/components/breadcrumb";
import { ContentLoading } from "@/components/loading";
import { IBeautifulPlace } from "@/interfaces/beautiful-place";
import { useParams } from "next/navigation";
import useSWR from "swr";

export default function VisitUlaanbaatarDetailPage() {
  const { id } = useParams();

  const { data, isLoading } = useSWR<IBeautifulPlace>(
    `swr.destination.visitUlaanbaatar.detail.${id}`,
    () => destinationApi.get(id as string),
  );

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Visit Ulaanbaatar", href: "/visit-ulaanbaatar" },
    {
      label: data?.reference?.name || "Detail",
      href: `/visit-ulaanbaatar/${id}`,
    },
    {
      label: data?.name || "Detail",
      href: `/visit-ulaanbaatar/${id}`,
      isActive: true,
    },
  ];

  if (isLoading) {
    return <ContentLoading />;
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg text-gray-600">Visit Ulaanbaatar not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="my-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DynamicBreadcrumb items={breadcrumbItems} />
          <AccommodationDetailContent feature={data?.features} />
        </div>
      </div>
    </div>
  );
}
