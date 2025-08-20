import React from "react";
import Image from "next/image";

export const CuttingSoftwareSection = () => {
  return (
    <section className="w-full bg-white py-12 px-4 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        {/* Left Text */}
        <div className="text-center lg:text-left">
          <h2 className="text-2xl lg:text-3xl leading-snug text-black">
            World Class Cutting Software <br className="hidden lg:block" />
            at Your Fingertips
          </h2>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <Image
            src="/images/dapNext/dapnextdesc.png" // update path to your laptop image
            alt="Cutting Software Laptop"
            width={500}
            height={300}
            className="w-full max-w-md lg:max-w-lg h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
};
