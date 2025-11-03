"use client";
import React from "react";

interface Step {
  number: string;
  title: string;
  text: string;
}

interface ThreeStepProcessProps {
  heading: string;
  steps: Step[];
}

const ThreeStepProcess: React.FC<ThreeStepProcessProps> = ({ heading, steps }) => {
  return (
    <section className="px-6 md:px-12 py-24 bg-white">
      <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
        {heading}
      </h2>

      <div className="grid md:grid-cols-3 gap-8 text-center max-w-6xl mx-auto">
        {steps.map((step, i) => (
          <div
            key={i}
            className="border border-gray-200 p-10 rounded-lg hover:shadow-md transition duration-300 bg-white"
          >
            {/* Number in Circle */}
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 flex items-center justify-center rounded-full border-2 border-blue-300 text-blue-600 text-3xl font-semibold">
                {step.number}
              </div>
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ThreeStepProcess;
