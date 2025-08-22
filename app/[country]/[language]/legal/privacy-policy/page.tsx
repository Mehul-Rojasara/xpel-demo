import React from 'react';
import { CmsPageWrapper } from '@/components/common/CmsPageWrapper';
import { PRIVACY_POLICY_DATA } from '@/config/privacy-policy';

export const metadata = {
  title: 'XPEL - Privacy Policy',
  description: 'XPEL Privacy Policy - Learn how we collect, use, and protect your personal data'
};

interface PrivacyPolicyPageProps {
  readonly params: Promise<{
    readonly country: string;
    readonly language: string;
  }>;
}

export default async function PrivacyPolicyPage({ params }: PrivacyPolicyPageProps) {
  const { country, language } = await params;

  return (
    <CmsPageWrapper
      data={PRIVACY_POLICY_DATA}
      backLink={{
        text: 'Back to Legal',
        href: `/${country}/${language}/legal`
      }}
    />
  );
} 