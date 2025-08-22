"use client";
import React from "react";
import Container from "@/components/ui/Container";
import { LegalPolicy } from "@/config/legal";

// Extended interface for policies that might have PDF functionality
interface ExtendedLegalPolicy extends LegalPolicy {
  pdfUrl?: string;
}

interface LegalPoliciesSectionProps {
  readonly policies?: readonly ExtendedLegalPolicy[];
  readonly className?: string;
  readonly country?: string;
  readonly language?: string;
}

const PolicyCard: React.FC<{
  readonly policy: ExtendedLegalPolicy;
  readonly country: string;
  readonly language: string;
}> = ({ policy, country, language }) => {
  const generateUrl = (path: string) => `/${country}/${language}${path}`;

  // Check if this is a PDF document (has pdfUrl property)
  const isPdfDocument = policy.pdfUrl && policy.pdfUrl.length > 0;

  const handleCardClick = () => {
    if (isPdfDocument && policy.pdfUrl) {
      // For PDF documents, open in new tab
      window.open(policy.pdfUrl, "_blank");
    } else {
      // For regular legal policies, navigate to the page
      window.location.href = generateUrl(policy.href);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleCardClick();
    }
  };

  const handleDownloadPdf = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isPdfDocument && policy.pdfUrl) {
      const link = document.createElement("a");
      link.href = policy.pdfUrl;
      link.download = `${policy.title.replace(/[^a-zA-Z0-9]/g, "_")}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <article
      className="bg-white border border-neutral-300 rounded-[0.875rem] p-4 sm:p-6 hover:border-neutral-400 transition-all duration-300 group cursor-pointer h-full"
      role="button"
      tabIndex={0}
      aria-label={`${policy.title} - ${policy.description}`}
      onKeyDown={handleKeyDown}
      onClick={handleCardClick}
    >
      <p className="font-h5 font-medium text-neutral-900 mb-2">{policy.title}</p>
      <p className="para-small text-neutral-600 leading-[150%]">{policy.description}</p>

      {/* Show PDF actions only if pdfUrl is provided */}
      {isPdfDocument && (
        <div className="mt-4 pt-4 border-t border-neutral-200">
          <div className="flex items-center justify-between">
            <span className="text-sm text-neutral-500 font-medium">PDF Document</span>
            <div className="flex gap-3">
              <button
                onClick={handleCardClick}
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200"
              >
                View PDF
                <i className="icon-Arrow-Right ml-2 text-sm" aria-hidden="true"></i>
              </button>
              <button
                onClick={handleDownloadPdf}
                className="inline-flex items-center text-green-600 hover:text-green-800 font-medium text-sm transition-colors duration-200"
              >
                Download
                <i className="icon-Download ml-2 text-sm" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </article>
  );
};

export const LegalPoliciesSection: React.FC<LegalPoliciesSectionProps> = ({
  policies = [],
  className = "",
  country = "us",
  language = "en",
}) => {
  return (
    <section className={`section-spacing-bottom ${className}`} aria-label="Legal policies and agreements">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {policies.map((policy) => (
            <PolicyCard key={policy.id} policy={policy} country={country} language={language} />
          ))}
        </div>
        {policies.length === 0 && (
          <div className="text-center py-12">
            <p className="text-neutral-500 text-lg">No legal policies available at the moment.</p>
          </div>
        )}
      </Container>
    </section>
  );
};
