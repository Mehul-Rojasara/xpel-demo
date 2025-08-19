import React from "react";
import Image from "next/image";

interface Article {
  id: number;
  title: string;
  category: string;
  image: string;
}

interface ArticleSectionBoxProps {
  title: string;
  items: Article[];
  theme?: "light" | "dark";
  featuredSide?: "left" | "right";
}

export const ArticleSectionBox: React.FC<ArticleSectionBoxProps> = ({
  title,
  items,
  theme = "light",
  featuredSide = "left",
}) => {
  if (items.length < 4) return null;

  const featuredTall = items[0];
  const splitLarge = items[1];
  const smallA = items[2];
  const smallB = items[3];

  const bg = theme === "dark" ? "bg-black text-white" : "bg-gray-50 text-black";
  const border = theme === "dark" ? "border-gray-800" : "border-gray-200";

  return (
    <section className={`w-full py-12 px-4 lg:px-8 ${bg}`}>
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-2xl font-bold mb-8">{title}</h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Featured Tall Left */}
          {featuredSide === "left" && (
            <article className="relative overflow-hidden rounded-2xl lg:row-span-2 lg:col-span-5">
              <div className="relative w-full h-full">
                <Image
                  src={featuredTall.image}
                  alt={featuredTall.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end">
                <div className="p-6">
                  <span className="text-sm uppercase">{featuredTall.category}</span>
                  <h3 className="text-xl font-semibold">{featuredTall.title}</h3>
                </div>
              </div>
            </article>
          )}

          {/* Center Column (Large + 2 Small) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Split Large */}
            <article className={`rounded-2xl overflow-hidden border ${border} bg-white text-black`}>
              <div className="relative w-full h-56">
                <Image
                  src={splitLarge.image}
                  alt={splitLarge.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <span className="text-sm uppercase">{splitLarge.category}</span>
                <h3 className="text-lg font-semibold">{splitLarge.title}</h3>
              </div>
            </article>

            {/* Two Small */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {[smallA, smallB].map((item) => (
                <article
                  key={item.id}
                  className={`flex overflow-hidden rounded-xl border ${border} bg-white text-black`}
                >
                  <div className="relative w-1/3 h-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 33vw, 25vw"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-xs uppercase">{item.category}</span>
                    <h4 className="text-sm font-semibold">{item.title}</h4>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Featured Tall Right */}
          {featuredSide === "right" && (
            <article className="relative overflow-hidden rounded-2xl lg:row-span-2 lg:col-span-5">
              <div className="relative w-full h-full">
                <Image
                  src={featuredTall.image}
                  alt={featuredTall.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end">
                <div className="p-6">
                  <span className="text-sm uppercase">{featuredTall.category}</span>
                  <h3 className="text-xl font-semibold">{featuredTall.title}</h3>
                </div>
              </div>
            </article>
          )}
        </div>
      </div>
    </section>
  );
};
