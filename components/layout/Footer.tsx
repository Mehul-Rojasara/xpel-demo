"use client";
import React from "react";
import Link from "next/link";
import { FOOTER_LINKS_DATA, FooterProps } from "@/config";
import { NewsletterForm } from "../forms/NewsletterForm";
import Image from "next/image";
import logoWhite from "@/assets/images/common/logo-white.png";
import Container from "@/components/ui/Container";

// Newsletter Signup Component
const NewsletterSignup: React.FC = () => {
  return (
    <>
      {/* Logo */}
      <div className="flex items-center justify-center md:justify-start mb-8 lg:mb-12">
        <Link href="/" className="max-w-[93px] md:max-w-[125px]">
          <Image src={logoWhite} alt="XPEL" title="XPEL" width={125} height={32} layout="intrinsic" />
        </Link>
      </div>

      {/* Newsletter Form */}
      <NewsletterForm />
    </>
  );
};

// Resources Section Component
const ResourcesSection: React.FC<{ country: string; language: string }> = ({ country, language }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>
      <h3 className="flex items-center gap-2 py-5 md:py-0 border-y border-neutral-500 md:border-none justify-between text-[16px] leading-[18px] font-display tracking-wider uppercase font-[500] text-white md:mb-6">
        {FOOTER_LINKS_DATA.resources.title}
        <button
          type="button"
          aria-expanded={isOpen}
          className="flex items-center gap-2 cursor-pointer md:hidden"
          onClick={() => setIsOpen((p) => !p)}
        >
          <i className={`${isOpen ? "icon-Minus" : "icon-Plus"} text-white text-[14px] font-bold`}></i>
        </button>
      </h3>
      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out md:overflow-visible max-h-0 md:max-h-none ${isOpen ? "max-h-[800px]" : "max-h-0"}`}
      >
        <ul className="space-y-4 py-4 md:py-0">
          {FOOTER_LINKS_DATA.resources.links.map((link) => (
            <li key={link.id}>
              <Link
                href={`/${country}/${language}${link.href}`}
                className="text-neutral-300 para-small hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                title={link.description}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Company Section Component
const CompanySection: React.FC<{ country: string; language: string }> = ({ country, language }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>
      <h3 className="flex items-center gap-2 justify-between  py-5 md:py-0 border-y border-neutral-500 md:border-none text-[16px] leading-[18px] font-display tracking-wider uppercase font-[500] text-white md:mb-6">
        {FOOTER_LINKS_DATA.company.title}
        <button
          type="button"
          aria-expanded={isOpen}
          className="flex items-center gap-2 cursor-pointer md:hidden"
          onClick={() => setIsOpen((p) => !p)}
        >
          <i className={`${isOpen ? "icon-Minus" : "icon-Plus"} text-white text-[14px] font-bold`}></i>
        </button>
      </h3>
      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out md:overflow-visible max-h-0 md:max-h-none ${isOpen ? "max-h-[800px]" : "max-h-0"}`}
      >
        <ul className="space-y-4 py-4 md:py-0">
          {FOOTER_LINKS_DATA.company.links.map((link) => (
            <li key={link.id}>
              <Link
                href={`/${country}/${language}${link.href}`}
                className="text-neutral-300 para-small hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                title={link.description}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Contact Section Component
const ContactSection: React.FC<{ country: string; language: string }> = ({ country, language }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>
      <h3 className="flex items-center gap-2 justify-between  py-5 md:py-0 border-y border-neutral-500 md:border-none text-[16px] leading-[18px] font-display tracking-wider uppercase font-[500] text-white md:mb-6">
        {FOOTER_LINKS_DATA.contact.title}
        <button
          type="button"
          aria-expanded={isOpen}
          className="flex items-center gap-2 cursor-pointer md:hidden"
          onClick={() => setIsOpen((p) => !p)}
        >
          <i className={`${isOpen ? "icon-Minus" : "icon-Plus"} text-white text-[14px] font-bold`}></i>
        </button>
      </h3>
      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out md:overflow-visible max-h-0 md:max-h-none ${isOpen ? "max-h-[800px]" : "max-h-0"}`}
      >
        <ul className="space-y-4 py-4 md:py-0">
          {FOOTER_LINKS_DATA.contact.links.map((link) => (
            <li key={link.id}>
              {"isPhone" in link && link.isPhone ? (
                <a
                  href={link.href}
                  className="text-neutral-300 para-small hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                  aria-label={link.description}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  href={`/${country}/${language}${link.href}`}
                  className="text-neutral-300 para-small hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                  title={link.description}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Social Media Icons Component
const SocialMediaIcons: React.FC = () => {
  const getSocialIcon = (icon: string) => {
    switch (icon) {
      case "facebook":
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clipRule="evenodd"
            />
          </svg>
        );
      case "youtube":
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
              clipRule="evenodd"
            />
          </svg>
        );
      case "instagram":
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
              clipRule="evenodd"
            />
          </svg>
        );
      case "twitter":
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        );
      case "linkedin":
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
              clipRule="evenodd"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex space-x-4">
      {FOOTER_LINKS_DATA.social.links.map((link) => (
        <a
          key={link.id}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          aria-label={link.description}
        >
          {getSocialIcon(link.icon || "")}
        </a>
      ))}
    </div>
  );
};

// Legal Links Component
const LegalLinks: React.FC<{ country: string; language: string }> = ({ country, language }) => (
  <div className="flex flex-wrap items-center space-x-4 justify-center md:justify-start gap-y-4 text-sm">
    <span className="text-neutral-300 para-xsmall">© XPEL 2025</span>
    {FOOTER_LINKS_DATA.legal.links.map((link) => (
      <Link
        key={link.id}
        href={`/${country}/${language}${link.href}`}
        className="text-neutral-300 para-xsmall hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
        title={link.description}
      >
        {link.label}
      </Link>
    ))}
  </div>
);

// Main Footer Component
export const Footer: React.FC<FooterProps> = ({ country, language }) => {
  return (
    <footer className="bg-neutral-900 text-white" role="contentinfo">
      {/* Main Footer Content */}
      <Container className="xl:!px-[120px] 2xl:!px-6">
        <div className="flex py-[64px] flex-col md:flex-row justify-center md:justify-between lg:py-[80px] xl:py-[104px]">
          {/* Newsletter Signup */}
          <div className="w-full md:max-w-[280px] lg:max-w-[350px] xl:max-w-[392px] flex flex-col justify-center md:justify-start mb-12 md:mb-0">
            <NewsletterSignup />
          </div>

          {/* Resources */}
          <div>
            <ResourcesSection country={country} language={language} />
          </div>

          {/* Company */}
          <div>
            <CompanySection country={country} language={language} />
          </div>

          {/* Contact */}
          <div>
            <ContactSection country={country} language={language} />
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div>
        <Container className="xl:!px-[120px] 2xl:!px-6">
          <div className="flex flex-col gap-5 Mdx:gap-1 Mdx:flex-row Mdx:justify-between justify-center items-center space-y-4 sm:space-y-0 pb-8 lg:pb-9 xl:pb-[42px]">
            {/* Left Side - Language Selector and Legal Links */}
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <LegalLinks country={country} language={language} />
            </div>

            {/* Right Side - Social Media Icons */}
            <div>
              <SocialMediaIcons />
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};
