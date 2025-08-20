'use client';
import React from 'react';
import Container from '@/components/ui/Container';
import { PLOTTER_SUPPORT_DATA, PlotterBrand, PlotterDriver } from '@/config/plotterSupport';
import { PlotterCard } from '@/components/plotter/PlotterCard';

export default function PlotterSupportPage() {
  const [downloading, setDownloading] = React.useState<{ [key: string]: boolean }>({});

  const handleDownload = async (driver: PlotterDriver) => {
    const downloadKey = `${driver.name}-${driver.version}`;
    
    try {
      setDownloading(prev => ({ ...prev, [downloadKey]: true }));
      
      // Create a temporary link element
      const link = document.createElement('a');
      link.href = driver.downloadUrl;
      link.download = `${driver.name}-v${driver.version}.${driver.fileType}`;
      
      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Track download (you can add analytics here)
      console.log(`Download started: ${driver.name} v${driver.version}`);
      
      // Show success feedback (you can replace this with a toast notification)
      alert(`Download started for ${driver.name} v${driver.version}`);
      
    } catch (error) {
      console.error('Download failed:', error);
      alert('Download failed. Please try again or contact support.');
    } finally {
      setDownloading(prev => ({ ...prev, [downloadKey]: false }));
    }
  };

  return (
    <main className="min-h-screen bg-white">
        <div className="py-16 bg-[var(--color-neutral-100)] relative mb-16">
          <Container>
            <div className="text-left">
              <h1 className="font-h1 text-[var(--color-neutral-900)] mb-4">
                Plotter Support
              </h1>
              <p className="para-medium text-[var(--color-neutral-600)] max-w-3xl">
                Download the latest drivers for your plotter to ensure optimal performance with XPEL software and materials.
              </p>
            </div>
          </Container>
          {/* Bottom shadow for separation */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-neutral-200)] via-[var(--color-neutral-300)] to-[var(--color-neutral-200)]"></div>
        </div>

        <section 
          className="py-16 sm:py-20 md:py-24 bg-white"
          role="region" 
          aria-label="Plotter driver downloads"
        >
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {PLOTTER_SUPPORT_DATA.map((brand: PlotterBrand, index: number) => (
                <PlotterCard
                  key={index}
                  brand={brand}
                  downloading={downloading}
                  onDownload={handleDownload}
                />
              ))}
            </div>
          </Container>
        </section>
    </main>
  );
} 