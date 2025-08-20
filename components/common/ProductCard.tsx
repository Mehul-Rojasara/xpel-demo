import React from 'react';
import Image from 'next/image';

interface ProductCardOption {
  readonly value: string;
  readonly label: string;
  readonly defaultChecked?: boolean;
}

interface ProductCardProps {
  readonly id: string;
  readonly title: string;
  readonly price: string;
  readonly image: string;
  readonly imageAlt: string;
  readonly isNew?: boolean;
  readonly options?: ReadonlyArray<ProductCardOption>;
  readonly href: string;
  readonly className?: string;
  readonly onClick?: () => void;
  readonly showOptions?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  price,
  image,
  imageAlt,
  isNew = false,
  options = [],
  href,
  className = '',
  onClick,
  showOptions = true
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (href) {
      window.location.href = href;
    }
  };

  return (
    <article
      className={`flex-shrink-0 cursor-pointer group w-[280px] sm:w-[320px] md:w-[336px] rounded-lg overflow-hidden ${className}`}
      onClick={handleClick}
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
      tabIndex={0}
      role="button"
      aria-label={`${title} - ${price}`}
      aria-describedby={`product-${id}-description`}
    >
      <div className="transition-transform duration-300 shadow-lg w-full bg-white rounded-lg border border-neutral-200 h-[380px] sm:h-[400px] md:h-[435.4px]">
        {/* NEW Badge - Top Left Corner Above Product Details */}
        {isNew && (
          <div className="absolute top-3 left-3 z-10">
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
              NEW
            </span>
          </div>
        )}
        
        {/* Product Information - Above Image (Title & Price Only) */}
        <div className="p-4 sm:p-6 pb-4 pt-6 sm:pt-8">
          <h3 className="font-semibold text-neutral-900 mb-2 text-sm sm:text-base">
            {title}
          </h3>
          <p className="text-base sm:text-lg font-bold text-neutral-900 mb-3">
            {price}
          </p>
          <div id={`product-${id}-description`} className="sr-only">
            {title} priced at {price}
            {options.length > 0 && ` with options: ${options.map(opt => opt.label).join(', ')}`}
          </div>
        </div>
        
        {/* Image Container */}
        <div className="relative px-4 sm:px-6">
          <div className="w-full h-40 sm:h-44 md:h-48 overflow-hidden rounded-lg bg-neutral-100">
            <Image
              src={image}
              alt={imageAlt}
              width={336}
              height={192}
              className="w-full h-full object-cover transition-transform duration-300 scale-100 group-hover:scale-110"
            />
          </div>
        </div>
        
        {/* Product Options - Below Image */}
        {showOptions && options.length > 0 && (
          <div className="px-4 sm:px-6 pt-3 sm:pt-4">
            <div className="space-y-1 sm:space-y-2">
              {options.map((option) => (
                <label key={`${id}-${option.value}`} className="flex items-center cursor-pointer">
                  <input 
                    type="radio" 
                    name={`${id}-options`} 
                    value={option.value} 
                    defaultChecked={option.defaultChecked}
                    className="mr-2 w-3 h-3 sm:w-4 sm:h-4 text-neutral-900 border-neutral-300 focus:ring-neutral-500"
                  />
                  <span className="text-xs sm:text-sm text-neutral-700">
                    {option.label}
                  </span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

export default ProductCard; 