"use client";

import Image from "next/image";
import { useState } from "react";

interface Post {
  id: number;
  author: string;
  authorAvatar: string;
  title: string;
  content: string;
  image?: string;
  category: string;
  upvotes: number;
  comments: number;
  timeAgo: string;
  tags: string[];
}

export default function CommercialPage() {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      author: "Boldbaatar",
      authorAvatar: "/round.png",
      title: "Gobi Desert Adventure - New Tour Package Available",
      content:
        "Our company is proud to introduce an exceptional Gobi Desert tour package this season. Experience the stunning landscapes of Khongoryn Els sand dunes, Bayanzag Flaming Cliffs, and Yolyn Am Ice Canyon in a comprehensive 5-day, 4-night journey. All-inclusive pricing available.",
      image: "/ACCOMMODATION/SOUTHERN_MONGOLIA1.png",
      category: "Tours",
      upvotes: 234,
      comments: 45,
      timeAgo: "2 hours ago",
      tags: ["Gobi", "Adventure", "Package"],
    },
    {
      id: 2,
      author: "Sarnai",
      authorAvatar: "/round.png",
      title: "New Lakeside Hotel Opening at Lake Khuvsgul",
      content:
        "A stunning 4-star hotel is opening on the shores of Mongolia's pristine Lake Khuvsgul. Modern amenities meet breathtaking natural scenery. Bookings are now open for the upcoming season.",
      image: "/ACCOMMODATION/NORTHERN_MONGOLIA1.png",
      category: "Hotels",
      upvotes: 189,
      comments: 32,
      timeAgo: "5 hours ago",
      tags: ["Khuvsgul", "Hotel", "Nature"],
    },
    {
      id: 3,
      author: "Ochir",
      authorAvatar: "/round.png",
      title: "Naadam Festival 2025 Special Package - Early Bird Discount",
      content:
        "Join us for the ultimate Naadam Festival experience in 2025. Specially designed package for international and domestic travelers to witness Mongolia's Three Games of Men, city tours, and cultural events. Book early and save 20%.",
      image: "/HOME/EVENT1.png",
      category: "Events",
      upvotes: 312,
      comments: 67,
      timeAgo: "1 day ago",
      tags: ["Naadam", "Festival", "Discount"],
    },
    {
      id: 4,
      author: "Ganbat",
      authorAvatar: "/round.png",
      title: "Terelj National Park - New Eco-Resort Complex Opens",
      content:
        "A brand new resort blending modern comfort with natural beauty has opened in Terelj National Park. Features traditional ger accommodations, restaurant, and complete recreational facilities. Perfect for family getaways and nature lovers.",
      image: "/ACCOMMODATION/CENTRAL_MONGOLIA1.png",
      category: "Resorts",
      upvotes: 156,
      comments: 28,
      timeAgo: "2 days ago",
      tags: ["Terelj", "Resort", "EcoTourism"],
    },
    {
      id: 5,
      author: "Narantuya",
      authorAvatar: "/round.png",
      title: "Hidden Gems of Western Mongolia - Altai Mountains & Khoton Lake",
      content:
        "Discover the most spectacular destinations in Western Mongolia. Complete travel guide to explore the majestic Altai Mountains, crystal-clear Khoton Lake, and the stunning Tsagaan Salaa petroglyphs. Adventure awaits!",
      image: "/ACCOMMODATION/WESTERN_MONGOLIA1.png",
      category: "Tours",
      upvotes: 198,
      comments: 41,
      timeAgo: "3 days ago",
      tags: ["WesternMongolia", "Altai", "TravelGuide"],
    },
    {
      id: 6,
      author: "Bayar",
      authorAvatar: "/round.png",
      title: "One Day in Ulaanbaatar - Must-Visit Attractions",
      content:
        "Perfect itinerary for travelers with limited time in Mongolia's capital. Visit Sukhbaatar Square, National Museum of Mongolia, Zaisan Memorial, and Bogd Khan Winter Palace. Experience the best of Ulaanbaatar in just one day.",
      image: "/VISIT_UB/VISIT1.png",
      category: "City Tours",
      upvotes: 143,
      comments: 25,
      timeAgo: "4 days ago",
      tags: ["Ulaanbaatar", "CityTour", "OneDayTrip"],
    },
    {
      id: 7,
      author: "Munkhbat",
      authorAvatar: "/round.png",
      title: "Escape the Summer Heat - Mountain Retreats in Khangai",
      content:
        "Beat the summer heat with our selection of cool, peaceful mountain retreats in the Khangai region. Choose from traditional gers or wooden cabins, all equipped with modern comforts. Perfect summer getaway locations.",
      image: "/ACCOMMODATION/CENTRAL_MONGOLIA5.png",
      category: "Resorts",
      upvotes: 221,
      comments: 38,
      timeAgo: "5 days ago",
      tags: ["Khangai", "Summer", "MountainRetreat"],
    },
    {
      id: 8,
      author: "Altantsetseg",
      authorAvatar: "/round.png",
      title: "Historic Destinations of Mongolia - Kharkhorin & Erdene Zuu",
      content:
        "Journey through Mongolia's rich history and culture. Visit the ancient capital of Kharkhorin, the magnificent Erdene Zuu Monastery, and Khustain Nuruu National Park. Experience the legacy of the Mongol Empire.",
      image: "/DESTINATIONS/DESTINATION1.png",
      category: "History",
      upvotes: 267,
      comments: 52,
      timeAgo: "1 week ago",
      tags: ["History", "Kharkhorin", "Culture"],
    },
  ]);

  const [filter, setFilter] = useState<string>("all");

  const categories = [
    "All",
    "Tours",
    "Hotels",
    "Events",
    "Resorts",
    "City Tours",
    "History",
  ];

  const filteredPosts =
    filter === "all" || filter === "All"
      ? posts
      : posts.filter((post) => post.category === filter);

  const handleUpvote = (postId: number) => {
    setPosts(
      posts.map((post) =>
        post.id === postId ? { ...post, upvotes: post.upvotes + 1 } : post,
      ),
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Commercial
            </h1>
            <p className="text-gray-600">
              Travel business opportunities, offers, and insights in Mongolia
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-6 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  filter === category ||
                  (filter === "all" && category === "All")
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Create Post Button */}
          <div className="mb-6">
            <button className="w-full bg-white border border-gray-300 rounded-lg p-4 text-left text-gray-500 hover:border-gray-400 hover:bg-gray-50 transition-colors duration-200 flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <span>Create a new post...</span>
            </button>
          </div>

          {/* Posts List */}
          <div className="space-y-4">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden border border-gray-200"
              >
                <div className="p-4">
                  {/* Post Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-purple-500">
                      <div className="w-full h-full flex items-center justify-center text-white font-semibold">
                        {post.author[0]}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-gray-900">
                          {post.author}
                        </span>
                        <span className="px-2 py-0.5 bg-blue-100 text-blue-800 text-xs rounded-full font-medium">
                          {post.category}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500">
                        {post.timeAgo}
                      </span>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Post Content */}
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {post.content}
                    </p>
                  </div>

                  {/* Post Image */}
                  {post.image && (
                    <div className="relative w-full h-96 mb-3 rounded-lg overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs text-blue-600 hover:text-blue-800 cursor-pointer font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Post Actions */}
                  <div className="flex items-center gap-4 pt-3 border-t border-gray-100">
                    <button
                      onClick={() => handleUpvote(post.id)}
                      className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 group"
                    >
                      <svg
                        className="w-5 h-5 group-hover:scale-110 transition-transform duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 15l7-7 7 7"
                        />
                      </svg>
                      <span className="font-semibold">{post.upvotes}</span>
                    </button>

                    <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 group">
                      <svg
                        className="w-5 h-5 group-hover:scale-110 transition-transform duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                      <span className="font-semibold">{post.comments}</span>
                    </button>

                    <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 group ml-auto">
                      <svg
                        className="w-5 h-5 group-hover:scale-110 transition-transform duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                        />
                      </svg>
                      <span className="font-semibold">Share</span>
                    </button>

                    <button className="flex items-center gap-2 text-gray-600 hover:text-yellow-500 transition-colors duration-200 group">
                      <svg
                        className="w-5 h-5 group-hover:scale-110 transition-transform duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination or Load More */}
          <div className="mt-8 text-center">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold shadow-md hover:shadow-lg">
              Load More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
