import React from 'react';
import Container from '@/components/ui/Container';

export const GetInTouchSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Contact Information */}
          <div className="space-y-8">
            <h2 className="font-h2 text-neutral-900">
              Get in Touch Coming Soon...
            </h2>
          </div>
        </div>
      </Container>
    </section>
  );
}; 