import React from 'react'

const CreativeProcess = () => {
  const processes = [
    {
      step: '01',
      icon: '💡',
      title: 'Ideation',
      description: 'Generating creative ideas and inspiration'
    },
    {
      step: '02',
      icon: '📋',
      title: 'Planning',
      description: 'Creating detailed project roadmap and timeline'
    },
    {
      step: '03',
      icon: '✏️',
      title: 'Design',
      description: 'Crafting initial designs and visual concepts'
    },
    {
      step: '04',
      icon: '🔄',
      title: 'Refinement',
      description: 'Incorporating feedback and perfecting details'
    },
    {
      step: '05',
      icon: '🚀',
      title: 'Delivery',
      description: 'Final delivery with all files and documentation'
    }
  ]

  return (
    <section className="py-20 px-6 lg:px-12 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {/* bg-linear-to-r from-violet-400  */}
            <span className="text-white via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
              Our Creative Process 
            </span>
          </h2>
          <p className="text-gray-400 text-lg">From concept to completion, here's how we work</p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-linear-to-r from-violet-600 via-fuchsia-600 to-indigo-600 opacity-30"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {processes.map((process, index) => (
              <div key={index} className="relative">
                <div className="bg-slate-900/50 backdrop-blur-xl border border-violet-500/20 rounded-2xl p-6 hover:border-violet-500/50 transition-all group">
                  <div className="text-center">
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{process.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{process.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{process.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CreativeProcess
