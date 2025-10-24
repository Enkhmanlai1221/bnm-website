"use client";

import { destinationApi, merchantApi } from "@/apis";
import { AccommodationDetailContent } from "@/components/accommodation-detail-content";
import { DynamicBreadcrumb } from "@/components/breadcrumb";
import { MerchantCard } from "@/components/nearby-merchant/merchant-card";
import { IBeautifulPlace } from "@/interfaces/beautiful-place";
import { IResult } from "@/interfaces/result";
import { useParams } from "next/navigation";
import Image from "next/image";
import useSWR from "swr";
import NearbyMerchantCard from "@/components/nearby-merchant/page";

export default function DestinationDetailPage() {
  const { id } = useParams();

  const { data, isLoading } = useSWR<IBeautifulPlace>(
    `swr.destination.detail.${id}`,
    () => destinationApi.get(id as string),
    {
      revalidateOnFocus: false,
    },
  );

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Destinations", href: "/destination" },
    {
      label: data?.name || "Detail",
      href: `/destination/${id}`,
      isActive: true,
    },
  ];

  const { data: nearbyMerchants, mutate: NorthernMongoliaMutate } = useSWR<
    IResult<IBeautifulPlace>
  >(
    `swr.destination.nearbyMerchants.${id}`,
    () =>
      merchantApi.list({
        page: 1,
        limit: 100,
        beautifulPlace: id,
      }),
    { revalidateOnFocus: false },
  );

  const { data: dayTripsData, mutate: dayTripsMutate } = useSWR<
    IResult<IBeautifulPlace>
  >(
    `swr.destination.dayTrips`,
    () =>
      destinationApi.list({
        page: 1,
        limit: 100,
        type: "DESTINATIONS",
        reference: "68ee93c4b88440a78c3d94e0",
        isHomeScreen: true,
      }),
    {
      revalidateOnFocus: false,
    },
  );

  return (
    <div className="min-h-screen">
      <div className="my-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DynamicBreadcrumb items={breadcrumbItems} />
          <AccommodationDetailContent
            feature={data?.features || []}
            isLoading={isLoading && !data}
          />
          <div className="mt-12 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Recommended Accommodation
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 auto-rows-[22rem] gap-4 transition-all duration-300">
                {nearbyMerchants?.rows?.map((property: any) => (
                  <MerchantCard key={property._id} data={property} />
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Nearby Destinations
              </h2>
              <NearbyMerchantCard
                limit={3}
                destinations={dayTripsData}
                path="/destination"
                title="Day trips"
                type={true}
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Recommended BNM Tours
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 auto-rows-[22rem] gap-4 transition-all duration-300">
                {nearbyMerchants?.rows?.map((property: any) => (
                  <MerchantCard key={property._id} data={property} />
                ))}
              </div>
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
      </div>
    </div>
  );
}
