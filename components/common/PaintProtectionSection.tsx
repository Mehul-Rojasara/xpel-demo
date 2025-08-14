import React from 'react';
import Image from 'next/image';
import Container from '@/components/ui/Container';

interface PaintProtectionSectionProps {
  subHeading: string;
  headline: string;
  description: string;
  images: {
    topLeft: {
      src: string;
      alt: string;
    };
    topRight: {
      src: string;
      alt: string;
    };
    bottom: {
      src: string;
      alt: string;
      isVideo?: boolean;
    };
  };
  className?: string;
}

export const PaintProtectionSection: React.FC<PaintProtectionSectionProps> = ({
  subHeading,
  headline,
  description,
  images,
  className = ''
}) => {
  return (
    <section 
      className={`py-16 sm:py-20 bg-white text-neutral-900 ${className}`}
      role="region"
      aria-label="Paint Protection Film"
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content - Text - Centered vertically */}
          <div className="space-y-6 sm:space-y-8">
            {/* Sub-heading */}
            <p className="subtitle-small text-neutral-600">
              {subHeading}
            </p>
            
            {/* Main headline */}
            <h1 className="font-h1 text-neutral-900">
              {headline}
            </h1>
            
            {/* Description */}
            <p className="para-medium text-neutral-700 max-w-2xl">
              {description}
            </p>
          </div>

          {/* Right Content - Image Grid */}
          <div className="relative w-full">
            {/* Image Container with responsive padding */}
            <div className="w-full p-4 sm:p-6">
              <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full">
                {/* Top Left Image */}
                <div className="relative aspect-square w-full rounded-md overflow-hidden">
                  <Image
                    src={images.topLeft.src}
                    alt={images.topLeft.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 416px"
                  />
                </div>
                
                {/* Top Right Image */}
                <div className="relative aspect-square w-full rounded-md overflow-hidden">
                  <Image
                    src={images.topRight.src}
                    alt={images.topRight.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 33vw, 416px"
                  />
                </div>
                
                {/* Bottom Image/Video - Spans full width */}
                <div className="relative col-span-2 w-full aspect-[2/1] rounded-md overflow-hidden">
                  {images.bottom.isVideo ? (
                    <div className="relative w-full h-full group">
                      <video
                        src={images.bottom.src}
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    </div>
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