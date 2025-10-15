"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IMerchant } from "@/interfaces/merchant";

export default function MerchantPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Mock data - replace with actual API call
  const merchants: IMerchant[] = [
    {
      id: "1",
      name: "Монгол Аялал Жуулчлалын Төв",
      description:
        "Монголын сайхан газруудыг танилцуулж, аялал жуулчлалын үйлчилгээ үзүүлдэг тэргүүлэгч компани.",
      coverImage: "/header-bg.png",
      profileImage: "/bnm-logo.svg",
      location: "Улаанбаатар хот",
      category: "Аялал жуулчлал",
      rating: 4.8,
      reviewCount: 234,
      isVerified: true,
      joinedDate: "2020-03-15",
      followers: 12500,
      following: 450,
      services: ["Аялал жуулчлал", "Гэр байшингийн үйлчилгээ"],
      gallery: ["/HOME/HOME1.png", "/HOME/HOME2.png"],
    },
    {
      id: "2",
      name: "Монголын Түүх Музей",
      description:
        "Монголын түүх, соёлын дурсгалт зүйлс, эртний хадны зураг зэргийг харуулдаг музей.",
      profileImage: "/no-image.png",
      location: "Улаанбаатар хот",
      category: "Музей",
      rating: 4.6,
      reviewCount: 156,
      isVerified: true,
      joinedDate: "2019-01-20",
      followers: 8500,
      following: 200,
      services: ["Музейн үйлчилгээ", "Түүх сурталчилгаа"],
      gallery: ["/HOME/HOME3.png", "/HOME/HOME4.png"],
    },
    {
      id: "3",
      name: "Гэрлэх Гэрийн Үйлчилгээ",
      description:
        "Уламжлалт монгол гэрлэх гэрийн үйлчилгээ, хоол хийх хичээл зэргийг үзүүлдэг.",
      profileImage: "/no-image.png",
      location: "Улаанбаатар хот",
      category: "Хоолны газар",
      rating: 4.7,
      reviewCount: 89,
      isVerified: false,
      joinedDate: "2021-05-10",
      followers: 3200,
      following: 150,
      services: ["Уламжлалт хоол", "Хичээл заах"],
      gallery: ["/HOME/HOME5.png", "/HOME/HOME6.png"],
    },
  ];

  const categories = [
    { id: "all", label: "Бүгд", icon: "🏢" },
    { id: "tourism", label: "Аялал жуулчлал", icon: "✈️" },
    { id: "restaurant", label: "Хоолны газар", icon: "🍽️" },
    { id: "museum", label: "Музей", icon: "🏛️" },
    { id: "hotel", label: "Зочид буудал", icon: "🏨" },
    { id: "shop", label: "Дэлгүүр", icon: "🛍️" },
  ];

  const filteredMerchants = merchants.filter((merchant) => {
    const matchesSearch =
      merchant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      merchant.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      merchant.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" ||
      merchant.category.toLowerCase().includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Үйлчилгээ үзүүлэгчид
          </h1>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Нэр, байршил, үйлчилгээгээр хайх..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  🔍
                </span>
              </div>
            </div>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.icon} {category.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="container mx-auto px-4 py-4">
        <p className="text-gray-600">
          {filteredMerchants.length} үйлчилгээ үзүүлэгч олдлоо
        </p>
      </div>

      {/* Merchants Grid */}
      <div className="container mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMerchants.map((merchant) => (
            <Link key={merchant.id} href={`/merchant/${merchant.id}`}>
              <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer overflow-hidden">
                {/* Cover Image */}
                {merchant.coverImage && (
                  <div className="relative h-48 bg-gradient-to-r from-blue-600 to-purple-600">
                    <Image
                      src={merchant.coverImage}
                      alt="Cover"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  </div>
                )}

                <div className="p-6">
                  {/* Profile Section */}
                  <div className="flex items-start space-x-4 -mt-12 relative z-10">
                    <div className="w-20 h-20 bg-white rounded-full border-4 border-white shadow-lg overflow-hidden">
                      {merchant.profileImage ? (
                        <Image
                          src={merchant.profileImage}
                          alt={merchant.name}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                          <span className="text-2xl">🏢</span>
                        </div>
                      )}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {merchant.name}
                        </h3>
                        {merchant.isVerified && (
                          <span className="text-blue-600 text-sm">✓</span>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm mt-1">
                        {merchant.category}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 text-sm mt-4 line-clamp-2">
                    {merchant.description}
                  </p>

                  {/* Location */}
                  <div className="flex items-center text-gray-600 text-sm mt-3">
                    <span className="mr-2">📍</span>
                    <span>{merchant.location}</span>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <span className="font-semibold text-gray-900 mr-1">
                          {merchant.rating}
                        </span>
                        <span>⭐</span>
                        <span className="ml-1">({merchant.reviewCount})</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-semibold text-gray-900 mr-1">
                          {merchant.followers.toLocaleString()}
                        </span>
                        <span>дагагч</span>
                      </div>
                    </div>

                    <div className="text-blue-600 text-sm font-medium">
                      Дэлгэрэнгүй →
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredMerchants.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Үйлчилгээ үзүүлэгч олдсонгүй
            </h3>
            <p className="text-gray-600 mb-4">
              Хайлтын нөхцөлөө өөрчлөөд дахин оролдоно уу
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Бүгдийг харуулах
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
