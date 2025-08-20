import React from 'react';
import Link from 'next/link';

interface BreadcrumbItem {
  readonly text: string;
  readonly href: string;
}

interface BreadcrumbsProps {
  readonly items: ReadonlyArray<BreadcrumbItem>;
  readonly className?: string;
  readonly separator?: string;
  readonly ariaLabel?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  className = '',
  separator = '→',
  ariaLabel = 'Breadcrumb navigation'
}) => {
  if (items.length === 0) return null;

  return (
    <nav className={className} aria-label={ariaLabel}>
      <ol className="flex items-center space-x-2 text-sm text-neutral-600">
        {items.map((item, index) => (
          <li key={`breadcrumb-${index}-${item.text}`} className="flex items-center">
            {index > 0 && (
              <span className="mx-2 text-neutral-400" aria-hidden="true">
                {separator}
              </span>
            )}
            <Link 
              href={item.href}
              className="hover:text-neutral-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:ring-offset-2 rounded"
              aria-current={index === items.length - 1 ? 'page' : undefined}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs; 