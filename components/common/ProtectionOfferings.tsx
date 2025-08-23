import React from 'react';
import Image from 'next/image';

interface ProtectionService {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly imageAlt: string;
  readonly href: string;
}

interface ProtectionOfferingsProps {
  readonly title: string;
  readonly services: readonly ProtectionService[];
  readonly className?: string;
}

export const ProtectionOfferings: React.FC<ProtectionOfferingsProps> = ({
  title,
  services,
  className = ''
}) => {
  return (
    <section className={`bg-neutral-900 text-white py-20 px-4 sm:px-6 lg:px-8 ${className}`} aria-label="Protection offerings">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-white mb-6 tracking-[-0.01em] leading-[110%]">
            {title}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service) => (
            <button
              key={service.id}
              className="text-center group cursor-pointer"
              onClick={() => window.location.href = service.href}
              aria-label={`Learn more about ${service.title}`}
            >
              {/* Service Image */}
              <div className="mb-8 flex justify-center">
                <div className="w-full aspect-square bg-neutral-700 rounded-lg overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl lg:text-3xl font-display font-medium text-white mb-4 leading-tight tracking-[-0.01em]">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-lg mb-6 opacity-90 leading-relaxed font-sans tracking-[0.01em] leading-[150%] font-[450]">
                {service.description}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProtectionOfferings; 