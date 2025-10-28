import React from 'react'

const PortfolioGrid = () => {
  const projects = [
    {
      id: 1,
      title: 'Modern Brand Identity',
      category: 'Branding',
      description: 'Complete brand identity design for a tech startup',
      image: '🎨',
      tags: ['Logo', 'Brand Guide', 'Stationery'],
      gradient: 'from-violet-500 to-purple-600'
    },
    {
      id: 2,
      title: 'E-Commerce Website Design',
      category: 'Digital',
      description: 'Modern UI/UX design for online fashion store',
      image: '💻',
      tags: ['UI/UX', 'Web Design', 'Mobile App'],
      gradient: 'from-fuchsia-500 to-pink-600'
    },
    {
      id: 3,
      title: 'Product Photography',
      category: 'Photography',
      description: 'Professional product shots for luxury watches',
      image: '📸',
      tags: ['Product', 'Studio', 'Commercial'],
      gradient: 'from-indigo-500 to-blue-600'
    },
    {
      id: 4,
      title: 'Brand Promotional Video',
      category: 'Video',
      description: '60-second promotional video for restaurant chain',
      image: '🎬',
      tags: ['Video', 'Editing', 'Marketing'],
      gradient: 'from-violet-500 to-fuchsia-600'
    },
    {
      id: 5,
      title: 'Magazine Layout Design',
      category: 'Print',
      description: 'Editorial design for lifestyle magazine',
      image: '📰',
      tags: ['Editorial', 'Layout', 'Print'],
      gradient: 'from-pink-500 to-rose-600'
    },
    {
      id: 6,
      title: 'Social Media Campaign',
      category: 'Digital',
      description: 'Complete social media graphics package',
      image: '📱',
      tags: ['Social Media', 'Graphics', 'Campaign'],
      gradient: 'from-indigo-500 to-violet-600'
    },
    {
      id: 7,
      title: 'Corporate Event Photography',
      category: 'Photography',
      description: 'Event coverage for annual corporate conference',
      image: '🎯',
      tags: ['Event', 'Corporate', 'Photography'],
      gradient: 'from-violet-500 to-indigo-600'
    },
    {
      id: 8,
      title: 'Restaurant Branding',
      category: 'Branding',
      description: 'Full branding package for new restaurant',
      image: '🍽️',
      tags: ['Logo', 'Menu', 'Signage'],
      gradient: 'from-fuchsia-500 to-violet-600'
    },
    {
      id: 9,
      title: 'Product Launch Video',
      category: 'Video',
      description: 'Cinematic product reveal for smartphone launch',
      image: '📹',
      tags: ['Cinematic', 'Product', 'Launch'],
      gradient: 'from-indigo-500 to-purple-600'
    },
    {
      id: 10,
      title: 'Packaging Design',
      category: 'Print',
      description: 'Premium packaging for organic skincare line',
      image: '📦',
      tags: ['Packaging', 'Label', 'Print'],
      gradient: 'from-pink-500 to-fuchsia-600'
    },
    {
      id: 11,
      title: 'Mobile App Interface',
      category: 'Digital',
      description: 'Clean and modern fitness app UI design',
      image: '📲',
      tags: ['App Design', 'UI/UX', 'Mobile'],
      gradient: 'from-violet-500 to-blue-600'
    },
    {
      id: 12,
      title: 'Food Photography',
      category: 'Photography',
      description: 'Mouth-watering shots for restaurant menu',
      image: '🍔',
      tags: ['Food', 'Menu', 'Commercial'],
      gradient: 'from-rose-500 to-orange-600'
    }
  ]

  return (
    <section className="py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-slate-900/50 backdrop-blur-xl border border-violet-500/20 rounded-3xl overflow-hidden hover:border-violet-500/50 hover:-translate-y-2 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image/Icon */}
              <div className={`relative h-64 bg-linear-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                <div className="text-8xl group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-violet-500/20 text-violet-400 text-xs font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-violet-400 group-hover:to-fuchsia-400 group-hover:bg-clip-text transition-all">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-800/50 text-gray-400 text-xs rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Details Button */}
              <div className="px-6 pb-6">
                <button className="w-full py-3 bg-slate-800/50 border border-violet-500/30 rounded-xl text-white font-semibold hover:border-violet-500/50 hover:bg-linear-to-r hover:from-violet-600 hover:to-fuchsia-600 hover:shadow-lg hover:shadow-violet-500/50 transition-all duration-300">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioGrid
