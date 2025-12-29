import { useState } from "react";

export default function HeroSection() {
  const slide = {
    title: "Creative Design Solutions",
    description: "Logos, banners, posters & branding that grow your business",
    buttonText: "View Services",
    buttonUrl: "/services",
    image: "/aboutslider1.webp",
  };

  return (
    <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
      {/* Background Image */}
      <img
        src={slide.image}
        alt={slide.title}
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-950/60"></div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="max-w-2xl text-white transition-all duration-700 translate-x-0 opacity-100">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {slide.title}
          </h1>

          <p className="text-lg md:text-2xl mb-8 text-gray-200">
            {slide.description}
          </p>

          <a
            href={slide.buttonUrl}
            className="inline-block bg-violet-600 hover:bg-violet-700 px-8 py-3 rounded-lg text-lg font-semibold transition"
          >
            {slide.buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}
