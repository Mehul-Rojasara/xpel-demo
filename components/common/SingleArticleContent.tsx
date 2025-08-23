import React from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Link from "next/link";

interface GlareReductionSection {
  readonly title: string;
  readonly paragraph1: string;
  readonly paragraph2: string;
  readonly leftImage: {
    readonly src: string;
    readonly alt: string;
    readonly overlayText: string;
  };
  readonly rightImage: {
    readonly src: string;
    readonly alt: string;
  };
  readonly quote: string;
}

interface SecurityFilmSection {
  readonly title: string;
  readonly paragraphs: ReadonlyArray<{
    readonly id: string;
    readonly text: string;
  }>;
}

interface IntroductionSection {
  readonly paragraphs: ReadonlyArray<{
    readonly id: string;
    readonly text: string;
  }>;
}

interface MainArticleSection {
  readonly title: string;
  readonly paragraphs: ReadonlyArray<{
    readonly id: string;
    readonly text: string;
  }>;
  readonly bulletPoints?: ReadonlyArray<{
    readonly id: string;
    readonly text: string;
  }>;
}

interface SingleArticleContentProps {
  readonly introduction?: IntroductionSection;
  readonly mainArticle?: MainArticleSection;
  readonly glareReduction?: GlareReductionSection;
  readonly securityFilm?: SecurityFilmSection;
  readonly className?: string;
}

export const SingleArticleContent: React.FC<SingleArticleContentProps> = ({
  introduction,
  mainArticle,
  glareReduction,
  securityFilm,
  className = "",
}) => {
  return (
    <div className={className}>
      {/* Introduction Text Section */}
      {introduction && (
        <section className="bg-white py-8 md:py-16" aria-labelledby="introduction-heading">
          <div className="max-w-[47.5rem] mx-auto px-6 Xxl:px-0">
            <div className="space-y-4">
              {introduction.paragraphs.map((paragraph, index) => (
                <p key={index} className="para-medium text-neutral-900">
                  {paragraph.text}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Article Content Section */}
      {mainArticle && (
        <div className="bg-white py-8 md:py-16" aria-labelledby="main-article-heading">
          <div className="max-w-[47.5rem] mx-auto px-6 Xxl:px-0">
            <h3 id="main-article-heading" className="font-h3 text-neutral-900 md:text-left mb-2 md:mb-4">
              {mainArticle.title}
            </h3>

            <div className="space-y-4 mb-4">
              {mainArticle.paragraphs.map((paragraph, index) => (
                <p key={index} className="para-medium text-neutral-900">
                  {paragraph.text}
                </p>
              ))}
            </div>

            {mainArticle?.bulletPoints && (
              <ul className="space-y-4" role="list">
                {mainArticle?.bulletPoints?.map((point) => (
                  <li key={point?.id} className="flex items-start">
                    <span
                      className="w-2 h-2 bg-neutral-900 rounded-full mt-[0.625rem] mr-[0.625rem] flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="para-medium text-neutral-900">{point.text}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}

      {/* Glare Reduction Benefits Section - First (with images) */}
      {glareReduction && (
        <div className="section-small-spacing-y" aria-labelledby="glare-reduction-heading">
          <div className="max-w-[47.5rem] mx-auto px-6 Xxl:px-0">
            <h3 id="main-article-heading" className="font-h3 text-neutral-900 md:text-left mb-2 md:mb-4">
              {glareReduction.title}
            </h3>

            <div className="space-y-4 mb-4">
              <p className="para-medium text-neutral-900">{glareReduction.paragraph1}</p>
              <p className="para-medium text-neutral-900">{glareReduction.paragraph2}</p>
            </div>
          </div>

          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 md:mt-16">
              {/* Left Image - Office Space */}
              <div className="relative">
                <div className="overflow-hidden rounded-[0.875rem]">
                  <Image
                    src={glareReduction.leftImage.src}
                    alt={glareReduction.leftImage.alt}
                    width={704}
                    height={396}
                    className="w-full h-full object-cover aspect-[16/9] max-h-[24.75rem] min-h-[11.5rem]"
                  />
                </div>
                <div className="absolute bottom-0 left-0 p-3 md:p-5">
                  <p className="text-white text-sm md:text-base font-sans tracking-[0.01em]">
                    {glareReduction.leftImage.overlayText}
                    <Link
                      href="/"
                      className="text-white font-semibold text-sm md:text-base underline hover:no-underline ml-2 underline-offset-2 "
                    >
                      Learn More
                    </Link>
                  </p>
                </div>
              </div>

              {/* Right Image - Window Film Application */}
              <div className="relative">
                <div className="overflow-hidden rounded-[0.875rem]">
                  <Image
                    src={glareReduction.leftImage.src}
                    alt={glareReduction.leftImage.alt}
                    width={704}
                    height={396}
                    className="w-full h-full object-cover aspect-[16/9] max-h-[24.75rem] min-h-[11.5rem]"
                  />
                </div>
              </div>
            </div>
          </Container>
        </div>
      )}

      {/* Security Film Benefits Section - Second (text only) */}
      {securityFilm && (
        <div className="pb-8 md:pb-16" aria-labelledby="security-film-heading">
          <div className="max-w-[47.5rem] mx-auto px-6 Xxl:px-0">
            <h3 id="main-article-heading" className="font-h3 text-neutral-900 md:text-left mb-2 md:mb-4">
              {securityFilm.title}
            </h3>

            <div className="space-y-4 mb-4">
              {securityFilm.paragraphs.map((paragraph, index) => (
                <p key={index} className="para-medium text-neutral-900">
                  {paragraph.text}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}

      {securityFilm && (
        <div className="pb-8 md:pb-16" aria-labelledby="security-film-heading">
          <div className="max-w-[47.5rem] mx-auto px-6 Xxl:px-0">
            <h3 id="main-article-heading" className="font-h3 text-neutral-900 md:text-left mb-2 md:mb-4">
              {securityFilm.title}
            </h3>

            <div className="space-y-4 mb-4">
              {securityFilm.paragraphs.map((paragraph, index) => (
                <p key={index} className="para-medium text-neutral-900">
                  {paragraph.text}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Quote Section - At the very end */}
      {glareReduction && (
        <div className="max-w-[47.5rem] mx-auto px-6 Xxl:px-0 mb-16 lg:mb-[7.5rem]">
          <div className="border-l-4 border-neutral-900 pl-5 md:pl-8">
            <p className=" text-neutral-900 text-[20px] md:text-[30px] lg:text-[32px] leading-[140%] tracking-tight font-[450] font-display">
              &ldquo;{glareReduction.quote}&rdquo;
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleArticleContent;
