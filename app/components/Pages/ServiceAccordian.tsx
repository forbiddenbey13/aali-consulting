"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface ServiceItem {
  title: string;
  description: string;
}

interface ServiceAccordionProps {
  heading: string;
  services: ServiceItem[];
  id?: string;
}

const ServiceAccordion: React.FC<ServiceAccordionProps> = ({
  heading,
  services,
  id,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="services-detail" className="bg-white px-6 md:px-12 py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">{heading}</h2>

        <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
          {services.map((service, index) => (
            <div key={index} className="py-6">
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between text-left group"
              >
                <span className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition">
                  {service.title}
                </span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-blue-600" />
                ) : (
                  <Plus className="w-5 h-5 text-blue-600" />
                )}
              </button>

              {openIndex === index && (
                <div className="mt-3 text-gray-700 leading-relaxed">
                  {service.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAccordion;
