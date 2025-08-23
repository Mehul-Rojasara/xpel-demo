
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { DirectorModal } from "./DirectorModal";
import Container from '@/components/ui/Container';
import { Button } from "../common";

interface Director {
  readonly id: string;
  readonly name: string;
  readonly role: string;
  readonly image: string;
  readonly bio?: string;
}

interface BoardProps {
  readonly title?: string;
  readonly directors: readonly Director[];
  readonly className?: string;
}

export const BoardGrid: React.FC<BoardProps> = ({ title, directors, className }) => {
  const [selected, setSelected] = useState<Director | null>(null);

  return (
    <section className={`${className}`}>
      <Container>
        {title && (
          <h2 className="font-h2 text-black mb-10">
            {title}
          </h2>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {directors.map((director) => (
            <button
              key={director.id}
              onClick={() => setSelected(director)}
              className="overflow-hidden rounded-[0.875rem] p-0 relative text-left group/team aspect-[4/5]"
              aria-label={`View ${director?.name}'s profile`}
            >
              <Image
                src={director?.image}
                alt={director?.name}
                width={458}
                height={572}
                className="w-full h-[calc(100%-0px)] xl:max-h-[35.75rem] object-cover group-hover/team:scale-105 transition-all duration-300"
              />
              <div className="absolute inset-0 p-4 xl:p-8 bg-gradient-to-t from-black/60 via-black/25 to-transparent group-hover/team:bg-gradient-to-b group-hover/team:from-accent-navy-400/0 group-hover/team:from-[10.3%] group-hover/team:via-accent-navy-400 group-hover/team:via-[100%] group-hover/team:to-transparent flex items-end transition-all duration-300">
                <div className="text-left w-full">
                  <h3 className="text-white font-h3 font-display mb-2 xl:mb-[0.625rem]">
                    {director?.name}
                  </h3>
                  <p className="text-gray-200 para-small">{director.role}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </Container>

      {/* Modal */}
      <DirectorModal director={selected} onClose={() => setSelected(null)} />
    </section>
  );
};
