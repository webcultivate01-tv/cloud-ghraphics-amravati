import React from 'react'

const CoreValues = () => {
  const values = [
    {
      icon: '🎯',
      title: 'Creative Excellence',
      description: 'We push boundaries and deliver designs that stand out and make lasting impressions.'
    },
    {
      icon: '🤝',
      title: 'Client Partnership',
      description: 'Your success is our success. We work closely with you every step of the way.'
    },
    {
      icon: '⚡',
      title: 'Innovation First',
      description: 'Staying ahead with the latest design trends and cutting-edge technologies.'
    },
    {
      icon: '💎',
      title: 'Quality Focused',
      description: 'Every pixel matters. We deliver nothing but the highest quality work.'
    }
  ]

  return (
    <section className="py-20 px-6 lg:px-12 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
              Our Core Values 💫
            </span>
          </h2>
          <p className="text-gray-400 text-lg">The principles that guide everything we do</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-slate-900/50 backdrop-blur-xl border border-violet-500/20 rounded-2xl p-6 hover:border-violet-500/50 hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{value.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
              <p className="text-gray-400 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CoreValues
