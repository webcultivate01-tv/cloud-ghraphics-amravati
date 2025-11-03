import React, { useState } from 'react'

const HeroSection = () => {
  // Gallery images data
  const galleryImages = [
    {
      id: 1,
      src: "/Photos/Our work page/work1.png",
      alt: "Creative Work 1"
    },
    {
      id: 2,
      src: "/Photos/Our work page/work2.jpg",
      alt: "Creative Work 2"
    },
    {
      id: 3,
      src: "/Photos/Our work page/work3.jpg",
      alt: "Creative Work 3"
    },
    {
      id: 4,
      src: "/Photos/Our work page/work1.png",
      alt: "Creative Work 4"
    },
    {
      id: 5,
      src: "/Photos/Our work page/work2.jpg",
      alt: "Creative Work 5"
    }
  ]

  // State to track the active featured image
  const [featuredImage, setFeaturedImage] = useState(galleryImages[0])

  // Handle thumbnail click
  const handleThumbnailClick = (image) => {
    setFeaturedImage(image)
  }

  return (
    <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-12 overflow-hidden bg-slate-950">
      {/* Ambient Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-fuchsia-600/20 rounded-full blur-[120px] animate-pulse-slow animation-delay-2000"></div>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/30 rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6 backdrop-blur-sm">
            <span className="text-xl sm:text-2xl">🎨</span>
            <span className="text-violet-300 font-medium text-sm sm:text-base">Our Portfolio</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
            <span className="bg-linear-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
              Creative Work
            </span>
          </h1>
          
          <p className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed px-4">
            Transforming ideas into stunning visual experiences that captivate and inspire
          </p>
        </div>

        {/* Interactive Gallery */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          {/* Featured Image */}
          <div className="aspect-1024/569 mb-4 sm:mb-6">
            <img 
              src={featuredImage.src} 
              alt={featuredImage.alt}
              className="max-w-full h-full w-full rounded-md sm:rounded-lg object-cover transition-all duration-500"
            />
          </div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
            {galleryImages.map((image) => (
              <div 
                key={image.id}
                className="aspect-3/2 cursor-pointer"
                onClick={() => handleThumbnailClick(image)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className={`max-w-full h-full w-full rounded-md object-cover object-top transition-all duration-300 hover:opacity-80 ${
                    featuredImage.id === image.id 
                      ? 'border-b-2 sm:border-b-4 border-violet-500' 
                      : 'border-b-2 border-transparent'
                  }`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 pt-8 sm:pt-12 border-t border-violet-500/10">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-linear-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-2">500+</div>
            <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider">Projects Done</div>
          </div>
          <div className="hidden md:block w-px h-12 bg-violet-500/20"></div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-linear-to-r from-fuchsia-400 to-indigo-400 bg-clip-text text-transparent mb-2">200+</div>
            <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider">Happy Clients</div>
          </div>
          <div className="hidden md:block w-px h-12 bg-violet-500/20"></div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-linear-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent mb-2">4+</div>
            <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
