import React from 'react'

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 lg:px-12 overflow-hidden">
      {/* Background Image with Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="/bg_img/bg3.jpg" 
          alt="Background" 
          className="w-full h-full object-cover opacity-60 animate-[zoom_20s_ease-in-out_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-slate-950/40"></div>
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-violet-600/10 via-fuchsia-600/10 to-indigo-600/10 animate-gradient"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Headline - Centered */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            <span className="bg-linear-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
              About Us
            </span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Discover our journey, values, and the team behind creative solutions that make a difference.
          </p>
        </div>

        {/* Image Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Image 1 */}
          <div className="group relative overflow-hidden rounded-2xl border border-violet-500/20">
            <div className="aspect-3/4 overflow-hidden">
              <img 
                src="/Photos/About page/about1.png" 
                alt="Our Team" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Image 2 */}
          <div className="group relative overflow-hidden rounded-2xl border border-fuchsia-500/20">
            <div className="aspect-3/4 overflow-hidden">
              <img 
                src="/Photos/About page/about2.png" 
                alt="Our Workspace" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Image 3 */}
          <div className="group relative overflow-hidden rounded-2xl border border-indigo-500/20">
            <div className="aspect-3/4 overflow-hidden">
              <img 
                src="/Photos/About page/about3.png" 
                alt="img" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Image 4 */}
          <div className="group relative overflow-hidden rounded-2xl border border-violet-500/20">
            <div className="aspect-3/4 overflow-hidden">
              <img 
                src="/Photos/About page/about4.png" 
                alt="img" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
