import React from "react";
import Image from "next/image";

export const DapNextFeatures = () => {
  const features = [
    {
      id: 1,
      title: "Planned Parts",
      description:
        "Manage your planned parts quickly & efficiently in DAP. Select the parts you need and track progress seamlessly.",
      image: "/images/dapNext/collage1.png",
    },
    {
      id: 2,
      title: "Favorite Parts",
      description:
        "Save frequently used parts as favorites for quick access. Streamline your workflow by avoiding repeated searches.",
      image: "/images/dapNext/collage2.png",
    },
    {
      id: 3,
      title: "Recently Added Parts",
      description:
        "View all newly added parts at a glance. DAP keeps you updated with the latest additions for better efficiency.",
      image: "/images/dapNext/collage3.png",
    },
    {
      id: 4,
      title: "Multi-Language Support",
      description:
        "Easily switch between languages like English, French, Dutch, and more to suit your regional needs.",
      image: "/images/dapNext/collage4.png",
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-4 lg:px-12">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-2xl lg:text-3xl text-black">
          DAPNext Key Features
        </h2>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-sm lg:text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.         
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
          >
            <div className="relative w-full h-48">
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 text-left flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-black mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
