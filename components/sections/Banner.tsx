"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
interface BannerButton {
  readonly id: string;
  readonly label: string;
  readonly href: string;
  readonly variant?: "primary" | "secondary" | "tertiary";
  readonly icon?: React.ReactNode;
  readonly arrow?: boolean;
  readonly className?: string;
}

interface BannerContent {
  readonly backButton?: {
    readonly label: string;
    readonly href: string;
  };
  readonly headline?: {
    readonly subtitle?: string;
    readonly title: string;
  };
  readonly description?: string;
  readonly optionalDescription?: string;
  readonly buttons?: readonly BannerButton[];
}

interface BannerProps {
  readonly title?: string;
  readonly backgroundImage: string;
  readonly altText?: string;
  readonly className?: string;
  readonly content?: BannerContent;
  readonly variant?: "simple" | "promotional";
  readonly overlay?: "light" | "dark";
}

export const Banner: React.FC<BannerProps> = ({
  title,
  backgroundImage,
  altText = "Banner background",
  className = "",
  content,
  variant = "promotional",
  overlay = "light",
}) => {

  return (
    <section
      className={`relative w-full h-[40rem] md:h-[42.5rem] lg:h-[45rem] ${className}`}
      aria-label={variant === "promotional" ? "Promotional banner" : "Page banner"}
    >
      {/* Background Image */}
      <Image src={backgroundImage} alt={altText} fill className="object-cover" priority sizes="100vw" quality={85} />

      {/* Overlay */}
      {overlay === "dark" && <div className="absolute inset-0 bg-black/50" />}
      {overlay === "light" && <div className="absolute inset-0 bg-black/20" />}

      {/* Content Container */}
      <div className="absolute inset-0 flex items-end justify-start">
        <Container className="w-full pb-16">
          {variant === "promotional" && content ? (
            <div className="max-w-[46.5rem]">
              {/* Back Button */}
              {content.backButton && (
                <Link
                  href={content.backButton.href}
                  className="btn-blur  mb-6 lg:mb-4"
                  aria-label={`Go back to ${content.backButton.label}`}
                >
                  <i className="icon-Arrow-Left text-sm mr-2.5 text-white flex items-center" aria-hidden="true"></i>
                  <span className="flex items-center">{content.backButton.label}</span>
                </Link>
              )}

              {/* Headline */}
              {content.headline && (
                <>
                  {content.headline.subtitle && (
                    <p className="text-[1rem] leading-tight font-[500] font-display tracking-wider uppercase text-white mb-3">
                      {content.headline.subtitle}
                    </p>
                  )}
                  <h1 className="font-h1 text-white mb-4 lg:mb-6">{content.headline.title}</h1>
                </>
              )}

              {/* Description */}
              {content.description && (
                <p className="para-medium text-white mb-5 lg:mb-6 max-w-2xl">{content.description}</p>
              )}

              {/* Optional Description */}
              {content.optionalDescription && (
                <p className="para-small text-white mb-6 lg:mb-8 max-w-2xl">{content.optionalDescription}</p>
              )}

              {/* Buttons */}
              {content.buttons && content.buttons.length > 0 && (
                <div
                  className={`flex items-start gap-4 sm:gap-5 md:gap-6 ${
                    content.buttons && content.buttons.length === 2 ? "flex-col" : "flex-row"
                  }`}
                >
                  {content.buttons.map((button) => (
                    <button
                      type="button"
                      className={`btn ${button.variant === "secondary" ? "btn-secondary" : "btn-primary"} btn-with-icon`}
                      key={button.id}
                    >
                      {button.label}
                      <span className="icon-Arrow-Right btn-icon"></span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            /* Simple variant - original behavior */
            <h1 className="font-h1 text-white">{title}</h1>
          )}
        </Container>
      </div>
    </section>
  );
};
