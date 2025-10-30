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
            <span className="bg-linear-to-r from-fuchsia-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Our Services
            </span>
          </h1>
          <p className="text-gray-300 text-lg md:text-2xl max-w-2xl leading-relaxed mb-6">
            Unlock the full potential of your brand with our creative suite. We blend strategy, design, and technology to deliver results that inspire and engage.
          </p>
          <p className="text-gray-400 text-base md:text-lg max-w-xl">
            From logo design to digital marketing, discover how our services can transform your business vision into reality.
          </p>
        </div>
        {/* Right: Vertical Feature List */}
        <div className="md:w-1/3 flex flex-col gap-6 items-center">
          <div className="flex items-center gap-4 bg-slate-900/60 rounded-xl px-6 py-4 shadow-lg border border-fuchsia-500/20 w-full min-w-[220px] max-w-[260px]">
            <span className="text-3xl">🎨</span>
            <span className="text-lg font-semibold text-fuchsia-300">Branding & Identity</span>
          </div>
          <div className="flex items-center gap-4 bg-slate-900/60 rounded-xl px-6 py-4 shadow-lg border border-violet-500/20 w-full min-w-[220px] max-w-[260px]">
            <span className="text-3xl">💻</span>
            <span className="text-lg font-semibold text-violet-300">Web Design & Development</span>
          </div>
          <div className="flex items-center gap-4 bg-slate-900/60 rounded-xl px-6 py-4 shadow-lg border border-indigo-500/20 w-full min-w-[220px] max-w-[260px]">
            <span className="text-3xl">📱</span>
            <span className="text-lg font-semibold text-indigo-300">Social Media & Marketing</span>
          </div>
          <div className="flex items-center gap-4 bg-slate-900/60 rounded-xl px-6 py-4 shadow-lg border border-fuchsia-500/20 w-full min-w-[220px] max-w-[260px]">
            <span className="text-3xl">🖼️</span>
            <span className="text-lg font-semibold text-fuchsia-300">Graphic Design</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
