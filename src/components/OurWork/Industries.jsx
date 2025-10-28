import React from 'react'

const Industries = () => {
  const industries = [
    { icon: '🍔', name: 'Food & Beverage', projects: '25+' },
    { icon: '💼', name: 'Corporate', projects: '20+' },
    { icon: '🏥', name: 'Healthcare', projects: '15+' },
    { icon: '🛍️', name: 'Retail & Fashion', projects: '18+' },
    { icon: '🏠', name: 'Real Estate', projects: '12+' },
    { icon: '💻', name: 'Tech & Startups', projects: '22+' },
    { icon: '🎓', name: 'Education', projects: '10+' },
    { icon: '✨', name: 'Beauty & Wellness', projects: '14+' }
  ]

  return (
    <section className="py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
              Industries We Serve 🏢
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Delivering creative solutions across diverse sectors</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-slate-900/50 backdrop-blur-xl border border-violet-500/20 rounded-2xl p-6 text-center hover:border-violet-500/50 hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{industry.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{industry.name}</h3>
              <div className="text-violet-400 font-semibold">{industry.projects} Projects</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Industries
