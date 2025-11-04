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
    <section className="relative py-20 px-6 lg:px-12 overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 bg-slate-950">
        <div className="absolute top-20 left-10 w-96 h-96 bg-violet-500/30 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-fuchsia-500/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMzksIDY4LCAyNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40" />
      
      <div className="relative max-w-7xl mx-auto">
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
