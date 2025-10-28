import React from 'react'

const TestimonialCard = ({ name, role, company, avatar, gradient, rating, text }) => {
  return (
    <div className="group bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
      {/* Rating Stars */}
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="text-yellow-400 text-xl">★</span>
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-300 leading-relaxed mb-6 italic">
        "{text}"
      </p>

      {/* Author Info */}
      <div className="flex items-center space-x-4 pt-4 border-t border-white/10">
        <div className={`w-14 h-14 bg-linear-to-br ${gradient} rounded-full flex items-center justify-center text-white font-bold text-xl shrink-0`}>
          {avatar}
        </div>
        <div>
          <h4 className="font-semibold text-white">{name}</h4>
          <p className="text-sm text-gray-400">{role}</p>
          <p className="text-xs text-purple-400">{company}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
