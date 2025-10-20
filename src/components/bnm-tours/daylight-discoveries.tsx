"use client";

import Image from "next/image";

const dayLightDiscoveries = [
  {
    id: 1,
    title: "City tour",
    image: "DAYLIGHT_DISCOVERIES/DATLIGHT_TOUR1.png",
  },
  {
    id: 2,
    title: "Terelj & Genghis Khan Statue",
    image: "DAYLIGHT_DISCOVERIES/DAYLIGHT_TOUR2.png",
  },
  {
    id: 3,
    title: "Khustai",
    image: "DAYLIGHT_DISCOVERIES/DAYLIGHT_TOUR3.png",
  },
  {
    id: 4,
    title: "Aglag",
    image: "DAYLIGHT_DISCOVERIES/DAYLIGHT_TOUR4.png",
  },
  {
    id: 5,
    title: "Manzushiriin Khiid",
    image: "DAYLIGHT_DISCOVERIES/DAYLIGHT_TOUR5.png",
  },
  {
    id: 6,
    title: "Shaman Session",
    image: "DAYLIGHT_DISCOVERIES/DAYLIGHT_TOUR6.png",
  },
];

export function DaylightDiscoveries() {
  return (
    <div className="mt-12 flex flex-col gap-4 items-center">
      <p className="text-3xl font-bold">Daylight Discoveries</p>
      <p className="text-center text-md text-gray-600">
        Enhance your adventure with our optional 1-Day Tours, perfect for a
        quick, immersive experience. While designed as standalone delights,
        these day trips can be seamlessly added to most tours, creating a
        richer, more flavorful journey. Highly recommended to make the most of
        your Mongolian exploration.
      </p>
      <div className="flex justify-between gap-4 mt-12">
        {dayLightDiscoveries.map((dayLightDiscovery) => (
          <div
            key={dayLightDiscovery.id}
            className="flex items-center flex-col gap-4"
          >
            <Image
              src={`/${dayLightDiscovery.image}`}
              alt={dayLightDiscovery.title}
              width={300}
              height={300}
            />
            <p className="text-center text-md font-bold">
              {dayLightDiscovery.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
