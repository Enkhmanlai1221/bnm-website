"use client";
import { destinationApi } from "@/apis";
import { IBeautifulPlace } from "@/interfaces/beautiful-place";
import { IResult } from "@/interfaces/result";
import DestinationSection from "@/components/destination-section";
import { DestinationSkeleton } from "@/components/loading";
import useSWR from "swr";
import { DynamicBreadcrumb } from "@/components/breadcrumb";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/destination" },
];

export default function DestinationPage() {
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
        type: "DESTINATIONS",
        reference: "691c752ec2946089f91ab7ed",
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
        type: "DESTINATIONS",
        reference: "691c772bc2946089f91abb82",
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
        type: "DESTINATIONS",
        reference: "691c7737c2946089f91abb9c",
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
        type: "DESTINATIONS",
        reference: "691c7744c2946089f91abbb7",
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
        type: "DESTINATIONS",
        reference: "691c775bc2946089f91abbd1",
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
        type: "DESTINATIONS",
        reference: "691c776ac2946089f91abbeb",
        isHomeScreen: true,
      }),
    { revalidateOnFocus: false },
  );

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 mb-8">
        <DynamicBreadcrumb items={breadcrumbItems} />
      </div>
      <div className="space-y-12 mb-12">
        {dayTripsData?.rows && dayTripsData?.rows?.length > 0 ? (
          <DestinationSection
            type={true}
            limit={6}
            path="/destination"
            title="Day trips"
            destinations={dayTripsData?.rows}
          />
        ) : (
          <DestinationSkeleton title="Day trips" />
        )}
        <DestinationSection
          type={true}
          limit={6}
          path="/destination"
          title="Central Mongolia"
          destinations={CentralMongoliaData?.rows}
        />
        <DestinationSection
          type={true}
          limit={6}
          path="/destination"
          title="Southern Mongolia"
          destinations={SouthernMongoliaData?.rows}
        />
        <DestinationSection
          type={true}
          limit={5}
          path="/destination"
          title="Western Mongolia"
          destinations={WesternMongoliaData?.rows}
        />
        <DestinationSection
          type={true}
          path="/destination"
          title="Eastern Mongolia"
          destinations={EasternMongoliaData?.rows}
        />
        <DestinationSection
          type={true}
          path="/destination"
          title="Northern Mongolia"
          destinations={NorthernMongoliaData?.rows}
        />
      </div>
    </div>
  );
}
