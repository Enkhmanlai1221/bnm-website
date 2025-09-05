"use client";

import AccommodationPage from "./accommodation/page";
import DestinationsPage from "./destinations/page";

export default function HomePage() {
  return (
    <div className="position-absolute top-0 left-0 right-0 bottom-0 z-10">
      <DestinationsPage />
      <AccommodationPage />
    </div>
  );
}

HomePage.displayName = "HomePage";
