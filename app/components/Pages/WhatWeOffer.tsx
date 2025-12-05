"use client";
import React from "react";

interface OfferCard {
  title: string;
  description: string;
  link?: string; // make optional
  special?: boolean;
}

interface WhatWeOfferProps {
  heading: string;
  cards: OfferCard[];
}

const WhatWeOffer: React.FC<WhatWeOfferProps> = ({ heading, cards }) => {
  return (
    <section id="what-we-do" className="px-6 md:px-10 py-24 bg-white">
      <h2 className="text-3xl font-bold mb-14 text-center text-gray-900">
        {heading}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
        {cards.map((card, i) => (
          <div
            key={i}
            className="relative bg-white border border-gray-100 shadow-sm hover:shadow-md rounded-xl p-8 flex flex-col justify-between transition overflow-hidden"
          >
            {card.special && (
              <div className="special-ribbon">
                ★ SPECIAL ★
              </div>
            )}

            <h3 className="text-lg font-semibold mb-4 text-gray-900">
              {card.title}
            </h3>
            <p className="text-gray-600 text-sm mb-8">{card.description}</p>

            {/* Only show button if link exists */}
            {card.link && (
              <a
                href={card.link}
                className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium px-5 py-2 rounded-full transition"
              >
                Learn more
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeOffer;
