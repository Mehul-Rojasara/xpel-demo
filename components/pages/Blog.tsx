import React from "react";
import { BlogStories } from "../sections/BlogStories";
import { ArticleSectionBox } from "../common/ArticleBox";
import { InstallerSpotlights } from "../common/VideoSlider";
import { LatestArticles } from "../sections";
import { ServiceBlocks } from "../common";

interface BlogProps {
  country: string;
  language: string;
}

export const Blog: React.FC<BlogProps> = () => {
  const eventsArticles = [
    {
      id: 1,
      title: "Porsche Panamera 4S Gets ULTIMATE Protection",
      category: "Events",
      image: "/images/blogPage/stories1.png",
    },
    {
      id: 2,
      title: "A Look Back On The Highlights And Winners At XPEL Dealer Conference 2024",
      category: "Events",
      image: "/images/blogPage/stories1.png",
    },
    {
      id: 3,
      title: "See Ultra Rare Hybrid Lamborghini Sian Roadster Protected With XPEL PPF & Ceramic Coating At SEMA",
      category: "Events",
      image: "/images/blogPage/stories1.png",
    },
    {
      id: 4,
      title: "Highlights From XPEL 375 At Texas Motor Speedway",
      category: "Events",
      image: "/images/blogPage/stories1.png",
    },
  ];

  const serviceBlocks = [
    {
      id: 'installer-locator',
      title: 'Find an XPEL Installer Near You',
      description: 'Find local pros who nail the perfect XPEL protection install every time.',
      ctaText: 'Learn More',
      ctaHref: '/installer-locator',
      iconClass: 'icon-Xpel-Installer',
      iconAlt: 'Location pin icon for finding XPEL installer'
    },
    {
      id: 'coverage-options',
      title: 'Coverage Options For My Car',
      description: 'Explore our comprehensive protection options for your specific vehicle.',
      ctaText: 'Explore Options',
      ctaHref: '/coverage-options',
      iconClass: 'icon-Coverage-Options',
      iconAlt: 'Car icon for coverage options'
    },
    {
      id: 'become-dealer',
      title: 'Become a Dealer',
      description: 'Team up with us and start offering premium protection solutions to your customers.',
      ctaText: 'Get Started',
      ctaHref: '/become-dealer',
      iconClass: 'icon-Become-a-Dealer',
      iconAlt: 'User icon for becoming a dealer'
    }
  ];

  const productArticles = [
    {
      id: 1,
      title: "FUSION PLUS MARINE Ceramic Coating Protects 170 MPH Power Boat",
      category: "Product",
      image: "/images/blogPage/stories1.png",
    },
    {
      id: 2,
      title: "New XPEL CARE Products Give Your Car A Clean Start And A Fresh Finish",
      category: "Product",
      image: "/images/blogPage/stories1.png",
    },
    {
      id: 3,
      title:
        "6 Ways XPEL Commercial Window Film Helps Protect, Save Cash, And Improve Interior Quality For Building Owners",
      category: "Product",
      image: "/images/blogPage/stories1.png",
    },
    {
      id: 4,
      title: "FUSION PLUS SATIN Ceramic Coating Offers Premium Protection For Satin Paint",
      category: "Product",
      image: "/images/blogPage/stories1.png",
    },
  ];

  return (
    <div className="blog-page">
      {/* Blog Stories Slider/Section */}
      <BlogStories />

      <ArticleSectionBox title="Product" items={productArticles} theme="light" featuredSide="right" />

      <ArticleSectionBox title="Events" items={eventsArticles} theme="dark" featuredSide="left" />

      <ArticleSectionBox title="Product" items={productArticles} theme="light" featuredSide="right" />

      <LatestArticles title="News & Press" />

      <ArticleSectionBox title="Product" items={productArticles} theme="light" featuredSide="left" />

      <ArticleSectionBox title="Events" items={eventsArticles} theme="dark" featuredSide="right" />

      <ServiceBlocks services={serviceBlocks} background="dark" columns={3} spacing="lg" />
    
    </div>
  );
};

export default Blog;
