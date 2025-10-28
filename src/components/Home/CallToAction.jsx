import React from 'react'

const CallToAction = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/bg_img/bg6.jpg" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-slate-950/80"></div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-indigo-950/70 via-violet-950/60 to-fuchsia-950/70"></div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
        {/* Main CTA Card */}
        <div className="relative group">
          {/* Glowing border effect */}
          <div className="absolute -inset-1 bg-linear-to-r from-violet-600 via-fuchsia-600 to-indigo-600 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
          
          {/* Card Content */}
          <div className="relative bg-slate-900/90 backdrop-blur-xl rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl border border-white/10">
            
            <div className="space-y-8">
              {/* Badge */}
              <div className="flex justify-center">
                <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-violet-500/20 to-fuchsia-500/20 text-violet-300 rounded-full text-sm sm:text-base font-semibold border border-violet-400/30 backdrop-blur-sm">
                  <span className="text-2xl">🎨</span>
                  <span>Ready to Create?</span>
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
                Let's Bring Your{" "}
                <span className="block mt-2 bg-linear-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent animate-gradient bg-300%">
                  Vision to Life
                </span>
              </h2>

              {/* Description */}
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Transform your ideas into stunning visual experiences. From brand identity to digital design, 
                I create impactful designs that resonate with your audience.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 sm:gap-8 py-6 sm:py-10 max-w-4xl mx-auto">
                <div className="group text-center p-4 sm:p-6 rounded-2xl bg-linear-to-br from-violet-500/10 to-violet-600/5 border border-violet-500/20 hover:border-violet-400/40 transition-all duration-300">
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-3xl sm:text-5xl font-bold bg-linear-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">100+</span>
                  </div>
                  <div className="text-gray-400 text-xs sm:text-sm font-medium">Projects Completed</div>
                </div>
                
                <div className="group text-center p-4 sm:p-6 rounded-2xl bg-linear-to-br from-fuchsia-500/10 to-fuchsia-600/5 border border-fuchsia-500/20 hover:border-fuchsia-400/40 transition-all duration-300">
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-3xl sm:text-5xl font-bold bg-linear-to-r from-fuchsia-400 to-pink-400 bg-clip-text text-transparent">50+</span>
                  </div>
                  <div className="text-gray-400 text-xs sm:text-sm font-medium">Happy Clients</div>
                </div>
                
                <div className="group text-center p-4 sm:p-6 rounded-2xl bg-linear-to-br from-indigo-500/10 to-indigo-600/5 border border-indigo-500/20 hover:border-indigo-400/40 transition-all duration-300">
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-3xl sm:text-5xl font-bold bg-linear-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">5+</span>
                  </div>
                  <div className="text-gray-400 text-xs sm:text-sm font-medium">Years Experience</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <button className="group relative bg-linear-to-r from-violet-600 to-fuchsia-600 text-white px-8 sm:px-12 py-4 rounded-full font-bold text-base sm:text-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/50 w-full sm:w-auto">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <span>Start Your Project</span>
                    <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                  <div className="absolute inset-0 bg-linear-to-r from-fuchsia-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <button className="group relative border-2 border-white/30 text-white px-8 sm:px-12 py-4 rounded-full font-bold text-base sm:text-lg backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300 w-full sm:w-auto">
                  <span className="flex items-center justify-center gap-2">
                    <span>View Portfolio</span>
                    <span className="text-xl">🎨</span>
                  </span>
                </button>
              </div>

              {/* Contact Info */}
              <div className="pt-6 flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center items-center text-gray-300">
                <a href="mailto:hello@cloudgraphics.com" className="flex items-center gap-2 hover:text-violet-400 transition-colors">
                  <span className="text-xl sm:text-2xl">📧</span>
                  <span className="text-sm sm:text-base">hello@cloudgraphics.com</span>
                </a>
                <div className="hidden sm:block text-gray-600">•</div>
                <a href="tel:+91XXXXXXXXXX" className="flex items-center gap-2 hover:text-fuchsia-400 transition-colors">
                  <span className="text-xl sm:text-2xl">📱</span>
                  <span className="text-sm sm:text-base">+91 98765 43210</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <p className="text-gray-300 mt-8 text-sm sm:text-base font-medium text-center">
          ✨ Available for freelance work • 📍 Based in Amravati • 🌍 Serving clients worldwide
        </p>
      </div>
    </section>
  )
}

export default CallToAction
