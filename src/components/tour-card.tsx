"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LoadingSpinner, ImageSkeleton } from "./loading";

interface TourCardProps {
  tour: {
    _id?: string;
    id?: string | number;
    image: string;
    title: string;
    name?: string;
  };
  index?: number;
  path?: string;
}

export function TourCard({
  tour,
  index = 0,
  path = "/bnm-tours",
}: TourCardProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  const router = useRouter();

  const tourId = tour?._id || tour?.id;
  const tourName = tour?.name || tour?.title;
  const tourImage = tour?.image || "/no-image.png";

  const handleNavigation = async () => {
    if (!tourId) return;
    try {
      setIsLoading(true);
      await router.push(`${path}/${tourId}`);
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

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col">
      {/* Image Section */}
      <div className="relative h-64 w-full overflow-hidden">
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
            src={tourImage}
            alt={tourName}
            fill
            className={`w-full h-full object-cover transition-transform duration-300 hover:scale-105 ${
              imageLoading ? "opacity-0" : "opacity-100"
            }`}
            onLoad={handleImageLoad}
            onError={handleImageError}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={index < 3}
          />
        )}
      </div>

      {/* Content Section */}
      <div className="p-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/BNM_TOURS/logo.svg"
              alt="BNM Tours Logo"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full"
            />
          </div>

          {/* Tour Name */}
          <h3 className="text-gray-900 text-base leading-tight line-clamp-2 flex-1 min-w-0">
            {tourName}
          </h3>
        </div>

        {/* Tour Details Button */}
        <button
          onClick={handleNavigation}
          disabled={isLoading || !tourId}
          className="flex-shrink-0 bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
          aria-label={`View tour details for ${tourName}`}
        >
          {isLoading ? <LoadingSpinner size="sm" /> : "Detail"}
        </button>
      </div>
    </div>
  );
}
