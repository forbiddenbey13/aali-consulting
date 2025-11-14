"use client";
import React from "react";

interface Resource {
  img: string;
  title: string;
  link: string;
}

interface ResourcesSectionProps {
  heading: string;
  resources: Resource[];
}

const ResourcesSection: React.FC<ResourcesSectionProps> = ({
  heading,
  resources,
}) => {
  return (
    <section className="px-6 md:px-10 py-24 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
        {heading}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {resources.map((r, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transition hover:shadow-xl flex flex-col"
          >
            {/* Image */}
            <img
              src={r.img}
              alt={r.title}
              className="w-full h-44 object-cover"
            />

            {/* Content */}
            <div className="p-6 flex flex-col items-center text-center flex-grow">
              <h4 className="font-semibold text-gray-900 text-base mb-4">
                {r.title}
              </h4>
              <a
                href={r.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium px-6 py-2 rounded-full shadow-sm transition"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResourcesSection;
