"use client";
import React, { useState } from "react";
import Container from "@/components/ui/Container";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

interface ContactAvenue {
  readonly id: string;
  readonly icon: string;
  readonly title: string;
  readonly subtitle: string;
  readonly description: string;
  readonly linkText: string;
  readonly linkHref: string;
}

const contactAvenues: ContactAvenue[] = [
  {
    id: "media",
    icon: "icon-Newsroom",
    title: "Media Contact",
    subtitle: "Michael Mejia",
    description: "Sr. Director of Marketing media@xpel.com",
    linkText: "Optional Link",
    linkHref: "mailto:media@xpel.com",
  },
  {
    id: "faqs",
    icon: "icon-Help-Center",
    title: "FAQs",
    subtitle: "Find answers to common questions",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    linkText: "Optional Link",
    linkHref: "/faq",
  },
  {
    id: "order-support",
    icon: "icon-Shipping",
    title: "Order Support",
    subtitle: "Get Help",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    linkText: "Optional Link",
    linkHref: "/support",
  },
  {
    id: "investor-relations",
    icon: "icon-Investor-Relations",
    title: "Investor Relations",
    subtitle: "Investor Info",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    linkText: "Optional Link",
    linkHref: "/investors",
  },
];

const ContactCard: React.FC<{ contact: ContactAvenue }> = ({ contact }) => {
  return (
    <div className="bg-white border lg:mr-4 h-full border-neutral-200 rounded-[14px] p-5 lg:p-6 shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] hover:shadow-[0_4px_20px_0_rgba(0,0,0,0.15)] transition-all duration-300 w-[18.5rem] lg:w-[28.625rem] flex flex-col justify-between">
      {/* Top Content Section */}
      <div className="flex-1">
        {/* Icon */}
        <div className="w-8 h-8 flex items-center justify-start mb-3 lg:mb-4">
          <i className={`${contact.icon} text-neutral-900 text-[1.625rem]`}></i>
        </div>

        {/* Title */}
        <h4 className="font-h4 text-neutral-900  mb-3 lg:mb-4">{contact.title}</h4>

        {/* Subtitle */}
        <p className="para-small text-neutral-900">{contact.subtitle}</p>

        {/* Description */}
        <p className="para-small text-neutral-900">{contact.description}</p>
      </div>

      {/* Bottom Link Section - Positioned at the very bottom */}
      <div className="mt-auto pt-3 lg:pt-4">
        <Link
          href={contact.linkHref}
          className="text-[16px] lg:text-[18px] leading-normal font-[500] font-display tracking-normal transition-colors duration-200 inline-flex items-center group"
        >
          {contact.linkText}
          <i className="icon-Arrow-Right ml-2 text-sm group-hover:translate-x-1 transition-transform duration-200"></i>
        </Link>
      </div>
    </div>
  );
};

export const AdditionalContactsSection: React.FC = () => {
  const [progress, setProgress] = useState(0);
  return (
    <section className="bg-neutral-100 overflow-hidden section-spacing-bottom">
      <Container>
        <h2 className="font-h2 text-neutral-900">Additional Contacts</h2>

        {/* Contact Cards Slider */}
        <div className="relative w-full pt-8 lg:pt-12">
          {/* Slider Track */}
          <Swiper
            modules={[Navigation]}
            slidesPerView="auto"
            breakpoints={{
              0: {
                spaceBetween: 16,
              },
              768: {
                spaceBetween: 24,
              },
              1024: {
                spaceBetween: 32,
              },
            }}
            onProgress={(_, progressValue) => {
              setProgress(progressValue * 100); // Swiper gives 0 → 1
            }}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            className="!overflow-visible contactus-slider"
          >
            {contactAvenues.map((contact) => (
              <SwiperSlide key={contact.id} className="!w-[18.5rem] lg:!w-[28.625rem] !h-auto">
                <ContactCard key={contact.id + 1} contact={contact} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Left arrow */}
          <button
            aria-label="previous"
            className={`custom-prev absolute left-2 top-1/2 bg-yellow-400 shadow-[0_6px_18px_rgba(18,18,18,0.08)] rounded-full w-8 h-8 lg:w-12 lg:h-12 flex items-center justify-center z-20`}
          >
            <span className="icon-Arrow-Left"></span>
          </button>

          {/* Right arrow */}
          <button
            aria-label="next"
            className={`custom-next absolute right-2 top-1/2 bg-yellow-400 shadow-[0_6px_18px_rgba(18,18,18,0.08)] rounded-full w-8 h-8 lg:w-12 lg:h-12 flex items-center justify-center z-20`}
          >
            <span className="icon-Arrow-Right"></span>
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mt-8 flex justify-center">
          <div
            className="w-32 h-1 bg-neutral-200 rounded-full overflow-hidden"
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="h-full bg-neutral-900 transition-all duration-500 ease-in-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
