"use client";
import { IBeautifulPlace } from "@/interfaces/beautiful-place";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LoadingSpinner, ImageSkeleton } from "./loading";

interface DestinationCardProps {
  destination: IBeautifulPlace;
  index: number;
  type?: boolean;
  path: string;
  isEvents: boolean;
  isCommercial?: boolean;
}

export default function DestinationCard({
  path,
  destination,
  index,
  type = false,
  isEvents = false,
  isCommercial = false,
}: DestinationCardProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  const router = useRouter();
  const getCardClasses = (size: string) => {
    switch (size) {
      case "WIDE":
        return "col-span-2 row-span-1";
      case "TALL":
        return "col-span-1 row-span-2";
      case "MEDIUM":
        return "col-span-1 row-span-1";
      case "LARGE":
        return "col-span-2 row-span-2";
      default:
        return "col-span-1 row-span-1";
    }
  };

  const handleNavigation = async () => {
    try {
      setIsLoading(true);
      await router.push(`${path}/${destination._id}`);
    } catch (error) {
      console.error("Navigation error:", error);
      setIsLoading(false);
    }
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoading(false);
  };

  const parseEventDate = (description: string) => {
    // Parse description like "JAN 7-8" into month and dates
    const parts = description?.trim().split(/\s+/);
    if (parts && parts.length >= 2) {
      return {
        month: parts[0].toUpperCase(),
        dates: parts.slice(1).join(" "),
      };
    }
    return null;
  };

  const eventDate =
    isEvents && destination.description
      ? parseEventDate(destination.description)
      : null;

  return (
    <button
      key={destination._id}
      onClick={handleNavigation}
      disabled={isLoading}
      className={`justify-start group relative overflow-hidden ${getCardClasses(destination.imagePosition)} rounded-2xl min-h-[18rem] max-h-[37rem] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 hover:shadow-lg bg-transparent border-none p-0 cursor-pointer`}
      aria-label={`View details for ${destination.name}`}
    >
      {isLoading ? (
        <div
          className="flex items-center justify-center h-full"
          style={{ backgroundImage: `url('${destination.mainImage?.url}')` }}
          role="status"
          aria-label="Loading destination"
        >
          <LoadingSpinner size="lg" />
          <span className="sr-only">Loading destination...</span>
        </div>
      ) : (
        <>
          {imageLoading && !imageError && (
            <ImageSkeleton className="absolute inset-0" />
          )}
          {imageError ? (
            <div className="flex items-center justify-center h-full bg-gray-200 text-gray-500">
              <div className="text-center">
                <svg
                  className="w-12 h-12 mx-auto mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-sm">Image unavailable</p>
              </div>
            </div>
          ) : (
            <Image
              src={destination.mainImage?.url || "/no-image.png"}
              alt={destination.name}
              fill
              className={`min-h-[18rem] max-h-[37rem] w-full object-cover duration-700 group-hover:scale-105 transition-transform ${
                imageLoading ? "opacity-0" : "opacity-100"
              }`}
              onLoad={handleImageLoad}
              onError={handleImageError}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={index < 6}
            />
          )}
        </>
      )}
      {isEvents && eventDate && (
        <div className="absolute top-4 right-4 bg-white rounded-lg px-3 py-2 shadow-lg z-10">
          <div className="text-blue-600 font-bold text-sm leading-none">
            {eventDate.month}
          </div>
          <div className="text-red-600 font-bold text-base leading-tight mt-1">
            {eventDate.dates}
          </div>
        </div>
      )}
      {type && (
        <div className="text-start absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <h3 className="text-white font-bold text-lg leading-tight text-start">
            {destination.name}
          </h3>
        </div>
      )}
    </button>
  );
}
