"use client";

import { destinationApi } from "@/apis";
import { DynamicBreadcrumb } from "@/components/breadcrumb";
import DestinationSection from "@/components/destination-section";
import { IBeautifulPlace } from "@/interfaces/beautiful-place";
import { IResult } from "@/interfaces/result";
import { BeautifulPlace } from "@/models/beautiful-place";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Accommodation", href: "/accommodation" },
];

export default function AccommodationPage() {
  const {
    data: dayTripsData,
    mutate: dayTripsMutate,
    isLoading: dayTripsLoading,
  } = useSWR<IResult<IBeautifulPlace>>(
    `swr.destination.dayTrips`,
    () =>
      destinationApi.list({
        page: 1,
        limit: 100,
        type: "ACCOMMODATION",
        reference: "68ee93c4b88440a78c3d94e0",
        isHomeScreen: true,
      }),
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
        limit: 100,
        type: "ACCOMMODATION",
        reference: "68eff09e76da61656a1e6f93",
        isHomeScreen: true,
      }),
    { revalidateOnFocus: false },
  );

  const {
    data: EasternMongoliaData,
    mutate: EasternMongoliaMutate,
    isLoading: EasternMongoliaLoading,
  } = useSWR<IResult<IBeautifulPlace>>(
    `swr.destination.easternMongolia`,
    () =>
      destinationApi.list({
        page: 1,
        limit: 100,
        type: "ACCOMMODATION",
        reference: "68eff05576da61656a1e6f84",
        isHomeScreen: true,
      }),
    { revalidateOnFocus: false },
  );

  const {
    data: WesternMongoliaData,
    mutate: WesternMongoliaMutate,
    isLoading: WesternMongoliaLoading,
  } = useSWR<IResult<IBeautifulPlace>>(
    `swr.destination.westernMongolia`,
    () =>
      destinationApi.list({
        page: 1,
        limit: 100,
        type: "ACCOMMODATION",
        reference: "68eff0e476da61656a1e6fb7",
        isHomeScreen: true,
      }),
    { revalidateOnFocus: false },
  );

  const {
    data: SouthernMongoliaData,
    mutate: SouthernMongoliaMutate,
    isLoading: SouthernMongoliaLoading,
  } = useSWR<IResult<IBeautifulPlace>>(
    `swr.destination.southernMongolia`,
    () =>
      destinationApi.list({
        page: 1,
        limit: 100,
        type: "ACCOMMODATION",
        reference: "68eff0f076da61656a1e6fc0",
        isHomeScreen: true,
      }),
    { revalidateOnFocus: false },
  );

  const {
    data: NorthernMongoliaData,
    mutate: NorthernMongoliaMutate,
    isLoading: NorthernMongoliaLoading,
  } = useSWR<IResult<IBeautifulPlace>>(
    `swr.destination.northernMongolia`,
    () =>
      destinationApi.list({
        page: 1,
        limit: 100,
        type: "ACCOMMODATION",
        reference: "68eff0f976da61656a1e6fc9",
        isHomeScreen: true,
      }),
    { revalidateOnFocus: false },
  );

  return (
    <div
      className="min-h-screen"
      style={{
        opacity:
          dayTripsLoading ||
          CentralMongoliaLoading ||
          EasternMongoliaLoading ||
          WesternMongoliaLoading ||
          SouthernMongoliaLoading ||
          NorthernMongoliaLoading
            ? 0.5
            : 1,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <DynamicBreadcrumb items={breadcrumbItems} />
      </div>
      <div className="space-y-12 mb-12">
        <DestinationSection
          type={true}
          path="/accommodation"
          title="Day trips"
          destinations={dayTripsData?.rows}
        />
        <DestinationSection
          type={true}
          path="/accommodation"
          title="Central Mongolia"
          destinations={CentralMongoliaData?.rows}
        />
        <DestinationSection
          type={true}
          path="/accommodation"
          title="Eastern Mongolia"
          destinations={EasternMongoliaData?.rows}
        />
        <DestinationSection
          type={true}
          path="/accommodation"
          title="Western Mongolia"
          destinations={WesternMongoliaData?.rows}
        />
        <DestinationSection
          type={true}
          path="/accommodation"
          title="Southern Mongolia"
          destinations={SouthernMongoliaData?.rows}
        />
        <DestinationSection
          type={true}
          path="/accommodation"
          title="Northern Mongolia"
          destinations={NorthernMongoliaData?.rows}
        />
      </div>
    </div>
  );
}
