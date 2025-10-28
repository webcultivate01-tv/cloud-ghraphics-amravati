import React from 'react'
import { Link } from 'react-router-dom'

const PricingSection = () => {
  const pricing = [
    {
      name: 'Starter',
      price: '₹9,999',
      period: '/project',
      description: 'Perfect for small businesses and startups',
      features: [
        'Logo Design',
        'Business Card',
        '2 Social Media Posts',
        '2 Revisions',
        '7-Day Delivery'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '₹24,999',
      period: '/project',
      description: 'Ideal for growing businesses',
      features: [
        'Complete Brand Identity',
        'Stationery Design',
        'Social Media Kit',
        'Website Banner Design',
        'Unlimited Revisions',
        '14-Day Delivery',
        'Priority Support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large-scale projects',
      features: [
        'Full Brand Strategy',
        'Custom Design Solutions',
        'Video Production',
        'Photography Sessions',
        'Unlimited Revisions',
        'Dedicated Account Manager',
        'Ongoing Support'
      ],
      popular: false
    }
  ]

  return (
    <section className="py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
              Pricing Plans 💰
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Flexible packages to fit your needs and budget</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricing.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-slate-900/50 backdrop-blur-xl border ${plan.popular ? 'border-violet-500/50 scale-105' : 'border-violet-500/20'} rounded-3xl p-8 hover:border-violet-500/50 transition-all`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-linear-to-r from-violet-600 to-fuchsia-600 rounded-full text-white text-sm font-semibold shadow-lg">
                  Most Popular ⭐
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                <div className="flex items-end justify-center gap-1">
                  <span className="text-5xl font-bold bg-linear-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">{plan.price}</span>
                  <span className="text-gray-400 text-sm mb-2">{plan.period}</span>
                </div>
              </div>
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-gray-400">
                    <span className="text-violet-400 text-xl">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <Link 
                to="/contact#contact-form" 
                className={`block w-full py-4 rounded-xl font-semibold transition-all duration-300 text-center ${plan.popular ? 'bg-linear-to-r from-violet-600 via-fuchsia-600 to-indigo-600 text-white hover:shadow-2xl hover:shadow-violet-500/50 hover:scale-105' : 'bg-slate-800/50 border border-violet-500/30 text-white hover:border-violet-500/50 hover:scale-105'}`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Need a custom package? We're flexible!</p>
          <a 
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800/50 backdrop-blur-xl border border-violet-500/30 rounded-xl font-semibold text-white hover:border-violet-500/50 hover:scale-105 transition-all duration-300"
          >
            <span>Contact Us for Custom Quote</span>
            <span>💬</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default PricingSection
