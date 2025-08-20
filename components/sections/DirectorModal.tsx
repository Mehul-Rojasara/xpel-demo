"use client";
import React from "react";
import Image from "next/image";

interface Director {
  name: string;
  role: string;
  image: string;
  bio?: string;
}

interface DirectorModalProps {
  director: Director | null;
  onClose: () => void;
}

export const DirectorModal: React.FC<DirectorModalProps> = ({ director, onClose }) => {
  if (!director) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 relative flex flex-col md:flex-row gap-8 p-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl"
        >
          ✕
        </button>

        {/* Left Content (Text) */}
        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-black mb-1">
            {director.name}
          </h3>
          <p className="text-gray-600 mb-4">{director.role}</p>
          {director.bio && (
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {director.bio}
            </p>
          )}
        </div>

        {/* Right Content (Image) */}
        <div className="flex-shrink-0 w-full md:w-80">
          <Image
            src={director.image}
            alt={director.name}
            width={400}
            height={500}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};
