import React from "react";
import Link from "next/link";

interface CardItem {
  id: string;
  title: string;
  description: string;
  link: string;
}

interface Section {
  id: string;
  heading: string;
  items: CardItem[];
}

interface InfoSectionsProps {
  sections: Section[];
}

export const HelpCenterContentBox: React.FC<InfoSectionsProps> = ({ sections }) => {
  return (
    <section className="w-full bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 space-y-16">
        {sections.map((section) => (
          <div key={section.id}>
            {/* Section Heading */}
            <h2 className="text-2xl font-bold mb-8">{section.heading}</h2>

            {/* Cards Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {section.items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex flex-col justify-between hover:shadow-md transition"
                >
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {item.description}
                    </p>
                  </div>
                  <Link
                    href={item.link}
                    className="text-sm font-medium text-black flex items-center gap-1 group"
                  >
                    Learn More
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
