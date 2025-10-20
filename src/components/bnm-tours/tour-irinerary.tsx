"use client";

import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

interface DayData {
  id: number;
  title: string;
  overview: string;
  travelDistance: string;
  drivingTime: string;
  activities: Array<{
    icon: string;
    text: string;
  }>;
  meals: Array<{
    meal: string;
    location: string;
    overnight?: boolean;
  }>;
  videoThumbnail: string;
  images: string[];
}

const tourData: DayData[] = [
  {
    id: 1,
    title: "Genghis Khan Statue Complex & Terelj National Park",
    overview:
      "Start your journey at the towering Genghis Khan Statue Complex, where you can enjoy panoramic views and learn about Mongolia's history. Then, head to Terelj National Park to explore iconic landmarks such as Turtle Rock and the serene Aryapal Monastery.",
    travelDistance: "~ 100 KM",
    drivingTime: "~ 1 Hour 30 Minutes",
    activities: [
      {
        icon: "BNM_TOURS/DAY1_WALK.svg",
        text: "Explore Turtle Rock and Aryapal Monastery",
      },
    ],
    meals: [
      { meal: "Breakfast", location: "~ Ulaanbaatar" },
      { meal: "Lunch", location: "~ Genghis Khan Statue Complex" },
      { meal: "Dinner", location: "~ Terelj National Park", overnight: true },
    ],
    videoThumbnail: "/VIDEO-IMAGE.png",
    images: [
      "/BNM_TOURS/DAY1_1.png",
      "/BNM_TOURS/DAY1_2.png",
      "/BNM_TOURS/DAY1_3.png",
    ],
  },
  {
    id: 2,
    title: "Khustai Nuruu National Park",
    overview:
      "Spend the day at Khustai Nuruu National Park, where you’ll spot the famous Przewalski's horses and experience the park's rich wildlife and beautiful landscapes.",
    travelDistance: "~ 100 KM",
    drivingTime: "~ 3 Hours 30 Minutes",
    activities: [
      {
        icon: "BNM_TOURS/DAY2_DEER.svg",
        text: "Spot Przewalski's horses in their natural habitat",
      },
    ],
    meals: [
      { meal: "Breakfast", location: "~ Terelj National Park" },
      { meal: "Lunch", location: "~  Khustai Nuruu Park" },
      { meal: "Dinner", location: "~  Khustai Nuruu Park", overnight: true },
    ],
    videoThumbnail: "/VIDEO-IMAGE.png",
    images: [
      "/BNM_TOURS/DAY2_1.png",
      "/BNM_TOURS/DAY2_2.png",
      "/BNM_TOURS/DAY2_3.png",
    ],
  },
  {
    id: 3,
    title: "Ugii Lake",
    overview:
      "Journey to Ugii Lake, a serene destination perfect for birdwatching, boating, or simply relaxing by the water. Capture the tranquility of the lake through photography or take part in optional fishing activities.",
    travelDistance: "~ 100 KM",
    drivingTime: "~ 3 Hours 30 Minutes",
    activities: [
      { icon: "BNM_TOURS/DAY1_WALK.svg", text: "Boat ride on Ugii Lake" },
      {
        icon: "BNM_TOURS/DAY2_DEER.svg",
        text: "Explore wildlife en route to Altai Tavan Bogd",
      },
      { icon: "BNM_TOURS/market.svg", text: "Local Market Exploration" },
    ],
    meals: [
      { meal: "Breakfast", location: "Khustai Nuruu National Park" },
      { meal: "Lunch", location: "Ugii Lake" },
      { meal: "Dinner", location: "Ugii Lake", overnight: true },
    ],
    videoThumbnail: "/VIDEO-IMAGE.png",
    images: [
      "/BNM_TOURS/DAY3_1.png",
      "/BNM_TOURS/DAY3_2.png",
      "/BNM_TOURS/DAY3_3.png",
    ],
  },
  {
    id: 4,
    title: "Erdenezuu Monastery & Kharkhorin",
    overview:
      "Explore the ancient capital of the Mongol Empire at Kharkhorin and visit the historic Erdenezuu Monastery, one of Mongolia's most important Buddhist sites.",
    travelDistance: "~ 80 KM",
    drivingTime: "~ 2 Hours 30 Minutes",
    activities: [
      {
        icon: "BNM_TOURS/deel.svg",
        text: "Explore Erdenezuu Monastery & Walk through the historic town of Kharkhorin",
      },
    ],
    meals: [
      { meal: "Breakfast", location: "Ugii Lake" },
      { meal: "Lunch", location: "Erdenezuu Monastery" },
      { meal: "Dinner", location: "Kharkhorin", overnight: true },
    ],
    videoThumbnail: "/VIDEO-IMAGE.png",
    images: [
      "/BNM_TOURS/DAY4_1.png",
      "/BNM_TOURS/DAY4_2.png",
      "/BNM_TOURS/DAY4_3.png",
    ],
  },
  {
    id: 5,
    title: "Nomadic Family & Elsen Tasarkhai",
    overview:
      "Spend the morning with a nomadic family, learning about their traditions and daily life. Then, head to Elsen Tasarkhai for a camel ride amidst its stunning sand dunes.",
    travelDistance: "~ 120 KM",
    drivingTime: "~ 3 Hours 30 Minutes",
    activities: [
      { icon: "BNM_TOURS/deel.svg", text: "Engage with a nomadic family" },
      {
        icon: "BNM_TOURS/camel.svg",
        text: "Ride camels across the Elsen Tasarkhai dunes",
      },
    ],
    meals: [
      { meal: "Breakfast", location: "Kharkhorin" },
      { meal: "Dinner", location: "Nomadic family" },
      { meal: "Lunch", location: "Elsen Tasarkhai", overnight: true },
    ],
    videoThumbnail: "/VIDEO-IMAGE.png",
    images: [
      "/BNM_TOURS/DAY5_1.png",
      "/BNM_TOURS/DAY5_2.png",
      "/BNM_TOURS/DAY5_3.png",
    ],
  },
  //   {
  //     id: 6,
  //     title: "Return to Ulaanbaatar",
  //     overview:
  //       "Complete your journey with a scenic drive back to Ulaanbaatar, with opportunities for final shopping and cultural experiences in the capital city.",
  //     travelDistance: "~ 280 KM",
  //     drivingTime: "~ 5 Hours",
  //     activities: [
  //       { icon: "🛍️", text: "Local market shopping" },
  //       { icon: "🏛️", text: "City cultural sites" },
  //       { icon: "✈️", text: "Departure preparation" },
  //     ],
  //     meals: [
  //       { meal: "Breakfast", location: "Nomadic family" },
  //       { meal: "Lunch", location: "En route to UB" },
  //       { meal: "Dinner", location: "Ulaanbaatar" },
  //     ],
  //     videoThumbnail: "/VIDEO-IMAGE.png",
  //     images: ["/HOME/HOME16.png", "/HOME/HOME17.png", "/HOME/HOME18.png"],
  //   },
];

