import React from 'react'

const SectionHeader = ({ badge, title, subtitle, titleGradient = true, darkMode = false }) => {
  const badgeClasses = darkMode 
    ? "bg-purple-500/20 text-purple-300 border border-purple-500/30" 
    : "bg-purple-100 text-purple-600"

  const titleClasses = darkMode ? "text-white" : "text-gray-900"
  const subtitleClasses = darkMode ? "text-gray-300" : "text-gray-600"

  return (
    <div className="text-center mb-16 space-y-4">
      {badge && (
        <div className="inline-block">
          <span className={`${badgeClasses} px-4 py-2 rounded-full text-sm font-semibold`}>
            {badge}
          </span>
        </div>
      )}
      
      <h2 className={`text-4xl lg:text-5xl font-bold ${titleClasses} leading-tight`}>
        {typeof title === 'string' ? (
          titleGradient ? (
            <span className="bg-linear-to-r from-purple-600 via-pink-600 to-yellow-500 bg-clip-text text-transparent">
              {title}
            </span>
          ) : (
            title
          )
        ) : (
          title
        )}
      </h2>
      
      {subtitle && (
        <p className={`text-xl ${subtitleClasses} max-w-2xl mx-auto`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionHeader
