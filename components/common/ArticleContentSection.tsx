import React from 'react';

interface ArticleContentSectionProps {
  readonly title: string;
  readonly content: Array<{ readonly id: string; readonly text: string }>;
  readonly bulletPoints?: Array<{ readonly id: string; readonly text: string }>;
  readonly className?: string;
}

export const ArticleContentSection: React.FC<ArticleContentSectionProps> = ({
  title,
  content,
  bulletPoints = [],
  className = ''
}) => {
  return (
    <section className={`bg-white py-12 ${className}`}>
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8 text-center">
          {title}
        </h2>
        
        {/* Content Paragraphs */}
        <div className="space-y-6 mb-8">
          {content.map((paragraph) => (
            <p key={paragraph.id} className="text-neutral-700 text-lg leading-relaxed">
              {paragraph.text}
            </p>
          ))}
        </div>
        
        {/* Bullet Points */}
        {bulletPoints.length > 0 && (
          <ul className="space-y-4">
            {bulletPoints.map((point) => (
              <li key={point.id} className="flex items-start">
                <span className="w-2 h-2 bg-neutral-900 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                <span className="text-neutral-700 text-lg leading-relaxed">
                  {point.text}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}; 