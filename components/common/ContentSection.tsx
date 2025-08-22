import React from 'react';
import {
  NUMBERED_LIST_PATTERN,
  BOLD_TEXT_PATTERN,
  DEFINITION_PATTERN
} from '@/config/regex';

interface ContentSectionProps {
  readonly id: string;
  readonly title: string;
  readonly content: string | readonly string[];
  readonly type: 'text' | 'list' | 'table' | 'contact' | 'definition';
  readonly className?: string;
}

export const ContentSection: React.FC<ContentSectionProps> = ({
  id,
  title,
  content,
  type,
  className = ''
}) => {
  const renderContent = () => {
    switch (type) {
      case 'text':
        return (
          <p className="para-medium text-neutral-700 leading-[150%] tracking-[0.01em] font-sans font-[450] mb-8">
            {content as string}
          </p>
        );

      case 'list':
        const listItems = content as string[];
        return (
          <div className="space-y-6 mb-8">
            {listItems.map((item, index) => {
              // Check if item starts with a number (ordered list)
              if (NUMBERED_LIST_PATTERN.test(item)) {
                return (
                  <div key={`numbered-${index}`} className="flex items-start">
                    <span className="text-neutral-600 font-sans font-semibold mr-4 mt-1 min-w-[24px] text-base leading-[150%] tracking-[0.01em]">
                      {item.match(/^\d+/)?.[0]}.
                    </span>
                    <p className="para-medium text-neutral-700 leading-[150%] tracking-[0.01em] font-sans font-[450] flex-1">
                      {item.replace(/^\d+\.\s*/, '')}
                    </p>
                  </div>
                );
              }
              
              // Check if item starts with ** (bold text)
              if (BOLD_TEXT_PATTERN.test(item)) {
                const boldMatch = item.match(BOLD_TEXT_PATTERN);
                if (boldMatch) {
                  return (
                    <div key={`bold-${index}`} className="flex items-start mb-4">
                      <strong className="font-sans font-semibold text-neutral-900 mr-3 text-base leading-[150%] tracking-[0.01em]">
                        {boldMatch[1]}:
                      </strong>
                      <span className="para-medium text-neutral-700 leading-[150%] tracking-[0.01em] font-sans font-[450]">
                        {boldMatch[2]}
                      </span>
                    </div>
                  );
                }
              }
              
              // Regular list item
              return (
                <p key={`list-${index}`} className="para-medium text-neutral-700 leading-[150%] tracking-[0.01em] font-sans font-[450] pl-6 border-l-2 border-neutral-200">
                  {item}
                </p>
              );
            })}
          </div>
        );

      case 'table':
        const tableRows = content as string[];
        const [headerRow, ...dataRows] = tableRows;
        const headers = headerRow.split('|').filter(cell => cell.trim()).map(cell => cell.trim());
        
        return (
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-neutral-200 rounded-[14px] overflow-hidden">
              <thead>
                <tr className="bg-neutral-50">
                  {headers.map((header, index) => (
                    <th key={`header-${index}`} className="border border-neutral-200 px-6 py-4 text-left font-sans font-semibold text-neutral-900 text-base leading-[150%] tracking-[0.01em]">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dataRows.map((row, rowIndex) => {
                  const cells = row.split('|').filter(cell => cell.trim()).map(cell => cell.trim());
                  return (
                    <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}>
                      {cells.map((cell, cellIndex) => (
                        <td key={`cell-${rowIndex}-${cellIndex}`} className="border border-neutral-200 px-6 py-4 text-neutral-700 font-sans font-[450] text-base leading-[150%] tracking-[0.01em]">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );

      case 'contact':
        const contactItems = content as string[];
        return (
          <div className="space-y-6 mb-8">
            {contactItems.map((item, index) => {
              // Check if item contains email link (simple string check instead of regex)
              if (item.includes('mailto:') || item.includes('[legal@xpel.com](mailto:legal@xpel.com)')) {
                return (
                  <p key={`contact-${index}`} className="para-medium text-neutral-700 leading-[150%] tracking-[0.01em] font-sans font-[450]">
                    <strong className="font-sans font-semibold text-neutral-900">Owner Contact E-mail:</strong>{' '}
                    <a 
                      href="mailto:legal@xpel.com" 
                      className="text-blue-600 hover:text-blue-800 underline decoration-blue-600 decoration-1 underline-offset-2 font-sans font-[450] text-base leading-[150%] tracking-[0.01em]"
                    >
                      legal@xpel.com
                    </a>
                  </p>
                );
              }
              
              // Check if item contains bold text
              if (BOLD_TEXT_PATTERN.test(item)) {
                const boldMatch = item.match(BOLD_TEXT_PATTERN);
                if (boldMatch) {
                  return (
                    <p key={`contact-bold-${index}`} className="para-medium text-neutral-700 leading-[150%] tracking-[0.01em] font-sans font-[450]">
                      <strong className="font-sans font-semibold text-neutral-900">
                        {boldMatch[1]}
                      </strong>
                      {boldMatch[2]}
                    </p>
                  );
                }
              }
              
              // Regular contact item
              return (
                <p key={`contact-regular-${index}`} className="para-medium text-neutral-700 leading-[150%] tracking-[0.01em] font-sans font-[450]">
                  {item}
                </p>
              );
            })}
          </div>
        );

      case 'definition':
        const definitionItems = content as string[];
        return (
          <div className="space-y-4 mb-8">
            {definitionItems.map((item, index) => {
              // Check if item contains bold text with dash
              if (DEFINITION_PATTERN.test(item)) {
                const parts = item.match(DEFINITION_PATTERN);
                if (parts && parts.length === 3) {
                  const term = parts[1];
                  const definition = parts[2];
                  return (
                    <div key={`definition-${index}`} className="mb-4">
                      <dt className="font-sans font-semibold text-neutral-900 text-base leading-[150%] tracking-[0.01em] mb-2">
                        {term}
                      </dt>
                      <dd className="para-medium text-neutral-700 leading-[150%] tracking-[0.01em] font-sans font-[450] pl-4">
                        {definition}
                      </dd>
                    </div>
                  );
                }
              }
              
              // Regular definition item
              return (
                <p key={`definition-regular-${index}`} className="para-medium text-neutral-700 leading-[150%] tracking-[0.01em] font-sans font-[450]">
                  {item}
                </p>
              );
            })}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id={id} className={`mb-16 ${className}`}>
      <h2 className="font-h2 text-neutral-900 mb-8 font-display font-medium leading-[110%] tracking-[-0.01em]">
        {title}
      </h2>
      {renderContent()}
    </section>
  );
}; 