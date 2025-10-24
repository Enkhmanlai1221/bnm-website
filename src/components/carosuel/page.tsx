"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ImageSkeleton } from "../loading";

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
  const [imageLoading, setImageLoading] = useState<boolean[]>([]);
  const [mainImageLoading, setMainImageLoading] = useState(true);

  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, images.length]);

  useEffect(() => {
    if (images && images.length > 0) {
      setImageLoading(new Array(images.length).fill(true));
      setMainImageLoading(true);

      // Fallback timeout to prevent infinite loading
      const timeout = setTimeout(() => {
        setImageLoading(new Array(images.length).fill(false));
        setMainImageLoading(false);
      }, 1000); // 10 second timeout

      return () => clearTimeout(timeout);
    }
  }, [images]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleMainImageLoad = () => {
    setMainImageLoading(false);
  };

  const handleThumbnailLoad = (index: number) => {
    setImageLoading((prev) => {
      const newState = [...prev];
      newState[index] = false;
      return newState;
    });
  };

  const handleMainImageError = () => {
    setMainImageLoading(false);
  };

  const handleThumbnailError = (index: number) => {
    setImageLoading((prev) => {
      const newState = [...prev];
      newState[index] = false;
      return newState;
    });
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
        {mainImageLoading && <ImageSkeleton className="absolute inset-0" />}
        <div
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-300 ${
            mainImageLoading ? "opacity-0" : "opacity-100"
          }`}
          style={{
            backgroundImage: `url(${images[currentIndex]})`,
          }}
        />
        <Image
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          fill
          className="opacity-0"
          onLoad={handleMainImageLoad}
          onError={handleMainImageError}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
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
              {imageLoading[index] && (
                <ImageSkeleton className="absolute inset-0" />
              )}
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                fill
                className={`object-cover transition-opacity duration-300 ${
                  imageLoading[index] ? "opacity-0" : "opacity-100"
                }`}
                sizes="(max-width: 768px) 25vw, (max-width: 1024px) 16vw, 12vw"
                onLoad={() => handleThumbnailLoad(index)}
                onError={() => handleThumbnailError(index)}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
