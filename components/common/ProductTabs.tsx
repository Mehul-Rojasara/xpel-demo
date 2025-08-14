'use client';

import React, { useState } from 'react';

interface ProductTab {
  id: string;
  label: string;
  href?: string;
}

interface ProductTabsProps {
  tabs: ProductTab[];
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
  className?: string;
  background?: 'dark' | 'light';
}

export const ProductTabs: React.FC<ProductTabsProps> = ({
  tabs,
  activeTab,
  onTabChange,
  className = '',
  background = 'dark'
}) => {
  const [currentTab, setCurrentTab] = useState(activeTab || tabs[0]?.id || '');

  const backgroundClasses = {
    dark: 'bg-neutral-900 text-white',
    light: 'bg-white text-neutral-900'
  };

  const handleTabClick = (tabId: string) => {
    setCurrentTab(tabId);
    onTabChange?.(tabId);
  };

  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 ${backgroundClasses[background]} ${className}`} role="region" aria-label="Product navigation">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Explore the Product Lineup
          </h2>
        </div>

        {/* Tabs Navigation */}
        <nav className="flex justify-center" role="tablist" aria-label="Product categories">
          <div className="flex space-x-1 bg-white/10 rounded-lg p-1 backdrop-blur-sm">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/20 ${
                  currentTab === tab.id
                    ? 'bg-white text-neutral-900 shadow-lg'
                    : 'text-white hover:bg-white/10'
                }`}
                role="tab"
                aria-selected={currentTab === tab.id}
                aria-controls={`panel-${tab.id}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </section>
  );
};

export default ProductTabs; 