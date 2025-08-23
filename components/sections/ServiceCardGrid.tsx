import React from 'react';
import { ServiceCard } from './ServiceCard';
import Container from '@/components/ui/Container';

interface ServiceCardData {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly hoverImage?: string; // Optional second image for hover effect
  readonly altText?: string;
  readonly href?: string;
}

interface ServiceCardGridProps {
  readonly cards: readonly ServiceCardData[];
  readonly className?: string;
  readonly sectionClassName?: string;
  readonly containerClassName?: string;
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
          {cards.map((card) => (
            <ServiceCard
              key={card.id}
              title={card.title}
              description={card.description}
              image={card.image}
              {...(card.hoverImage && { hoverImage: card.hoverImage })}
              {...(card.altText && { altText: card.altText })}
              {...(card.href && { href: card.href })}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}; 