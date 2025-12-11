"use client";

import { commercialApi } from "@/apis";
import { DynamicBreadcrumb } from "@/components/breadcrumb";
import DestinationSection from "@/components/destination-section";
import { VisitBnmTours } from "@/components/events/visit-bnm-tours";
import { CommercialSkeleton } from "@/components/loading";
import useSWR from "swr";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
];

export default function CommercialPage() {
  const { data: CommercialData, isLoading } = useSWR<any>(
    `swr.commercial.list`,
    () =>
      commercialApi.list({
        page: 1,
        limit: 100,
      }),
    {
      revalidateOnFocus: false,
    },
  );

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 mb-8">
        <DynamicBreadcrumb items={breadcrumbItems} />
      </div>
      {isLoading ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <CommercialSkeleton />
        </div>
      ) : (
        <DestinationSection
          type={true}
          isCommercial={true}
          path="/commercial"
          title=""
          destinations={CommercialData?.rows}
        />
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <VisitBnmTours />
      </div>
    </div>
  );
}
