"use client";
import React, { useState } from "react";
import Image from "next/image";
import Container from '@/components/ui/Container';

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
    <section className="bg-black text-white pt-[5.625rem] pb-12 lg:pt-[8.875rem] lg:pb-[6.5rem]">
      <Container>
        {/* Heading */}
        <h1 className="font-h2 font-semibold mb-6 mt-0 text-center">
          Xpel Stories
        </h1>

        {/* Tabs */}
        <nav
          className="flex justify-start lg:justify-center gap-0 border-b border-gray-700 mb-6 md:mb-12 xl:mb-16 space-x-0 overflow-x-auto"
          aria-label="Article categories"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-4 lg:px-6 py-4 pb-[0.875rem] lg:pb-6 text-[1rem] uppercase flex-shrink-0 leading-tight font-bold font-display tracking-wider transition-all duration-300 border-b-2 border-solid border-t-0 border-l-0 border-r-0 border-b-transparent ${
                activeTab === tab
                  ? "border-b-white text-white"
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
            <div className="lg:rounded-2xl overflow-hidden shadow-lg relative group/main-article -mx-6 lg:-mx-0">
              <div className="relative w-full h-[calc(100vw-0.938rem)] lg:h-[calc(100vw-0.938rem)] max-h-[calc(100vw-0.938rem)] lg:max-h-[44.813rem] xl:min-h-[44.813rem]">
                <Image
                  src="/images/blogPage/stories1.png"
                  alt="Main article"
                  fill
                  className="object-cover object-center scale-100 group-hover/main-article:scale-105 transition-all duration-300 ease-in-out"
                  priority
                />
              </div>
              {/* <div className="p-4 lg:p-8 z-10 absolute left-0 right-0 bottom-0 top-0 h-full flex flex-col justify-end items-start bg-gradient-to-t to-transparent via-black/30 from-black/50">
                <div>
                  <span className="text-sm leading-[0.688rem] uppercase py-[0.281rem] px-[0.461rem] rounded-sm bg-white text-neutral-900 tracking-widest font-bold text-center">
                    Events
                  </span>
                  <h3 className="font-h3 font-semibold pt-[0.875rem]">
                    Porsche Panamera 4S Gets ULTIMATE Protection
                  </h3>
                </div>
              </div> */}

              <div className="absolute left-0 right-0 bottom-0 top-0 h-full flex flex-col justify-end items-start p-4 text-white transition-all duration-300 ease-in-out z-20 bg-gradient-to-t to-transparent via-black/30 from-black/50">
                <div>
                  <span className="inline-block mb-2 text-sm leading-[0.688rem] uppercase py-[0.281rem] px-[0.461rem] rounded-sm bg-white text-neutral-900 tracking-widest font-bold text-center duration-300 ease-in-out transform translate-y-0 group-hover/main-article:-translate-y-2">
                    Events
                  </span>
                  <h3 className="font-semibold font-h3 leading-none font-sans transition-all duration-300 ease-in-out transform translate-y-0 group-hover/main-article:-translate-y-2">Federal Tax Credit on Window Film Benefits Residential Homeowners</h3>
                  <div className="opacity-0 max-h-0 overflow-hidden transition-all duration-300 ease-in-out group-hover/main-article:max-h-fit group-hover/main-article:opacity-100">
                    <p className="para-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit sedas eiusmod tempor incididunt dolore lorem ipsum dolores amet.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Latest Articles */}
          <aside>
            <h4 className="text-[1rem] font-semibold mb-4 lg:mb-[1.375rem] uppercase">The Latest</h4>
            <ul className="">
              {latestArticles.map((article) => (
                <li
                  key={article.id}
                  className="flex items-start gap-3 lg:gap-6 border-b border-white first:border-t py-4 lg:py-6 group/article-item"
                >
                  <div className="w-[5rem] h-[5rem] lg:w-[7.5rem] lg:h-[7.5rem] min-w-[5rem] min-h-[5rem] lg:min-w-[7.5rem] lg:min-h-[7.5rem] rounded-[0.875rem] overflow-hidden relative">
                    <span className={`absolute top-2 right-2 w-7 h-7 icon-Play text-xs flex items-center justify-center text-white border border-solid border-white/40 backdrop-blur-md bg-black/20 rounded-full pl-1 z-10`}></span>
                    <Image
                      src={article.img}
                      alt={article.title}
                      fill
                      className="w-full h-full object-cover object-center scale-100 group-hover/article-item:scale-105 transition-all duration-300 ease-in-out"
                    />
                  </div>
                  <div>
                    {/* <span className="text-xs uppercase text-gray-400 block mb-1">
                      {article.category}
                    </span> */}
                    <span className="inline-block text-sm uppercase py-1.5 px-2 rounded-sm bg-neutral-800 text-white tracking-widest font-bold text-center mb-3">{article.category}</span>
                    <p className="font-display font-semibold text-lg hover:underline cursor-pointer lg:line-clamp-4 leading-normal">
                      {article.title}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Container>
    </section>
  );
};
