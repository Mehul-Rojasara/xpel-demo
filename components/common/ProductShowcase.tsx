import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/Button';
import { ProductFeature, FeatureIcons } from './ProductFeature';

interface ProductImage {
  readonly id: string;
  readonly src: string;
  readonly alt: string;
  readonly size?: 'small' | 'large';
}

interface ProductFeature {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly icon: keyof typeof FeatureIcons;
}

interface ProductShowcaseProps {
  readonly title: string;
  readonly description: string;
  readonly features: readonly ProductFeature[];
  readonly images: readonly ProductImage[];
  readonly primaryCtaText: string;
  readonly primaryCtaHref?: string;
  readonly onPrimaryCtaClick?: () => void;
  readonly secondaryCtaText: string;
  readonly secondaryCtaHref?: string;
  readonly onSecondaryCtaClick?: () => void;
  readonly className?: string;
  readonly background?: 'dark' | 'light';
  readonly reverseLayout?: boolean;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  title,
  description,
  features,
  images,
  primaryCtaText,
  primaryCtaHref,
  onPrimaryCtaClick,
  secondaryCtaText,
  secondaryCtaHref,
  onSecondaryCtaClick,
  className = '',
  background = 'dark',
  reverseLayout = false
}) => {
  const backgroundClasses = {
    dark: 'bg-neutral-900 text-white',
    light: 'bg-white text-neutral-900'
  };

  const handlePrimaryCtaClick = () => {
    if (onPrimaryCtaClick) {
      onPrimaryCtaClick();
    } else if (primaryCtaHref) {
      window.location.href = primaryCtaHref;
    }
  };

  const handleSecondaryCtaClick = () => {
    if (onSecondaryCtaClick) {
      onSecondaryCtaClick();
    } else if (secondaryCtaHref) {
      window.location.href = secondaryCtaHref;
    }
  };

  const contentOrder = reverseLayout ? 'lg:order-2' : 'lg:order-1';
  const imageOrder = reverseLayout ? 'lg:order-1' : 'lg:order-2';

  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 ${backgroundClasses[background]} ${className}`} aria-label="Product showcase">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Column */}
          <div className={contentOrder}>
            {/* Product Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {title}
            </h2>
            
            {/* Product Description */}
            <p className="text-lg sm:text-xl mb-8 leading-relaxed opacity-90">
              {description}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                variant="primary"
                size="lg"
                onClick={handlePrimaryCtaClick}
                className="bg-primary-300 text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors duration-300"
              >
                {primaryCtaText}
              </Button>
              
              <Button
                variant="secondary"
                size="lg"
                onClick={handleSecondaryCtaClick}
                className="bg-transparent border border-white text-white hover:bg-white hover:text-neutral-900 transition-colors duration-300"
              >
                {secondaryCtaText}
              </Button>
            </div>
            
            {/* Product Features */}
            <div className="space-y-6">
              {features.map((feature) => (
                <ProductFeature
                  key={feature.id}
                  icon={FeatureIcons[feature.icon]}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>

          {/* Images Column */}
          <div className={imageOrder}>
            <div className="grid grid-cols-2 gap-4">
              {/* Top row - two smaller images */}
              {images.slice(0, 2).map((image) => (
                <div key={image.id} className="aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
              
              {/* Bottom row - one larger image spanning both columns */}
              {images[2] && (
                <div className="col-span-2 aspect-video overflow-hidden rounded-lg">
                  <Image
                    src={images[2].src}
                    alt={images[2].alt}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase; 