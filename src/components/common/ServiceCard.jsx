import React from 'react'

const ServiceCard = ({ icon, title, description, gradient, features }) => {
  return (
    <div className="group relative bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      {/* Gradient Background on Hover */}
      <div className={`absolute inset-0 bg-linear-to-br ${gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}></div>
      
      {/* Content */}
      <div className="relative space-y-4">
        {/* Icon */}
        <div className={`w-16 h-16 bg-linear-to-br ${gradient} rounded-2xl flex items-center justify-center text-4xl transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>

        {/* Features */}
        {features && features.length > 0 && (
          <ul className="space-y-2">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center text-sm text-gray-700">
                <span className={`w-1.5 h-1.5 bg-linear-to-br ${gradient} rounded-full mr-2`}></span>
                {feature}
              </li>
            ))}
          </ul>
        )}

        {/* Learn More Link */}
        <div className="pt-4">
          <a href="#" className={`inline-flex items-center text-sm font-semibold bg-linear-to-r ${gradient} bg-clip-text text-transparent group-hover:gap-2 transition-all`}>
            Learn More
            <span className="inline-block ml-1 group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
