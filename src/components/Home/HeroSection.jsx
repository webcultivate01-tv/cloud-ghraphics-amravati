import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const slides = [
    { id: 1, image: "/hhero1.jpeg", alt: "Transforming Ideas Into Visual Art" },
    { id: 2, image: "/hhero2.jpeg", alt: "Creative Branding Solutions" },
    { id: 3, image: "/hhero3.jpeg", alt: "Digital Excellence" },
    { id: 4, image: "/hhero4.jpeg", alt: "Premium Design Solutions" },
    { id: 5, image: "/hhero5.jpeg", alt: "Innovative Digital Marketing" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[60vh] sm:min-h-screen overflow-hidden bg-slate-950 pt-24">
      {/* Background Image */}
      <div className="absolute inset-0 top-24">
        <img
          src={slides[currentSlide].image}
          alt={slides[currentSlide].alt}
          className="w-full h-full object-cover transition-all duration-1000"
        />
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white text-4xl hover:text-gray-300 transition-colors"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white text-4xl hover:text-gray-300 transition-colors"
      >
        &gt;
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide 
                  ? 'bg-white' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
