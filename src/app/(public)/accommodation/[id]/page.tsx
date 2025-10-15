"use client";

import { destinationApi } from "@/apis";
import { AccommodationDetailContent } from "@/components/accommodation-detail-content";
import { IBeautifulPlace } from "@/interfaces/beautiful-place";
import { useParams } from "next/navigation";
import useSWR from "swr";

export default function AccommodationDetailPage() {
  const { id } = useParams();

  const { data: accommodation, isLoading } = useSWR<IBeautifulPlace>(
    `swr.destination.accommodation.${id}`,
    () => destinationApi.get(id as string),
  );

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg text-gray-600">Loading...</div>
      </div>
    );
  }

  if (!accommodation) {
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
          <div className="mb-6">
            <button className="text-gray-600 hover:text-gray-800 flex items-center">
              <span className="tex-lg">&lt;</span>
              <span className="ml-1">Back</span>
            </button>
          </div>
          <AccommodationDetailContent feature={accommodation?.features} />
        </div>
      </div>
    </div>
  );
}
