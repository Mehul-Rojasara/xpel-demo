
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/Button";
import { DirectorModal } from "./DirectorModal";

interface Director {
  readonly name: string;
  readonly role: string;
  readonly image: string;
  readonly bio?: string;
}

interface BoardProps {
  readonly title?: string;
  readonly directors: readonly Director[];
}

export const BoardGrid: React.FC<BoardProps> = ({ title, directors }) => {
  const [selected, setSelected] = useState<Director | null>(null);

  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {title && (
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-10">
            {title}
          </h2>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {directors.map((director, index) => (
            <Button
              key={`${director.name}-${index}`}
              onClick={() => setSelected(director)}
              variant="tertiary"
              size="lg"
              className="relative bg-white rounded-lg overflow-hidden text-left p-0 h-auto w-full"
            >
              <Image
                src={director?.image}
                alt={director?.name}
                width={458}
                height={572}
                className="w-full h-[572px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="text-white text-lg font-medium">
                  {director?.name}
                </h3>
                <p className="text-gray-200 text-sm">{director.role}</p>
              </div>
            </Button>
          ))}
        </div>
      </div>

      {/* Modal */}
      <DirectorModal director={selected} onClose={() => setSelected(null)} />
    </section>
  );
};
