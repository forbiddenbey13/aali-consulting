"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  heading: string;
  faqs: FAQ[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ heading, faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-6 md:px-12 py-24 bg-white">
      <h2 className="text-4xl font-semibold text-center mb-12 text-gray-900">
        {heading}
      </h2>

      <div className="max-w-3xl mx-auto border border-gray-300 rounded-lg divide-y divide-gray-300">
        {faqs.map((faq, i) => (
          <div key={i}>
            <button
              onClick={() => toggle(i)}
              className="w-full flex justify-between items-center text-left px-6 py-5 text-gray-800 font-medium hover:bg-gray-50 transition"
            >
              <span>{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                  openIndex === i ? "rotate-180" : ""
                }`}
              />
            </button>

            {openIndex === i && (
              <div className="px-6 pb-5 text-gray-600 text-sm whitespace-pre-line leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
