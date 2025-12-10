"use client";

import { destinationApi } from "@/apis";
import { DynamicBreadcrumb } from "@/components/breadcrumb";
import DestinationSection from "@/components/destination-section";
import { EventDetailPage } from "@/components/detail/event";
import { TourCard } from "@/components/tour-card";
import { IBeautifulPlace } from "@/interfaces/beautiful-place";
import { IResult } from "@/interfaces/result";
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

  const {
    data: CentralMongoliaData,
    mutate: CentralMongoliaMutate,
    isLoading: CentralMongoliaLoading,
  } = useSWR<IResult<IBeautifulPlace>>(
    `swr.destination.centralMongolia`,
    () =>
      destinationApi.list({
        page: 1,
        limit: 3,
        type: "DESTINATIONS",
        reference: "691c772bc2946089f91abb82",
        isHomeScreen: true,
      }),
    { revalidateOnFocus: false },
  );
  const { data: hamaagu } = useSWR<IResult<IBeautifulPlace>>(
    `swr.destination.asdasd`,
    () =>
      destinationApi.list({
        page: 1,
        limit: 2,
        type: "DESTINATIONS",
        reference: "691c772bc2946089f91abb82",
        isHomeScreen: true,
      }),
    { revalidateOnFocus: false },
  );

  // const { data: merchantData, isLoading: merchantDataLoading } = useSWR<any>(
  //   `swr.destination.events.merchant.${id}`,
  //   () =>
  //     merchantApi.list({
  //       page: 1,
  //       limit: 100,
  //       event: id as string,
  //     }),
  //   { revalidateOnFocus: false },
  // );

  return (
    <div className="min-h-screen">
      <div className="my-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <DynamicBreadcrumb items={breadcrumbItems} />
          </div>
          <EventDetailPage
            feature={data?.features || []}
            isLoading={isLoading}
          />
        </div>
        <div className="mt-10">
          <DestinationSection
            limit={6}
            type={true}
            isEventDetail={true}
            path="/destination"
            title="Recommended Accommodation"
            destinations={CentralMongoliaData?.rows}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="">
              <p className="text-2xl font-bold text-gray-900">
                Nearby Destinations
              </p>
              <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {hamaagu?.rows?.map((tour: any, index: number) => (
                  <TourCard
                    key={tour._id}
                    tour={tour}
                    index={index}
                    path="/bnm-tours"
                  />
                ))}
              </div>
            </div>
            <div className="">
              <p className="text-2xl font-bold text-gray-900">
                Recommended BNM Tours
              </p>
              <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {hamaagu?.rows?.map((tour: any, index: number) => (
                  <TourCard
                    key={tour._id}
                    tour={tour}
                    index={index}
                    path="/bnm-tours"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
