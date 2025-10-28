import React from 'react'

const OurStory = () => {
  return (
    <section className="py-20 px-6 lg:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-linear-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                Our Story 📖
              </span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Cloud Graphics was born from a simple passion: to create designs that don't just look beautiful, but tell compelling stories and drive real results.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Since our founding, we've had the privilege of working with amazing clients across various industries, helping them build their brand identity, create stunning visual content, and stand out in today's competitive landscape.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              What started as a one-person passion project has grown into a full-service creative studio, but our core mission remains unchanged: delivering exceptional design work that exceeds expectations.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-r from-violet-600 to-fuchsia-600 rounded-3xl blur-2xl opacity-20"></div>
            <div className="relative bg-slate-900/50 backdrop-blur-xl border border-violet-500/20 rounded-3xl p-8 space-y-6">
              <div className="text-6xl text-center mb-4">🎨</div>
              <h3 className="text-2xl font-bold text-white text-center mb-4">Our Mission</h3>
              <p className="text-gray-400 text-center leading-relaxed">
                To empower brands with creative excellence, innovative solutions, and designs that inspire action and create meaningful connections with their audience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurStory
