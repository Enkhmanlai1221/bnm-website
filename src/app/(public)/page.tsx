"use client";

import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  // Destinations data
  const destinations = [
    {
      id: 1,
      title: "Day Trips",
      image: "/HOME/DESTINATION1.png",
      description: "Explore nearby attractions",
    },
    {
      id: 2,
      title: "Central Mongolia",
      image: "/HOME/DESTINATION2.png",
      description: "Discover the heart of Mongolia",
    },
    {
      id: 3,
      title: "Western Mongolia",
      image: "/HOME/DESTINATION3.png",
      description: "Experience the western regions",
    },
    {
      id: 4,
      title: "Southern Mongolia",
      image: "/HOME/DESTINATION4.png",
      description: "Journey through the south",
    },
    {
      id: 5,
      title: "Eastern Mongolia",
      image: "/HOME/DESTINATION5.png",
      description: "Explore the eastern landscapes",
    },
    {
      id: 6,
      title: "Northern Mongolia",
      image: "/HOME/DESTINATION6.png",
      description: "Discover the northern beauty",
    },
  ];

  // Ulaanbaatar data
  const ulaanbaatarCards = [
    {
      id: 1,
      title: "Sukhbaatar Square",
      image: "/HOME/UB1.png",
      description: "The heart of Ulaanbaatar",
    },
    {
      id: 2,
      title: "Gandantegchinlen Monastery",
      image: "/HOME/UB2.png",
      description: "Buddhist temple complex",
    },
    {
      id: 3,
      title: "National Museum",
      image: "/HOME/UB3.png",
      description: "Mongolian history and culture",
    },
  ];

  // Accommodation data
  const accommodationItems = [
    { id: 1, image: "/HOME/ACCOMMODATION1.png", title: "Hotels" },
    { id: 2, image: "/HOME/ACCOMMODATION2.png", title: "Gers" },
    { id: 3, image: "/HOME/ACCOMMODATION3.png", title: "Hostels" },
    { id: 4, image: "/HOME/ACCOMMODATION4.png", title: "Resorts" },
    { id: 5, image: "/HOME/ACCOMMODATION5.png", title: "Camps" },
    { id: 6, image: "/HOME/ACCOMMODATION6.png", title: "Lodges" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Destinations Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Destinations
            </h2>
            <p className="text-lg text-gray-600">
              Discover the beauty of Mongolia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <div key={destination.id} className="group cursor-pointer">
                <div className="relative h-80 rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src={destination.image}
                    alt={destination.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">
                      {destination.title}
                    </h3>
                    <p className="text-blue-100">{destination.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ulaanbaatar Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ulaanbaatar
            </h2>
            <p className="text-lg text-gray-600">
              Discover the capital city of Mongolia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ulaanbaatarCards.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-600">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Accommodation Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Accommodation
            </h2>
            <p className="text-lg text-gray-600">
              Find your perfect place to stay
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {accommodationItems.map((item) => (
              <div key={item.id} className="text-center group cursor-pointer">
                <div className="relative h-32 w-full rounded-lg overflow-hidden mb-3 group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-sm font-semibold text-gray-900">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
