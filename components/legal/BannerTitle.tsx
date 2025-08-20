"use client";
import React from "react";
import Container from "@/components/ui/Container";
import { LEGAL_PAGE_CONFIG } from "@/config/legal";

const BannerTitle: React.FC = () => {
  return (
    <section className="section-spacing-y mt-16 md:mt-[5rem] Lgx:mt-[5.5rem]">
      <Container>
        <div className="max-w-4xl">
          <h1 id="legal-page-title" className="font-h1 text-neutral-900 mb-4 sm:mb-6">
            {LEGAL_PAGE_CONFIG.title}
          </h1>
          <p className="para-large text-neutral-900">{LEGAL_PAGE_CONFIG.subtitle}</p>
        </div>
      </Container>
    </section>
  );
};

export default BannerTitle;
