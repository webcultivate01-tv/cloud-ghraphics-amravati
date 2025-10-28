import React, { useState, useEffect } from 'react'
import StatCard from '../common/StatCard'

const backgrounds = ['/bg_img/bg1.jpg', '/bg_img/bg2.jpg', '/bg_img/bg3.jpg']

const HeroSection = () => {
  const [currentBg, setCurrentBg] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length)
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const stats = [
    { value: "100+", label: "Projects Done" },
    { value: "50+", label: "Happy Clients" },
    { value: "5+", label: "Years Experience" }
  ]

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background Images with advanced effects */}
      <div className="absolute inset-0">
        {backgrounds.map((bg, index) => (
          <div
            key={bg}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentBg ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={bg} 
              alt={`Background ${index + 1}`} 
              className={`w-full h-full object-cover transition-transform duration-8000 ease-out ${
                index === currentBg ? 'scale-110' : 'scale-100'
              }`}
            />
          </div>
        ))}
        
        {/* Gradient Overlay - Bottom to Top */}
        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/70 to-transparent"></div>
        
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-violet-600/20 via-transparent to-fuchsia-600/20 animate-pulse-slow"></div>
        
        {/* Vignette Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white/30 rounded-full animate-float"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-violet-400/40 rounded-full animate-float animation-delay-2000"></div>
          <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-fuchsia-400/40 rounded-full animate-float animation-delay-4000"></div>
          <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-white/30 rounded-full animate-float animation-delay-6000"></div>
        </div>
        
        {/* Scan Line Effect */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/5 to-transparent h-32 animate-scan"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-24 md:pb-32">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="bg-violet-500/20 text-violet-300 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium border border-violet-500/30">
                  ✨ Freelance Graphic Designer
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Transforming
                <span className="block bg-linear-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
                  Your Ideas
                </span>
                Into Art
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                I craft stunning graphics, memorable brands, and digital experiences that make your business stand out in the crowd.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
              <button className="group bg-linear-to-r from-violet-600 to-fuchsia-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:shadow-2xl hover:shadow-violet-500/50 transition-all duration-300 transform hover:-translate-y-1">
                View My Work
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>
              <button className="border-2 border-violet-400 text-violet-300 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-violet-500/10 transition-all duration-300">
                Let's Talk
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 sm:pt-8 max-w-md mx-auto lg:mx-0">
              {stats.map((stat, index) => (
                <StatCard key={index} value={stat.value} label={stat.label} />
              ))}
            </div>
          </div>

          {/* Right Content - Creative Grid */}
          <div className="relative hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-linear-to-br from-violet-600 to-fuchsia-600 rounded-3xl p-8 h-64 flex items-center justify-center transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-2">🎨</div>
                    <div className="font-semibold">Branding</div>
                  </div>
                </div>
                <div className="bg-linear-to-br from-indigo-500 to-violet-500 rounded-3xl p-8 h-48 flex items-center justify-center transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <div className="text-center text-white">
                    <div className="text-5xl mb-2">📱</div>
                    <div className="font-semibold">Digital</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-linear-to-br from-fuchsia-600 to-pink-600 rounded-3xl p-8 h-48 flex items-center justify-center transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <div className="text-center text-white">
                    <div className="text-5xl mb-2">✏️</div>
                    <div className="font-semibold">Design</div>
                  </div>
                </div>
                <div className="bg-linear-to-br from-violet-600 to-indigo-600 rounded-3xl p-8 h-64 flex items-center justify-center transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-2">🎬</div>
                    <div className="font-semibold">Video</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Creative Cards - Horizontal Scroll */}
        <div className="lg:hidden mt-12 overflow-x-auto pb-4 -mx-4 px-4">
          <div className="flex gap-4 min-w-max">
            <div className="bg-linear-to-br from-violet-600 to-fuchsia-600 rounded-2xl p-6 w-40 h-40 flex flex-col items-center justify-center">
              <div className="text-5xl mb-2">🎨</div>
              <div className="font-semibold text-white text-sm">Branding</div>
            </div>
            <div className="bg-linear-to-br from-indigo-500 to-violet-500 rounded-2xl p-6 w-40 h-40 flex flex-col items-center justify-center">
              <div className="text-5xl mb-2">📱</div>
              <div className="font-semibold text-white text-sm">Digital</div>
            </div>
            <div className="bg-linear-to-br from-fuchsia-600 to-pink-600 rounded-2xl p-6 w-40 h-40 flex flex-col items-center justify-center">
              <div className="text-5xl mb-2">✏️</div>
              <div className="font-semibold text-white text-sm">Design</div>
            </div>
            <div className="bg-linear-to-br from-violet-600 to-indigo-600 rounded-2xl p-6 w-40 h-40 flex flex-col items-center justify-center">
              <div className="text-5xl mb-2">🎬</div>
              <div className="font-semibold text-white text-sm">Video</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden sm:block">
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <span className="text-gray-400 text-xs sm:text-sm">Scroll Down</span>
          <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 sm:w-1.5 h-2 sm:h-3 bg-gray-400 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
