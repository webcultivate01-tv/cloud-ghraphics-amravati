import React from 'react'

const HeroSection = () => {
  return (
  <section className="relative py-12 sm:py-16 lg:py-24 px-6 lg:px-12 overflow-hidden bg-slate-950">
      {/* Background Image with Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="/bg_img/bg3.jpg" 
          alt="Background" 
          className="w-full h-full object-cover opacity-50 animate-[zoom_20s_ease-in-out_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-slate-950/60"></div>
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-violet-600/10 via-fuchsia-600/10 to-indigo-600/10 animate-gradient"></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section - Better Spacing */}
        <div className="text-center mb-16 lg:mb-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/30 rounded-full px-5 py-2.5 mb-8 backdrop-blur-sm">
            <div className="w-2 h-2 bg-violet-400 rounded-full animate-pulse"></div>
            <span className="text-violet-300 font-medium text-sm">Who We Are</span>
          </div>

          {/* Main Headline - Better Sizing */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 lg:mb-8">
            <span className="bg-linear-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
              About Us
            </span>
          </h1>
          
          {/* Subtitle - Better Typography */}
          <p className="text-gray-300 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed px-4">
            Discover our journey, values, and the team behind creative solutions that make a difference.
          </p>
        </div>

        {/* Image Grid - Better Responsive Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {/* Image 1 */}
          <div className="group relative overflow-hidden rounded-3xl border-2 border-violet-500/30">
            <div className="aspect-3/4 overflow-hidden bg-slate-900">
              <img 
                src="/Photos/About page/about1.png" 
                alt="Our Team" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Image 2 */}
          <div className="group relative overflow-hidden rounded-3xl border-2 border-fuchsia-500/30">
            <div className="aspect-3/4 overflow-hidden bg-slate-900">
              <img 
                src="/Photos/About page/about2.png" 
                alt="Our Workspace" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Image 3 */}
          <div className="group relative overflow-hidden rounded-3xl border-2 border-indigo-500/30">
            <div className="aspect-3/4 overflow-hidden bg-slate-900">
              <img 
                src="/Photos/About page/about3.png" 
                alt="Our Process" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Image 4 */}
          <div className="group relative overflow-hidden rounded-3xl border-2 border-violet-500/30">
            <div className="aspect-3/4 overflow-hidden bg-slate-900">
              <img 
                src="/Photos/About page/about4.png" 
                alt="Our Culture" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
