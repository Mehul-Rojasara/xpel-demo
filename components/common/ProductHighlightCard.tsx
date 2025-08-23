import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

interface ProductHighlightCardProps {
  readonly imageSrc: string;
  readonly imageAlt: string;
  readonly title: string;
  readonly description?: string;
  readonly price?: string;
  readonly buttonText: string;
  readonly buttonHref: string;
  readonly className?: string;
}

export const ProductHighlightCard: React.FC<ProductHighlightCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  price,
  buttonText,
  buttonHref,
  className = "",
}) => {
  return (
    <div
      className={`bg-neutral-100 rounded-[0.875rem] p-4 md:p-6 overflow-hidden max-w-[47.5rem] mx-auto ${className}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
        {/* Product Image */}
        <div className="relative rounded-sm overflow-hidden min-h-[14.75rem] md:min-h-[16rem]">
          <Image src={imageSrc} alt={imageAlt} fill className="object-cover w-full h-full" />
        </div>

        {/* Product Information */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left justify-center">
          <h4 className="font-h4 text-neutral-900 uppercase">{title}</h4>

          {description && <p className="para-small text-neutral-900 pt-2">{description}</p>}

          {price && <p className="para-small-bold text-neutral-900">{price}</p>}

          <div className="mt-6">
            <Button
              type="button"
              className="max-w-[160px] w-full"
              variant="secondary"
              aria-label="primary-btn"
              buttonStyle="filled"
              background="light"
            >
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
