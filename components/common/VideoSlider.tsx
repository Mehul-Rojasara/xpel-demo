
"use client";
import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { PlayButton } from "../ui/PlayButton";
import { Button } from "../ui/Button";

interface Installer {
  readonly id: string;
  readonly name: string;
  readonly handle: string;
  readonly location: string;
  readonly video: string;
  readonly poster: string;
}

const installers: Installer[] = [
  {
    id: "f1",
    name: "Amir",
    handle: "@Carnucopia",
    location: "Charlotte, NC",
    video: "/videos/sampleVideo.mp4",
    poster: "https://via.placeholder.com/640x360.png?text=Amir+Thumbnail",
  },
  {
    id: "f2",
    name: "Amy Shackleford",
    handle: "@Petrogirl",
    location: "Long Beach, CA",
    video: "/videos/sampleVideo.mp4",
    poster: "https://via.placeholder.com/640x360.png?text=Amy+Thumbnail",
  },
  {
    id: "f3",
    name: "Hunter Evans",
    handle: "@YasMadness",
    location: "Malibu, CA",
    video: "/videos/sampleVideo.mp4",
    poster: "https://via.placeholder.com/640x360.png?text=Hunter+Thumbnail",
  },
  {
    id: "f4",
    name: "Felipe",
    handle: "@JDMlife",
    location: "Huntington Beach, CA",
    video: "/videos/sampleVideo.mp4",
    poster: "https://via.placeholder.com/640x360.png?text=Felipe+Thumbnail",
  },
  {
    id: "f5",
    name: "Kara",
    handle: "@WrapQueen",
    location: "Orlando, FL",
    video: "/videos/sampleVideo.mp4",
    poster: "https://via.placeholder.com/640x360.png?text=Kara+Thumbnail",
  },
];

export const InstallerSpotlights = ({ title = "XPEL Installer Spotlights" }: { title?: string }) => {
  const [progress, setProgress] = useState(0);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  // Pause all videos except the one at indexToSkip
  const pauseAllExcept = (indexToSkip: number | null) => {
    videoRefs.current.forEach((video, index) => {
      if (video && index !== indexToSkip) {
        video.pause();
        video.currentTime = 0; // Reset to beginning
      }
    });
  };

  const handlePlayClick = async (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;

    // If clicking the currently playing video, pause it
    if (playingIndex === index) {
      video.pause();
      setPlayingIndex(null);
      return;
    }

    // Pause all other videos first
    pauseAllExcept(index);

    try {
      // Start muted to comply with autoplay policies
      video.muted = true;
      await video.play();
      setPlayingIndex(index);

      // Attempt to unmute after user interaction
      const handleUserInteraction = () => {
        video.muted = false;
        document.removeEventListener('click', handleUserInteraction);
      };
      document.addEventListener('click', handleUserInteraction);
    } catch (err) {
      console.error("Error playing video:", err);
    }
  };

  // Handle Swiper slide change to pause videos when swiping
  const handleSlideChange = () => {
    if (playingIndex !== null) {
      const video = videoRefs.current[playingIndex];
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
      setPlayingIndex(null);
    }
  };

  // Clean up event listeners
  useEffect(() => {
    return () => {
      const currentVideoRefs = videoRefs.current;
      currentVideoRefs.forEach((video) => {
        if (video) {
          video.pause();
          video.currentTime = 0;
        }
      });
    };
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 relative">
      <h2 className="text-2xl font-semibold mb-6">{title}</h2>

      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView="auto"
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        onProgress={(swiper, prog) => setProgress(prog * 100)}
        onSlideChange={handleSlideChange}
        className="pb-1"
      >
        {installers.map((it, i) => (
          <SwiperSlide
            key={it.id}
            style={{ width: "320px" }}
            className="rounded-2xl overflow-hidden shadow-md bg-gray-50 relative flex-shrink-0"
          >
            <div className="relative w-full h-[220px] bg-black">
              <video
                ref={(el) => {
                  videoRefs.current[i] = el;
                }}
                src={it.video}
                poster={it.poster}
                preload="metadata"
                playsInline
                className="w-full h-full object-cover"
                controls={playingIndex === i}
                onClick={(e) => {
                  // Prevent click event from bubbling up to the play button overlay
                  if (playingIndex === i) e.stopPropagation();
                }}
              >
                <track
                  kind="captions"
                  src=""
                  label="No captions available"
                  srcLang="en"
                  default={false}
                />
                Your browser does not support the video tag.
              </video>

              {/* Play button overlay - only shown when video is not playing */}
              {playingIndex !== i && (
                <PlayButton
                  onClick={() => handlePlayClick(i)}
                  ariaLabel={`Play ${it.name} video`}
                  variant="overlay"
                  size="md"
                />
              )}
            </div>

            <div className="absolute bottom-4 left-4 text-white">
              <p className="font-semibold text-lg leading-none">{it.name}</p>
              <p className="text-sm opacity-90">{it.handle}</p>
              <p className="text-xs mt-1 opacity-80">{it.location}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation arrows */}
      <Button
        onClick={() => {}}
        className="custom-prev absolute left-2 top-1/2 -translate-y-1/2 z-20"
        variant="secondary"
        buttonStyle="filled"
        background="light"
        size="md"
        aria-label="Previous slide"
      >
        <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Button>

      <Button
        onClick={() => {}}
        className="custom-next absolute right-2 top-1/2 -translate-y-1/2 z-20"
        variant="primary"
        buttonStyle="filled"
        background="light"
        size="md"
        aria-label="Next slide"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Button>

      {/* Progress indicator */}
      <div className="flex justify-center mt-5">
        <div className="relative w-[140px] h-1 bg-gray-200 rounded-full">
          <div
            className="absolute top-0 h-1 w-[28px] bg-gray-800 rounded-full transition-all duration-200"
            style={{ left: `${progress}%`, transform: "translateX(-50%)" }}
          />
        </div>
      </div>
    </div>
  );
};
