import React from 'react'

const Team = () => {
  const team = [
    {
      name: 'Creative Director',
      role: 'Lead Designer & Founder',
      image: '👨‍🎨',
      description: 'Passionate about transforming ideas into visual masterpieces'
    },
    {
      name: 'Design Team',
      role: 'Visual Artists',
      image: '🎨',
      description: 'Crafting stunning designs that captivate and inspire'
    },
    {
      name: 'Production Team',
      role: 'Media Specialists',
      image: '📸',
      description: 'Bringing your vision to life through video and photography'
    }
  ]

  return (
    <section className="py-20 px-6 lg:px-12 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
              Meet Our Team 👥
            </span>
          </h2>
          <p className="text-gray-400 text-lg">The creative minds behind Cloud Graphics</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div 
              key={index}
              className="bg-slate-900/50 backdrop-blur-xl border border-violet-500/20 rounded-3xl p-8 text-center hover:border-violet-500/50 hover:scale-105 transition-all duration-300 group"
            >
              <div className="text-8xl mb-6 group-hover:scale-110 transition-transform">{member.image}</div>
              <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
              <div className="text-violet-400 font-semibold mb-4">{member.role}</div>
              <p className="text-gray-400 leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
