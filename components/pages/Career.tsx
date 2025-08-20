import React from "react";
import { BannerHeader } from "../common/BannerHeader";
import { DocsGrid } from "../common/DocGrid";

interface CareerProps {
  country: string;
  language: string;
}

export const Career: React.FC<CareerProps> = () => {
  return (
    <div className="ppf-page">
      {/* Promotional Banner */}
      <BannerHeader title="Career" description="Xpel Career" />
      <DocsGrid
        documents={[
          { title: "Software Engineer", description: "Develop cutting-edge software", pdfUrl: "#" },
          { title: "UX Designer", description: "Design user-centered experiences", pdfUrl: "#" },
          { title: "QA Analyst", description: "Ensure product quality", pdfUrl: "#" },
        ]}
        isCareerPage={true}
      />
    </div>
  );
};

export default Career;
