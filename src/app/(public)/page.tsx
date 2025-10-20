"use client";

import HomeInfoPage from "@/components/pages/home";
import { usePathname } from "next/navigation";
import AccommodationPage from "./accommodation/page";
import BnmToursPage from "./bnm-tours/page";
import CommercialPage from "./commercial/page";
import DestinationPage from "./destination/page";
import EventsPage from "./events/page";
import InfoPage from "./info/page";
import VisitUlaanbaatarPage from "./visit-ulaanbaatar/page";

export default function HomePage() {
  const pathname = usePathname();

  return (
    <div className="mt-6">
      <div className="min-h-screen">
        {pathname === "/" && <HomeInfoPage />}
        {pathname === "/visit-ulaanbaatar" && <VisitUlaanbaatarPage />}
        {pathname === "/destination" && <DestinationPage />}
        {pathname === "/accommodation" && <AccommodationPage />}
        {pathname === "/bnm-tours" && <BnmToursPage />}
        {pathname === "/events" && <EventsPage />}
        {pathname === "/info" && <InfoPage />}
        {pathname === "/commercial" && <CommercialPage />}
      </div>
    </div>
  );
}
