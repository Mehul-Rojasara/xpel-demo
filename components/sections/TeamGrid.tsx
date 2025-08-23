"use client";
import React, { useState } from "react";
import { DirectorModal } from "./DirectorModal";
import Container from "@/components/ui/Container";
import { TeamGridCard } from "@/components/common/TeamGridCard";

interface Director {
  id:string;
  name: string;
  role: string;
  image: string;
  bio?: string;
}

interface BoardProps {
  title?: string;
  directors: Director[];
}

export const TeamGrid: React.FC<BoardProps> = ({ directors }) => {
  const [selected, setSelected] = useState<Director | null>(null);

  return (
    <section className="section-spacing-y">
      <Container>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {directors.map((director) => (
            <TeamGridCard key={director.id} director={director} onClick={() => setSelected(director)} />
          ))}
        </ul>
      </Container>
      <DirectorModal director={selected} onClose={() => setSelected(null)} />
    </section>
  );
};
