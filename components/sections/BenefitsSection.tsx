import React from "react";
import Container from "@/components/ui/Container";

interface BenefitCard {
  readonly id: string;
  readonly icon: React.ReactNode;
  readonly title: string;
  readonly description: string;
}

interface BenefitsSectionProps {
  readonly title?: string;
  readonly subtitle?: string;
  readonly benefits?: readonly BenefitCard[];
  readonly className?: string;
  readonly "aria-label"?: string;
}

export const BenefitsSection: React.FC<BenefitsSectionProps> = ({
  benefits = [
    {
      id: "1",
      icon: <i className="icon-gloss-finish-1"></i>,
      title: "High Gloss Finish",
      description: "Lorem ipsum dolor amet consect adipiscing elit sedas do eiusmod tempor incididunt dolore.",
    },
    {
      id: "2",
      icon: <i className="icon-self-healing-white-2"></i>,
      title: "Self Healing",
      description: "Lorem ipsum dolor amet consect adipiscing elit sedas do eiusmod tempor incididunt dolore.",
    },
    {
      id: "3",
      icon: <i className="icon-Ease-of-Maintenance-2"></i>,
      title: "Easy Maintenance",
      description: "Lorem ipsum dolor amet consect adipiscing elit sedas do eiusmod tempor incididunt dolore.",
    },
    {
      id: "4",
      icon: <i className="icon-long-lasting-icon-2"></i>,
      title: "Long Lasting",
      description: "Lorem ipsum dolor amet consect adipiscing elit sedas do eiusmod tempor incididunt dolore.",
    },
  ],
  className = "",
  "aria-label": ariaLabel,
}) => {
  return (
    <section className={`${className}`} aria-label={ariaLabel || "Product benefits section"}>
      <Container>
        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
          {benefits.map((benefit) => (
            <article
              key={benefit.id}
              className="text-center flex flex-row md:flex-col  rounded-lg hover:bg-gray-50 transition-all duration-200 gap-3 md:gap-0 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2"
              aria-labelledby={`benefit-title-${benefit.id}`}
            >
              {/* Icon Container */}
              <div className="w-10 h-10 md:w-[2.625rem] md:h-[2.625rem] md:mx-auto mb-4 lg:mb-5 flex items-center justify-center text-black text-[2.5rem] lg:text-[2.625rem]">
                {benefit.icon}
              </div>
              <div className=" text-left md:text-center">
                {/* Title */}
                <h3 id={`benefit-title-${benefit.id}`} className="font-h4 text-neutral-900 mb-3 md:mb-4 leading-tight">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="para-small max-w-[18.5rem] mx-auto">{benefit.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};
