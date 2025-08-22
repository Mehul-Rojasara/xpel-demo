"use client";
import React, { useRef, useState } from "react";

interface VideoContentProps {
  readonly videoUrl: string; // mp4 or webm link
  readonly subtitle: string;
  readonly title: string;
  readonly description: string;
}

export const VideoContent: React.FC<VideoContentProps> = ({
  videoUrl,
  subtitle,
  title,
  description,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left: Video Player */}
        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-md">
          <video
            ref={videoRef}
            src={videoUrl}
            className="w-full h-full object-cover rounded-xl"
            controls={isPlaying} // show controls only after play
          />

          {!isPlaying && (
            <button
              onClick={handlePlay}
              className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-lg">
                {/* Simple Play Icon SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="black"
                  className="w-8 h-8 ml-1"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
          )}
        </div>

        {/* Right: Text content */}
        <div>
          <p className="uppercase text-sm font-semibold tracking-wide text-gray-600 mb-2">
            {subtitle}
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};
