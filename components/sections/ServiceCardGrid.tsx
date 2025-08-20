import React from 'react';
import { ServiceCard } from './ServiceCard';
import Container from '@/components/ui/Container';

interface ServiceCardData {
  title: string;
  description: string;
  image: string;
  hoverImage?: string; // Optional second image for hover effect
  altText?: string;
  href?: string;
}

interface ServiceCardGridProps {
  cards: ServiceCardData[];
  className?: string;
  sectionClassName?: string;
  containerClassName?: string;
}

export const ServiceCardGrid: React.FC<ServiceCardGridProps> = ({
  cards,
  className = '',
  sectionClassName = '',
  containerClassName = ''
}) => {
  return (
    <section className={`${sectionClassName}`}>
      <Container className={containerClassName}>
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${className}`}>
          {cards.map((card, index) => (
            <ServiceCard
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}
              hoverImage={card.hoverImage}
              altText={card.altText}
              href={card.href}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}; 