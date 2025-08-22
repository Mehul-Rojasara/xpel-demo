import React from "react";
import { Banner } from "../sections";
import { HelpCenterContentBox } from "../sections/HelpCenterContentBox";

interface HelpCenterProps {
  country: string;
  language: string;
}
const sectionsData = [
  {
    id: "product-info",
    heading: "Product Information",
    items: [
      {
        id: "sds",
        title: "Product Safety Data Sheets",
        description:
          "Find essential information on our products’ handling, storage, hazard and emergency procedures to ensure maximum safety.",
        link: "/product-safety",
      },
      {
        id: "specs",
        title: "Product Specifications",
        description:
          "Find important product details such as key features, dimensions and performance specs for optimal usage.",
        link: "/product-specifications",
      },
      {
        id: "bulletins",
        title: "Product Bulletins",
        description: "Stay informed with the latest updates on product features, changes, and safety protocols.",
        link: "/product-bulletins",
      },
    ],
  },
  {
    id: "care-maintenance",
    heading: "Care & Maintenance",
    items: [
      {
        id: "care",
        title: "Product Care Instructions",
        description: "Discover how to best care for your XPEL products with our manufacturer recommendations.",
        link: "/care-instructions",
      },
    ],
  },
  {
    id: "installation-support",
    heading: "Installation & Support",
    items: [
      {
        id: "install",
        title: "Installation Instructions",
        description: "Find detailed instructions to install your XPEL product, including DIY applications.",
        link: "/installation",
      },
      {
        id: "warranty",
        title: "Warranty Information",
        description: "Our commitment to quality is backed by comprehensive product warranties.",
        link: "/warranty",
      },
      {
        id: "faq",
        title: "Frequently Asked Questions",
        description: "Get answers to questions about purchase decisions, product care, and more.",
        link: "/faq",
      },
    ],
  },
];
export const HelpCenter: React.FC<HelpCenterProps> = () => {
  return (
    <div className="ppf-page">
      <Banner
        backgroundImage="/images/management/managementProfile.jpg"
        altText="Person applying protective film to car headlight"
        variant="promotional"
        content={{
          headline: {
            subtitle: "",
            title: "Help Center",
          },
        }}
      />

      <HelpCenterContentBox sections={sectionsData} />
    </div>
  );
};

export default HelpCenter;
