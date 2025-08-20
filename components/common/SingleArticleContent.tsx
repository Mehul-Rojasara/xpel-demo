import React from 'react';
import Image from 'next/image';

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
  readonly paragraphs: readonly string[];
}

interface IntroductionSection {
  readonly paragraphs: readonly string[];
}

interface MainArticleSection {
  readonly title: string;
  readonly paragraphs: readonly string[];
  readonly bulletPoints?: readonly string[];
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
  className = ''
}) => {
  return (
    <div className={className}>
      {/* Introduction Text Section */}
      {introduction && (
        <section className="bg-white py-16" aria-labelledby="introduction-heading">
          <div className="max-w-4xl mx-auto px-[120px]">
            <div className="space-y-6">
              {introduction.paragraphs.map((paragraph, index) => (
                <p key={index} className="para-medium text-neutral-700">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Article Content Section */}
      {mainArticle && (
        <section className="bg-white py-16" aria-labelledby="main-article-heading">
          <div className="max-w-4xl mx-auto px-[120px]">
            <header className="mb-8">
              <h2 id="main-article-heading" className="font-h2 text-neutral-900 text-center">
                {mainArticle.title}
              </h2>
            </header>

            <div className="space-y-6 mb-8">
              {mainArticle.paragraphs.map((paragraph, index) => (
                <p key={index} className="para-medium text-neutral-700">
                  {paragraph}
                </p>
              ))}
            </div>

            {mainArticle.bulletPoints && (
              <ul className="space-y-4" role="list">
                {mainArticle.bulletPoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span
                      className="w-2 h-2 bg-neutral-900 rounded-full mt-3 mr-4 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="para-medium text-neutral-700">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      )}

      {/* Glare Reduction Benefits Section - First (with images) */}
      {glareReduction && (
        <section className="bg-white py-16" aria-labelledby="glare-reduction-heading">
          <div className="max-w-4xl mx-auto px-[120px]">
            <header className="mb-8">
              <h2 id="glare-reduction-heading" className="font-h2 text-neutral-900 text-center mb-8">
                {glareReduction.title}
              </h2>
            </header>
            
            <div className="space-y-6 mb-12">
              <p className="para-medium text-neutral-700">
                {glareReduction.paragraph1}
              </p>
              <p className="para-medium text-neutral-700">
                {glareReduction.paragraph2}
              </p>
            </div>

            {/* Two Column Image Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Left Image - Office Space */}
              <div className="relative">
                <div className="aspect-[4/3] bg-neutral-100 rounded-lg overflow-hidden">
                  <Image
                    src={glareReduction.leftImage.src}
                    alt={glareReduction.leftImage.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <p className="text-sm text-neutral-700 font-medium">
                    {glareReduction.leftImage.overlayText}
                  </p>
                </div>
              </div>

              {/* Right Image - Window Film Application */}
              <div className="relative">
                <div className="aspect-[4/3] bg-neutral-100 rounded-lg overflow-hidden">
                  <Image
                    src={glareReduction.rightImage.src}
                    alt={glareReduction.rightImage.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* Security Film Benefits Section - Second (text only) */}
      {securityFilm && (
        <section className="bg-neutral-50 py-16" aria-labelledby="security-film-heading">
          <div className="max-w-4xl mx-auto px-[120px]">
            <header className="mb-8">
              <h2 id="security-film-heading" className="font-h2 text-neutral-900 text-center mb-8">
                {securityFilm.title}
              </h2>
            </header>
            
            <div className="space-y-6">
              {securityFilm.paragraphs.map((paragraph, index) => (
                <p key={index} className="para-medium text-neutral-700">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Quote Section - At the very end */}
      {glareReduction && (
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-[120px]">
            <blockquote className="border-l-4 border-neutral-900 pl-6 py-4 bg-neutral-50 rounded-r-lg">
              <p className="text-xl font-semibold text-neutral-900 italic">
                &ldquo;{glareReduction.quote}&rdquo;
              </p>
            </blockquote>
          </div>
        </section>
      )}
    </div>
  );
};

export default SingleArticleContent; 