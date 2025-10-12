import Image from "next/image";

export default function AccommodationPage() {
  const dayTrips = [
    {
      id: 1,
      name: "Khogno Tarna NP",
      image: "/ACCOMMODATION/DAY_TRIPS1.png",
      size: "medium",
    },
    {
      id: 2,
      name: "Khustai Nuruu NP",
      image: "/ACCOMMODATION/DAY_TRIPS2.png",
      size: "wide",
    },
    {
      id: 3,
      name: "Chinggis Khaanii Khuree",
      image: "/ACCOMMODATION/DAY_TRIPS3.png",
      size: "medium",
    },
    {
      id: 4,
      name: "Terelj NP",
      image: "/ACCOMMODATION/DAY_TRIPS4.png",
      size: "wide",
    },
    {
      id: 5,
      name: "Genghis Khan Statue Complex",
      image: "/ACCOMMODATION/DAY_TRIPS5.png",
      size: "wide",
    },
  ];

  const CentralMongolia = [
    {
      id: 1,
      name: "Central Mongolia",
      image: "/ACCOMMODATION/CENTRAL_MONGOLIA1.png",
      size: "wide",
    },
    {
      id: 2,
      name: "Central Mongolia",
      image: "/ACCOMMODATION/CENTRAL_MONGOLIA2.png",
      size: "medium",
    },
    {
      id: 3,
      name: "Central Mongolia",
      image: "/ACCOMMODATION/CENTRAL_MONGOLIA3.png",
      size: "medium",
    },
    {
      id: 4,
      name: "Central Mongolia",
      image: "/ACCOMMODATION/CENTRAL_MONGOLIA4.png",
      size: "tall",
    },
    {
      id: 5,
      name: "Central Mongolia",
      image: "/ACCOMMODATION/CENTRAL_MONGOLIA5.png",
      size: "wide",
    },
    {
      id: 6,
      name: "Central Mongolia",
      image: "/ACCOMMODATION/CENTRAL_MONGOLIA6.png",
      size: "medium",
    },
    {
      id: 7,
      name: "Central Mongolia",
      image: "/ACCOMMODATION/CENTRAL_MONGOLIA7.png",
      size: "medium",
    },
    {
      id: 8,
      name: "Central Mongolia",
      image: "/ACCOMMODATION/CENTRAL_MONGOLIA8.png",
      size: "wide",
    },
    {
      id: 9,
      name: "Central Mongolia",
      image: "/ACCOMMODATION/CENTRAL_MONGOLIA9.png",
      size: "medium",
    },
    {
      id: 10,
      name: "Central Mongolia",
      image: "/ACCOMMODATION/CENTRAL_MONGOLIA10.png",
      size: "medium",
    },
    {
      id: 11,
      name: "Central Mongolia",
      image: "/ACCOMMODATION/CENTRAL_MONGOLIA11.png",
      size: "medium",
    },
    {
      id: 12,
      name: "Central Mongolia",
      image: "/ACCOMMODATION/CENTRAL_MONGOLIA12.png",
      size: "medium",
    },
  ];

  const easterMongolia = [
    {
      id: 1,
      name: "Easter Mongolia",
      image: "/ACCOMMODATION/EASTERN_MONGOLIA1.png",
      size: "medium",
    },
    {
      id: 2,
      name: "Easter Mongolia",
      image: "/ACCOMMODATION/EASTERN_MONGOLIA2.png",
      size: "wide",
    },
    {
      id: 3,
      name: "Easter Mongolia",
      image: "/ACCOMMODATION/EASTERN_MONGOLIA3.png",
      size: "tall",
    },
    {
      id: 4,
      name: "Easter Mongolia",
      image: "/ACCOMMODATION/EASTERN_MONGOLIA4.png",
      size: "tall",
    },
    {
      id: 5,
      name: "Easter Mongolia",
      image: "/ACCOMMODATION/EASTERN_MONGOLIA5.png",
      size: "medium",
    },
    {
      id: 6,
      name: "Easter Mongolia",
      image: "/ACCOMMODATION/EASTERN_MONGOLIA6.png",
      size: "medium",
    },
    {
      id: 7,
      name: "Easter Mongolia",
      image: "/ACCOMMODATION/EASTERN_MONGOLIA7.png",
      size: "medium",
    },
    {
      id: 8,
      name: "Easter Mongolia",
      image: "/ACCOMMODATION/EASTERN_MONGOLIA8.png",
      size: "medium",
    },
    {
      id: 9,
      name: "Easter Mongolia",
      image: "/ACCOMMODATION/EASTERN_MONGOLIA9.png",
      size: "tall",
    },
    {
      id: 10,
      name: "Easter Mongolia",
      image: "/ACCOMMODATION/EASTERN_MONGOLIA10.png",
      size: "wide",
    },
    {
      id: 11,
      name: "Easter Mongolia",
      image: "/ACCOMMODATION/EASTERN_MONGOLIA11.png",
      size: "medium",
    },
  ];

  const westernMongolia = [
    {
      id: 1,
      name: "Western Mongolia",
      image: "/ACCOMMODATION/WESTERN_MONGOLIA1.png",
      size: "medium",
    },
    {
      id: 2,
      name: "Western Mongolia",
      image: "/ACCOMMODATION/WESTERN_MONGOLIA2.png",
      size: "wide",
    },
    {
      id: 3,
      name: "Western Mongolia",
      image: "/ACCOMMODATION/WESTERN_MONGOLIA3.png",
      size: "medium",
    },
    {
      id: 4,
      name: "Western Mongolia",
      image: "/ACCOMMODATION/WESTERN_MONGOLIA4.png",
      size: "wide",
    },
    {
      id: 5,
      name: "Western Mongolia",
      image: "/ACCOMMODATION/WESTERN_MONGOLIA5.png",
      size: "medium",
    },
    {
      id: 6,
      name: "Western Mongolia",
      image: "/ACCOMMODATION/WESTERN_MONGOLIA6.png",
      size: "medium",
    },
    {
      id: 7,
      name: "Western Mongolia",
      image: "/ACCOMMODATION/WESTERN_MONGOLIA7.png",
      size: "medium",
    },
    {
      id: 8,
      name: "Western Mongolia",
      image: "/ACCOMMODATION/WESTERN_MONGOLIA8.png",
      size: "medium",
    },
    {
      id: 9,
      name: "Western Mongolia",
      image: "/ACCOMMODATION/WESTERN_MONGOLIA9.png",
      size: "medium",
    },
    {
      id: 10,
      name: "Western Mongolia",
      image: "/ACCOMMODATION/WESTERN_MONGOLIA10.png",
      size: "medium",
    },
  ];

  const southernMongolia = [
    {
      id: 1,
      name: "Southern Mongolia",
      image: "/ACCOMMODATION/SOUTHERN_MONGOLIA1.png",
      size: "medium",
    },
    {
      id: 2,
      name: "Southern Mongolia",
      image: "/ACCOMMODATION/SOUTHERN_MONGOLIA2.png",
      size: "medium",
    },
    {
      id: 3,
      name: "Southern Mongolia",
      image: "/ACCOMMODATION/SOUTHERN_MONGOLIA3.png",
      size: "medium",
    },
    {
      id: 4,
      name: "Southern Mongolia",
      image: "/ACCOMMODATION/SOUTHERN_MONGOLIA4.png",
      size: "tall",
    },
    {
      id: 5,
      name: "Southern Mongolia",
      image: "/ACCOMMODATION/SOUTHERN_MONGOLIA5.png",
      size: "medium",
    },
    {
      id: 6,
      name: "Southern Mongolia",
      image: "/ACCOMMODATION/SOUTHERN_MONGOLIA6.png",
      size: "wide",
    },
    {
      id: 7,
      name: "Southern Mongolia",
      image: "/ACCOMMODATION/SOUTHERN_MONGOLIA7.png",
      size: "wide",
    },
    {
      id: 8,
      name: "Southern Mongolia",
      image: "/ACCOMMODATION/SOUTHERN_MONGOLIA8.png",
      size: "medium",
    },
    {
      id: 9,
      name: "Southern Mongolia",
      image: "/ACCOMMODATION/SOUTHERN_MONGOLIA9.png",
      size: "medium",
    },
    {
      id: 10,
      name: "Southern Mongolia",
      image: "/ACCOMMODATION/SOUTHERN_MONGOLIA10.png",
      size: "medium",
    },
    {
      id: 11,
      name: "Southern Mongolia",
      image: "/ACCOMMODATION/SOUTHERN_MONGOLIA11.png",
      size: "medium",
    },
    {
      id: 12,
      name: "Southern Mongolia",
      image: "/ACCOMMODATION/SOUTHERN_MONGOLIA12.png",
      size: "medium",
    },
    {
      id: 13,
      name: "Southern Mongolia",
      image: "/ACCOMMODATION/SOUTHERN_MONGOLIA13.png",
      size: "medium",
    },
    {
      id: 14,
      name: "Southern Mongolia",
      image: "/ACCOMMODATION/SOUTHERN_MONGOLIA14.png",
      size: "medium",
    },
    {
      id: 15,
      name: "Southern Mongolia",
      image: "/ACCOMMODATION/SOUTHERN_MONGOLIA15.png",
      size: "wide",
    },
    {
      id: 16,
      name: "Southern Mongolia",
      image: "/ACCOMMODATION/SOUTHERN_MONGOLIA16.png",
      size: "medium",
    },
  ];

  const northernMongolia = [
    {
      id: 1,
      name: "Northern Mongolia",
      image: "/ACCOMMODATION/NORTHERN_MONGOLIA1.png",
      size: "wide",
    },
    {
      id: 2,
      name: "Northern Mongolia",
      image: "/ACCOMMODATION/NORTHERN_MONGOLIA2.png",
      size: "medium",
    },
    {
      id: 3,
      name: "Northern Mongolia",
      image: "/ACCOMMODATION/NORTHERN_MONGOLIA3.png",
      size: "tall",
    },
    {
      id: 4,
      name: "Northern Mongolia",
      image: "/ACCOMMODATION/NORTHERN_MONGOLIA4.png",
      size: "medium",
    },
    {
      id: 5,
      name: "Northern Mongolia",
      image: "/ACCOMMODATION/NORTHERN_MONGOLIA5.png",
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[18rem] gap-4">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[18rem] gap-4">
            {easterMongolia.map((destination, index) => (
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
              Western Mongolia
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[18rem] gap-4">
            {westernMongolia.map((destination, index) => (
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
              Southern Mongolia
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[18rem] gap-4">
            {southernMongolia.map((destination, index) => (
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
              Northern Mongolia
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[18rem] gap-4">
            {northernMongolia.map((destination, index) => (
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
    </div>
  );
}
