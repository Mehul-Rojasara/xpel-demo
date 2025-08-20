import React from "react";
import Container from "../ui/Container";

interface BannerHeaderProps {
  title: string;
  description?: string;
}

export const BannerHeader: React.FC<BannerHeaderProps> = ({ title, description }) => {
  return (
    <section className="w-full bg-white py-16 px-4">
      <Container>
        <h1 className="text-[72px] leading-tight text-black mb-4">
          {title}
        </h1>
        {description && (
          <p className="text-[20px] text-gray-600">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
};
