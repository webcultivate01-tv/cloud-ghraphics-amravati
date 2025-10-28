import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'CEO, Tech Startup',
      message: 'Cloud Graphics transformed our brand identity completely. The team is creative, professional, and a joy to work with!',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      name: 'Priya Sharma',
      role: 'Marketing Manager',
      message: 'Amazing work on our social media campaign! The designs are stunning and engagement has increased by 300%.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Amit Patel',
      role: 'Restaurant Owner',
      message: 'The branding package exceeded our expectations. Every detail was perfect, from logo to menu design!',
      rating: 5,
      avatar: '🧑‍🍳'
    }
  ]

  return (
    <section className="py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
              Client Love 💖
            </span>
          </h2>
          <p className="text-gray-400 text-lg">What our clients say about working with us</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-slate-900/50 backdrop-blur-xl border border-violet-500/20 rounded-3xl p-8 hover:border-violet-500/50 transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-linear-to-br from-violet-500 to-fuchsia-500 rounded-2xl flex items-center justify-center text-3xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>
              <p className="text-gray-400 leading-relaxed italic">"{testimonial.message}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
