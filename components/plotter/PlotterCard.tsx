'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { PlotterDriver } from '@/config/plotterSupport';

interface PlotterCardProps {
  readonly brand: {
    readonly id: string;
    readonly title: string;
    readonly description: string;
    readonly drivers: readonly PlotterDriver[];
  };
  readonly downloading: { [key: string]: boolean };
  readonly onDownload: (driver: PlotterDriver) => void;
}

export const PlotterCard: React.FC<PlotterCardProps> = ({ 
  brand, 
  downloading, 
  onDownload 
}) => {
  // Helper function to check if a specific driver is downloading
  const isDownloading = (driver: PlotterDriver) => {
    return downloading[`${driver.name}-${driver.version}`] || false;
  };

  return (
    <article
      className="bg-white border-2 border-neutral-300 rounded-[14px] p-4 sm:p-6 hover:border-neutral-400 transition-all duration-300 group h-full"
      role="article"
      aria-label={`${brand.title} - ${brand.description}`}
    >
      {/* Card Header */}
      <div className="mb-6">
        <h3 className="font-h3 text-neutral-900 mb-3 sm:mb-4 text-lg sm:text-xl md:text-2xl">
          {brand.title}
        </h3>
        <p className="para-medium text-neutral-600 text-sm sm:text-base leading-relaxed">
          {brand.description}
        </p>
      </div>

      {/* Drivers List */}
      <div className="space-y-4">
        {brand.drivers.map((driver) => (
          <div key={driver.id} className="bg-neutral-100 rounded-lg p-4 border border-neutral-200">
            <div className="mb-3">
              <h4 className="font-semibold text-lg text-neutral-900 mb-2">
                {driver.name}
              </h4>
              <div className="space-y-1 text-sm text-neutral-600">
                <p>Version: {driver.version}</p>
                <p>Size: {driver.size}</p>
                <p>OS: {driver.os}</p>
                <p className="text-xs text-neutral-500">
                  Released: {driver.releaseDate}
                </p>
              </div>
            </div>
            
            <Button
              variant="primary"
              buttonStyle="filled"
              size="md"
              background="light"
              className="w-full"
              icon={<i className="icon-Download w-4 h-4 mr-2" aria-hidden="true"></i>}
              iconPosition="left"
              onClick={() => onDownload(driver)}
              loading={isDownloading(driver)}
              aria-label={`Download ${driver.name} for ${driver.os}`}
            >
              Download
            </Button>
          </div>
        ))}
      </div>
    </article>
  );
}; 