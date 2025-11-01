import React from 'react'

const HeroSection = () => {
  const serviceCategories = [
    { icon: "💡", label: "Brand Identity", color: "violet" },
    { icon: "📱", label: "Social Media", color: "fuchsia" },
    { icon: "🖼️", label: "Marketing Design", color: "indigo" },
    { icon: "👕", label: "Apparel Design", color: "pink" },
    { icon: "🏷️", label: "Product Labels", color: "purple" },
    { icon: "📦", label: "Packaging", color: "violet" }
  ]

  return (
    <section className="relative pt-32 pb-24 px-6 lg:px-12 overflow-hidden bg-slate-950">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-fuchsia-600/20 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-600/15 rounded-full blur-3xl animate-pulse-slow animation-delay-4000"></div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.03)_1px,transparent_1px)] bg-size-[50px_50px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Main Content - Centered */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-5 py-2 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 bg-violet-400 rounded-full animate-pulse"></span>
            <span className="text-violet-300 text-sm font-medium">Creative Services Portfolio</span>
          </div>

          {/* Headline */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="block bg-linear-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent animate-fade-in-up">
              Services
            </span>
            <span className="block text-white text-5xl md:text-6xl mt-2">
              That Elevate Brands
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12">
            From concept to creation, we deliver design solutions that captivate audiences 
            and drive meaningful results for your business.
          </p>

          {/* Floating Service Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {serviceCategories.map((service, index) => (
              <div
                key={index}
                className={`group relative bg-slate-900/40 backdrop-blur-sm border border-${service.color}-500/20 hover:border-${service.color}-500/50 rounded-2xl p-6 transition-all duration-500 hover:scale-110 hover:-translate-y-2 cursor-pointer`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fade-in-up 0.8s ease-out forwards'
                }}
              >
                {/* Glow Effect on Hover */}
                <div className={`absolute inset-0 bg-linear-to-br from-${service.color}-500/0 to-${service.color}-500/0 group-hover:from-${service.color}-500/10 group-hover:to-${service.color}-500/5 rounded-2xl transition-all duration-500`}></div>
                
                {/* Icon */}
                <div className="relative text-5xl mb-4 group-hover:scale-125 transition-transform duration-500">
                  {service.icon}
                </div>
                
                {/* Label */}
                <div className="relative">
                  <p className={`text-${service.color}-300 text-sm font-semibold group-hover:text-${service.color}-200 transition-colors`}>
                    {service.label}
                  </p>
                </div>

                {/* Decorative Corner */}
                <div className={`absolute top-2 right-2 w-2 h-2 bg-${service.color}-500/50 rounded-full group-hover:scale-150 transition-transform duration-500`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats/Features */}
        <div className="flex flex-wrap justify-center gap-8 mt-16 pt-12 border-t border-violet-500/10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-linear-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center border border-violet-500/30">
              <span className="text-2xl">⚡</span>
            </div>
            <div>
              <p className="text-white font-semibold">Fast Delivery</p>
              <p className="text-gray-400 text-sm">Quick turnaround time</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-linear-to-br from-fuchsia-500/20 to-indigo-500/20 flex items-center justify-center border border-fuchsia-500/30">
              <span className="text-2xl">🎨</span>
            </div>
            <div>
              <p className="text-white font-semibold">Custom Designs</p>
              <p className="text-gray-400 text-sm">Tailored to your brand</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-linear-to-br from-indigo-500/20 to-violet-500/20 flex items-center justify-center border border-indigo-500/30">
              <span className="text-2xl">✨</span>
            </div>
            <div>
              <p className="text-white font-semibold">Premium Quality</p>
              <p className="text-gray-400 text-sm">Professional standards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
