"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Button } from "../ui/Button";

interface CardSlider {
  id: string;
  text: string;
  author: string;
  role: string;
}

const testimonials: CardSlider[] = [
  {
    id: "t1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore dolore magna aliqua lorem ipsum dolor sit amet.",
    author: "AutoNation",
    role: "Senior Deal Authorisation",
  },
  {
    id: "t2",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore dolore magna aliqua lorem ipsum dolor sit amet.",
    author: "Berkshire Hathaway Automotive",
    role: "Customer Review",
  },
  {
    id: "t3",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore dolore magna aliqua lorem ipsum dolor sit amet.",
    author: "Tesla",
    role: "Customer Feedback",
  },
  {
    id: "t4",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore dolore magna aliqua lorem ipsum dolor sit amet.",
    author: "Porsche",
    role: "Verified Review",
  },
];

export const CardSlider = ({ title = "What They’re Saying About Xpel" }: { title?: string }) => {
  const [progress, setProgress] = useState(0);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12 relative">
      <h2 className="text-2xl font-semibold mb-10">{title}</h2>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView="auto"
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        onProgress={(swiper, prog) => setProgress(prog * 100)}
        className="pb-2"
      >
        {testimonials.map((t) => (
          <SwiperSlide
            key={t.id}
            style={{ width: "380px" }}
            className="rounded-xl overflow-hidden bg-gray-50 p-8 shadow-sm flex flex-col justify-between"
          >
            <p className="text-gray-800 text-base leading-relaxed">{t.text}</p>

            <div className="mt-6">
              <p className="font-semibold text-black text-sm">{t.author}</p>
              <p className="text-xs text-gray-500 uppercase tracking-wide">{t.role}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation arrows */}
      <Button
        onClick={() => {}}
        className="custom-prev absolute left-2 top-1/2 -translate-y-1/2 z-20"
        variant="secondary"
        buttonStyle="filled"
        background="light"
        size="md"
        aria-label="Previous slide"
      >
        <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Button>

      <Button
        onClick={() => {}}
        className="custom-next absolute right-2 top-1/2 -translate-y-1/2 z-20"
        variant="primary"
        buttonStyle="filled"
        background="light"
        size="md"
        aria-label="Next slide"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Button>

      {/* Progress indicator */}
      <div className="flex justify-center mt-8">
        <div className="relative w-[140px] h-1 bg-gray-200 rounded-full">
          <div
            className="absolute top-0 h-1 w-[28px] bg-gray-800 rounded-full transition-all duration-200"
            style={{ left: `${progress}%`, transform: "translateX(-50%)" }}
          />
        </div>
      </div>
    </div>
  );
};
