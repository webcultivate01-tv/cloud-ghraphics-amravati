import React from 'react'

const ServicesGrid = () => {
  const services = [
    {
      icon: '🎨',
      title: 'Brand Identity Design',
      description: 'Complete brand identity solutions including logo design, color palette, typography, and brand guidelines that make your business stand out.',
      features: [
        'Logo Design & Variations',
        'Brand Style Guide',
        'Color Palette Development',
        'Typography Selection',
        'Business Card Design',
        'Stationery Design'
      ],
      gradient: 'from-violet-500 to-purple-600'
    },
    {
      icon: '💻',
      title: 'Digital Design',
      description: 'Modern digital designs for websites, apps, and social media that engage your audience and deliver results.',
      features: [
        'Website UI/UX Design',
        'Mobile App Interface',
        'Social Media Graphics',
        'Email Templates',
        'Digital Advertisements',
        'Infographics'
      ],
      gradient: 'from-fuchsia-500 to-pink-600'
    },
    {
      icon: '📸',
      title: 'Photography',
      description: 'Professional photography services capturing your products, events, and brand moments in stunning quality.',
      features: [
        'Product Photography',
        'Event Coverage',
        'Corporate Headshots',
        'Lifestyle Photography',
        'Food Photography',
        'Architectural Photography'
      ],
      gradient: 'from-indigo-500 to-blue-600'
    },
    {
      icon: '🎬',
      title: 'Video Production',
      description: 'High-quality video content that tells your story, from concept to final edit, engaging your audience effectively.',
      features: [
        'Promotional Videos',
        'Product Demonstrations',
        'Event Videography',
        'Corporate Videos',
        'Social Media Reels',
        'Video Editing & Post-production'
      ],
      gradient: 'from-violet-500 to-fuchsia-600'
    },
    {
      icon: '📱',
      title: 'Social Media Marketing',
      description: 'Strategic social media management and content creation to grow your online presence and engage your community.',
      features: [
        'Content Strategy',
        'Post Design & Scheduling',
        'Social Media Campaigns',
        'Community Management',
        'Analytics & Reporting',
        'Influencer Collaboration'
      ],
      gradient: 'from-pink-500 to-rose-600'
    },
    {
      icon: '🖨️',
      title: 'Print Design',
      description: 'Eye-catching print materials that leave a lasting impression, from brochures to billboards.',
      features: [
        'Brochure Design',
        'Flyer & Poster Design',
        'Packaging Design',
        'Billboard Design',
        'Magazine Layout',
        'Catalogue Design'
      ],
      gradient: 'from-indigo-500 to-violet-600'
    }
  ]

  return (
    <section className="py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-slate-900/50 backdrop-blur-xl border border-violet-500/20 rounded-3xl p-8 hover:border-violet-500/50 hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 bg-linear-to-br ${service.gradient} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
              <div className="space-y-3">
                <div className="text-sm font-semibold text-violet-400 mb-3">What's Included:</div>
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-gray-400 text-sm">
                    <span className="text-violet-400">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesGrid
