import React from 'react'
import StatCard from '../common/StatCard'

const HeroSection = () => {
  const stats = [
    { value: "100+", label: "Projects Done" },
    { value: "50+", label: "Happy Clients" },
    { value: "5+", label: "Years Experience" }
  ]

  return (
    <section id="home" className="relative min-h-screen bg-linear-to-br from-indigo-950 via-violet-950 to-purple-950 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="bg-violet-500/20 text-violet-300 px-4 py-2 rounded-full text-sm font-medium border border-violet-500/30">
                  ✨ Freelance Graphic Designer
                </span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Transforming
                <span className="block bg-linear-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
                  Your Ideas
                </span>
                Into Art
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                I craft stunning graphics, memorable brands, and digital experiences that make your business stand out in the crowd.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="group bg-linear-to-r from-violet-600 to-fuchsia-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-violet-500/50 transition-all duration-300 transform hover:-translate-y-1">
                View My Work
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>
              <button className="border-2 border-violet-400 text-violet-300 px-8 py-4 rounded-full font-semibold hover:bg-violet-500/10 transition-all duration-300">
                Let's Talk
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => (
                <StatCard key={index} value={stat.value} label={stat.label} />
              ))}
            </div>
          </div>

          {/* Right Content - Creative Grid */}
          <div className="relative">
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
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <span className="text-gray-400 text-sm">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-gray-400 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
