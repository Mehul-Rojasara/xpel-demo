import React from 'react';
import Link from 'next/link';
import Container from '@/components/ui/Container';

interface ServiceBlock {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly ctaText: string;
  readonly ctaHref: string;
  readonly icon: React.ReactNode;
}

interface ServiceDividerBlockProps {
  readonly blocks: readonly ServiceBlock[];
  readonly className?: string;
}

export const ServiceDividerBlock: React.FC<ServiceDividerBlockProps> = ({
  blocks,
  className = ''
}) => {
  return (
    <section className={`bg-gray-900 py-16 md:py-20 ${className}`}>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {blocks.map((block) => (
            <div key={block.id} className="text-center">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 text-white">
                  {block.icon}
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                {block.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {block.description}
              </p>
              
              {/* CTA Link */}
              <Link
                href={block.ctaHref}
                className="inline-flex items-center text-white hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                <span className="mr-2">{block.ctaText}</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}; 