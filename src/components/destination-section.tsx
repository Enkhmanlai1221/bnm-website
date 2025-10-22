"use client";
import { IBeautifulPlace } from "@/interfaces/beautiful-place";
import DestinationCard from "./destination-card";
import { useState, useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface DestinationSectionProps {
  path: string;
  title: string;
  destinations: IBeautifulPlace[] | undefined;
  type?: boolean;
  limit?: number;
}

export default function DestinationSection({
  limit,
  path,
  title,
  destinations,
  type = false,
}: DestinationSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  if (!destinations || destinations.length === 0) {
    return null;
  }

  const displayLimit = limit || destinations.length;
  const hasMoreItems = destinations.length > displayLimit;
  const visibleDestinations = hasMoreItems
    ? destinations.slice(currentIndex, currentIndex + displayLimit)
    : destinations;

  const scrollLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - displayLimit);
    }
  };

  const scrollRight = () => {
    if (currentIndex + displayLimit < destinations.length) {
      setCurrentIndex(currentIndex + displayLimit);
    }
  };

  const canScrollLeft = currentIndex > 0;
  const canScrollRight = currentIndex + displayLimit < destinations.length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-start mb-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-0">{title}</h2>
      </div>

      <div className="relative">
        {hasMoreItems && canScrollLeft && (
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-200 hover:scale-110"
            aria-label="Scroll left"
          >
            <ChevronLeftIcon className="w-6 h-6 text-gray-700" />
          </button>
        )}

        {hasMoreItems && canScrollRight && (
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-200 hover:scale-110"
            aria-label="Scroll right"
          >
            <ChevronRightIcon className="w-6 h-6 text-gray-700" />
          </button>
        )}

        <div
          ref={scrollContainerRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[18rem] gap-4 transition-all duration-300"
        >
          {visibleDestinations.map((destination, index) => (
            <DestinationCard
              path={path}
              key={destination._id}
              destination={destination}
              index={index}
              type={type}
            />
          ))}
        </div>
      </div>

      {hasMoreItems && (
        <div className="flex justify-center mt-4 space-x-2">
          {Array.from({
            length: Math.ceil(destinations.length / displayLimit),
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * displayLimit)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === Math.floor(currentIndex / displayLimit)
                  ? "bg-blue-600"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
