import React from "react";
import Image from "next/image";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

interface SocialGalleryProps {
  heading: string;
  images: GalleryImage[]; 
  followHref?: string;
}

export const SocialGallery: React.FC<SocialGalleryProps> = ({
  heading,
  images,
  followHref = "#",
}) => {
  const left = images[0];
  const right = images.slice(1, 7); 

  return (
    <section className="w-full bg-white py-12 px-4">
      <div className="mx-auto max-w-6xl">
        {/* Top bar */}
        <div className="mb-8 flex flex-col items-start justify-between md:flex-row md:items-center">
          <h2 className="text-3xl text-black">{heading}</h2>

          <a
            href={followHref}
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 md:mt-0"
          >
            <span className="text-xs text-gray-500">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm5.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0z" />
              </svg>
            </span>
            Follow Us
          </a>
        </div>

        {/* Gallery: left single + right 3x2 */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-[minmax(0,440px)_1fr] md:gap-4">
          {/* Left column (single hero image) */}
          <div className="relative w-full overflow-hidden rounded-xl md:min-h-[520px]">
            {left ? (
              <Image src={left?.src} alt={left?.alt} fill className="object-cover" priority />
            ) : (
              <div className="h-64 w-full rounded-xl bg-gray-100" />
            )}
          </div>

          {/* Right grid: 3 columns × 2 rows */}
          <div className="grid grid-cols-3 gap-3 md:gap-4">
            {right?.map((img) => (
              <div key={img?.id} className="relative aspect-square overflow-hidden rounded-xl">
                <Image src={img?.src} alt={img?.alt} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
