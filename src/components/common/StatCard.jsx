import React from 'react'

const StatCard = ({ value, label, className = "" }) => {
  return (
    <div className={`text-center ${className}`}>
      <div className="text-3xl lg:text-5xl font-bold text-white">{value}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  )
}

export default StatCard
