import React from 'react'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  className = '',
  ...props 
}) => {
  const baseClasses = "font-semibold rounded-full transition-all duration-300 transform hover:-translate-y-1"
  
  const variants = {
    primary: "bg-linear-to-r from-purple-600 to-pink-600 text-white hover:shadow-2xl hover:shadow-purple-500/50",
    secondary: "border-2 border-purple-400 text-purple-300 hover:bg-purple-500/10",
    outline: "border-2 border-white text-white hover:bg-white/10"
  }

  const sizes = {
    sm: "px-6 py-2 text-sm",
    md: "px-8 py-4 text-base",
    lg: "px-10 py-4 text-lg"
  }

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