export function TourItinerary() {
  const [expandedDay, setExpandedDay] = useState<number>(3);

  const toggleDay = (dayId: number) => {
    setExpandedDay(expandedDay === dayId ? -1 : dayId);
  };
  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <Image
          src="/tour.svg"
          alt="Tour Itinerary"
          width={24}
          height={24}
          className="w-8 h-8"
        />
        <h2 className="text-2xl text-blue-700 font-bold">Tour itinerary</h2>
      </div>
      <div className="space-y-4">
        {tourData.map((day) => (
          <div key={day.id} className="w-full">
            <div
              className={`p-4 rounded-lg cursor-pointer transition-all duration-200 ${
                expandedDay === day.id
                  ? "bg-blue-50 border-l-4 border-blue-500"
                  : "bg-gray-50 hover:bg-gray-100"
              }`}
              onClick={() => toggleDay(day.id)}
            >
              <div className="flex items-center justify-between">
                <span className="text-md font-semibold">
                  Day {day.id} {day.title}
                </span>
                <ChevronRightIcon
                  className={`w-6 h-6 transition-transform duration-200 ${
                    expandedDay === day.id ? "rotate-90" : ""
                  }`}
                />
              </div>
            </div>

            {expandedDay === day.id && (
              <div className="mt-4 bg-blue-50 p-6 rounded-lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div>
                      <h5 className="text-xl font-semibold mb-2">Overview</h5>
                      <p className="text-gray-700 text-md leading-relaxed">
                        {day.overview}
                      </p>
                    </div>

                    <div>
                      <h5 className="text-xl font-semibold mb-3">
                        Travel Information
                      </h5>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Image
                            src="/BNM_TOURS/car.svg"
                            alt="Car Rental"
                            width={24}
                            height={24}
                            className="w-4 h-4"
                          />
                          <span className="text-md">
                            Travel Distance {day.travelDistance}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Image
                            src="/BNM_TOURS/clock.svg"
                            alt="Clock"
                            width={24}
                            height={24}
                            className="w-4 h-4"
                          />
                          <span className="text-md">
                            Driving Time {day.drivingTime}
                          </span>
                        </div>
                      </div>
                      <hr className="my-4" />
                    </div>

                    <div>
                      <h5 className="text-xl font-semibold mb-3">Activities</h5>
                      <div className="space-y-2">
                        {day.activities.map((activity, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <Image
                              src={`/${activity.icon}`}
                              alt="Activity"
                              width={24}
                              height={24}
                              className="w-4 h-4"
                            />
                            <span className="text-md">{activity.text}</span>
                          </div>
                        ))}
                      </div>
                      <hr className="my-4" />
                    </div>

                    <div>
                      <h5 className="text-xl font-semibold mb-3">Meals</h5>
                      <div className="space-y-2">
                        {day.meals.map((meal, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <span className="text-md">
                              {meal.meal} ~ {meal.location}
                            </span>
                            {meal.overnight && (
                              <div className="flex items-center gap-1">
                                <span className="text-md">🛏️</span>
                                <span className="text-md text-gray-600">
                                  Overnight near the lake.
                                </span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex p-4 gap-4">
                    <div className="relative">
                      <Image
                        src={day.videoThumbnail}
                        alt={`Day ${day.id} Video`}
                        width={300}
                        height={400}
                        className="w-45% h-full object-cover rounded-lg"
                      />
                    </div>

                    <div className="flex flex-col gap-4">
                      {day.images.map((image, index) => (
                        <Image
                          key={index}
                          src={image}
                          alt={`Day ${day.id} Image ${index + 1}`}
                          width={300}
                          height={300}
                          className="w-45% h-full object-cover rounded-lg"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
