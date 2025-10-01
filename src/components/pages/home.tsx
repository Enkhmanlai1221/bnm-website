"use client";

import Image from "next/image";

export default function HomeInfoPage() {
  // Destinations data
  const destinations = [
    {
      id: 1,
      title: "Day Trips",
      image: "/HOME/DESTINATION1.png",
      description: "Explore nearby attractions",
      size: "medium",
    },
    {
      id: 2,
      title: "Central Mongolia",
      image: "/HOME/DESTINATION2.png",
      description: "Discover the heart of Mongolia",
      size: "wide",
    },
    {
      id: 3,
      title: "Western Mongolia",
      image: "/HOME/DESTINATION3.png",
      description: "Experience the western regions",
      size: "medium",
    },
    {
      id: 4,
      title: "Southern Mongolia",
      image: "/HOME/DESTINATION4.png",
      description: "Journey through the south",
      size: "wide",
    },
    {
      id: 5,
      title: "Eastern Mongolia",
      image: "/HOME/DESTINATION5.png",
      description: "Explore the eastern landscapes",
      size: "medium",
    },
    {
      id: 6,
      title: "Northern Mongolia",
      image: "/HOME/DESTINATION6.png",
      description: "Discover the northern beauty",
      size: "medium",
    },
  ];

  const ulaanbaatarCards = [
    {
      id: 1,
      title: "Places to visit",
      image: "/HOME/UB1.png",
      description: "Explore the city's attractions",
      size: "large",
    },
    {
      id: 2,
      title: "Virtual City Tour",
      image: "/HOME/UB2.png",
      description: "Experience the city virtually",
      size: "tall",
    },
    {
      id: 3,
      title: "History of the Capital",
      image: "/HOME/UB3.png",
      description: "Learn about the city's heritage",
      size: "tall",
    },
  ];

  const information = [
    {
      id: 1,
      title: "Information",
      image: "/HOME/INFORMATION1.png",
      description: "Learn about the city's heritage",
      size: "tall",
    },

    {
      id: 2,
      title: "Information",
      image: "/HOME/INFORMATION2.png",
      description: "Learn about the city's heritage",
      size: "wide",
    },
    {
      id: 3,
      title: "Information",
      image: "/HOME/INFORMATION3.png",
      description: "Learn about the city's heritage",
      size: "tall",
    },
    {
      id: 4,
      title: "Information",
      image: "/HOME/INFORMATION4.png",
      description: "Learn about the city's heritage",
      size: "medium",
    },
    {
      id: 5,
      title: "Information",
      image: "/HOME/INFORMATION5.png",
      description: "Learn about the city's heritage",
      size: "medium",
    },
  ];

  const recommendedTours = [
    {
      id: 1,
      image: "/HOME/RECOMMENDED1.png",
      title: "Gobi Odyssey",
      durationDays: 3,
      nights: 2,
      startingFromUsd: 1050,
    },
    {
      id: 2,
      image: "/HOME/RECOMMENDED2.png",
      title: "Desert Waves",
      durationDays: 3,
      nights: 2,
      startingFromUsd: 1050,
    },
    {
      id: 3,
      image: "/HOME/RECOMMENDED3.png",
      title: "Western Horizon Wings",
      durationDays: 3,
      nights: 2,
      startingFromUsd: 1050,
    },
  ];

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

  const commercialItems = [
    {
      id: 1,
      image: "/HOME/COMMMERCIAL1.png",
      title: "Commercial",
      size: "tall",
    },
    {
      id: 2,
      image: "/HOME/COMMMERCIAL2.png",
      title: "Commercial",
      size: "medium",
    },
    {
      id: 3,
      image: "/HOME/COMMMERCIAL3.png",
      title: "Commercial",
      size: "medium",
    },
    {
      id: 4,
      image: "/HOME/COMMMERCIAL4.png",
      title: "Commercial",
      size: "medium",
    },
    {
      id: 5,
      image: "/HOME/COMMMERCIAL5.png",
      title: "Commercial",
      size: "wide",
    },
    {
      id: 6,
      image: "/HOME/COMMMERCIAL6.png",
      title: "Commercial",
      size: "tall",
    },
    {
      id: 7,
      image: "/HOME/COMMMERCIAL7.png",
      title: "Commercial",
      size: "medium",
    },
    {
      id: 8,
      image: "/HOME/COMMMERCIAL8.png",
      title: "Commercial",
      size: "medium",
    },
    {
      id: 9,
      image: "/HOME/COMMMERCIAL9.png",
      title: "Commercial",
      size: "medium",
    },
  ];
  const eventsItems = [
    {
      id: 1,
      image: "/HOME/EVENT1.png",
      title: "Naadam",
      date: "Mid-July",
      size: "medium",
    },
    {
      id: 2,
      image: "/HOME/EVENT2.png",
      title: "Tenger Festival",
      date: "Mid-May",
      size: "medium",
    },
    {
      id: 3,
      image: "/HOME/EVENT3.png",
      title: "Golden Eagle Festival",
      date: "Early-October",
      size: "medium",
    },
    {
      id: 4,
      image: "/HOME/EVENT4.png",
      title: "Deeltei Mongol",
      date: "Early-July",
      size: "medium",
    },
    {
      id: 5,
      image: "/HOME/EVENT5.png",
      title: "Danshig Naadam",
      date: "Early-August",
      size: "medium",
    },
  ];

  const recommendedItems = [
    {
      id: 1,
      image: "/HOME/RECOMMENDED1.png",
      title: "Recommended",
      size: "medium",
    },
    {
      id: 2,
      image: "/HOME/RECOMMENDED2.png",
      title: "Recommended",
      size: "medium",
    },
    {
      id: 3,
      image: "/HOME/RECOMMENDED3.png",
      title: "Recommended",
      size: "medium",
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
      <div className="py-16 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-900">Destinations</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[18rem] ">
            {destinations.map((destination, index) => (
              <div
                key={destination.id}
                className={`group relative overflow-hidden ${getCardInformationClasses(destination.size)} ${getCardInformationHeight(destination.size)}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Image
                  src={destination.image}
                  alt={destination.title}
                  fill
                  className="duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="py-16"
        style={{
          background:
            "linear-gradient(180deg, rgba(24, 98, 255, 0.1) 0%, rgba(230, 24, 63, 0.1) 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-5xl font-bold text-red-800 mb-4"
              style={{ fontFamily: "serif" }}
            >
              Ulaanbaatar
            </h2>
            {/* <div className="w-30 h-30">
              <Image
                src={"/HOME/ULAANBAATAR.png"}
                alt={"Ulaanbaatar"}
                fill
                className="w-20 h-20"
              />
            </div> */}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[18rem] gap-4">
            {ulaanbaatarCards.map((destination, index) => (
              <div
                key={destination.id}
                className={`group relative overflow-hidden ${getCardInformationClasses(destination.size)} ${getCardInformationHeight(destination.size)} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Image
                  src={destination.image}
                  alt={destination.title}
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
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Information</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[18rem]">
            {information.map((destination, index) => (
              <div
                key={destination.id}
                className={`group relative overflow-hidden ${getCardInformationClasses(destination.size)} ${getCardInformationHeight(destination.size)} rounded-2xl`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Image
                  src={destination.image}
                  alt={destination.title}
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
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
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
                <Image
                  src={destination.image}
                  alt={destination.title}
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
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Commercial
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[18rem] gap-4">
            {commercialItems.map((destination, index) => (
              <div
                key={destination.id}
                className={`group relative overflow-hidden ${getCardInformationClasses(destination.size)} ${getCardInformationHeight(destination.size)} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Image
                  src={destination.image}
                  alt={destination.title}
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
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Events</h2>
          </div>

          <div className="flex flex-col items-center space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
              {eventsItems.slice(0, 3).map((event, index) => (
                <div key={event.id}>
                  <div
                    className="group relative overflow-hidden w-64 h-64 rounded-full"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110 rounded-full"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-bold text-lg font-semibold drop-shadow-lg transform translate-y-1 group-hover:translate-y-0 transition-transform duration-500 mb-1">
                      {event.title}
                    </h3>
                    <p className="text-blue-900 text-sm">{event.date}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              {eventsItems.slice(3, 5).map((event, index) => (
                <div key={event.id}>
                  <div
                    className="group relative overflow-hidden w-64 h-64 rounded-full shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up"
                    style={{ animationDelay: `${(index + 3) * 0.1}s` }}
                  >
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110 rounded-full"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-bold text-lg font-semibold drop-shadow-lg transform translate-y-1 group-hover:translate-y-0 transition-transform duration-500 mb-1">
                      {event.title}
                    </h3>
                    <p className="text-blue-900 text-sm">{event.date}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                See all Events
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            className="bg-blue-900 rounded-2xl"
            style={{
              backgroundImage: "url('/HOME/SHUWU.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 p-8 md:p-12">
              <div className="text-center">
                <h3 className="text-white text-lg font-semibold mb-3">
                  Confident Travel with Expertise
                </h3>
                <p className="text-blue-200 text-sm leading-relaxed">
                  Your trusted travel companion offering extensive knowledge for
                  exploring Mongolia.
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-white text-lg font-semibold mb-3">
                  Discover Mongolia at Your Fingertips
                </h3>
                <p className="text-blue-200 text-sm leading-relaxed">
                  Access data on tourist destinations, events, cultural
                  insights, and history to facilitate travel planning.
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-white text-lg font-semibold mb-3">
                  Essential Travel Tips Unveiled
                </h3>
                <p className="text-blue-200 text-sm leading-relaxed">
                  Get access to FAQs, preparation tips, and travel insights for
                  a seamless adventure.
                </p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mx-24">
              <div className="flex items-center gap-4 relative">
                <div className="relative z-20">
                  <Image
                    src="/HOME/PHONE.png"
                    alt="App Screenshot 1"
                    width={500}
                    height={500}
                    className="rounded-2xl shadow-lg"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#"
                  className="flex items-center bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <Image
                    src="/HOME/IOS.png"
                    alt="App Store"
                    width={120}
                    height={32}
                  />
                </a>
                <a
                  href="#"
                  className="flex items-center bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <Image
                    src="/HOME/GOOGLEPLAY.png"
                    alt="Google Play"
                    width={140}
                    height={20}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20" style={{ backgroundColor: "#EEF2FF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Recommended Tours
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recommendedTours.map((tour) => (
              <div
                key={tour.id}
                className="bg-white rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.08)] overflow-hidden"
              >
                <div className="relative h-64">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {tour.title}
                  </h3>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#2563EB"
                        className="w-5 h-5"
                        aria-hidden
                      >
                        <path d="M6 2a1 1 0 0 1 1 1v1h10V3a1 1 0 1 1 2 0v1h1a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1V3a1 1 0 1 1 2 0v1Zm15 6H3v11h18V8Z" />
                      </svg>
                      <span className="text-sm">
                        <span className="text-gray-800 font-medium">
                          Duration:
                        </span>{" "}
                        {tour.durationDays} days, {tour.nights}nights
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-gray-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#2563EB"
                        className="w-5 h-5"
                        aria-hidden
                      >
                        <path d="M12 1a1 1 0 0 1 1 1v1.055c1.85.174 3.51.89 4.744 1.987 1.375 1.22 2.206 2.892 2.206 4.858h-2c0-1.347-.502-2.42-1.441-3.259-.81-.716-1.965-1.199-3.509-1.37V12h2.5a1 1 0 1 1 0 2H13v1.945c1.787.176 3.168.745 4.097 1.579.98.881 1.403 1.98 1.403 3.476h-2c0-1.016-.29-1.7-.873-2.217-.652-.579-1.766-1.053-3.627-1.214V14h-2.5a1 1 0 1 1 0-2H11V5.269C9.3 5.437 8.16 5.93 7.396 6.621 6.52 7.417 6 8.506 6 9.9H4c0-1.962.768-3.626 2.148-4.846C7.466 3.98 9.16 3.26 11 3.087V2a1 1 0 0 1 1-1Z" />
                      </svg>
                      <span className="text-sm">
                        <span className="text-gray-800 font-medium">
                          Starting from:
                        </span>{" "}
                        ${tour.startingFromUsd}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
