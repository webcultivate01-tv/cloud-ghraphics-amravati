import React, { useState, useRef, useEffect } from "react";

const HeroSection = () => {
  const galleryImages = [
    { id: 1, src: "work1.webp", alt: "Creative Work 1", category: "Branding" },
    { id: 2, src: "work2.webp", alt: "Creative Work 2", category: "Social Media" },
    { id: 3, src: "work3.webp", alt: "Creative Work 3", category: "Print Design" },
    { id: 4, src: "work4.webp", alt: "Creative Work 4", category: "Packaging" },
    { id: 5, src: "work5.webp", alt: "Creative Work 5", category: "Logo Design" },
    { id: 6, src: "work6.webp", alt: "Creative Work 6", category: "Marketing" },
  ];

  const [featuredImage, setFeaturedImage] = useState(galleryImages[0]);
  const [isLoading, setIsLoading] = useState(false);

  const handleThumbnailClick = (image) => {
    if (featuredImage.id !== image.id) {
      setIsLoading(true);
      setTimeout(() => {
        setFeaturedImage(image);
        setIsLoading(false);
      }, 200);
    }
  };

  return (
    <section className="relative min-h-screen bg-slate-950 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-fuchsia-600/20 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-600/15 rounded-full blur-3xl animate-pulse-slow animation-delay-4000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.03)_1px,transparent_1px)] bg-size-[60px_60px] opacity-40"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-32 right-32 w-4 h-4 bg-violet-400/60 rounded-full animate-float"></div>
        <div className="absolute bottom-40 left-40 w-6 h-6 bg-fuchsia-400/60 rounded-full animate-float animation-delay-3000"></div>
      </div>

      <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-violet-400 rounded-full animate-pulse"></span>
              <span className="text-violet-300 text-sm font-medium">Portfolio Showcase</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-linear-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
                Our Creative
              </span>
              <br />
              <span className="text-white">Masterpieces</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover our portfolio of stunning designs that have helped brands stand out and connect with their audiences.
            </p>
          </div>

          {/* Gallery Section */}
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Featured Image - Takes 3 columns */}
            <div className="lg:col-span-3 relative group">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-900/50 backdrop-blur-sm border border-white/10">
                {/* Loading Overlay */}
                {isLoading && (
                  <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm z-10 flex items-center justify-center">
                    <div className="w-8 h-8 border-2 border-violet-400 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
                
                <img
                  src={featuredImage.src}
                  alt={featuredImage.alt}
                  className="w-full h-[400px] object-cover transition-all duration-500 group-hover:scale-105"
                />
                
                {/* Overlay Info */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-white font-bold text-lg">{featuredImage.alt}</h3>
                          <p className="text-violet-300 text-sm">{featuredImage.category}</p>
                        </div>
                        <div className="w-12 h-12 bg-violet-500/20 rounded-full flex items-center justify-center">
                          <span className="text-violet-300 text-xl">🎨</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-violet-500/30 rounded-full blur-sm animate-float"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-fuchsia-500/30 rounded-full blur-sm animate-float animation-delay-2000"></div>
              </div>
            </div>

            {/* Thumbnails Grid - Takes 2 columns */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-1 h-8 bg-linear-to-b from-violet-400 to-fuchsia-400 rounded-full"></span>
                Browse Gallery
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {galleryImages.map((image) => (
                  <div
                    key={image.id}
                    className={`relative cursor-pointer group transition-all duration-300 ${
                      featuredImage.id === image.id
                        ? "ring-2 ring-violet-500 scale-105"
                        : "hover:scale-105 hover:ring-2 hover:ring-white/30"
                    }`}
                    onClick={() => handleThumbnailClick(image)}
                  >
                    <div className="relative rounded-xl overflow-hidden bg-slate-900/50 backdrop-blur-sm">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-32 object-cover transition-all duration-300 group-hover:brightness-110"
                      />
                      
                      {/* Active Indicator */}
                      {featuredImage.id === image.id && (
                        <div className="absolute inset-0 bg-violet-500/20 flex items-center justify-center">
                          <div className="w-8 h-8 bg-violet-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm">✓</span>
                          </div>
                        </div>
                      )}
                      
                      {/* Category Badge */}
                      <div className="absolute top-2 left-2">
                        <span className="bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                          {image.category}
                        </span>
                      </div>
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-2 left-2 right-2">
                          <p className="text-white text-xs font-medium truncate">{image.alt}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold bg-linear-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-1">
                    500+
                  </div>
                  <div className="text-gray-400 text-sm">Projects Done</div>
                </div>
                <div className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold bg-linear-to-r from-fuchsia-400 to-indigo-400 bg-clip-text text-transparent mb-1">
                    200+
                  </div>
                  <div className="text-gray-400 text-sm">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
