"use client";
import React from "react";

interface ProductHighlightCardProps {
  readonly className?: string;
  readonly videoClass?: string;
}

const VideoLarge: React.FC<ProductHighlightCardProps> = ({ className = "", videoClass = "" }) => {
  return (
    <div className={`relative w-full mx-auto overflow-hidden ${className}`}>
      <video
        className={`w-full h-full object-cover ${videoClass}`}
        height={810}
        width={1440}
        src="/videos/Mclaren PPF.mp4" // Replace with your video file path
        muted
        playsInline
      />
      <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[rgba(33,45,66,0.35)] backdrop-blur-[18px] rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-300">
        <i className="icon-Play text-white"></i>
      </button>
    </div>
  );
};

export default VideoLarge;
