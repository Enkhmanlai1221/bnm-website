"use client";
import { destinationApi } from "@/apis";
import { IBeautifulPlace } from "@/interfaces/beautiful-place";
import { IResult } from "@/interfaces/result";
import DestinationSection from "@/components/destination-section";
import useSWR from "swr";

export default function DestinationPage() {
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

  const { data: CentralMongoliaData, mutate: CentralMongoliaMutate } = useSWR<
    IResult<IBeautifulPlace>
  >(
    `swr.destination.centralMongolia`,
    () =>
      destinationApi.list({
        page: 1,
        limit: 100,
        type: "DESTINATIONS",
        reference: "68eff09e76da61656a1e6f93",
        isHomeScreen: true,
      }),
    { revalidateOnFocus: false },
  );

  const { data: EasternMongoliaData, mutate: EasternMongoliaMutate } = useSWR<
    IResult<IBeautifulPlace>
  >(
    `swr.destination.easternMongolia`,
    () =>
      destinationApi.list({
        page: 1,
        limit: 100,
        type: "DESTINATIONS",
        reference: "68eff05576da61656a1e6f84",
        isHomeScreen: true,
      }),
    { revalidateOnFocus: false },
  );

  const { data: WesternMongoliaData, mutate: WesternMongoliaMutate } = useSWR<
    IResult<IBeautifulPlace>
  >(
    `swr.destination.westernMongolia`,
    () =>
      destinationApi.list({
        page: 1,
        limit: 100,
        type: "DESTINATIONS",
        reference: "68eff0e476da61656a1e6fb7",
        isHomeScreen: true,
      }),
    { revalidateOnFocus: false },
  );

  const { data: SouthernMongoliaData, mutate: SouthernMongoliaMutate } = useSWR<
    IResult<IBeautifulPlace>
  >(
    `swr.destination.southernMongolia`,
    () =>
      destinationApi.list({
        page: 1,
        limit: 100,
        type: "DESTINATIONS",
        reference: "68eff0f076da61656a1e6fc0",
        isHomeScreen: true,
      }),
    { revalidateOnFocus: false },
  );

  const { data: NorthernMongoliaData, mutate: NorthernMongoliaMutate } = useSWR<
    IResult<IBeautifulPlace>
  >(
    `swr.destination.northernMongolia`,
    () =>
      destinationApi.list({
        page: 1,
        limit: 100,
        type: "DESTINATIONS",
        reference: "68eff0f976da61656a1e6fc9",
        isHomeScreen: true,
      }),
    { revalidateOnFocus: false },
  );

  return (
    <div className="min-h-screen">
      <DestinationSection
        path="/destination"
        title="Day trips"
        destinations={dayTripsData?.rows}
      />
      <DestinationSection
        path="/destination"
        title="Central Mongolia"
        destinations={CentralMongoliaData?.rows}
      />
      <DestinationSection
        path="/destination"
        title="Eastern Mongolia"
        destinations={EasternMongoliaData?.rows}
      />
      <DestinationSection
        path="/destination"
        title="Western Mongolia"
        destinations={WesternMongoliaData?.rows}
      />
      <DestinationSection
        path="/destination"
        title="Southern Mongolia"
        destinations={SouthernMongoliaData?.rows}
      />
      <DestinationSection
        path="/destination"
        title="Northern Mongolia"
        destinations={NorthernMongoliaData?.rows}
      />
    </div>
  );
}
