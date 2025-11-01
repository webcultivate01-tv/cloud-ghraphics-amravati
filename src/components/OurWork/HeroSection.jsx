import React from 'react'

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-24 px-6 lg:px-12 overflow-hidden bg-slate-950">
      {/* Ambient Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-fuchsia-600/20 rounded-full blur-[120px] animate-pulse-slow animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/30 rounded-full px-6 py-2 mb-6 backdrop-blur-sm">
            <span className="text-2xl">🎨</span>
            <span className="text-violet-300 font-medium">Our Portfolio</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="bg-linear-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
              Creative Work
            </span>
          </h1>
          
          <p className="text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Transforming ideas into stunning visual experiences that captivate and inspire
          </p>
        </div>

        {/* Image Showcase - Creative Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">
          {/* Large Featured Image - Left */}
          <div className="lg:col-span-7 group relative overflow-hidden rounded-3xl border border-violet-500/20 hover:border-violet-500/50 transition-all duration-500">
            <div className="aspect-4/3 overflow-hidden">
              <img 
                src="/Photos/Our work page/work1.png" 
                alt="Featured Creative Work" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            {/* Floating Label */}
            <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="bg-slate-900/80 backdrop-blur-md border border-violet-500/30 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Featured Project</h3>
                <p className="text-gray-300">Premium design crafted with excellence</p>
              </div>
            </div>
          </div>

          {/* Right Side - Stacked Images */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Image 2 */}
            <div className="group relative overflow-hidden rounded-3xl border border-fuchsia-500/20 hover:border-fuchsia-500/50 transition-all duration-500 flex-1">
              <div className="h-full overflow-hidden">
                <img 
                  src="/Photos/Our work page/work2.jpg" 
                  alt="Creative Design Portfolio" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              {/* Hover Label */}
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="bg-slate-900/80 backdrop-blur-md border border-fuchsia-500/30 rounded-xl p-4">
                  <h3 className="text-lg font-bold text-white mb-1">Creative Design</h3>
                  <p className="text-gray-300 text-sm">Innovative solutions</p>
                </div>
              </div>
            </div>

            {/* Image 3 */}
            <div className="group relative overflow-hidden rounded-3xl border border-indigo-500/20 hover:border-indigo-500/50 transition-all duration-500 flex-1">
              <div className="h-full overflow-hidden">
                <img 
                  src="/Photos/Our work page/work3.jpg" 
                  alt="Brand Identity Design" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              {/* Hover Label */}
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="bg-slate-900/80 backdrop-blur-md border border-indigo-500/30 rounded-xl p-4">
                  <h3 className="text-lg font-bold text-white mb-1">Brand Identity</h3>
                  <p className="text-gray-300 text-sm">Visual storytelling</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="flex flex-wrap justify-center items-center gap-12 pt-12 border-t border-violet-500/10">
          <div className="text-center">
            <div className="text-5xl font-bold bg-linear-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-2">500+</div>
            <div className="text-gray-400 text-sm uppercase tracking-wider">Projects Done</div>
          </div>
          <div className="hidden md:block w-px h-12 bg-violet-500/20"></div>
          <div className="text-center">
            <div className="text-5xl font-bold bg-linear-to-r from-fuchsia-400 to-indigo-400 bg-clip-text text-transparent mb-2">200+</div>
            <div className="text-gray-400 text-sm uppercase tracking-wider">Happy Clients</div>
          </div>
          <div className="hidden md:block w-px h-12 bg-violet-500/20"></div>
          <div className="text-center">
            <div className="text-5xl font-bold bg-linear-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent mb-2">4+</div>
            <div className="text-gray-400 text-sm uppercase tracking-wider">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
