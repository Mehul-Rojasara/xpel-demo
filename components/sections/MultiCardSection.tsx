import React from "react";
import Image from "next/image";

interface Card {
  id: number;  
  img: string;
  title: string;
  description: string;
}

interface MultiCardSectionProps {
  heading: string;
  cards: Card[];
}

export const MultiCardSection: React.FC<MultiCardSectionProps> = ({
  heading,
  cards,
}) => {
  return (
    <section className="w-full bg-black py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-white text-2xl font-semibold mb-12">{heading}</h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards?.map((card) => (
            <div
              key={card?.id}
              className="flex flex-col items-center text-center"
            >
              {/* Image */}
              <div className="w-full h-64 relative rounded-lg overflow-hidden">
                <Image
                  src={card?.img}
                  alt={card?.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text */}
              <h3 className="text-white text-lg font-semibold mt-4">
                {card?.title}
              </h3>
              <p className="text-gray-400 text-sm mt-2">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
