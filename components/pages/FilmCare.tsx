'use client';
import React from "react";
import Image from "next/image";
import { Banner } from "@/components/sections/Banner";
import { ContentSection } from "@/components/sections/ContentSection";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FILM_CARE_CONTENT, FILM_CARE_PRODUCTS } from "@/config/filmCare";

interface FilmCareProps {
  readonly country: string;
  readonly language: string;
}

export const FilmCare: React.FC<FilmCareProps> = ({ country, language }) => {
  // Generate proper URLs with country and language
  const ultimatePlusProduct = {
    ...FILM_CARE_PRODUCTS.ultimatePlus,
    ctaHref: `/${country}/${language}${FILM_CARE_PRODUCTS.ultimatePlus.ctaHref}`
  };

  const ceramicBoostProduct = {
    ...FILM_CARE_PRODUCTS.ceramicBoost,
    ctaHref: `/${country}/${language}${FILM_CARE_PRODUCTS.ceramicBoost.ctaHref}`
  };

  return (
    <main 
      className="min-h-screen bg-white" 
      aria-labelledby="film-care-page-title"
      aria-describedby="film-care-page-description"
    >
      {/* Hero Banner with Video */}
      <Banner
        title="Film Care & Maintenance"
        backgroundImage="/images/header/window-film.webp"
        altText="Window film protection for buildings"
        variant="simple"
        className="h-[500px]"
        aria-label="Film care and maintenance solutions banner"
      />

      {/* Introduction Content Section */}
      <ContentSection
        title={FILM_CARE_CONTENT.intro.title}
        subtitle={FILM_CARE_CONTENT.intro.subtitle}
        className="py-16"
        aria-label="Introduction to film care and maintenance"
        aria-describedby="film-care-intro-description"
      />

      {/* Additional Description */}
      <section 
        className="py-8 bg-white"
        aria-labelledby="film-care-intro-description"
        aria-describedby="film-care-description-text"
      >
        <Container>
          <div className="max-w-4xl mx-auto">
            <p 
              id="film-care-description-text"
              className="para-medium text-[var(--color-neutral-700)] leading-relaxed"
            >
              {FILM_CARE_CONTENT.intro.description}
            </p>
          </div>
        </Container>
      </section>

      {/* ULTIMATE PLUS Product Showcase */}
      <section 
        className="py-16 bg-[var(--color-neutral-100)]"
        aria-labelledby="ultimate-plus-title"
        aria-describedby="ultimate-plus-description"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Product Image */}
            <div 
              className="relative h-80 lg:h-96 rounded-lg overflow-hidden"
              aria-label="Blue sports car with XPEL protection film"
            >
              <Image
                src={ultimatePlusProduct.image}
                alt="Blue sports car with XPEL protection"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            
            {/* Product Content */}
            <div className="space-y-6">
              <h2 
                id="ultimate-plus-title"
                className="font-h2 text-[var(--color-neutral-900)]"
              >
                {ultimatePlusProduct.title}
              </h2>
              <p 
                id="ultimate-plus-description"
                className="para-medium text-[var(--color-neutral-600)]"
              >
                {ultimatePlusProduct.description}
              </p>
              <Button
                variant="primary"
                buttonStyle="filled"
                size="md"
                background="light"
                className="w-fit"
                onClick={() => window.open(ultimatePlusProduct.ctaHref, '_self')}
                aria-label={`Learn more about ${ultimatePlusProduct.title}`}
              >
                {ultimatePlusProduct.ctaText}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Energy Savings Section */}
      <section 
        className="py-16 bg-white"
        aria-labelledby="energy-savings-title"
        aria-describedby="energy-savings-content"
      >
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 
              id="energy-savings-title"
              className="font-h2 text-[var(--color-neutral-900)] mb-8 text-center"
            >
              {FILM_CARE_CONTENT.energySection.title}
            </h2>
            
            <div 
              id="energy-savings-content"
              className="space-y-6"
            >
              <p className="para-medium text-[var(--color-neutral-700)] leading-relaxed">
                {FILM_CARE_CONTENT.energySection.content}
              </p>
              
              <p className="para-medium text-[var(--color-neutral-700)] leading-relaxed">
                {FILM_CARE_CONTENT.energySection.followUp}
              </p>
              
              <ul 
                className="space-y-3 mt-8"
                aria-label="Energy savings benefits list"
              >
                {FILM_CARE_CONTENT.energySection.benefits.map((benefit) => (
                  <li key={benefit.id} className="flex items-start">
                    <span 
                      className="w-2 h-2 bg-[var(--color-neutral-400)] rounded-full mt-2 mr-3 flex-shrink-0"
                      aria-hidden="true"
                    ></span>
                    <span className="para-medium text-[var(--color-neutral-600)]">{benefit.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* XPEL Ceramic Boost Product Showcase */}
      <section 
        className="py-16 bg-[var(--color-neutral-100)]"
        aria-labelledby="ceramic-boost-title"
        aria-describedby="ceramic-boost-description"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Product Image */}
            <div 
              className="relative h-80 lg:h-96 rounded-lg overflow-hidden"
              aria-label="Squeegee tool with orange blade for ceramic coating application"
            >
              <Image
                src={ceramicBoostProduct.image}
                alt="Squeegee tool with orange blade"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            
            {/* Product Content */}
            <div className="space-y-6">
              <h2 
                id="ceramic-boost-title"
                className="font-h2 text-[var(--color-neutral-900)]"
              >
                {ceramicBoostProduct.title}
              </h2>
              <p 
                id="ceramic-boost-description"
                className="text-3xl font-bold text-[var(--color-neutral-900)]"
                aria-label={`Price: ${ceramicBoostProduct.price}`}
              >
                {ceramicBoostProduct.price}
              </p>
              <Button
                variant="primary"
                buttonStyle="filled"
                size="md"
                background="light"
                className="w-fit"
                onClick={() => window.open(ceramicBoostProduct.ctaHref, '_self')}
                aria-label={`Learn more about ${ceramicBoostProduct.title}`}
              >
                {ceramicBoostProduct.ctaText}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}; 