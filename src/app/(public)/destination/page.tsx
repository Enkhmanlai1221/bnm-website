"use client";
import Image from "next/image";

export default function DestinationPage() {
  const dayTrips = [
    {
      id: 1,
      name: "Day trip 1",
      image: "/DESTINATIONS/DAY_TRIPS1.png",
      size: "wide",
    },
    {
      id: 2,
      name: "Day trip 2",
      image: "/DESTINATIONS/DAY_TRIPS2.png",
      size: "tall",
    },
    {
      id: 3,
      name: "Day trip 3",
      image: "/DESTINATIONS/DAY_TRIPS3.png",
      size: "tall",
    },
    {
      id: 4,
      name: "Day trip 4",
      image: "/DESTINATIONS/DAY_TRIPS4.png",
      size: "medium",
    },
    {
      id: 5,
      name: "Day trip 5",
      image: "/DESTINATIONS/DAY_TRIPS5.png",
      size: "medium",
    },
  ];

  const CentralMongolia = [
    {
      id: 1,
      name: "Central Mongolia",
      image: "/DESTINATIONS/CENTRAL_MONGOLIA1.png",
      size: "wide",
    },
    {
      id: 2,
      name: "Central Mongolia",
      image: "/DESTINATIONS/CENTRAL_MONGOLIA2.png",
      size: "tall",
    },
    {
      id: 3,
      name: "Central Mongolia",
      image: "/DESTINATIONS/CENTRAL_MONGOLIA3.png",
      size: "medium",
    },
    {
      id: 4,
      name: "Central Mongolia",
      image: "/DESTINATIONS/CENTRAL_MONGOLIA4.png",
      size: "medium",
    },
    {
      id: 5,
      name: "Central Mongolia",
      image: "/DESTINATIONS/CENTRAL_MONGOLIA5.png",
      size: "medium",
    },
    {
      id: 6,
      name: "Central Mongolia",
      image: "/DESTINATIONS/CENTRAL_MONGOLIA6.png",
      size: "medium",
    },
  ];

  const easterMongolia = [
    {
      name: "Eastern Mongolia",
      image: "/DESTINATIONS/EASTERN_MONGOLIA1.png",
      size: "tall",
    },
    {
      name: "Eastern Mongolia",
      image: "/DESTINATIONS/EASTERN_MONGOLIA2.png",
      size: "wide",
    },
    {
      name: "Eastern Mongolia",
      image: "/DESTINATIONS/EASTERN_MONGOLIA3.png",
      size: "tall",
    },
    {
      name: "Eastern Mongolia",
      image: "/DESTINATIONS/EASTERN_MONGOLIA4.png",
      size: "medium",
    },
    {
      name: "Eastern Mongolia",
      image: "/DESTINATIONS/EASTERN_MONGOLIA5.png",
      size: "medium",
    },
  ];

  const westernMongolia = [
    {
      name: "Western Mongolia",
      image: "/DESTINATIONS/WESTERN_MONGOLIA1.png",
      size: "wide",
    },
    {
      name: "Western Mongolia",
      image: "/DESTINATIONS/WESTERN_MONGOLIA2.png",
      size: "medium",
    },
    {
      name: "Western Mongolia",
      image: "/DESTINATIONS/WESTERN_MONGOLIA3.png",
      size: "tall",
    },
    {
      name: "Western Mongolia",
      image: "/DESTINATIONS/WESTERN_MONGOLIA4.png",
      size: "medium",
    },
    {
      name: "Western Mongolia",
      image: "/DESTINATIONS/WESTERN_MONGOLIA5.png",
      size: "wide",
    },
  ];

  const southernMongolia = [
    {
      name: "Southern Mongolia",
      image: "/DESTINATIONS/SOUTHERN_MONGOLIA1.png",
      size: "medium",
    },
    {
      name: "Southern Mongolia",
      image: "/DESTINATIONS/SOUTHERN_MONGOLIA2.png",
      size: "medium",
    },
    {
      name: "Southern Mongolia",
      image: "/DESTINATIONS/SOUTHERN_MONGOLIA3.png",
      size: "wide",
    },
    {
      name: "Southern Mongolia",
      image: "/DESTINATIONS/SOUTHERN_MONGOLIA4.png",
      size: "medium",
    },
    {
      name: "Southern Mongolia",
      image: "/DESTINATIONS/SOUTHERN_MONGOLIA5.png",
      size: "wide",
    },
    {
      name: "Southern Mongolia",
      image: "/DESTINATIONS/SOUTHERN_MONGOLIA6.png",
      size: "medium",
    },
  ];

  const northernMongolia = [
    {
      name: "Northern Mongolia",
      image: "/DESTINATIONS/NORTHERN_MONGOLIA1.png",
      size: "wide",
    },
    {
      name: "Northern Mongolia",
      image: "/DESTINATIONS/NORTHERN_MONGOLIA2.png",
      size: "medium",
    },
    {
      name: "Northern Mongolia",
      image: "/DESTINATIONS/NORTHERN_MONGOLIA3.png",
      size: "tall",
    },
    {
      name: "Northern Mongolia",
      image: "/DESTINATIONS/NORTHERN_MONGOLIA4.png",
      size: "medium",
    },
    {
      name: "Northern Mongolia",
      image: "/DESTINATIONS/NORTHERN_MONGOLIA5.png",
      size: "wide",
    },
  ];

  const getCardInformationClasses = (size: string) => {
    switch (size) {
      case "wide":
        return "col-span-2 row-span-1";
      case "tall":
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
        return "h-[36rem]";
      case "medium":
        return "h-72";
      case "large":
        return "h-[36rem]";
      default:
        return "h-72";
    }
  };
  return (
    <div className="min-h-screen">
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-start mb-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-0">Day trips</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[18rem] gap-4">
            {dayTrips.map((destination, index) => (
              <div
                key={destination.id}
                className={`group relative overflow-hidden ${getCardInformationClasses(destination.size)} ${getCardInformationHeight(destination.size)} rounded-2xl`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-start mb-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-0">
              Central Mongolia
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[18rem]">
            {CentralMongolia.map((destination, index) => (
              <div
                key={destination.id}
                className={`group relative overflow-hidden ${getCardInformationClasses(destination.size)} ${getCardInformationHeight(destination.size)} rounded-2xl`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-start mb-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-0">
              Eastern Mongolia
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[18rem]">
            {easterMongolia.map((destination, index) => (
              <div
                key={destination.image}
                className={`group relative overflow-hidden ${getCardInformationClasses(destination.size)} ${getCardInformationHeight(destination.size)} rounded-2xl`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-start mb-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-0">
              Western Mongolia
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[18rem]">
            {westernMongolia.map((destination, index) => (
              <div
                key={destination.image}
                className={`group relative overflow-hidden ${getCardInformationClasses(destination.size)} ${getCardInformationHeight(destination.size)} rounded-2xl`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-start mb-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-0">
              Southern Mongolia
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[18rem]">
            {southernMongolia.map((destination, index) => (
              <div
                key={destination.image}
                className={`group relative overflow-hidden ${getCardInformationClasses(destination.size)} ${getCardInformationHeight(destination.size)} rounded-2xl`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-start mb-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-0">
              Northern Mongolia
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[18rem]">
            {northernMongolia.map((destination, index) => (
              <div
                key={destination.image}
                className={`group relative overflow-hidden ${getCardInformationClasses(destination.size)} ${getCardInformationHeight(destination.size)} rounded-2xl`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
