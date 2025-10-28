import React from 'react'

const HeroSection = () => {
  const stats = [
    { number: '5+', label: 'Years Experience', icon: '⏳' },
    { number: '100+', label: 'Projects Completed', icon: '🎨' },
    { number: '50+', label: 'Happy Clients', icon: '😊' },
    { number: '98%', label: 'Client Satisfaction', icon: '⭐' }
  ]

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
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            <span className="bg-linear-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
              About Cloud Graphics
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            We're a passionate creative studio based in Amravati, dedicated to transforming your vision into stunning visual experiences that captivate and inspire.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-slate-900/50 backdrop-blur-xl border border-violet-500/20 rounded-2xl p-6 text-center hover:border-violet-500/50 hover:scale-105 transition-all duration-300 group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold bg-linear-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroSection
