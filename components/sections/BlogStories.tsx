"use client";
import React, { useState } from "react";
import Image from "next/image";

const tabs = [
  "All Articles",
  "Company Updates",
  "Products",
  "Events & Community",
  "News & Press",
  "Education",
  "Etc",
];

const latestArticles = [
  {
    id: 1,
    category: "Product",
    title: "Ryan Martin’s Fireball Camaro Gets Ready To Go With XPEL Car Care",
    img: "/images/blogPage/stories2.png",
  },
  {
    id: 2,
    category: "Events",
    title:
      "Getting Revved Up For The Firestone Grand Prix Of Monterey With Team Penske, Scott McLaughlin & The No.3 XPEL Chevy",
    img: "/images/blogPage/stories3.png",
  },
  {
    id: 3,
    category: "Product",
    title:
      "5 Ways Architectural Window Films Are Helping Homeowners Beat Record Heatwaves",
    img: "/images/blogPage/stories4.png",
  },
  {
    id: 4,
    category: "Product",
    title:
      "How XPEL Window Film on Windshields Maximizes Interior Comfort and UV Protection",
    img: "/images/blogPage/stories5.png",
  },
];

export const BlogStories: React.FC = () => {
  const [activeTab, setActiveTab] = useState("All Articles");

  return (
    <section className="bg-black text-white py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl font-semibold mb-6 mt-6 text-center">
          Xpel Stories
        </h2>

        {/* Tabs */}
        <nav
          className="flex flex-wrap justify-center gap-6 border-b border-gray-700 pb-4 mb-8"
          aria-label="Article categories"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-sm uppercase tracking-wide pb-2 transition-colors ${
                activeTab === tab
                  ? "border-b-2 border-white text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>

        {/* Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Main Article */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <div className="relative w-full h-80">
                <Image
                  src="/images/blogPage/stories1.png"
                  alt="Main article"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-4">
                <span className="text-xs uppercase bg-white text-black px-2 py-1 rounded">
                  Events
                </span>
                <h3 className="mt-3 text-xl font-semibold">
                  Porsche Panamera 4S Gets ULTIMATE Protection
                </h3>
              </div>
            </div>
          </div>

          {/* Right: Latest Articles */}
          <aside>
            <h4 className="text-lg font-semibold mb-4">The Latest</h4>
            <ul className="space-y-4">
              {latestArticles.map((article) => (
                <li
                  key={article.id}
                  className="flex items-start gap-3 border-b border-gray-700 pb-4"
                >
                  <Image
                    src={article.img}
                    alt={article.title}
                    width={80}
                    height={64}
                    className="w-20 h-16 object-cover rounded"
                  />
                  <div>
                    <span className="text-xs uppercase text-gray-400 block mb-1">
                      {article.category}
                    </span>
                    <p className="text-sm leading-snug hover:underline cursor-pointer">
                      {article.title}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
};
