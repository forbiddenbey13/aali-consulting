"use client";
import React, { useEffect, useState } from "react";

interface HeroProps {
  images: string[];
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const HeroSection: React.FC<HeroProps> = ({
  images,
  title,
  subtitle,
  buttonText,
  buttonLink,
}) => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setSlide((prev) => (prev + 1) % images.length),
      4000
    );
    return () => clearInterval(interval);
  }, [images]);

  return (
    <section className="relative flex flex-col items-center justify-center text-center px-10 py-24 overflow-hidden" style={{ minHeight: 400 }}>
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`Slide ${idx}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            slide === idx ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-blue-900/40" />
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-5xl font-extrabold text-white! drop-shadow-xl">
          {title}
        </h1>
        <p className="mt-6 text-lg text-white! drop-shadow-xl">{subtitle}</p>
        <div className="mt-8 flex justify-center">
          <a
            href={buttonLink}
            className="bg-blue-500 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-600 transition"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
