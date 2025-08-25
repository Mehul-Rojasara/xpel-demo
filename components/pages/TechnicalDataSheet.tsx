import React from "react";
import { DocsGrid } from "../common/DocGrid";
import { Banner } from '@/components/sections/Banner';
import { Accordion } from '@/components/ui/Accordion';
import Container from '@/components/ui/Container';

interface FAQSectionProps {
  readonly items: ReadonlyArray<{ readonly id: string; readonly title: string; readonly content: string }>;
  readonly className?: string;
}

const FAQSection: React.FC<FAQSectionProps> = ({ items, className }) => {
  return (
    <section 
      className={`${className} bg-white`}
    >
      <Container>
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

interface TechnicalDataSheetProps {
  country: string;
  language: string;
}

export const TechnicalDataSheet: React.FC<TechnicalDataSheetProps> = () => {

  const technicalDataSheet = [
    {
      id: "data-privacy-notice",
      title: "Data Privacy Notice",
      description: "Learn how we handle and protect your personal data.",
      pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    },
    {
      id: "employee-privacy-notice",
      title: "Employee Privacy Notice",
      description: "Details about how employee data is collected and used.",
      pdfUrl: "https://www.africau.edu/images/default/sample.pdf",
    },
    {
      id: "cookie-policy",
      title: "Cookie Policy",
      description: "Information about our use of cookies.",
      pdfUrl: "https://www.orimi.com/pdf-test.pdf",
    },
    {
      id: "terms-conditions",
      title: "Terms & Conditions",
      description: "Our legal terms and conditions for using the service.",
      pdfUrl: "https://gahp.net/wp-content/uploads/2017/09/sample.pdf",
    },
    {
      id: "software-use-agreement",
      title: "Software Use Agreement",
      description: "Rules and rights for using our software products.",
      pdfUrl: "https://www.clickdimensions.com/links/TestPDFfile.pdf",
    },
  ];

  const faqItems = technicalDataSheet.map((block) => ({
    id: block.id,
    title: block.title,
    content: block.description
  }));

  return (
    <>
      <Banner
        backgroundImage="/images/partnership/partnership-group-header.jpg"
        altText="Person applying protective film to car headlight"
        variant="promotional"
        className='h-[40rem] md:h-[42.5rem] lg:h-[520px]'
        content={{
          headline: {
            title: "Technical Data Sheet"
          }
        }}
      />
      {/* Technical Data Sheet Section */}
      <FAQSection
        items={faqItems}
        className="section-spacing-y"
      />
      {/* Promotional Banner */}
      {/* <BannerHeader title="Technical Data Sheet" description="Collection of Xpel’s terms, policies and agreements" /> */}
      <DocsGrid
        documents={[
          {
            id: "data-privacy-notice",
            title: "Data Privacy Notice",
            description: "Learn how we handle and protect your personal data.",
            pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
          },
          {
            id: "employee-privacy-notice",
            title: "Employee Privacy Notice",
            description: "Details about how employee data is collected and used.",
            pdfUrl: "https://www.africau.edu/images/default/sample.pdf",
          },
          {
            id: "cookie-policy",
            title: "Cookie Policy",
            description: "Information about our use of cookies.",
            pdfUrl: "https://www.orimi.com/pdf-test.pdf",
          },
          {
            id: "terms-conditions",
            title: "Terms & Conditions",
            description: "Our legal terms and conditions for using the service.",
            pdfUrl: "https://gahp.net/wp-content/uploads/2017/09/sample.pdf",
          },
          {
            id: "software-use-agreement",
            title: "Software Use Agreement",
            description: "Rules and rights for using our software products.",
            pdfUrl: "https://www.clickdimensions.com/links/TestPDFfile.pdf",
          },
        ]}
      />
    </>
  );
};

export default TechnicalDataSheetProps;
