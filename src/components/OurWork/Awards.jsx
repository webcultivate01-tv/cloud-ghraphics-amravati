import React from 'react'

const Awards = () => {
  const awards = [
    {
      icon: '🏆',
      title: 'Best Design Agency',
      year: '2024',
      org: 'Amravati Business Awards'
    },
    {
      icon: '⭐',
      title: 'Top Rated Designer',
      year: '2023',
      org: 'Creative Excellence Awards'
    },
    {
      icon: '🎖️',
      title: 'Innovation in Branding',
      year: '2023',
      org: 'Maharashtra Design Forum'
    },
    {
      icon: '💎',
      title: 'Client Choice Award',
      year: '2022',
      org: 'Regional Creative Awards'
    }
  ]

  return (
    <section className="py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
              Awards & Recognition 🏆
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Our work speaks for itself</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-slate-900/50 backdrop-blur-xl border border-violet-500/20 rounded-2xl p-6 text-center hover:border-violet-500/50 hover:scale-105 transition-all group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{award.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{award.title}</h3>
              <div className="text-violet-400 font-semibold mb-1">{award.year}</div>
              <p className="text-gray-400 text-sm">{award.org}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Awards
