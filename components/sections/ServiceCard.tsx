import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly hoverImage?: string; // Optional second image for hover effect
  readonly altText?: string;
  readonly href?: string;
  readonly className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  image,
  hoverImage,
  altText,
  href,
  className = "",
}) => {
  const CardContent = () => (
    <div
      className={`relative overflow-hidden rounded-2xl shadow-sm bg-white w-full h-[20.438rem] sm:h-[25rem] lg:h-[29.313rem] group ${className}`}
    >
      {/* Image Container */}
      <div className="relative h-full overflow-hidden">
        {/* Primary Image */}
        <Image
          src={image}
          alt={altText || title}
          fill
          className={`object-cover transition-all duration-[0.6s] group-hover:scale-125 ${
            hoverImage ? "group-hover:opacity-0" : "group-hover:opacity-80"
          }`}
        />

        {/* Hover Image (if provided) */}
        {hoverImage && (
          <Image
            src={hoverImage}
            alt={`${altText || title} - hover view`}
            fill
            className="object-cover opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[0.6s]"
          />
        )}

        {/* Dark Overlay */}
        <div
          className="absolute inset-0 bg-[image:linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.05)_44.79%,rgba(0,0,0,0.5)_69.94%,rgba(0,0,0,0.85)_100%)]
            group-hover:bg-[image:linear-gradient(196deg,rgba(44,53,70,0)_10.3%,#2c3546_87.99%)]
            bg-no-repeat transition-all duration-[600ms]"
        />

        {/* Text Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h3 className="font-h3 text-white mb-3">
            {title}
            <i className="icon-Arrow-Right inline-block text-xl ml-1 opacity-0 -translate-x-5 group-hover:translate-x-2 group-hover:opacity-100 transition-all duration-[600ms]"></i>
          </h3>
          <p className="para-medium text-white line-clamp-2">{description}</p>
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="block transition-transform rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        <CardContent />
      </Link>
    );
  }

  return <CardContent />;
};
