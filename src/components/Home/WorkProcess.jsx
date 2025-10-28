import React from 'react'

const WorkProcess = () => {
  const steps = [
    {
      number: "01",
      title: "Consultation",
      description: "I listen to your ideas and understand your vision",
      icon: "💬",
      color: "from-purple-500 to-pink-500"
    },
    {
      number: "02",
      title: "Concept",
      description: "Creating unique concepts tailored to your brand",
      icon: "💡",
      color: "from-pink-500 to-red-500"
    },
    {
      number: "03",
      title: "Design",
      description: "Bringing concepts to life with stunning visuals",
      icon: "🎨",
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: "04",
      title: "Delivery",
      description: "Final polished designs ready to impress",
      icon: "🚀",
      color: "from-yellow-500 to-orange-500"
    }
  ]

  return (
    <section className="relative bg-linear-to-b from-violet-950 to-indigo-950 py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-violet-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-fuchsia-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-violet-500/20 text-violet-300 rounded-full text-sm font-semibold border border-violet-500/30">
              My Process
            </span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            How I
            <span className="block bg-linear-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
              Work With You
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A simple and effective process that ensures your project is delivered on time and exceeds expectations
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="group relative"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-linear-to-r from-violet-500/50 to-transparent"></div>
              )}
              
              {/* Card */}
              <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700 hover:border-violet-500/50 transition-all duration-300 hover:transform hover:-translate-y-2">
                {/* Number Badge */}
                <div className={`absolute -top-4 -right-4 w-12 h-12 bg-linear-to-br ${step.color} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                  {step.number}
                </div>

                {/* Icon */}
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 bg-linear-to-br ${step.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">Ready to start your project?</p>
          <button className="group bg-linear-to-r from-violet-600 to-fuchsia-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-violet-500/50 transition-all duration-300 transform hover:-translate-y-1">
            Let's Get Started
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default WorkProcess
