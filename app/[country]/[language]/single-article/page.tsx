import React, { Suspense } from 'react';
import { 
  BlogHeader, 
  HeroBannerSection,
  ProductHighlightCard,
  ProductSlider,
  ServiceSlider,
  ServiceBlocks,
  SingleArticleContent
} from '@/components/common';
import { windowProducts } from '@/config/products';
import { singleArticleData } from '@/config/article-content';
import { videoContent } from '@/config/video-content';
import { serviceBlocksData } from '@/config/service-blocks';

// Loading component for Suspense fallback
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-neutral-900"></div>
  </div>
);

export default function SingleArticlePage() {
  return (
    <main 
      className="bg-white" 
      role="main" 
      aria-label="Single Article Page"
    >
      <Suspense fallback={<LoadingFallback />}>
      {/* Article Header */}
      <BlogHeader
        title="6 Ways XPEL Commercial Window Film Helps Protect, Save Costs, And Improve Interior Quality For Building Owners"
        publishDate="June 26, 2023"
        breadcrumbs={[
          { text: 'Blog', href: '/blog' },
          { text: 'Product', href: '/blog/product' }
        ]}
      />
      
      {/* Top Hero Video Section - Fixed Aspect Ratio 1440x810 */}
      <section 
        className="relative w-full bg-neutral-600 overflow-hidden" 
        aria-label="Hero video section"
        aria-describedby="top-hero-description"
      >
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="relative w-full aspect-[16/9] h-[810px]">
            <HeroBannerSection
              videoSrc="/videos/xpel-architectural-hero.mp4"
              headline=""
              subtitle=""
              textColor="white"
              textAlignment="center"
              overlayOpacity={0.5}
              className="h-full w-full"
            />
          </div>
        </div>
        <div id="top-hero-description" className="sr-only">
          Hero video showcasing XPEL commercial window film benefits
        </div>
      </section>
      
      {/* Introduction Text Section */}
      <SingleArticleContent
        introduction={singleArticleData.introduction}
      />
      
      {/* Ultimate Plus Product Highlight */}
      <section 
        className="bg-white py-16" 
        aria-labelledby="ultimate-plus-heading"
        aria-describedby="ultimate-plus-description"
      >
        <div className="max-w-6xl mx-auto px-[120px]">
          <ProductHighlightCard
            imageSrc="/images/header/bmw-rally.webp"
            imageAlt="XPEL Ultimate Plus paint protection film on car"
            title="ULTIMATE PLUS"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod."
            buttonText="Learn More"
            buttonHref="/products/ultimate-plus"
          />
        </div>
        <div id="ultimate-plus-description" className="sr-only">
          XPEL Ultimate Plus paint protection film product highlight
        </div>
      </section>
      
      {/* Main Article Content */}
      <SingleArticleContent
        mainArticle={singleArticleData.mainArticle}
      />
      
      {/* XPEL Ceramic Boost Product Highlight */}
      <section 
        className="bg-white py-16" 
        aria-labelledby="ceramic-boost-heading"
        aria-describedby="ceramic-boost-description"
      >
        <div className="max-w-6xl mx-auto px-[120px]">
          <ProductHighlightCard
            imageSrc="/images/header/ceramic-coating.webp"
            imageAlt="XPEL Ceramic Boost applicator tool"
            title="XPEL Ceramic Boost"
            price="$436.95"
            buttonText="View Product"
            buttonHref="/products/ceramic-boost"
          />
        </div>
        <div id="ceramic-boost-description" className="sr-only">
          XPEL Ceramic Boost product highlight with pricing
        </div>
      </section>
      
      {/* Bottom Hero Video Section - Fixed Aspect Ratio 1440x810 */}
      <section 
        className="relative w-full bg-neutral-600 overflow-hidden" 
        aria-label="Bottom hero video section"
        aria-describedby="bottom-hero-description"
      >
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="relative w-full aspect-[16/9] h-[810px]">
            <HeroBannerSection
              videoSrc="/videos/xpel-architectural-hero.mp4"
              headline="Transform Your Building"
              subtitle="Experience the benefits of XPEL commercial window films"
              textColor="white"
              textAlignment="center"
              overlayOpacity={0.5}
              className="h-full w-full"
            />
          </div>
        </div>
        <div id="bottom-hero-description" className="sr-only">
          Bottom hero video with building transformation message
        </div>
      </section>
      
      {/* Shop Window Products Section */}
      <section 
        aria-labelledby="shop-window-products-heading"
        aria-describedby="shop-window-products-description"
      >
        <div id="shop-window-products-heading" className="sr-only">
          <h2>Shop Window Products</h2>
        </div>
        <ProductSlider
          title="Shop Window Products"
          subtitle="Discover our range of professional window film solutions"
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
        securityFilm={singleArticleData.securityFilm}
      />

      {/* More from Product Section */}
      <section 
        aria-labelledby="more-from-product-heading"
        aria-describedby="more-from-product-description"
      >
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
      <section 
        aria-labelledby="service-blocks-heading"
        aria-describedby="service-blocks-description"
      >
        <div id="service-blocks-heading" className="sr-only">
          <h2 className="font-h2">Service Options</h2>
        </div>
        <ServiceBlocks
          services={serviceBlocksData}
          background="dark"
          className=""
        />
        <div id="service-blocks-description" className="sr-only">
          Service blocks showcasing installation, coverage, and dealer options
        </div>
      </section>
        </Suspense>
    </main>
  );
} 