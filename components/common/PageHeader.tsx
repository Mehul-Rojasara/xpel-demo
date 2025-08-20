import React from 'react';
import Link from 'next/link';
import Container from '@/components/ui/Container';

interface PageHeaderProps {
  readonly title: string;
  readonly subtitle?: string;
  readonly backLink?: {
    readonly text: string;
    readonly href: string;
  };
  readonly className?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  backLink,
  className = ''
}) => {
  return (
    <header className={`bg-neutral-100 border-b border-neutral-200 ${className}`}>
      <Container>
        <div className="py-12 sm:py-16 md:py-20 text-center">
          {/* Back Link */}
          {backLink && (
            <div className="mb-8">
              <Link 
                href={backLink.href}
                className="inline-flex items-center text-neutral-600 hover:text-neutral-900 transition-colors duration-200 font-sans font-[450] text-base leading-[150%] tracking-[0.01em]"
              >
                <i className="icon-Arrow-Left mr-2 text-sm" aria-hidden="true"></i>
                {backLink.text}
              </Link>
            </div>
          )}
          
          {/* Page Title */}
          <h1 className="font-h1 text-neutral-900 mb-6 font-display font-medium leading-[110%] tracking-[-0.01em] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center">
            {title}
          </h1>
          
          {/* Page Subtitle */}
          {subtitle && (
            <p className="para-large text-neutral-600 text-lg sm:text-xl max-w-4xl mx-auto text-center">
              {subtitle}
            </p>
          )}
        </div>
      </Container>
    </header>
  );
}; 