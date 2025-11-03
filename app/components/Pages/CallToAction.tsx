"use client";
import React from "react";

interface CallToActionProps {
  heading: string;
  subheading: string;
  buttonText: string;
  buttonLink: string;
}

const CallToAction: React.FC<CallToActionProps> = ({
  heading,
  subheading,
  buttonText,
  buttonLink,
}) => {
  return (
    <section className="bg-gray-50 py-20 text-center border-t border-gray-200">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
          {heading}
        </h2>
        <p className="text-gray-600 mb-8 text-base md:text-lg">{subheading}</p>
        <a
          href={buttonLink}
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-3 rounded-full shadow-md transition"
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
