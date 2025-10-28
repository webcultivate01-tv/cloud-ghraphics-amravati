import React from 'react'

const Timeline = () => {
  const timeline = [
    { year: '2020', event: 'Founded Cloud Graphics', icon: '🚀' },
    { year: '2021', event: 'Expanded to Video Production', icon: '🎬' },
    { year: '2022', event: 'Reached 50+ Happy Clients', icon: '🎉' },
    { year: '2023', event: 'Launched Brand Identity Services', icon: '🎨' },
    { year: '2024', event: 'Completed 100+ Projects', icon: '🏆' }
  ]

  return (
    <section className="py-20 px-6 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Our Journey 🚀
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Milestones that shaped Cloud Graphics</p>
        </div>

        <div className="space-y-8">
          {timeline.map((item, index) => (
            <div 
              key={index}
              className="flex gap-6 items-start group"
            >
              <div className="shrink-0">
                <div className="w-16 h-16 bg-linear-to-br from-violet-500 to-fuchsia-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
              </div>
              <div className="flex-1 bg-slate-900/50 backdrop-blur-xl border border-violet-500/20 rounded-2xl p-6 hover:border-violet-500/50 transition-all">
                <div className="text-violet-400 font-bold text-sm mb-2">{item.year}</div>
                <h3 className="text-xl font-bold text-white">{item.event}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline
