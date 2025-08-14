import React from 'react';
import Image from 'next/image';

interface StealthSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  className?: string;
}

export const StealthSection: React.FC<StealthSectionProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  className = ''
}) => {
  return (
    <section 
      className={`py-20 bg-white text-neutral-900 ${className}`}
      role="region"
      aria-label="Stealth paint protection film"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
              {title}
            </h2>
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed max-w-2xl">
              {description}
            </p>
          </div>

          {/* Right Image with Transition Effect */}
          <div className="relative">
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              
              {/* Transition Line Overlay */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Vertical Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-yellow-400 transform -translate-x-1/2"></div>
                
                {/* Horizontal Line */}
                <div className="absolute left-1/2 top-1/2 w-8 h-1 bg-yellow-400 transform -translate-x-1/2 -translate-y-1/2"></div>
                
                {/* Left Side Overlay (Matte Effect) */}
                <div className="absolute left-0 top-0 w-1/2 h-full bg-black bg-opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 