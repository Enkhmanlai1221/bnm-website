"use client";

import { foodApi, merchantApi, propertyApi } from "@/apis";
import { ContentLoading } from "@/components/loading";
import { IMerchant } from "@/interfaces/merchant";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import useSWR from "swr";

const tourProperties = [
  {
    id: 1,
    name: "Luxury Room",
    location: "Дархан-Уул аймаг, Хонгор сум",
    price: "1050",
    image: "/ROOM1.png",
    day: "14",
    isSpecialPartner: true,
    isNew: true,
  },
  {
    id: 2,
    name: "Standard Room",
    location: "Улаанбаатар хот, Налайх дүүрэг",
    price: "1050",
    image: "/ROOM2.png",
    day: "14",
    isSpecialPartner: true,
    isNew: false,
  },
  {
    id: 3,
    name: "Deluxe Room",
    location: "Улаанбаатар хот, Сүхбаатар дүүрэг",
    price: "1050",
    image: "/ROOM3.png",
    day: "14",
    isSpecialPartner: false,
    isNew: true,
  },
  {
    id: 4,
    name: "Family Room",
    location: "Дархан-Уул аймаг, Хонгор сум",
    price: "1050",
    image: "/ROOM1.png",
    day: "14",
    isSpecialPartner: true,
    isNew: false,
  },
];
const foodProperties = [
  {
    id: 1,
    name: "Savoury Pancakes",
    location: "Дархан-Уул аймаг, Хонгор сум",
    price: "1050",
    image: "/FOOD1.png",
    day: "14",
    isSpecialPartner: true,
    isNew: true,
  },
  {
    id: 2,
    name: "Balsamic & Garlic Bread",
    location: "Улаанбаатар хот, Налайх дүүрэг",
    price: "1050",
    image: "/FOOD2.png",
    day: "14",
    isSpecialPartner: true,
    isNew: false,
  },
  {
    id: 3,
    name: "Grilled Halloumi & Peppers",
    location: "Улаанбаатар хот, Сүхбаатар дүүрэг",
    price: "1050",
    image: "/FOOD3.png",
    day: "14",
    isSpecialPartner: false,
    isNew: true,
  },
  {
    id: 4,
    name: "Classic Caesar Salad",
    location: "Дархан-Уул аймаг, Хонгор сум",
    price: "1050",
    image: "/FOOD3.png",
    day: "14",
    isSpecialPartner: true,
    isNew: false,
  },
];
const facilityProperties = [
  {
    id: 1,
    name: "Swimming Pool",
    location: "Дархан-Уул аймаг, Хонгор сум",
    price: "1050",
    image: "/FACILITIES1.png",
    day: "14",
    isSpecialPartner: true,
    isNew: true,
  },
  {
    id: 2,
    name: "Barbecue Area",
    location: "Улаанбаатар хот, Налайх дүүрэг",
    price: "1050",
    image: "/FACILITIES2.png",
    day: "14",
    isSpecialPartner: true,
    isNew: false,
  },
  {
    id: 3,
    name: "BBQ Grill",
    location: "Улаанбаатар хот, Сүхбаатар дүүрэг",
    price: "1050",
    image: "/FACILITIES3.png",
    day: "14",
    isSpecialPartner: false,
    isNew: true,
  },
  {
    id: 4,
    name: "BBQ Party",
    location: "Дархан-Уул аймаг, Хонгор сум",
    price: "1050",
    image: "/FACILITIES3.png",
    day: "14",
    isSpecialPartner: true,
    isNew: false,
  },
];

