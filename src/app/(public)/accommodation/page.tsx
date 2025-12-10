"use client";

import { destinationApi } from "@/apis";
import { DynamicBreadcrumb } from "@/components/breadcrumb";
import DestinationSection from "@/components/destination-section";
import { IBeautifulPlace } from "@/interfaces/beautiful-place";
import { IResult } from "@/interfaces/result";
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
    `swr.accommodation.dayTrips`,
    () =>
      destinationApi.list({
        page: 1,
        limit: 100,
        type: "ACCOMMODATION",
        reference: "691c78ccc2946089f91abca9",
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
    `swr.accommodation.centralMongolia`,
    () =>
      destinationApi.list({
        page: 1,
        limit: 100,
        type: "ACCOMMODATION",
        reference: "691c78d6c2946089f91abcd0",
        isHomeScreen: true,
      }),
    { revalidateOnFocus: false },
  );

  const {
    data: EasternMongoliaData,
    mutate: EasternMongoliaMutate,
    isLoading: EasternMongoliaLoading,
  } = useSWR<IResult<IBeautifulPlace>>(
    `swr.accommodation.easternMongolia`,
    () =>
      destinationApi.list({
        page: 1,
        limit: 100,
        type: "ACCOMMODATION",
        reference: "691c78e2c2946089f91abcf7",
        isHomeScreen: true,
      }),
    { revalidateOnFocus: false },
  );

  const {
    data: WesternMongoliaData,
    mutate: WesternMongoliaMutate,
    isLoading: WesternMongoliaLoading,
  } = useSWR<IResult<IBeautifulPlace>>(
    `swr.accommodation.westernMongolia`,
    () =>
      destinationApi.list({
        page: 1,
        limit: 100,
        type: "ACCOMMODATION",
        reference: "691c78edc2946089f91abd1e",
        isHomeScreen: true,
      }),
    { revalidateOnFocus: false },
  );

  const {
    data: SouthernMongoliaData,
    mutate: SouthernMongoliaMutate,
    isLoading: SouthernMongoliaLoading,
  } = useSWR<IResult<IBeautifulPlace>>(
    `swr.accommodation.southernMongolia`,
    () =>
      destinationApi.list({
        page: 1,
        limit: 100,
        type: "ACCOMMODATION",
        reference: "691c78f7c2946089f91abd45",
        isHomeScreen: true,
      }),
    { revalidateOnFocus: false },
  );

  const {
    data: NorthernMongoliaData,
    mutate: NorthernMongoliaMutate,
    isLoading: NorthernMongoliaLoading,
  } = useSWR<IResult<IBeautifulPlace>>(
    `swr.accommodation.northernMongolia`,
    () =>
      destinationApi.list({
        page: 1,
        limit: 100,
        type: "ACCOMMODATION",
        reference: "691c790bc2946089f91abd6c",
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
      <div className="space-y-12 mb-12 mt-6">
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
