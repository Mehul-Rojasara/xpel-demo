"use client";
import React from "react";
import Image from "next/image";

interface Director {
  readonly name: string;
  readonly role: string;
  readonly image: string;
  readonly bio?: string;
}

interface DirectorModalProps {
  readonly director: Director | null;
  readonly onClose: () => void;
}

export const DirectorModal: React.FC<DirectorModalProps> = ({ director, onClose }) => {
  if (!director) return null;

  return (
    <div className="fixed inset-0 z-modal flex items-center justify-center bg-black/50">
      <div className="bg-white w-screen h-screen relative gap-8 p-8 overflow-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="fixed top-4 right-5 text-gray-600 hover:text-black text-xl w-6 h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 flex items-center justify-center z-10"
        >
          <span className="icon-Close text-base lg:text-[1rem]"></span>
        </button>
        <div className="w-full max-w-5xl mx-auto my-auto flex min-h-[calc(100vh-65px)] items-center justify-center">
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 xl:gap-17">
            {/* Left Content (Text) */}
            <div className="w-full md:max-w-[30.313rem] order-2 md:order-1">
              <h2 className="font-h2 font-semibold text-black mb-3">
                {director.name}
              </h2>
              <p className="text-neutral-500 mb-6 para-small">{director.role}</p>
              {director.bio && (
                <p className="para-small text-neutral-900 leading-loose whitespace-pre-line">
                  {director.bio}
                </p>
              )}
            </div>

            {/* Right Content (Image) */}
            <div className="flex-shrink-0 w-full md:max-w-[28.625rem] aspect-[4/5] ml-auto order-1 md:order-2">
              <Image
                src={director.image}
                alt={director.name}
                width={458}
                height={572}
                className="w-full h-auto rounded-[0.875rem] object-cover overflow-hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
