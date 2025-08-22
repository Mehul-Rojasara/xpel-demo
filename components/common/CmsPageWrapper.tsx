import React from 'react';
import Container from '@/components/ui/Container';
import { PageHeader } from './PageHeader';
import { ContentSection } from './ContentSection';

interface CmsSection {
  readonly id: string;
  readonly title: string;
  readonly content: string | readonly string[];
  readonly type: 'text' | 'list' | 'table' | 'contact' | 'definition';
}

interface CmsPageData {
  readonly title: string;
  readonly subtitle?: string;
  readonly lastUpdated?: string;
  readonly sections: readonly CmsSection[];
}

interface CmsPageWrapperProps {
  readonly data: CmsPageData;
  readonly backLink?: {
    readonly text: string;
    readonly href: string;
  };
  readonly className?: string;
}

export const CmsPageWrapper: React.FC<CmsPageWrapperProps> = ({
  data,
  backLink,
  className = ''
}) => {
  return (
    <div className={`min-h-screen bg-white ${className}`}>
      {/* Page Header */}
      <PageHeader
        title={data.title}
        subtitle={data.subtitle}
        backLink={backLink}
      />

      {/* Content Sections */}
      <main className="py-16 sm:py-20 md:py-24" role="main">
        <Container>
          {/* Dynamic Content Sections */}
          <div className="max-w-4xl mx-auto">
            {data.sections.map((section) => (
              <ContentSection
                key={section.id}
                id={section.id}
                title={section.title}
                content={section.content}
                type={section.type}
              />
            ))}
          </div>
        </Container>
      </main>
    </div>
  );
}; 