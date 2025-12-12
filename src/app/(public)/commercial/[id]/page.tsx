"use client";

import { commercialApi, merchantApi, referenceApi } from "@/apis";
import { DynamicBreadcrumb } from "@/components/breadcrumb";
import { VisitBnmTours } from "@/components/events/visit-bnm-tours";
import { SelectField } from "@/components/form/select-field";
import { DestinationSkeleton } from "@/components/loading";
import { MerchantCard } from "@/components/nearby-merchant/merchant-card";
import { useParams } from "next/navigation";
import { useState } from "react";
import useSWR from "swr";

export default function AccommodationDetailPage() {
  const { id } = useParams();
  const [selectedFilter, setSelectedFilter] = useState("All");

  const { data: detailData, isLoading } = useSWR<any>(
    `swr.commercial.detail.${id}`,
    () => commercialApi.get(id as string),
  );

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Commercial", href: "/commercial" },
    {
      label: detailData?.name || "Detail",
      href: `/commercial/${id}`,
      isActive: true,
    },
  ];

  const { data: merchantData, isLoading: merchantDataLoading } = useSWR<any>(
    `swr.destination.merchantData.${id}`,
    () =>
      merchantApi.list({
        page: 1,
        limit: 100,
        // commercial: id as string,
        // commercialSubType: "6939b7a3835ec55a9e8277b3",
      }),
  );

  const {
    data: referenceCommercialData,
    isLoading: referenceCommercialDataLoading,
  } = useSWR<any>(
    `swr.destination.referenceCommercialData.${detailData?._id}`,
    () =>
      referenceApi.list({
        page: 1,
        limit: 100,
        type: "COMMERCIAL",
      }),
  );

  const { data: referenceData, isLoading: referenceDataLoading } = useSWR<any>(
    `swr.destination.referenceData.${detailData?._id}`,
    () =>
      referenceApi.list({
        page: 1,
        limit: 100,
        parent: detailData?.type?._id,
      }),
  );

  const { data: CommercialData } = useSWR<any>(
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

  if (isLoading || merchantDataLoading || referenceDataLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="my-20 space-y-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DynamicBreadcrumb items={breadcrumbItems} />
          <div className="flex items-center gap-2 my-6 flex-wrap">
            {/* <button className="flex items-center gap-1 px-4 py-2 rounded-lg border border-blue-500 bg-white text-gray-900 hover:bg-gray-50 transition-all duration-200">
              <span>Hotel</span>
              <ChevronDownIcon className="w-4 h-4 text-gray-900" />
            </button> */}
            <SelectField
              name="filter"
              className="w-40"
              options={referenceCommercialData?.rows?.map((filter: any) => ({
                value: filter._id,
                label: filter.name,
              }))}
            />
            <button
              onClick={() => setSelectedFilter("All")}
              className={`px-4 py-2 rounded-lg border transition-all duration-200 ${
                selectedFilter === "All"
                  ? "bg-blue-600 border-blue-600 text-white"
                  : "bg-white border-blue-500 text-gray-900 hover:bg-gray-50"
              }`}
            >
              All
            </button>
            {referenceData?.rows?.map((filter: any) => (
              <button
                key={filter._id}
                onClick={() => setSelectedFilter(filter._id)}
                className={`px-4 py-2 rounded-lg border transition-all duration-200 ${
                  selectedFilter === filter._id
                    ? "bg-blue-600 border-blue-600 text-white"
                    : "bg-white border-blue-500 text-gray-900 hover:bg-gray-50"
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
          {merchantData && merchantData ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 auto-rows-[22rem] gap-4 transition-all duration-300 mt-6">
              {merchantData?.rows?.map((merchant: any, index: number) => (
                <div key={merchant._id}>
                  <MerchantCard data={merchant} index={index} />
                </div>
              ))}
            </div>
          ) : (
            <DestinationSkeleton title="Detail" />
          )}
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <VisitBnmTours />
        </div>
      </div>
    </div>
  );
}
