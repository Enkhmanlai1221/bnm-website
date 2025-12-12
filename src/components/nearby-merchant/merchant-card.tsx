"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ImageSkeleton } from "../loading";
import { CheckIcon, StarIcon } from "@heroicons/react/24/outline";

export function MerchantCard({ data, index }: { data: any; index: number }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-2xl h-full min-h-[18rem] duration-300 hover:-translate-y-1 transition-all"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <Link href={`/merchant/${data._id}`} className="block h-full">
        <div className="relative h-full w-full overflow-hidden">
          {!imageLoaded && (
            <div className="absolute inset-0 z-10">
              <ImageSkeleton className="w-full h-full" />
            </div>
          )}
          <Image
            src={data?.profile?.url || "/no-image.png"}
            alt={data?.profile?.name || data.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover duration-700 group-hover:scale-105 transition-transform"
            onLoadingComplete={() => setImageLoaded(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-5 z-20">
            <div className="flex flex-col items-start justify-between gap-1">
              <h3 className="text-white font-bold text-lg sm:text-xl leading-tight line-clamp-2 flex-1 group-hover:text-yellow-300 transition-colors duration-300">
                {data.name}
              </h3>
              {data?._id === "693a8dea283c4de3a5464004" ? (
                <div className="flex items-center gap-1 bg-green-500/90 backdrop-blur-sm px-2 py-1 rounded-lg flex-shrink-0">
                  <StarIcon className="w-4 h-4 text-white" />
                  <span className="text-white text-xs font-semibold whitespace-nowrap">
                    Luxurious
                  </span>
                </div>
              ) : (
                <div className="flex items-center gap-1 bg-yellow-500/90 backdrop-blur-sm px-2 py-1 rounded-lg flex-shrink-0">
                  <CheckIcon className="w-4 h-4 text-white" />
                  <span className="text-white text-xs font-semibold whitespace-nowrap">
                    Premium
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
