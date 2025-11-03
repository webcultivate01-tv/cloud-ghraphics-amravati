import React from 'react'
import { Link } from 'react-router-dom'

const CallToAction = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 bg-slate-900/30">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative">
          <div className="absolute inset-0 bg-linear-to-r from-violet-600 via-fuchsia-600 to-indigo-600 rounded-3xl blur-2xl opacity-30"></div>
          <div className="relative bg-slate-900/50 backdrop-blur-xl border border-violet-500/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              <span className="bg-linear-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
                Ready to Get Started? 🚀
              </span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Let's discuss your project and create something amazing together. Get in touch today!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link 
                to="/contact#contact-form"
                className="px-6 py-3 sm:px-8 sm:py-4 bg-linear-to-r from-violet-600 via-fuchsia-600 to-indigo-600 rounded-xl font-semibold text-white hover:shadow-2xl hover:shadow-violet-500/50 hover:scale-105 transition-all duration-300"
              >
                Start Your Project 💼
              </Link>
              <Link 
                to="/work"
                className="px-6 py-3 sm:px-8 sm:py-4 bg-slate-800/50 backdrop-blur-xl border border-violet-500/30 rounded-xl font-semibold text-white hover:border-violet-500/50 hover:scale-105 transition-all duration-300"
              >
                View Portfolio 🎨
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
