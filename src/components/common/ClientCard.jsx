import React from 'react'

const ClientCard = ({ name, logo, color }) => {
  return (
    <div className="group bg-white rounded-2xl p-8 flex flex-col items-center justify-center space-y-3 border-2 border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <div className={`w-20 h-20 bg-linear-to-br ${color} rounded-2xl flex items-center justify-center text-4xl transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
        {logo}
      </div>
      <h3 className="font-bold text-gray-900 text-lg">{name}</h3>
    </div>
  )
}

export default ClientCard
