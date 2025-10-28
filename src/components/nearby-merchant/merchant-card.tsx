"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ImageSkeleton } from "../loading";

export function MerchantCard({ data, index }: { data: any; index: number }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      key={data.id}
      className="group bg-white rounded-2xl overflow-hidden duration-300 hover:-translate-y-1 transition-all"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <Link href={`/merchant/${data._id}`}>
        <div className="relative h-64 overflow-hidden">
          {!imageLoaded && (
            <div className="absolute inset-0">
              <ImageSkeleton className="w-full h-full rounded-2xl" />
            </div>
          )}
          <Image
            src={data.mainImage?.url}
            alt={data.mainImage?.url}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="duration-700 group-hover:scale-105 transition-transform"
            onLoadingComplete={() => setImageLoaded(true)}
          />
        </div>
      </Link>
      <div className="p-4 mt-1">
        <h3 className="font-bold text-md mb-1 line-clamp-2 group-hover:text-primary transition-colors duration-300">
          {data.name}
        </h3>
        <div>
          <span className="text-sm text-gray-600">6 house 5 ger</span>
        </div>
        <span className="font-bold text-lg text-primary group-hover:text-primary-dark transition-colors duration-300">
          ${150}
        </span>
      </div>
    </div>
  );
}
