import React from "react";
import Container from "@/components/ui/Container";

export const FeatureStats: React.FC = () => {
  const stats = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="w-6 h-6"
        >
          <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
        </svg>
      ),
      title: "88,000",
      description: "pre-cut kit patterns available in DAP",
      colSpan: "col-span-3",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="w-6 h-6"
        >
          <circle cx="12" cy="7" r="4" />
          <path d="M4 21c0-4 4-7 8-7s8 3 8 7" />
        </svg>
      ),
      title: "24/7",
      description: "XPEL Global customer support",
      colSpan: "col-span-1",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="w-6 h-6"
        >
          <path d="M2 6h20M2 12h20M2 18h20" />
        </svg>
      ),
      title: "2 Million",
      description: "miles of protective films installed since 2023",
      colSpan: "col-span-2",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="w-6 h-6"
        >
          <rect x="3" y="10" width="18" height="8" rx="2" ry="2" />
          <circle cx="7.5" cy="18" r="2" />
          <circle cx="16.5" cy="18" r="2" />
        </svg>
      ),
      title: "51.4%",
      description: "more vehicles protected since last year",
      colSpan: "col-span-2",
    },
  ];

  return (
    <Container>
      <div className="grid grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className={`${stat.colSpan} bg-black text-white p-6 rounded-lg flex flex-col gap-3`}>
            {stat.icon}
            <h3 className="text-2xl font-bold">{stat.title}</h3>
            <p className="text-sm">{stat.description}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};
