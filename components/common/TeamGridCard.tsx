"use client";
import React from "react";
import Image from "next/image";

interface Director {
  name: string;
  role: string;
  image: string;
  bio?: string;
}

interface TeamGridCardProps {
  director: Director;
  onClick: (director: Director) => void;
}

export const TeamGridCard: React.FC<TeamGridCardProps> = ({ director, onClick }) => {
  return (
    <li className="relative bg-white rounded-[0.875rem] overflow-hidden">
      <button
        onClick={() => onClick(director)}
        className="relative group h-[25.625rem] md:h-[35.75rem] rounded-[0.875rem] after:content-[''] after:absolute after:inset-0 after:bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_51%,rgba(0,0,0,0.25)_75%,rgba(0,0,0,0.6)_100%)] after:w-full after:h-full after:block overflow-hidden"
      >
        <Image
          src={director.image}
          alt={director.name}
          width={458}
          height={572}
          className="w-full h-full min-h-[25.625rem] md:min-h-[35.75rem] object-cover group-hover:scale-110 transition-all duration-500"
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10 text-white text-left">
          <h3 className="font-h3">{director.name}</h3>
        </div>
        <div className="absolute inset-0 bg-[image:linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.05)_44.79%,rgba(0,0,0,0.5)_69.94%,rgba(0,0,0,0.85)_100%)] group-hover:bg-[image:linear-gradient(196deg,rgba(44,53,70,0)_10.3%,#2c3546_87.99%)] bg-no-repeat transition-all duration-[600ms]"></div>
      </button>
    </li>
  );
};
