import React from "react";
import Image from "next/image";
import Container from '@/components/ui/Container';
import Link from "next/link";

interface Article {
  readonly id: number;
  readonly title: string;
  readonly category: string;
  readonly image: string;
}

interface ArticleSectionBoxProps {
  readonly title: string;
  readonly items: readonly Article[];
  readonly theme?: "light" | "dark";
  readonly featuredSide?: "left" | "right";
  readonly className?: string;
}

export const ArticleSectionBox: React.FC<ArticleSectionBoxProps> = ({
  title,
  items,
  theme = "light",
  featuredSide = "left",
  className,
}) => {
  if (items.length < 4) return null;

  const featuredTall = items[0];
  const splitLarge = items[1];
  const smallA = items[2];
  const smallB = items[3];

  const bg = theme === "dark" ? "bg-black text-white" : "bg-white text-black";
  const border = theme === "dark" ? "border-gray-800" : "border-neutral-900";
  const btnTheme = theme === "dark" ? "btn-secondary" : "btn-secondary-outline";
  const textTheme = theme === "dark" ? "text-white" : "text-black";
  const videoControls = "icon-Play"; // Please update the video controls icon when video is playing "icon-Pause";

  return (
    <section className={`w-full ${bg} ${className}`}>
      <Container>
        <div className="flex items-start lg:items-center justify-between mb-6 lg:mb-12 flex-wrap gap-6">
          <h2 className="font-h2 font-sans font-semibold">{title}</h2>
          <button className={`btn btn-min-width ${btnTheme}`}>
            View All
          </button>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-6 xl:gap-8">
          {/* Featured Tall Left */}
          {featuredSide === "left" && (
            <article className="relative overflow-hidden rounded-2xl lg:row-span-2 lg:col-span-4 max-h-[35.938rem] group/tall-card">
              <div className="relative w-full h-[calc(100vw--34px)] lg:h-full group/tall-card overflow-hidden rounded-2xl">
                <span className="text-sm uppercase py-1.5 px-2 rounded-sm bg-white text-neutral-900 tracking-widest font-bold text-center z-20 absolute top-6 lg:top-8 left-6 lg:left-8">{featuredTall.category}</span>
                <span className={`cursor-pointer absolute top-3 right-3 lg:top-4 lg:right-4 w-7 h-7 lg:w-10 lg:h-10 text-xs lg:text-base flex items-center justify-center text-white border border-solid border-white/40 backdrop-blur-md bg-black/20 rounded-full pl-0.5 z-20 ${videoControls}`}></span>
                <Image
                  src={featuredTall.image}
                  alt={featuredTall.title}
                  fill
                  className="object-cover group-hover/tall-card:scale-105 transition-all duration-300"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transition-all duration-300 ease-in-out z-20 bg-gradient-to-t from-black/70 via-black/40 to-transparent group-hover/tall-card:via-black/80 group-hover/tall-card:from-black/80">
                <h3 className="font-semibold font-h3 leading-none font-sans transition-all duration-300 ease-in-out transform translate-y-0 group-hover/tall-card:-translate-y-4">{featuredTall.title}</h3>
                <div className="opacity-0 max-h-0 overflow-hidden transition-all duration-300 ease-in-out group-hover/tall-card:max-h-fit group-hover/tall-card:opacity-100">
                  <p className="para-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit sedas eiusmod tempor incididunt dolore lorem ipsum dolores amet.</p>
                </div>
              </div>
              <Link href={`/article/${featuredTall.id}`} className="absolute inset-0"></Link>
            </article>
          )}

          {/* Center Column (Large + 2 Small) */}
          <div className="lg:col-span-8 flex flex-col gap-4 xl:gap-6">
            {/* Split Large */}
            <article className={`relative rounded-2xl overflow-hidden border ${border} bg-neutral-900 text-black flex flex-col lg:flex-row p-3 pb-4 lg:p-6 lg:pr-0 gap-6 lg:gap-4 group/split-card`}>
              <div className="relative w-full lg:max-w-[28.875rem] h-[calc(100vw-10.813rem)] lg:h-[20.75rem] overflow-hidden">
                <Image
                  src={splitLarge.image}
                  alt={splitLarge.title}
                  fill
                  className="object-cover group-hover/split-card:scale-105 transition-all duration-300"
                  sizes="(min-width: 640px) 50vw, (min-width: 1024px) 40vw, 100vw"
                />
              </div>
              <div className="flex justify-center items-center text-center text-white w-full">
                <div className="lg:max-w-[21rem] flex flex-col justify-center items-center gap-3">
                  <span className="text-sm uppercase py-1.5 px-2 rounded-sm bg-white text-neutral-900 tracking-widest font-bold text-center">{splitLarge.category}</span>
                  <h3 className="font-h3 font-semibold font-sans">{splitLarge.title}</h3>
                </div>
              </div>
              <Link href={`/article/${featuredTall.id}`} className="absolute inset-0"></Link>
            </article>

            {/* Two Small */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {[smallA, smallB].map((item) => (
                <article
                  key={item.id}
                  className={`relative flex gap-4 xl:gap-6 overflow-hidden py-4 lg:p-4 xl:p-6 lg:first:pl-0 lg:last:pr-0 border ${border} border-r-0 border-x-0 first:border-b-0 lg:first:border-b lg:border-r lg:last:border-r-0 first:border-l-0 text-black group/small-card`}
                >
                  <div className="relative w-[5rem] xl:w-[7.5rem] h-[5rem] xl:h-[7.5rem] rounded-[0.875rem] overflow-hidden">
                    <span className={`absolute top-1.5 xl:top-3 right-1.5 xl:right-3 w-7 h-7 icon-Play text-xs flex items-center justify-center text-white border border-solid border-white/40 backdrop-blur-md bg-black/20 rounded-full pl-1 z-10 ${videoControls}`}></span>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover/small-card:scale-105 transition-all duration-300"
                      sizes="(min-width: 640px) 25vw, 33vw"
                    />
                  </div>
                  <div className={`max-w-[calc(100%-100px)] xl:max-w-[calc(100%-144px)] ${textTheme}`}>
                    <span className="inline-flex mb-3 text-sm uppercase py-1 px-2 rounded-sm bg-neutral-200 text-neutral-900 tracking-widest font-bold text-center">{item.category}</span>
                    <h4 className="para-medium font-medium font-sans leading-normal line-clamp-4">{item.title}</h4>
                  </div>
                  <Link href={`/article/${featuredTall.id}`} className="absolute inset-0"></Link>
                </article>
              ))}
            </div>
          </div>

          {/* Featured Tall Right */}
          {featuredSide === "right" && (
            <article className="relative overflow-hidden rounded-2xl lg:row-span-2 lg:col-span-4 max-h-[35.938rem] group/full-card">
              <div className="relative w-full h-[calc(100vw--34px)] lg:h-full group/tall-card overflow-hidden rounded-2xl">
                <span className="text-sm uppercase py-1.5 px-2 rounded-sm bg-white text-neutral-900 tracking-widest font-bold text-center z-20 absolute top-6 lg:top-8 left-6 lg:left-8">{featuredTall.category}</span>
                <span className={`cursor-pointer absolute top-3 right-3 lg:top-4 lg:right-4 w-7 h-7 lg:w-10 lg:h-10 text-xs lg:text-base flex items-center justify-center text-white border border-solid border-white/40 backdrop-blur-md bg-black/20 rounded-full pl-0.5 z-20 ${videoControls}`}></span>
                <Image
                  src={featuredTall.image}
                  alt={featuredTall.title}
                  fill
                  className="object-cover object-center group-hover/full-card:scale-105 transition-all duration-300"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end">
                <div className="p-6 lg:p-8">
                  <h3 className="font-h3 font-semibold text-white">{featuredTall.title}</h3>
                </div>
              </div> */}

              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transition-all duration-300 ease-in-out z-20 bg-gradient-to-t from-black/70 via-black/40 to-transparent group-hover/full-card:via-black/80 group-hover/full-card:from-black/80">
                <h3 className="font-semibold font-h3 leading-none font-sans transition-all duration-300 ease-in-out transform translate-y-0 group-hover/full-card:-translate-y-4">{featuredTall.title}</h3>
                <div className="opacity-0 max-h-0 overflow-hidden transition-all duration-300 ease-in-out group-hover/full-card:max-h-fit group-hover/full-card:opacity-100">
                  <p className="para-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit sedas eiusmod tempor incididunt dolore lorem ipsum dolores amet.</p>
                </div>
              </div>
              {/* <Link href={`/article/${featuredTall.id}`} className="absolute inset-0"></Link> */}
            </article>
          )}
        </div>
      </Container>
    </section>
  );
};
