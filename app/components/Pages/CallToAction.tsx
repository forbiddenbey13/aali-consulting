"use client";
import React from "react";

interface CallToActionProps {
  heading: string;
  subheading: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage?: string | null; // optional background image
}

const CallToAction: React.FC<CallToActionProps> = ({
  heading,
  subheading,
  buttonText,
  buttonLink,
  backgroundImage = null,
}) => {
  return (
    <section
      className={`py-20 text-center border-t border-gray-200 dark:border-gray-700 transition-colors duration-300 ${backgroundImage ? "bg-cover bg-center bg-no-repeat text-white" : "bg-gray-50 dark:bg-gray-800"
        }`}
      style={
        backgroundImage
          ? { backgroundImage: `url(${backgroundImage})` }
          : undefined
      }
    >
      <div
        className={`max-w-3xl mx-auto px-6 ${backgroundImage ? "bg-black/40 p-10 rounded-lg" : ""
          }`}
      >
        <h2
          className={`text-3xl md:text-4xl font-semibold mb-3 ${backgroundImage ? "text-white" : "text-gray-900 dark:text-white"
            }`}
        >
          {heading}
        </h2>
        <p
          className={`mb-8 text-base md:text-lg ${backgroundImage ? "text-gray-200" : "text-gray-600 dark:text-gray-300"
            }`}
        >
          {subheading}
        </p>
        <a
          href={buttonLink}
          className={`inline-block font-medium px-8 py-3 rounded-full shadow-md transition ${backgroundImage
              ? "bg-blue-500 hover:bg-blue-600 text-white"
              : "bg-blue-500 hover:bg-blue-600 text-white dark:bg-blue-600 dark:hover:bg-blue-700"
            }`}
        >
          {buttonText}
        </a>
      </div >
    </section >
  );
};

export default CallToAction;
