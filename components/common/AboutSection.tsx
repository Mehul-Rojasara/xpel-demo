import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";

interface AboutSectionProps {
  title: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
  className?: string;
  background?: 'white' | 'light' | 'dark';
  customBackgroundColor?: string;
  textAlignment?: 'left' | 'center';
  image?: string;
  imageAlt?: string;
  reverseLayout?: boolean;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  title,
  description,
  ctaText = "Learn More",
  ctaHref,
  className = '',
  background = 'white',
  customBackgroundColor,
  textAlignment = 'left',
  image,
  imageAlt,
  reverseLayout = false,
}) => {
  const backgroundClasses = {
    white: "bg-white text-neutral-900",
    light: "bg-neutral-100 text-neutral-900",
    dark: "bg-neutral-900 text-white",
  };


  const contentOrder = reverseLayout ? "lg:order-2" : "lg:order-1";
  const imageOrder = reverseLayout ? "lg:order-1" : "lg:order-2";

  // Use custom background color if provided, otherwise use predefined classes
  const backgroundStyle = customBackgroundColor 
    ? { backgroundColor: customBackgroundColor, color: '#ffffff' }
    : {};

  const sectionClasses = customBackgroundColor 
    ? `py-16 sm:py-20 lg:py-[7.5rem] ${className}`
    : `py-16 sm:py-20 lg:py-[7.5rem] ${backgroundClasses[background]} ${className}`;

  return (
    <section
      className={`${className}`}
      role="region"
      style={backgroundStyle}
      aria-label="About section"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-start">
          {/* Left Column - Title */}
          <div className={`${contentOrder}  lg:text-left`}>
            <h2
              className="font-h2 font-display font-medium text-neutral-900 leading-[110%] tracking-[-0.01em] mb-0"
              id="about-title"
            >
              {title}
            </h2>
          </div>

          {/* Right Column - Description and CTA */}
          <div className={`${imageOrder} text-center lg:text-left`}>
            <div className={`text-center lg:text-left lg:max-w-[35rem]`}>
              <p className={`para-large mb-6 sm:mb-8 leading-[150%] font-sans tracking-[0.01em] font-[450] ${customBackgroundColor ? 'text-white' : 'text-neutral-900'}`}>
                {description}
              </p>
              
              {(ctaText && ctaHref) && (
                <div className={textAlignment === 'center' ? 'text-center' : ''}>
                  <Link
                    href={ctaHref}
                    aria-label={`${ctaText} - ${title}`}
                    className={`inline-flex items-center justify-center px-4 sm:px-6 py-3 sm:py-4 font-display font-medium text-base sm:text-lg border-2 transition-all duration-300 rounded-[6.25rem] min-w-[10rem] sm:min-w-[12.5rem] h-[3rem] sm:h-[3.5rem] shadow-sm hover:shadow-md ${
                      customBackgroundColor 
                        ? ' text-white border-white hover:bg-neutral-900 hover:text-white hover:border-neutral-900'
                        : ' text-neutral-900 border-neutral-900 hover:bg-neutral-900 hover:text-white'
                    }`}
                  >
                    {ctaText}
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Image Column (Optional) */}
          {image && (
            <div
              className={`${imageOrder} flex justify-center lg:justify-${reverseLayout ? "start" : "end"} mt-8 lg:mt-0`}
            >
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
                <Image
                  src={image}
                  alt={imageAlt || title}
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-lg shadow-lg"
                  priority={false}
                  loading="lazy"
                />
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};
