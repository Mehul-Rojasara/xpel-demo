import React from "react";
import { BannerHeader } from "../common/BannerHeader";
import { DocsGrid } from "../common/DocGrid";

interface TechnicalDataSheetProps {
  country: string;
  language: string;
}

export const TechnicalDataSheet: React.FC<TechnicalDataSheetProps> = () => {
  return (
    <div className="ppf-page">
      {/* Promotional Banner */}
      <BannerHeader title="Technical Data Sheet" description="Collection of Xpel’s terms, policies and agreements" />
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
    </div>
  );
};

export default TechnicalDataSheetProps;
