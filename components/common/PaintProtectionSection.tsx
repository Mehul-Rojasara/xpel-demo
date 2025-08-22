"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";

interface PaintProtectionSectionProps {
  readonly subHeading: string;
  readonly headline: string;
  readonly description: string;
  readonly images: {
    readonly topLeft: {
      readonly src: string;
      readonly alt: string;
    };
    readonly topRight: {
      readonly src: string;
      readonly alt: string;
    };
    readonly bottom: {
      readonly src: string;
      readonly alt: string;
      readonly isVideo?: boolean;
    };
  };
  readonly className?: string;
}

export const PaintProtectionSection: React.FC<PaintProtectionSectionProps> = ({
  subHeading,
  headline,
  description,
  images,
  className = "",
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const handlePlayPause = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };
  return (
    <section
      className={`py-16 sm:py-20 bg-white text-neutral-900 ${className}`}
      aria-label="Paint Protection Film"
    >
      <Container>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 xl:gap-20 items-center">
          {/* Left Content - Text - Centered vertically */}
          <div className="order-2 lg:order-1 lg:max-w-[31rem]">
            {/* Sub-heading */}
            <p className="subtitle-large text-neutral-900 mb-4">{subHeading}</p>

            {/* Main headline */}
            <h1 className="font-h1 text-neutral-900 mb-6">{headline}</h1>

            {/* Description */}
            <p className="para-medium text-neutral-700">{description}</p>
          </div>

          {/* Right Content - Image Grid */}
          <div className="relative w-full order-1 lg:order-2">
            {/* Image Container with responsive padding */}
            <div className="w-full">
              <div className="grid grid-cols-2 gap-4 md:gap-5 lg:gap-8 w-full">
                {/* Top Left Image */}
                <div className="relative aspect-square  w-full rounded-[0.5rem_0.5rem_0_0] overflow-hidden">
                  <Image
                    src={images.topLeft.src}
                    alt={images.topLeft.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 416px"
                  />
                </div>

                {/* Top Right Image */}
                <div className="relative aspect-square w-full rounded-[0.5rem_0.5rem_0_0] overflow-hidden">
                  <Image
                    src={images.topRight.src}
                    alt={images.topRight.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 33vw, 416px"
                  />
                </div>

                {/* Bottom Image/Video - Spans full width */}
                <div className="relative col-span-2 w-full aspect-[2/1] rounded-[0_0_0.5rem_0.5rem] overflow-hidden">
                  {images.bottom.isVideo ? (
                    <>
                      <video
                        ref={videoRef}
                        src={images.bottom.src}
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                      <div className="absolute inset-0 bg-black opacity-20 z-10"></div>
                      <button
                        type="button"
                        onClick={handlePlayPause}
                        className="absolute bottom-6 right-6 border border-solid border-[rgba(255,255,255,.25)] bg-[#212d4259] backdrop-blur-[.5625rem] text-white rounded-full hover:opacity-90 focus:outline-none transition-all duration-400 w-10 h-10 flex items-center justify-center z-20"
                      >
                        <i className={`${isPlaying ? "ml-px icon-Pause" : "ml-[0.188rem] icon-Play"} text-xs`}></i>
                      </button>
                    </>
                  ) : (
                    <Image
                      src={images.bottom.src}
                      alt={images.bottom.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 832px"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
