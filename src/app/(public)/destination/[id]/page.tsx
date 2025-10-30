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
import { DestinationSkeleton } from "@/components/loading";
import { Paper } from "@mantine/core";

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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent z-10"></div>
        <div
          className="relative h-96 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${data?.mainImage?.url || "/no-image.png"})`,
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative z-20 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="text-white">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                  {data?.name || "Destination"}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-30">
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-8 mb-8">
          <DynamicBreadcrumb items={breadcrumbItems} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <AccommodationDetailContent
          feature={data?.features || []}
          isLoading={isLoading && !data}
        />

        <div className="mt-16 space-y-16">
          <div className="">
            <h1 className="text-2xl sm:text-2xl md:text-2xl font-bold mb-4">
              Recommended Accommodation
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {nearbyMerchants && nearbyMerchants?.rows?.length > 0 ? (
                nearbyMerchants?.rows?.map((merchant: any, index: number) => (
                  <MerchantCard
                    key={merchant._id}
                    data={merchant}
                    index={index}
                  />
                ))
              ) : (
                <Paper className="w-full h-64">
                  <div className="flex items-center justify-center h-full">
                    <p className="text-gray-500">No nearby merchants found</p>
                  </div>
                </Paper>
              )}
            </div>
          </div>

          <div className="">
            <h2 className="text-2xl sm:text-2xl font-bold text-gray-900 mb-4">
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

          <Image
            src="/ESCAPESTORIES.png"
            alt="Visit BNM Tours"
            width={1000}
            height={400}
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
}
