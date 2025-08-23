import React from "react";
import Image from "next/image";

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
  className = "",
  onClick,
  showOptions = true,
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
      className={`flex-shrink-0 cursor-pointer group w-[280px] sm:w-[320px] md:w-[336px] rounded-[14px] overflow-hidden ${className}`}
      onClick={handleClick}
      onKeyDown={(e) => e.key === "Enter" && handleClick()}
      tabIndex={0}
      role="button"
      aria-label={`${title} - ${price}`}
      aria-describedby={`product-${id}-description`}
    >
      <div className="transition-transform duration-300 shadow-lg w-full px-6 pt-[3.625rem] pb-6  bg-white rounded-[14px] overflow-hidden h-full">
        {/* NEW Badge - Top Left Corner Above Product Details */}
        {isNew && (
          <span className="text-white bg-accent-teal-300 inline-block text-xs rounded-sm p-1.5 absolute top-6 left-6">
            NEW
          </span>
        )}

        {/* Product Information - Above Image (Title & Price Only) */}
        <div className="">
          <h5 className="font-h5 text-neutral-900 mb-2">{title}</h5>
          <p className="para-small-bold text-neutral-900">{price}</p>
          <div id={`product-${id}-description`} className="sr-only">
            {title} priced at {price}
            {options.length > 0 && ` with options: ${options.map((opt) => opt.label).join(", ")}`}
          </div>
        </div>

        {/* Image Container */}
        <div className="relative py-3 md:py-6">
          <div className="w-full h-[210px] md:h-[230px] flex items-center justify-center">
            <Image src={image} alt={imageAlt} width={336} height={230} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Product Options - Below Image */}
        {showOptions && options.length > 0 && (
          <div className="">
            {options.map((option) => (
              <label key={`${id}-${option.value}`} className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name={`${id}-options`}
                  value={option.value}
                  defaultChecked={option.defaultChecked}
                  className="mr-2 w-3 h-3 sm:w-4 sm:h-4 text-neutral-900 border-neutral-300 focus:ring-neutral-500"
                />
                <span className="text-xs sm:text-sm text-neutral-700">{option.label}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export default ProductCard;
