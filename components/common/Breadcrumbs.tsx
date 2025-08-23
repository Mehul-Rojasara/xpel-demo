import React from "react";
import Link from "next/link";

interface BreadcrumbItem {
  readonly id: string;
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
  className = "",
  separator = "→",
  ariaLabel = "Breadcrumb navigation",
}) => {
  if (items.length === 0) return null;

  return (
    <div className={className} aria-label={ariaLabel}>
      <ul className="flex items-center justify-center text-sm text-neutral-600">
        {items.map((item, index) => (
          <li key={`breadcrumb-${index}-${item.text}`} className="flex items-center">
            {index > 0 && <i className="icon-Arrow-Right mx-[0.625rem] text-neutral-900"></i>}
            <Link
              href={item.href}
              className="inline-flex items-center text-neutral-900 text-sm md:text-base font-sans font-[450] leading-[150%] tracking-[0.01em]"
              aria-current={index === items.length - 1 ? "page" : undefined}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
