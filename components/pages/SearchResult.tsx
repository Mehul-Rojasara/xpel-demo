"use client";

import { serviceBlocks } from "@/config";
import React, { useState } from "react";
import { ServiceBlocks } from "@/components/common";
import Image from "next/image";

interface SearchResultProps {
  readonly country: string;
  readonly language: string;
}

interface ResultItem {
  id: number;
  category: string;
  title: string;
  description: string;
  url: string;
  image: string;
}

const mockResults: ResultItem[] = [
  {
    id: 1,
    category: "GENERAL",
    title: "Ceramic Coating",
    description:
      "Next-level layers. Get unrivaled protection and sleek sight-lines with XPEL’s ceramic coatings that ensure longevity, resistance to the elements, and flawless finishes.",
    url: "/products/category/ceramic-coating",
    image: "/images/ceramic-1.jpg",
  },
  {
    id: 2,
    category: "GENERAL",
    title: "Marine Ceramic Coating",
    description:
      "Seriously seaworthy. FUSION PLUS is your ultimate defense against tough marine conditions, handling heat, friction, and solvents like a champ.",
    url: "/products/marine-ceramic-coating",
    image: "/images/ceramic-2.jpg",
  },
  {
    id: 3,
    category: "GENERAL",
    title: "Automotive Ceramic Coating",
    description:
      "Bring out the best in your ride. FUSION PLUS enhances your car’s color and makes cleaning a total breeze thanks to its hydrophobic properties.",
    url: "/products/automotive-ceramic-coating",
    image: "/images/ceramic-3.jpg",
  },
  {
    id: 4,
    category: "GENERAL",
    title: "Aircraft Ceramic Coating",
    description:
      "Elevate your protection. FUSION PLUS for aircraft gives you an extra layer of defense for sky-high performance.",
    url: "/products/aircraft-ceramic-coating",
    image: "/images/ceramic-4.jpg",
  },
];

export const SearchResult: React.FC<SearchResultProps> = () => {
  const [query, setQuery] = useState("coating");
  const results = mockResults; // replace with API later

  return (
    <section className="mt-20">
      <div className="w-full min-h-screen bg-white">
        {/* Heading */}
        <h1 className="text-center text-2xl font-bold py-6">Search Results</h1>

        {/* Search Bar */}
        <div className="flex justify-center">
          <div className="flex items-center border border-gray-300 rounded-md w-full max-w-2xl px-3 py-1.5">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 p-3 text-base outline-none"
              placeholder="Search..."
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="px-3 text-gray-500 hover:text-black text-lg"
              >
                ✕
              </button>
            )}
            <button className="px-3 text-gray-500 hover:text-black text-lg">
              🔍
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mt-8">
          <button className="text-sm font-semibold border-b-2 border-black pb-1">
            CONTENT
          </button>
        </div>

        {/* Results */}
        <div className="mt-12 px-6 max-w-5xl mx-auto">
          <p className="text-base text-gray-600 mb-6">
            {results.length} Results for{" "}
            <span className="font-semibold">{query}</span>
          </p>

          <div className="space-y-8">
            {results.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-start border-b pb-6 gap-4"
              >
                {/* Left content */}
                <div className="flex-1">
                  <p className="text-xs uppercase text-gray-500 mb-1">
                    {item.category}
                  </p>
                  <h3 className="text-lg font-semibold mb-2 hover:underline cursor-pointer">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {item.description}
                  </p>
                  <p className="text-sm text-gray-400">{item.url}</p>
                </div>

                {/* Right thumbnail */}
                <div className="w-full md:w-40 h-28 relative shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service blocks */}
      <ServiceBlocks
        services={serviceBlocks}
        background="dark"
        columns={3}
        spacing="lg"
        className="section-spacing-y"
      />
    </section>
  );
};
