"use client";
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Container from '@/components/ui/Container';

interface Installer {
  id: string;
  name: string;
  handle: string;
  location: string;
  video: string;
  poster: string;
}

const installers: Installer[] = [
  {
    id: "1",
    name: "Bike Protection 101",
    handle: "@Carnucopia",
    location: "Charlotte, NC",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    poster: "https://via.placeholder.com/640x400?text=Video+1",
  },
  {
    id: "2",
    name: "Fedral tax credit on window film benifits residental homeowners ",
    handle: "@Petrogirl",
    location: "Long Beach, CA",
    video: "https://www.w3schools.com/html/movie.mp4",
    poster: "https://via.placeholder.com/640x400?text=Video+2",
  },
  {
    id: "3",
    name: "Hunter Evans",
    handle: "@YasMadness",
    location: "Malibu, CA",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    poster: "https://via.placeholder.com/640x400?text=Video+3",
  },
  {
    id: "4",
    name: "Felipe",
    handle: "@JDMlife",
    location: "Huntington Beach, CA",
    video: "https://www.w3schools.com/html/movie.mp4",
    poster: "https://via.placeholder.com/640x400?text=Video+4",
  },
];

export const LatestArticles = ({ title = "Latest Articles", className }: { title?: string, className?: string }) => {
  const [progress, setProgress] = useState(0);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});
  const videoControls = "icon-Play"; // Please update the video controls icon when video is playing "icon-Pause";

  const handlePlay = (id: string) => {
    // Pause other videos
    Object.keys(videoRefs.current).forEach((key) => {
      if (key !== id && videoRefs.current[key]) {
        videoRefs.current[key]!.pause();
      }
    });

    // Play selected video
    if (videoRefs.current[id]) {
      videoRefs.current[id]!.play();
      setActiveVideo(id);
    }
  };

  return (
    <section className={`py-16 sm:py-20 lg:py-[7.5rem] overflow-hidden ${className}`}>
      <Container className="relative">
        {/* Title + View All */}
        <div className="flex items-start lg:items-center justify-between mb-6 lg:mb-12 flex-wrap gap-6">
          <h2 className="font-h2 font-sans font-semibold">{title}</h2>
          <button className="btn btn-secondary-outline btn-min-width">
            View All
          </button>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView="auto"
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          onProgress={(swiper, progress) => {
            setProgress(progress * 100);
          }}
          className="pb-1 !overflow-visible"
        >
          {installers.map((it) => (
            <SwiperSlide
              key={it.id}
              style={{ width: "288px" }}
              className="rounded-2xl overflow-hidden shadow-md bg-gray-50 relative flex-shrink-0 group !w-[18rem] lg:!w-[28.625rem]"
            >
              {/* video */}
              <div className="relative w-full h-[20rem] lg:h-[35.75rem] min-h-[23.125rem] lg:min-h-[35.75rem]">
                <span className="text-sm leading-[0.688rem] uppercase py-[0.406rem] px-[0.449rem] rounded-sm bg-white text-neutral-900 tracking-widest font-bold text-center absolute top-6 lg:top-8 left-6 lg:left-8 z-20">Category</span>
                <span className={`cursor-pointer absolute top-3 right-3 lg:top-4 lg:right-4 w-7 h-7 lg:w-10 lg:h-10 text-xs lg:text-base flex items-center justify-center text-white border border-solid border-white/40 backdrop-blur-md bg-black/20 rounded-full pl-0.5 z-20 ${videoControls}`}></span>
                <video
                  ref={(el) => {
                    videoRefs.current[it.id] = el;
                  }}
                  src={it.video}
                  poster={it.poster}
                  className="w-full h-full object-cover"
                  controls={activeVideo === it.id}
                  preload="none"
                  aria-hidden="true"
                />

                {/* play button overlay */}
                {activeVideo !== it.id && (
                  <button
                    onClick={() => handlePlay(it.id)}
                    className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition z-10"
                  >
                  </button>
                )}

                {/* bottom gradient */}
                <div className="absolute left-0 right-0 bottom-0 top-0 h-full bg-gradient-to-t from-black/50 via-black/[0.03] to-transparent" />
              </div>

              {/* text */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transition-all duration-300 ease-in-out z-20">
                <h3 className="font-semibold font-h3 leading-none font-sans transition-all duration-300 ease-in-out transform translate-y-0 group-hover:-translate-y-4">Federal Tax Credit on Window Film Benefits Residential Homeowners</h3>
                <div className="opacity-0 max-h-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:max-h-fit group-hover:opacity-100">
                  <p className="para-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit sedas eiusmod tempor incididunt dolore lorem ipsum dolores amet.</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Left arrow */}
        <button
          aria-label="previous"
          className="custom-prev absolute left-2 top-1/2 mt-4 bg-yellow-400 shadow-[0_6px_18px_rgba(18,18,18,0.08)] rounded-full w-8 h-8 lg:w-12 lg:h-12 flex items-center justify-center z-20"
        >
          <span className="icon-Arrow-Left"></span>
        </button>

        {/* Right arrow */}
        <button
          aria-label="next"
          className="custom-next absolute right-2 top-1/2 mt-4 bg-yellow-400 shadow-[0_6px_18px_rgba(18,18,18,0.08)] rounded-full w-8 h-8 lg:w-12 lg:h-12 flex items-center justify-center z-20"
        >
          <span className="icon-Arrow-Right"></span>
        </button>

        {/* Progress pill */}
        <div className="flex justify-center mt-5">
          <div className="relative w-[8.75rem] h-1 bg-gray-800 rounded-full">
            <div
              className="absolute top-0 h-1 w-[1.75rem] bg-gray-200 rounded-full transition-all duration-200"
              style={{ left: `${progress}%`, transform: "translateX(-50%)" }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
