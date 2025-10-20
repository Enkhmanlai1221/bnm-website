"use client";

import { destinationApi } from "@/apis";
import { AccommodationDetailContent } from "@/components/accommodation-detail-content";
import { DynamicBreadcrumb } from "@/components/breadcrumb";
import { IBeautifulPlace } from "@/interfaces/beautiful-place";
import { useParams } from "next/navigation";
import useSWR from "swr";

export default function VisitUlaanbaatarDetailPage() {
  const { id } = useParams();

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Visit Ulaanbaatar", href: "/visit-ulaanbaatar" },
    {
      label: "Visit Ulaanbaatar",
      href: `/visit-ulaanbaatar/${id}`,
      isActive: true,
    },
  ];

  const { data, isLoading } = useSWR<IBeautifulPlace>(
    `swr.destination.visitUlaanbaatar.${id}`,
    () => destinationApi.get(id as string),
  );

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg text-gray-600">Loading...</div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg text-gray-600">Accommodation not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DynamicBreadcrumb items={breadcrumbItems} />

          <div className="mb-6">
            <button className="text-gray-600 hover:text-gray-800 flex items-center">
              <span className="tex-lg">&lt;</span>
              <span className="ml-1">Back</span>
            </button>
          </div>
          <AccommodationDetailContent feature={data?.features} />
        </div>
      </div>
    </div>
  );
}
