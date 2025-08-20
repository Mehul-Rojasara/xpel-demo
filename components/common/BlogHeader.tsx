import React from 'react';
import Container from '@/components/ui/Container';
import { Breadcrumbs } from './Breadcrumbs';

interface BlogHeaderProps {
  readonly title: string;
  readonly publishDate: string;
  readonly breadcrumbs?: Array<{
    readonly text: string;
    readonly href: string;
  }>;
  readonly className?: string;
}

export const BlogHeader: React.FC<BlogHeaderProps> = ({
  title,
  publishDate,
  breadcrumbs = [],
  className = ''
}) => {
  return (
    <header className={`bg-white ${className}`}>
      <Container>
        <div className="py-12 sm:py-16 md:py-20 text-center">
          {/* Breadcrumb Navigation */}
          <Breadcrumbs
            items={breadcrumbs}
            className="mb-8"
            ariaLabel="Breadcrumb"
          />
          
          {/* Blog Title */}
          <h1 className="font-display font-bold text-neutral-900 mb-6 leading-[110%] tracking-[-0.01em] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center max-w-5xl mx-auto">
            {title}
          </h1>
          
          {/* Publication Date */}
          <p className="text-neutral-600 text-base sm:text-lg font-normal">
            Published On {publishDate}
          </p>
        </div>
      </Container>
    </header>
  );
}; 