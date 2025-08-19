'use client';

import React from 'react';
import Container from '@/components/ui/Container';
import { LegalPolicy } from '@/config/legal';

interface LegalPoliciesSectionProps {
  readonly policies?: readonly LegalPolicy[];
  readonly className?: string;
  readonly country?: string;
  readonly language?: string;
}

const PolicyCard: React.FC<{ 
  readonly policy: LegalPolicy; 
  readonly country: string; 
  readonly language: string; 
}> = ({ policy, country, language }) => {
  const generateUrl = (path: string) => `/${country}/${language}${path}`;
  
  return (
    <article
      className="bg-white border-2 border-neutral-300 rounded-[14px] p-4 sm:p-6 hover:border-neutral-400 transition-all duration-300 group cursor-pointer h-full"
      role="button"
      tabIndex={0}
      aria-label={`${policy.title} - ${policy.description}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          window.location.href = generateUrl(policy.href);
        }
      }}
      onClick={() => window.location.href = generateUrl(policy.href)}
    >
      <h3 className="font-h3 text-neutral-900 mb-3 sm:mb-4 text-lg sm:text-xl md:text-2xl">
        {policy.title}
      </h3>
      <p className="para-medium text-neutral-600 text-sm sm:text-base leading-relaxed">
        {policy.description}
      </p>
    </article>
  );
};

export const LegalPoliciesSection: React.FC<LegalPoliciesSectionProps> = ({
  policies = [],
  className = "",
  country = "us",
  language = "en"
}) => {
  return (
    <section 
      className={`py-16 sm:py-20 md:py-24 bg-white ${className}`}
      role="region" 
      aria-label="Legal policies and agreements"
    >
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