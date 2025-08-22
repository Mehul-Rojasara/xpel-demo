import React from 'react';
import { CmsPageWrapper } from '@/components/common/CmsPageWrapper';
import { TERMS_CONDITIONS_DATA } from '@/config/terms-conditions';

export const metadata = {
  title: 'XPEL - Terms & Conditions',
  description: 'XPEL Terms & Conditions - Learn about the terms of use for our website and services'
};

interface TermsConditionsPageProps {
  readonly params: Promise<{
    readonly country: string;
    readonly language: string;
  }>;
}

export default async function TermsConditionsPage({ params }: TermsConditionsPageProps) {
  const { country, language } = await params;

  return (
    <CmsPageWrapper
      data={TERMS_CONDITIONS_DATA}
      backLink={{
        text: 'Back to Legal',
        href: `/${country}/${language}/legal`
      }}
    />
  );
} 