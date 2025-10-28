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

      <div className="relative max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
          <span className="bg-linear-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
            Get In Touch 💬
          </span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Have a project in mind? Let's discuss how we can bring your creative vision to life. We're excited to hear from you!
        </p>
      </div>
    </section>
  )
}

export default HeroSection
