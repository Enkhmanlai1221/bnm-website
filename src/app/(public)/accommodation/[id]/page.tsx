"use client";

import { destinationApi, merchantApi } from "@/apis";
import { DynamicBreadcrumb } from "@/components/breadcrumb";
import DestinationSection from "@/components/destination-section";
import { DestinationSkeleton, ImageSkeleton } from "@/components/loading";
import { MerchantCard } from "@/components/nearby-merchant/merchant-card";
import { useParams } from "next/navigation";
import useSWR from "swr";
import Image from "next/image";
import { useState } from "react";

const accommodationItems = [
  {
    id: 1,
    image: "/HOME/ACCOMMODATION1.png",
    title: "Hotels",
    size: "medium",
  },
  { id: 2, image: "/HOME/ACCOMMODATION2.png", title: "Gers", size: "wide" },
  {
    id: 3,
    image: "/HOME/ACCOMMODATION3.png",
    title: "Hostels",
    size: "medium",
  },
  {
    id: 4,
    image: "/HOME/ACCOMMODATION4.png",
    title: "Resorts",
    size: "medium",
  },
  { id: 5, image: "/HOME/ACCOMMODATION5.png", title: "Camps", size: "wide" },
  {
    id: 6,
    image: "/HOME/ACCOMMODATION6.png",
    title: "Lodges",
    size: "medium",
  },
];

const getCardInformationClasses = (size: string) => {
  switch (size) {
    case "wide":
      return "col-span-2 row-span-1";
    case "tall":
      return "col-span-1 row-span-2";
    case "tallcustom":
      return "col-span-1 row-span-2";
    case "medium":
      return "col-span-1 row-span-1";
    case "large":
      return "col-span-2 row-span-2";
    default:
      return "col-span-1 row-span-1";
  }
};

const getCardInformationHeight = (size: string) => {
  switch (size) {
    case "wide":
      return "h-72";
    case "tall":
      return "h-[37rem]";
    case "medium":
      return "h-72";
    case "large":
      return "h-[37rem]";
    case "tallcustom":
      return "h-[36rem]";
    default:
      return "h-72";
  }
};

export default function AccommodationDetailPage() {
  const { id } = useParams();
  const [loadedAccommodation, setLoadedAccommodation] = useState<
    Record<number, boolean>
  >({});

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

  // if (merchantDataLoading) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center">
  //       <div className="text-lg text-gray-600">Loading...</div>
  //     </div>
  //   );
  // }

  // if (!merchantData) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center">
  //       <div className="text-lg text-gray-600">merchantData not found</div>
  //     </div>
  //   );
  // }

  return (
    <div className="min-h-screen">
      <div className="my-20 space-y-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DynamicBreadcrumb items={breadcrumbItems} />

          <div className="space-y-4 mt-6">
            <h2 className="text-3xl font-bold text-gray-900">
              {detailData?.name}
            </h2>
            {merchantData?.rows?.length && merchantData?.rows?.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[22rem] gap-4 transition-all duration-300">
                {merchantData?.rows?.map((merchant: any, index: number) => (
                  <MerchantCard
                    key={merchant._id}
                    data={merchant}
                    index={index}
                  />
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-center h-64 border border-gray-200 rounded-lg p-4">
                <div className="text-gray-500">No nearby merchants found</div>
              </div>
            )}
          </div>
        </div>
        {nearbyAccommodationData?.rows &&
        nearbyAccommodationData?.rows?.length > 0 ? (
          <DestinationSection
            type={true}
            path="/destination"
            title={detailData?.reference?.name || "Detail"}
            destinations={nearbyAccommodationData?.rows}
          />
        ) : (
          <DestinationSkeleton
            title={detailData?.reference?.name || "Detail"}
          />
        )}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6">
              <h2 className="text-4xl font-bold text-gray-900 ">
                Accommodation
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[18rem]">
              {accommodationItems.map((destination, index) => (
                <div
                  key={destination.id}
                  className={`group relative overflow-hidden ${getCardInformationClasses(destination.size)} ${getCardInformationHeight(destination.size)} rounded-2xl`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {!loadedAccommodation[destination.id] && (
                    <div className="absolute inset-0">
                      <ImageSkeleton className="w-full h-full rounded-2xl" />
                    </div>
                  )}
                  <Image
                    src={destination.image}
                    alt={destination.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="duration-700 group-hover:scale-105"
                    onLoadingComplete={() =>
                      setLoadedAccommodation((prev) => ({
                        ...prev,
                        [destination.id]: true,
                      }))
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Image
            src="/ESCAPESTORIES.png"
            alt="Visit BNM Tours"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
