import React, { Suspense } from "react";
import {
  BlogHeader,
  HeroBannerSection,
  ProductHighlightCard,
  ProductSlider,
  ServiceSlider,
  ServiceBlocks,
  SingleArticleContent,
} from "@/components/common";
import { windowProducts } from "@/config/products";
import { singleArticleData } from "@/config/article-content";
import { videoContent } from "@/config/video-content";
import { serviceBlocksData } from "@/config/service-blocks";
import VideoLarge from "@/components/common/VideoLarge";
import Container from "@/components/ui/Container";

// Loading component for Suspense fallback
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-neutral-900"></div>
  </div>
);

export default function SingleArticlePage() {
  // Helper function to transform string arrays to objects with id and text
  const transformParagraphs = (paragraphs: readonly string[], prefix: string) =>
    paragraphs.map((text, index) => ({
      id: `${prefix}-${index + 1}`,
      text,
    }));

  // Transform the article data to match component expectations
  const transformedIntroduction = {
    paragraphs: transformParagraphs(singleArticleData.introduction.paragraphs, "intro"),
  };

  const transformedMainArticle = {
    title: singleArticleData.mainArticle.title,
    paragraphs: transformParagraphs(singleArticleData.mainArticle.paragraphs, "main"),
    bulletPoints: singleArticleData.mainArticle.bulletPoints
      ? transformParagraphs(singleArticleData.mainArticle.bulletPoints, "bullet")
      : undefined,
  };

  const transformedSecurityFilm = {
    title: singleArticleData.securityFilm.title,
    paragraphs: transformParagraphs(singleArticleData.securityFilm.paragraphs, "security"),
  };

  return (
    <div className="bg-white mt-16 md:mt-[5rem] Lgx:mt-[5.5rem]" role="main" aria-label="Single Article Page">
      <Suspense fallback={<LoadingFallback />}>
        {/* Article Header */}
        <BlogHeader
          title="6 Ways XPEL Commercial Window Film Helps Protect, Save Costs, And Improve Interior Quality For Building Owners"
          publishDate="June 26, 2023"
          breadcrumbs={[
            { id: "blog", text: "Blog", href: "/blog" },
            { id: "product", text: "Product", href: "/blog/product" },
          ]}
        />

        <VideoLarge
          className="max-w-[90rem] lg:rounded-[0.875rem] min-h-[13.125rem] Xxl:min-h-[50.625rem]"
          videoClass="w-full min-h-[13.125rem] Xxl:min-h-[50.625rem]"
        />

        {/* Introduction Text Section */}
        <SingleArticleContent introduction={transformedIntroduction} />

        {/* Ultimate Plus Product Highlight */}
        <section>
          <Container>
            <ProductHighlightCard
              imageSrc="/images/header/bmw-rally.webp"
              imageAlt="XPEL Ultimate Plus paint protection film on car"
              title="ULTIMATE PLUS"
              description="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod."
              buttonText="Learn More"
              buttonHref="/products/ultimate-plus"
            />
          </Container>
          <div id="ultimate-plus-description" className="sr-only">
            XPEL Ultimate Plus paint protection film product highlight
          </div>
        </section>

        {/* Main Article Content */}
        <SingleArticleContent mainArticle={transformedMainArticle} />

        {/* XPEL Ceramic Boost Product Highlight */}
        <section
          className="bg-white"
          aria-labelledby="ceramic-boost-heading"
          aria-describedby="ceramic-boost-description"
        >
          <Container>
            <ProductHighlightCard
              imageSrc="/images/header/ceramic-coating.webp"
              imageAlt="XPEL Ceramic Boost applicator tool"
              title="XPEL Ceramic Boost"
              price="$436.95"
              buttonText="View Product"
              buttonHref="/products/ceramic-boost"
            />
          </Container>
          <div id="ceramic-boost-description" className="sr-only">
            XPEL Ceramic Boost product highlight with pricing
          </div>
        </section>

        {/* Bottom Hero Video Section - Fixed Aspect Ratio 1440x810 */}

        <div className="section-small-spacing-y">
          <VideoLarge
            className="max-w-[47.5rem] rounded-[0.875rem] "
            videoClass="min-h-[11.5rem] lg:min-h-[26.688rem]"
          />
        </div>

        {/* Shop Window Products Section */}
        <section aria-labelledby="shop-window-products-heading" aria-describedby="shop-window-products-description">
          <div id="shop-window-products-heading" className="sr-only">
            <h2>Shop Window Products</h2>
          </div>
          <ProductSlider
            title="Shop Window Products"
            products={windowProducts}
            cardsPerView={4}
            showNavigation={true}
            showProgress={true}
            background="light"
            showButton={true}
            buttonText="Shop All"
            buttonHref="/products"
          />
          <div id="shop-window-products-description" className="sr-only">
            Product slider showcasing window film solutions
          </div>
        </section>

        {/* Dynamic Article Content */}
        <SingleArticleContent
          glareReduction={singleArticleData.glareReduction}
          securityFilm={transformedSecurityFilm}
        />

        {/* More from Product Section */}
        <section aria-labelledby="more-from-product-heading" aria-describedby="more-from-product-description">
          <div id="more-from-product-heading" className="sr-only">
            <h2 className="font-h2">More from Product</h2>
          </div>
          <ServiceSlider
            title="More from Product"
            services={videoContent}
            cardsPerView={3}
            showNavigation={true}
            showProgress={true}
            background="dark"
            showButton={true}
            buttonText="View All"
            buttonHref="/videos"
            showDescriptions={true}
          />
          <div id="more-from-product-description" className="sr-only">
            Video content slider with product-related videos
          </div>
        </section>

        {/* Service Blocks Section */}
        <section aria-labelledby="service-blocks-heading" aria-describedby="service-blocks-description">
          <div id="service-blocks-heading" className="sr-only">
            <h2 className="font-h2">Service Options</h2>
          </div>
          <ServiceBlocks services={serviceBlocksData} background="dark" className="" />
          <div id="service-blocks-description" className="sr-only">
            Service blocks showcasing installation, coverage, and dealer options
          </div>
        </section>
      </Suspense>
    </div>
  );
}
