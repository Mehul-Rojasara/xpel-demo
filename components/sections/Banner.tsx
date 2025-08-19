import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import Container from '@/components/ui/Container';

interface BannerButton {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  icon?: React.ReactNode;
  arrow?: boolean;
  className?: string;
}

interface BannerContent {
  backButton?: {
    label: string;
    href: string;
  };
  headline?: {
    subtitle?: string;
    title: string;
  };
  description?: string;
  optionalDescription?: string;
  buttons?: BannerButton[];
}

interface BannerProps {
  title?: string;
  backgroundImage: string;
  altText?: string;
  className?: string;
  content?: BannerContent;
  variant?: "simple" | "promotional";
}

export const Banner: React.FC<BannerProps> = ({
  title,
  backgroundImage,
  altText = "Banner background",
  className = "",
  content,
  variant = "simple",
}) => {
  return (
    <section
      className={`relative w-full h-[375px] sm:h-[500px] md:h-[600px] lg:h-[720px] ${className}`}
      aria-label={variant === "promotional" ? "Promotional banner" : "Page banner"}
    >
      {/* Background Image with Picture Tag for WebP Support */}
      <Image src={backgroundImage} alt={altText} fill className="object-cover" priority sizes="100vw" quality={85} />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20" />
      
      {/* Content Container */}
      <div className="absolute inset-0 flex items-end justify-start">
        <Container className="w-full pb-6 sm:pb-8 md:pb-12 lg:pb-16">
          {variant === 'promotional' && content ? (
            <div className="max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl">
              {/* Back Button */}
              {content.backButton && (
                <Link
                  href={content.backButton.href}
                  className="inline-flex items-center justify-center h-10 px-6 py-2 bg-[#212D42] text-white rounded-full mb-6 hover:bg-[#1a2535] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transition-all duration-200 border border-white backdrop-blur-[18px] w-[123px] para-small-bold text-white"
                  aria-label={`Go back to ${content.backButton.label}`}
                >
                  <i className="icon-Arrow-Left w-4 h-4 mr-2.5 text-white flex items-center" aria-hidden="true"></i>
                  <span className="flex items-center">{content.backButton.label}</span>
                </Link>
              )}

              {/* Headline */}
              {content.headline && (
                <div className="mb-6">
                  {content.headline.subtitle && (
                    <p className="subtitle-large text-neutral-300 mb-3">
                      {content.headline.subtitle}
                    </p>
                  )}
                  <h1 className="font-h1 text-white mb-6">
                    {content.headline.title}
                  </h1>
                </div>
              )}

              {/* Description */}
              {content.description && (
                <p className="para-medium text-neutral-300 mb-6 max-w-2xl">
                  {content.description}
                </p>
              )}

              {/* Optional Description */}
              {content.optionalDescription && (
                <p className="para-small text-neutral-300 mb-8 max-w-2xl">
                  {content.optionalDescription}
                </p>
              )}

              {/* Buttons */}
              {content.buttons && content.buttons.length > 0 && (
                <div
                  className={`flex gap-4 sm:gap-5 md:gap-6 ${
                    content.buttons && content.buttons.length === 2 ? "flex-col" : "flex-row"
                  }`}
                >
                  {content.buttons.map((button, index) => (
                                              <Button
                          key={index}
                          variant={button.variant === "secondary" ? "secondary" : "primary"}
                          type="button" 
                          aria-label="primary-btn" 
                          buttonStyle="filled" 
                          className={`${index === 0 ? "w-[200px]" : index === 1 ? "w-[321px]" : ""} ${button.variant === "secondary" ? "bg-white text-black" : ""}`}
                          icon={button.arrow && (
                            <span className="icon-Arrow-Right">
                            </span>
                          )}
                          iconPosition="right"
                        >
                          {button.label}
                        </Button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            /* Simple variant - original behavior */
            <h1 className="font-h1 text-white">
              {title}
            </h1>
          )}
        </Container>
      </div>
    </section>
  );
};
