import React from "react";
import Image from "next/image";

interface ContentImageGridProps {
  subtitle: string;
  title: string;
  description: string;
  images: string[];
}

export const ContentImageGrid: React.FC<ContentImageGridProps> = ({
  subtitle,
  title,
  description,
  images,
}) => {
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left: Text content */}
        <div>
          <p className="uppercase text-sm font-semibold tracking-wide text-gray-600 mb-3">
            {subtitle}
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4 leading-snug">
            {title}
          </h2>
          <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Right: Image grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* Top left */}
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
            <Image
              src={images[0]}
              alt="Protection 1"
              fill
              className="object-cover"
            />
          </div>

          {/* Top right */}
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
            <Image
              src={images[1]}
              alt="Protection 2"
              fill
              className="object-cover"
            />
          </div>

          {/* Bottom full-width */}
          <div className="relative col-span-2 w-full aspect-[16/9] rounded-xl overflow-hidden">
            <Image
              src={images[2]}
              alt="Protection 3"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
