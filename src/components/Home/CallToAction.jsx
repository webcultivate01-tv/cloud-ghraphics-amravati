import React from 'react'

const CallToAction = () => {
  return (
    <section className="relative bg-linear-to-br from-indigo-950 to-violet-950 py-24 overflow-hidden">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-violet-950/50 via-fuchsia-950/50 to-indigo-950/50"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-12 text-center">
        {/* Main CTA Card */}
        <div className="bg-linear-to-br from-slate-900 via-indigo-900 to-violet-900 rounded-3xl p-12 lg:p-16 shadow-2xl transform hover:scale-105 transition-transform duration-300">
          {/* Decorative sparkles */}
          <div className="absolute -top-4 -left-4 text-4xl animate-bounce">✨</div>
          <div className="absolute -top-4 -right-4 text-4xl animate-bounce" style={{animationDelay: '0.5s'}}>✨</div>
          <div className="absolute -bottom-4 -left-4 text-4xl animate-bounce" style={{animationDelay: '1s'}}>✨</div>
          <div className="absolute -bottom-4 -right-4 text-4xl animate-bounce" style={{animationDelay: '1.5s'}}>✨</div>

          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-block">
              <span className="px-4 py-2 bg-violet-500/20 text-violet-300 rounded-full text-sm font-semibold border border-violet-500/30">
                🎨 Ready to Create?
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Let's Bring Your
              <span className="block bg-linear-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
                Vision to Life
              </span>
            </h2>

            {/* Description */}
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              I'm passionate about creating stunning designs that make an impact. 
              Whether you need a logo, branding, or digital content - I'm here to help!
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6 py-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold bg-linear-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">100+</div>
                <div className="text-gray-400 text-sm mt-1">Projects</div>
              </div>
              <div className="text-center border-l border-r border-gray-700">
                <div className="text-4xl font-bold bg-linear-to-r from-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">50+</div>
                <div className="text-gray-400 text-sm mt-1">Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-linear-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">5+</div>
                <div className="text-gray-400 text-sm mt-1">Years</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <button className="group bg-white text-slate-900 px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-white/50 transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto">
                Start Your Project
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>
              <button className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300 w-full sm:w-auto">
                View Portfolio
              </button>
            </div>

            {/* Contact Info */}
            <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center text-gray-400">
              <div className="flex items-center gap-2">
                <span className="text-2xl">📧</span>
                <span>hello@cloudgraphics.com</span>
              </div>
              <div className="hidden sm:block text-gray-600">|</div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">📱</span>
                <span>+91 XXX XXX XXXX</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <p className="text-gray-600 mt-8 text-sm">
          Available for freelance work • Based in Amravati • Serving clients worldwide
        </p>
      </div>
    </section>
  )
}

export default CallToAction
