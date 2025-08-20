
'use client'

import React, { useState } from "react";

interface LegalDoc {
  title: string;
  description: string;
  pdfUrl: string;
}

interface DocsGridProps {
  documents: LegalDoc[];
  isCareerPage?: boolean; // new flag
}

export const DocsGrid: React.FC<DocsGridProps> = ({ documents, isCareerPage = false }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // filter documents by title if career page
  const filteredDocs = isCareerPage
    ? documents.filter((doc) =>
        doc.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : documents;

  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Search box only for career page */}
        {isCareerPage && (
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search by Job title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocs.map((doc, index) => (
            <a
              key={index}
              href={
                isCareerPage
                  ? "https://xpel.wd5.myworkdayjobs.com/XPEL_Careers"
                  : doc.pdfUrl
              }
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow bg-white"
            >
              <h3 className="text-xl text-black mb-2">{doc.title}</h3>
              <p className="text-lg text-gray-600">{doc.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
