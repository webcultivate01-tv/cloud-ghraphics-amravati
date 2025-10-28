import React from 'react'

const FAQ = () => {
  const faqs = [
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary based on scope and complexity. A simple logo design typically takes 5-7 days, while complete brand identity projects may take 2-3 weeks. We always discuss timelines during the initial consultation.'
    },
    {
      question: 'Do you offer revisions?',
      answer: 'Yes! We include revisions in all our packages. The number depends on the package you choose, with our Professional and Enterprise packages offering unlimited revisions.'
    },
    {
      question: 'What are your payment terms?',
      answer: 'We typically require 50% upfront to begin work, with the remaining 50% due upon completion and delivery of final files. For larger projects, we can arrange milestone-based payments.'
    },
    {
      question: 'Do you work with clients outside Amravati?',
      answer: 'Absolutely! While we\'re based in Amravati, we work with clients across India and internationally. We conduct meetings via video calls and maintain smooth communication throughout the project.'
    },
    {
      question: 'What file formats will I receive?',
      answer: 'You\'ll receive all source files along with various export formats suitable for both print and digital use (AI, EPS, PDF, PNG, JPG, SVG, etc.), depending on your project requirements.'
    }
  ]

  return (
    <section className="py-12 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
              Frequently Asked Questions ❓
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Quick answers to common questions</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-900/50 backdrop-blur-xl border border-violet-500/20 rounded-2xl p-6 hover:border-violet-500/50 transition-all"
            >
              <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                <span className="text-violet-400 shrink-0">Q:</span>
                <span>{faq.question}</span>
              </h3>
              <p className="text-gray-400 leading-relaxed pl-8">
                <span className="text-fuchsia-400 font-bold">A:</span> {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
