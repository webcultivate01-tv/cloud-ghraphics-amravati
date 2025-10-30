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

      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left: Headline and Description */}
        <div className="md:w-2/3 text-left md:pr-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            <span className="bg-linear-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
              About Cloud Graphics
            </span>
          </h1>
          <p className="text-gray-300 text-lg md:text-2xl max-w-2xl leading-relaxed mb-6">
            We are a creative powerhouse based in Amravati, blending design, technology, and strategy to craft unforgettable brand experiences. Our team thrives on innovation, collaboration, and a relentless pursuit of excellence.
          </p>
          <p className="text-gray-400 text-base md:text-lg max-w-xl">
            From branding to digital campaigns, we turn ideas into impact. Discover our story, our values, and what makes us different.
          </p>
        </div>
        {/* Right: Vertical Feature List */}
        <div className="md:w-1/3 flex flex-col gap-6 items-center">
          <div className="flex items-center gap-4 bg-slate-900/60 rounded-xl px-6 py-4 shadow-lg border border-violet-500/20 w-full min-w-[220px] max-w-[260px]">
            <span className="text-3xl">💡</span>
            <span className="text-lg font-semibold text-violet-300">Innovation</span>
          </div>
          <div className="flex items-center gap-4 bg-slate-900/60 rounded-xl px-6 py-4 shadow-lg border border-fuchsia-500/20 w-full min-w-[220px] max-w-[260px]">
            <span className="text-3xl">🤝</span>
            <span className="text-lg font-semibold text-fuchsia-300">Collaboration</span>
          </div>
          <div className="flex items-center gap-4 bg-slate-900/60 rounded-xl px-6 py-4 shadow-lg border border-indigo-500/20 w-full min-w-[220px] max-w-[260px]">
            <span className="text-3xl">🎯</span>
            <span className="text-lg font-semibold text-indigo-300">Excellence</span>
          </div>
          <div className="flex items-center gap-4 bg-slate-900/60 rounded-xl px-6 py-4 shadow-lg border border-violet-500/20 w-full min-w-[220px] max-w-[260px]">
            <span className="text-3xl">🌟</span>
            <span className="text-lg font-semibold text-violet-300">Impact</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