export default function MerchantDetailPage() {
  const { id } = useParams();
  const [merchant, setMerchant] = useState<IMerchant | null>(null);
  const [activeTab, setActiveTab] = useState("about");

  useEffect(() => {
    const mockMerchant: IMerchant = {
      id: id as string,
      name: "Tsagaan Suvarga Tourist Camp",
      description:
        "Монголын сайхан газруудыг танилцуулж, аялал жуулчлалын үйлчилгээ үзүүлдэг тэргүүлэгч компани. Бид танд Монголын түүх, соёл, байгалийн үзэсгэлэнт газруудыг танилцуулах болно.",
      coverImage: "/CAMP.png",
      profileImage: "/bnm-logo.svg",
      location: "Улаанбаатар хот, Монгол улс",
      category: "Аялал жуулчлал",
      rating: 4.8,
      reviewCount: 234,
      phone: "+976 11 123456",
      email: "info@mongolia-tours.com",
      website: "www.mongolia-tours.com",
      socialMedia: {
        facebook: "mongolia.tours",
        instagram: "mongolia_tours",
        twitter: "mongolia_tours",
      },
      openingHours: {
        "Даваа - Баасан": "09:00 - 18:00",
        Бямба: "09:00 - 16:00",
        Ням: "Амрах өдөр",
      },
      services: [
        "Хот хоорондын аялал",
        "Ордны аялал",
        "Байгалийн үзэсгэлэнт газрын аялал",
        "Соёлын аялал",
        "Зуны амралтын баазууд",
        "Гэр байшингийн үйлчилгээ",
      ],
      gallery: [
        "/HOME/HOME1.png",
        "/HOME/HOME2.png",
        "/HOME/HOME3.png",
        "/HOME/HOME4.png",
        "/HOME/HOME5.png",
        "/HOME/HOME6.png",
      ],
      isVerified: true,
      joinedDate: "2020-03-15",
      followers: 12500,
      following: 450,
    };
    setMerchant(mockMerchant);
  }, [id]);

  const { data: detailData, isLoading } = useSWR<any>(
    `swr.merchant.detail.${id}`,
    () => merchantApi.get(id as string),
  );

  const { data: foodData, isLoading: foodDataLoading } = useSWR<any>(
    `swr.merchant.food.${id}`,
    () =>
      foodApi.list({
        page: 1,
        limit: 100,
        merchant: id as string,
      }),
  );
  const { data: propertyData, isLoading: propertyDataLoading } = useSWR<any>(
    `swr.merchant.property.${id}`,
    () =>
      propertyApi.list({
        page: 1,
        limit: 100,
        merchant: id as string,
      }),
  );

  if (isLoading) {
    return <ContentLoading />;
  }

  if (!detailData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg text-gray-600">Merchant not found</div>
      </div>
    );
  }

  if (!merchant) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-[50vh] bg-gradient-to-r from-blue-600 to-purple-600 overflow-hidden">
        {merchant.coverImage && (
          <Image
            src={merchant.coverImage}
            alt="Cover"
            fill
            className="object-cover"
            priority
          />
        )}
      </div>

      <div className="relative bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-end -mt-16 relative z-10">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-full border-4 border-white shadow-lg overflow-hidden">
                {merchant.profileImage ? (
                  <Image
                    src={merchant.profileImage}
                    alt={merchant.name}
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-4xl">🏢</span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex-1 ml-0 md:ml-6 mt-4 md:mt-0">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    {merchant.name}
                  </h1>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mb-4">
                  <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-50 transition-colors flex items-center justify-center">
                    <span className="mr-2">📞</span>
                    99770146
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-50 transition-colors flex items-center justify-center">
                    <span className="mr-2">📤</span>
                    info@tsagaansuvarga.com
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-gray-600 mb-4">
                <div className="flex items-center">
                  <span className="font-semibold text-gray-900 mr-1">
                    {merchant.rating}
                  </span>
                  <span>⭐ үнэлгээ</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-1">📅</span>
                  <span>
                    {new Date(merchant.joinedDate).getFullYear()} онд нэгдсэн
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl overflow-hidden duration-300">
              ...address
          </div> */}
          <div className="text-start mb-6 mt-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-0">Rooms</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tourProperties.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-2xl overflow-hidden duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={property.image}
                    alt={property.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  <div className="absolute top-3 right-3">
                    <button className="bg-white/80 hover:bg-white rounded-full p-2 transition-colors duration-200">
                      <svg
                        className="w-5 h-5 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                    <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                    <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                  </div>
                </div>

                <div className="p-1 mt-1">
                  <h3 className="font-bold text-gray-900 text-md mb-1 line-clamp-2">
                    {property.name}
                  </h3>
                  <div className="flex items-center mb-3">
                    <span className="text-gray-500 text-sm">
                      2 beds 1 bathroom
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-bold text-gray-900 text-lg">
                        ${property.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-start mb-6 mt-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-0">Foods</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {foodProperties.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-2xl overflow-hidden duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={property.image}
                    alt={property.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  <div className="absolute top-3 right-3">
                    <button className="bg-white/80 hover:bg-white rounded-full p-2 transition-colors duration-200">
                      <svg
                        className="w-5 h-5 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                    <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                    <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                  </div>
                </div>

                <div className="p-1 mt-1">
                  <h3 className="font-bold text-gray-900 text-md mb-1 line-clamp-2">
                    {property.name}
                  </h3>
                  <div className="flex items-center mb-3">
                    <span className="text-gray-500 text-sm">
                      2 beds 1 bathroom
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-bold text-gray-900 text-lg">
                        ${property.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-start mb-6 mt-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-0">
              Facilities
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilityProperties.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-2xl overflow-hidden duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={property.image}
                    alt={property.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  <div className="absolute top-3 right-3">
                    <button className="bg-white/80 hover:bg-white rounded-full p-2 transition-colors duration-200">
                      <svg
                        className="w-5 h-5 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                    <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                    <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                  </div>
                </div>

                <div className="p-1 mt-1">
                  <h3 className="font-bold text-gray-900 text-md mb-1 line-clamp-2">
                    {property.name}
                  </h3>
                  <div className="flex items-center mb-3">
                    <span className="text-gray-500 text-sm">
                      2 beds 1 bathroom
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-bold text-gray-900 text-lg">
                        ${property.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
