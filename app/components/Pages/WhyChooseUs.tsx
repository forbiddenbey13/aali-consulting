"use client";
import React from "react";

interface WhyChooseUsProps {
  image: string;
  imageAlt?: string;
  title: string;
  paragraphs: string[];
  reverse?: boolean;
}

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({
  image,
  imageAlt = "Why Choose Us",
  title,
  paragraphs,
  reverse = false,
}) => {
  return (
    <section className="bg-white px-6 md:px-12 py-24">
      <div
        className={`max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* LEFT — Image */}
        <div className="relative w-full md:w-1/2 h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-md">
          <img
            src={image}
            alt={imageAlt}
            className="object-cover w-full h-full"
          />
        </div>

        {/* RIGHT — Text Block */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-md w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {title}
          </h2>
          {paragraphs.map((text, i) => (
            <p
              key={i}
              className={`text-gray-700 leading-relaxed ${
                i !== paragraphs.length - 1 ? "mb-6" : ""
              }`}
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
