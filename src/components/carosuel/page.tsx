"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface CarouselProps {
  images: string[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export function Carosuel({
  images,
  autoPlay = false,
  autoPlayInterval = 5000,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (!images || images.length === 0) {
    return (
      <div className="flex items-center justify-center h-[50vh] rounded-lg">
        <p className="text-gray-500">No images available</p>
      </div>
    );
  }

  return (
    <div className="w-full space-y-4">
      <div className="relative h-[50vh] overflow-hidden rounded-lg group">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${images[currentIndex]})`,
          }}
        />
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-label="Previous image"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-label="Next image"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </>
        )}

        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "w-8" : "hover:bg-white/75"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {images.length > 1 && (
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative aspect-square overflow-hidden rounded-lg transition-all duration-300 ${
                index === currentIndex
                  ? "ring-4 ring-blue-400"
                  : "ring-1 ring-gray-300"
              }`}
            >
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 25vw, (max-width: 1024px) 16vw, 12vw"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
