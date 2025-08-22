import React from 'react';
import Link from 'next/link';
import { Banner } from '@/components/sections/Banner';
import { Accordion } from '@/components/ui/Accordion';
import { CareProductsBanner } from '@/components/common/CareProductsBanner';
import Container from '@/components/ui/Container';

// FAQ Data
const FAQ_DATA = {
  paintProtectionFilm: [
    {
      title: "Simply dummy text of the printing and typesetting industry.",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      title: "Simply dummy text of the printing and typesetting industry.",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting."
    },
    {
      title: "Text of the printing and typesetting industry.",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      title: "Dummy text of the printing and typesetting industry.",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    }
  ],
  ceramicCoating: [
    {
      title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting."
    },
    {
      title: "Simply dummy text of the printing and typesetting industry.",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      title: "Simply dummy text of the printing and typesetting industry.",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      title: "Simply dummy text of the printing and typesetting industry.",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    }
  ],
  windowTint: [
    {
      title: "Simply dummy text of the printing and typesetting industry.",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      title: "Simply dummy text of the printing and typesetting industry.",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting."
    },
    {
      title: "Simply dummy text of the printing and typesetting industry.",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      title: "Simply dummy text of the printing and typesetting industry.",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    }
  ]
};

// FAQ Section Component
const FAQSection: React.FC<{
  readonly title: string;
  readonly items: ReadonlyArray<{ readonly title: string; readonly content: string }>;
  readonly seeAllButtonText: string;
  readonly seeAllButtonHref: string;
  readonly className?: string;
}> = ({ title, items, seeAllButtonText, seeAllButtonHref, className }) => {
  return (
    <section 
      className={`${className} bg-white`}
      >
      <Container>
        <div className="flex items-start lg:items-center lg:justify-between flex-col lg:flex-row gap-5 mb-6 lg:mb-14">
          <h2 className="font-h2 text-neutral-900 font-sans">
            {title}
          </h2>
          <Link
            href={seeAllButtonHref}
            className="inline-flex items-center justify-center px-8 py-4 border border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white transition-all duration-300 rounded-full para-medium"
          >
            {seeAllButtonText}
          </Link>
        </div>
        
        <div className="w-full">
          <Accordion 
            items={items}
            allowMultiple={false}
            defaultOpen={[0]}
            className="border-0 shadow-none space-y-2"
          />
        </div>
      </Container>
    </section>
  );
};

export default function FAQPage() {
  return (
    <>
      {/* Banner Section */}
      <Banner
        title="Frequently Asked Questions"
        backgroundImage="/images/paint&ppf.jpg"
        altText="Car care products including FUSION PLUS CERAMIC COATING and microfiber cloths"
        variant="simple"
        className="h-[31.25rem]"
      />

      {/* Paint Protection Film FAQ Section */}
      <FAQSection
        title="Paint Protection Film"
        items={FAQ_DATA.paintProtectionFilm}
        seeAllButtonText="See All PPF FAQs"
        seeAllButtonHref="/faq/ppf"
        className="pt-16 sm:pt-20 lg:pt-[7.5rem]"
      />

      {/* Ceramic Coating FAQ Section */}
      <FAQSection
        title="Ceramic Coating"
        items={FAQ_DATA.ceramicCoating}
        seeAllButtonText="See All Coating FAQs"
        seeAllButtonHref="/faq/coating"
        className="pt-16 sm:pt-20 lg:pt-[7.5rem]"
      />

      {/* Window Tint FAQ Section */}
      <FAQSection
        title="Window Tint"
        items={FAQ_DATA.windowTint}
        seeAllButtonText="See All Tint FAQs"
        seeAllButtonHref="/faq/tint"
        className="py-16 sm:py-20 lg:py-[7.5rem]"
      />

      {/* Care Products Banner */}
      <CareProductsBanner
        title="Don't See What You Are Looking For? Reach Out For More Help!"
        subtitle="Our support team is here to help you find the answers you need."
        ctaText="Contact Support"
        ctaHref="/contact"
        gradientColors={{
          from: 'from-[#458988]',
          to: 'to-transparent',
          fromPercentage: 'from-40%'
        }}
        backgroundImage="/images/gradient-faq.png"
        className="py-16 sm:py-20 lg:py-[7.5rem]"
      />
    </>
  );
} 