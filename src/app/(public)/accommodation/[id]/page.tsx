"use client";

import { destinationApi, merchantApi } from "@/apis";
import { DynamicBreadcrumb } from "@/components/breadcrumb";
import DestinationSection from "@/components/destination-section";
import { DestinationSkeleton } from "@/components/loading";
import { MerchantCard } from "@/components/nearby-merchant/merchant-card";
import { IBeautifulPlace } from "@/interfaces/beautiful-place";
import { useParams } from "next/navigation";
import useSWR from "swr";

export default function AccommodationDetailPage() {
  const { id } = useParams();

  const { data: detailData, isLoading } = useSWR<any>(
    `swr.destination.detail.${id}`,
    () => destinationApi.get(id as string),
  );

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Destinations", href: "/destination" },
    {
      label: detailData?.name || "Detail",
      href: `/destination/${id}`,
      isActive: true,
    },
  ];

  const { data: merchantData, isLoading: merchantDataLoading } = useSWR<any>(
    `swr.destination.merchantData.${id}`,
    () =>
      merchantApi.list({
        page: 1,
        limit: 100,
        beautifulPlace: id as string,
      }),
  );

  const {
    data: nearbyAccommodationData,
    mutate: nearbyAccommodationMutate,
    isLoading: nearbyAccommodationLoading,
  } = useSWR<any>(
    `swr.destination.nearby.accommodation.${detailData?.reference?._id}`,
    () =>
      destinationApi.list({
        page: 1,
        limit: 100,
        type: "ACCOMMODATION",
        reference: detailData?.reference?._id,
        isHomeScreen: true,
      }),
    { revalidateOnFocus: false },
  );

  if (merchantDataLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg text-gray-600">Loading...</div>
      </div>
    );
  }

  if (!merchantData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg text-gray-600">merchantData not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DynamicBreadcrumb items={breadcrumbItems} />

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">
              Altai Tavan Bogd
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[22rem] gap-4 transition-all duration-300">
              {merchantData?.rows?.map((merchant: any) => (
                <MerchantCard key={merchant._id} data={merchant} />
              ))}
            </div>
          </div>
        </div>
        {nearbyAccommodationData?.rows &&
        nearbyAccommodationData?.rows?.length > 0 ? (
          <DestinationSection
            type={true}
            path="/destination"
            title="Day trips"
            destinations={nearbyAccommodationData?.rows}
          />
        ) : (
          <DestinationSkeleton title="Day trips" />
        )}
      </div>
    </div>
  );
}
