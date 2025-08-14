"use client";
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

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

export const LatestArticles = () => {
  const [progress, setProgress] = useState(0);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

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
    <section className="bg-black">
      <div className="w-full max-w-6xl mx-auto px-4 py-8 relative">
        {/* Title + View All */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-white">Latest Articles</h2>
          <button className="px-4 py-2 border border-gray-200 text-white bg-black rounded-lg text-sm font-medium hover:bg-white hover:text-black transition-colors">
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
          className="pb-1"
        >
          {installers.map((it) => (
            <SwiperSlide
              key={it.id}
              style={{ width: "320px" }}
              className="rounded-2xl overflow-hidden shadow-md bg-gray-50 relative flex-shrink-0"
            >
              {/* video */}
              <div className="relative w-full h-[220px]">
                <video
                  ref={(el) => {
                    videoRefs.current[it.id] = el;
                  }}
                  src={it.video}
                  poster={it.poster}
                  className="w-full h-full object-cover"
                  controls={activeVideo === it.id}
                  preload="none"
                />

                {/* play button overlay */}
                {activeVideo !== it.id && (
                  <button
                    onClick={() => handlePlay(it.id)}
                    className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition"
                  >
                    <div className="w-14 h-14 rounded-full bg-black/60 flex items-center justify-center">
                      <div
                        style={{
                          width: 0,
                          height: 0,
                          borderTop: "8px solid transparent",
                          borderBottom: "8px solid transparent",
                          borderLeft: "12px solid white",
                          marginLeft: "3px",
                        }}
                      />
                    </div>
                  </button>
                )}

                {/* bottom gradient */}
                <div className="absolute left-0 right-0 bottom-0 h-20 bg-gradient-to-t from-black/70 to-transparent" />
              </div>

              {/* text */}
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-semibold text-lg leading-none">{it.name}</p>
                <p className="text-sm opacity-90">{it.handle}</p>
                <p className="text-xs mt-1 opacity-80">{it.location}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Left arrow */}
        <button
          aria-label="previous"
          className="custom-prev absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center z-20"
          style={{ boxShadow: "0 6px 18px rgba(18,18,18,0.08)" }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M15 6L9 12L15 18" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Right arrow */}
        <button
          aria-label="next"
          className="custom-next absolute right-2 top-1/2 -translate-y-1/2 bg-yellow-400 shadow-lg rounded-full w-10 h-10 flex items-center justify-center z-20"
          style={{ boxShadow: "0 6px 18px rgba(18,18,18,0.08)" }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M9 6L15 12L9 18" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Progress pill */}
        <div className="flex justify-center mt-5">
          <div className="relative w-[140px] h-1 bg-gray-800 rounded-full">
            <div
              className="absolute top-0 h-1 w-[28px] bg-gray-200 rounded-full transition-all duration-200"
              style={{ left: `${progress}%`, transform: "translateX(-50%)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
