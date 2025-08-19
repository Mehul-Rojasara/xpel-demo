import React from 'react';
import { Banner } from '@/components/sections/Banner';
import { GetInTouchSection } from '@/components/contact/GetInTouchSection';
import { CorporateOfficesSection } from '@/components/contact/CorporateOfficesSection';
import { AdditionalContactsSection } from '@/components/contact/AdditionalContactsSection';
import { AboutSection } from '@/components/common/AboutSection';

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Banner Section */}
      <Banner
        title="Contact Us"
        backgroundImage="/images/contactus-banner.jpg"
        altText="Orange sports car in garage - Contact Us banner"
        variant="simple"
        className="h-[500px]"
      />

      {/* Get in Touch Section */}
      <GetInTouchSection />

      {/* Corporate & International Offices Section */}
      <CorporateOfficesSection />

      {/* Additional Contacts Section */}
      <AdditionalContactsSection />

      {/* Remote Assist Section - Replaced with AboutSection */}
      <AboutSection
        title="Remote Assist"
        description="From paint protection to interior protection, tint, car care & self-installation kits, we've got everything you need to keep your car or truck looking its best for as long as you own it."
        ctaText="Learn More"
        ctaHref="/remote-assist"
        customBackgroundColor="#364258"
        textAlignment="left"
      />
    </div>
  );
} 