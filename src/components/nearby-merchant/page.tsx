"use client";

import Image from "next/image";
import Link from "next/link";

interface DestinationSectionProps {
  path: string;
  title: string;
  destinations: any;
  type?: boolean;
  limit?: number;
}

export default function NearbyMerchantCard({
  limit,
  path,
  title,
  destinations,
  type = false,
}: DestinationSectionProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 auto-rows-[18rem] gap-4 transition-all duration-300">
      {destinations?.rows?.slice(0, limit).map((destination: any) => (
        <Link
          key={destination._id}
          href={`${path}/${destination._id}`}
          className={`group relative overflow-hidden rounded-2xl min-h-[18rem] max-h-[37rem]`}
        >
          <Image
            src={destination.mainImage?.url}
            alt={destination.name}
            fill
            className="min-h-[18rem] max-h-[37rem] w-full object-cover duration-700 group-hover:scale-105"
          />
          {type && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <h3 className="text-white font-bold text-lg leading-tight">
                {destination.name}
              </h3>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
}
