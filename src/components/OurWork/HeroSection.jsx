import React, { useState, useRef, useEffect } from "react";

const HeroSection = () => {
  const galleryImages = [
    { id: 1, src: "work1.webp", alt: "Creative Work 1" },
    { id: 2, src: "work2.webp", alt: "Creative Work 2" },
    { id: 3, src: "work3.webp", alt: "Creative Work 3" },
    { id: 4, src: "work4.webp", alt: "Creative Work 4" },
    { id: 5, src: "work5.webp", alt: "Creative Work 5" },
    { id: 6, src: "work6.webp", alt: "Creative Work 6" },
  ];

  const [featuredImage, setFeaturedImage] = useState(galleryImages[0]);
  const [leftHeight, setLeftHeight] = useState(0);
  const leftRef = useRef(null);

  useEffect(() => {
    // Set left side height on mount and resize
    const updateHeight = () => {
      if (leftRef.current) {
        setLeftHeight(leftRef.current.offsetHeight);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [featuredImage]);

  const handleThumbnailClick = (image) => {
    setFeaturedImage(image);
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center items-center bg-slate-950 overflow-hidden px-4 sm:px-6 lg:px-12 pt-28 sm:pt-32 md:pt-36">
      {/* Ambient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-violet-600/20 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-fuchsia-600/20 rounded-full blur-[100px] animate-pulse-slow animation-delay-2000"></div>
      </div>

      <div className="w-full max-w-6xl text-center flex flex-col items-center justify-center">
        {/* Header Section */}
        <div className="mb-8 sm:mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            <span className="text-white via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
              Creative Work
            </span>
          </h1>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Transforming ideas into stunning visual experiences that captivate
            and inspire.
          </p>
        </div>

        {/* Gallery Layout */}
        <div className="flex flex-col md:flex-row items-start justify-center gap-6 w-full">
          {/* Left - Featured Image */}
          <div ref={leftRef} className="w-full md:w-[60%]">
            <img
              src={featuredImage.src}
              alt={featuredImage.alt}
              className="w-full h-[45vh] sm:h-[55vh] md:h-[65vh] object-cover rounded-xl shadow-md transition-all duration-500"
            />
          </div>

          {/* Right - Thumbnails */}
          <div
            className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-2 gap-3 w-full md:w-[35%]"
            style={{ height: leftHeight }}
          >
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="cursor-pointer"
                onClick={() => handleThumbnailClick(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full h-full rounded-md object-cover transition-all duration-300 hover:opacity-80 ${
                    featuredImage.id === image.id
                      ? "ring-2 ring-violet-500"
                      : "ring-1 ring-transparent"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 pt-10 border-t border-violet-500/10 mt-8">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-white bg-clip-text text-transparent mb-1">
              500+
            </div>
            <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider">
              Projects Done
            </div>
          </div>
          <div className="hidden md:block w-px h-10 bg-violet-500/20"></div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-white bg-clip-text text-transparent mb-1">
              200+
            </div>
            <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider">
              Happy Clients
            </div>
          </div>
          <div className="hidden md:block w-px h-10 bg-violet-500/20"></div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-white bg-clip-text text-transparent mb-1">
              4+
            </div>
            <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider">
              Years Experience
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
