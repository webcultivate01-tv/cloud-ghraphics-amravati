import React from 'react'

const OurClients = () => {
  const clients = [
    { 
      name: 'WebCultivate', 
      logo: '🚀',
      color: 'from-violet-500 to-purple-600'
    },
    { 
      name: 'DesignHub', 
      logo: '🎨',
      color: 'from-fuchsia-500 to-pink-600'
    },
    { 
      name: 'MediaPro', 
      logo: '📱',
      color: 'from-indigo-500 to-blue-600'
    },
    { 
      name: 'BrandWorks', 
      logo: '⭐',
      color: 'from-violet-500 to-fuchsia-600'
    },
    { 
      name: 'CreativeSpace', 
      logo: '💎',
      color: 'from-purple-500 to-indigo-600'
    },
    { 
      name: 'InnovateLab', 
      logo: '🎯',
      color: 'from-pink-500 to-rose-600'
    },
    { 
      name: 'PixelCraft', 
      logo: '✨',
      color: 'from-blue-500 to-cyan-600'
    },
    { 
      name: 'VisionStudio', 
      logo: '👁️',
      color: 'from-indigo-500 to-purple-600'
    }
  ]

  return (
    <section className="relative py-12 sm:py-16 overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url(/bg_img/bg5.jpg)' }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-slate-950/60"></div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-slate-950/70 via-slate-950/50 to-slate-950/70"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
  <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-md rounded-full border border-violet-400/30 mb-6 sm:mb-8 animate-fade-in-up">
            <span className="text-2xl sm:text-3xl">🤝</span>
            <span className="text-violet-300 font-semibold text-sm sm:text-base">Trusted Partners</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
            <span className="bg-linear-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
              Our Amazing Clients
            </span>
          </h2>
          
          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Proud to collaborate with forward-thinking brands and visionary companies
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="group bg-slate-900/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center space-y-3 sm:space-y-4 border-2 border-white/10 hover:border-violet-400/50 hover:shadow-2xl hover:shadow-violet-500/20 transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-linear-to-br ${client.color} rounded-2xl flex items-center justify-center text-3xl sm:text-4xl transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg`}>
                {client.logo}
              </div>
              <h3 className="font-bold text-white text-base sm:text-lg text-center">{client.name}</h3>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="bg-slate-900/60 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center border border-violet-400/20 hover:shadow-xl hover:shadow-violet-500/20 transition-all duration-300">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-linear-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-2">
              50+
            </div>
            <div className="text-gray-300 text-sm sm:text-base font-medium">Happy Clients</div>
          </div>

          <div className="bg-slate-900/60 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center border border-fuchsia-400/20 hover:shadow-xl hover:shadow-fuchsia-500/20 transition-all duration-300">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-linear-to-r from-fuchsia-400 to-pink-400 bg-clip-text text-transparent mb-2">
              100+
            </div>
            <div className="text-gray-300 text-sm sm:text-base font-medium">Projects Done</div>
          </div>

          <div className="bg-slate-900/60 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center border border-indigo-400/20 hover:shadow-xl hover:shadow-indigo-500/20 transition-all duration-300">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">
              98%
            </div>
            <div className="text-gray-300 text-sm sm:text-base font-medium">Satisfaction Rate</div>
          </div>

          <div className="bg-slate-900/60 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center border border-purple-400/20 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-linear-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent mb-2">
              5+
            </div>
            <div className="text-gray-300 text-sm sm:text-base font-medium">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurClients
