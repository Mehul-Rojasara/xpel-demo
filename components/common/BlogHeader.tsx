import React from "react";
import Container from "@/components/ui/Container";
import { Breadcrumbs } from "./Breadcrumbs";

interface BlogHeaderProps {
  readonly title: string;
  readonly publishDate: string;
  readonly breadcrumbs?: Array<{
    readonly id: string;
    readonly text: string;
    readonly href: string;
  }>;
  readonly className?: string;
}

export const BlogHeader: React.FC<BlogHeaderProps> = ({ title, publishDate, breadcrumbs = [], className = "" }) => {
  // Transform breadcrumbs to include IDs if they don't have them
  const breadcrumbsWithIds = breadcrumbs.map((item, index) => ({
    id: item.id || `breadcrumb-${index + 1}`,
    text: item.text,
    href: item.href,
  }));

  return (
    <div className={`bg-white section-small-spacing-y ${className}`}>
      <Container>
        <div className="text-center">
          {/* Breadcrumb Navigation */}
          <Breadcrumbs items={breadcrumbsWithIds} className="mb-4 md:mb-6" ariaLabel="Breadcrumb" />

          {/* Blog Title */}
          <h1 className="font-h2 text-neutral-900 max-w-[47.5rem] mx-auto">{title}</h1>

          {/* Publication Date */}
          <p className="para-medium text-neutral-900 pt-4 md:pt-6">Published On {publishDate}</p>
        </div>
      </Container>
    </div>
  );
};
