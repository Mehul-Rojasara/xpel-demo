import React from "react";
import Image from "next/image";

interface ShowImageProps {
  src: string;
  alt?: string;
}

export const ShowImage: React.FC<ShowImageProps> = ({ src, alt }) => {
  return (
    <section className="w-full bg-white py-6">
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative w-full overflow-hidden rounded-lg">
          <Image
            src={src}
            alt={alt || "Partner Banner"}
            width={1269}
            height={243}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};
