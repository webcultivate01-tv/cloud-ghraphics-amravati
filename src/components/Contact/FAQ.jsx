import React, { useState } from "react";
import { IoChevronDown } from "react-icons/io5";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is your typical project timeline?",
      answer:
        "Project timelines vary based on scope and complexity. A simple logo design typically takes 5-7 days, while complete brand identity projects may take 2-3 weeks. We always discuss timelines during the initial consultation.",
    },
    {
      question: "Do you offer revisions?",
      answer:
        "Yes! We include revisions in all our packages. The number depends on the package you choose, with our Professional and Enterprise packages offering unlimited revisions.",
    },
    {
      question: "What are your payment terms?",
      answer:
        "We typically require 50% upfront to begin work, with the remaining 50% due upon completion and delivery of final files. For larger projects, we can arrange milestone-based payments.",
    },
    {
      question: "Do you work with clients outside Amravati?",
      answer:
        "Absolutely! While we're based in Amravati, we work with clients across India and internationally. We conduct meetings via video calls and maintain smooth communication throughout the project.",
    },
    {
      question: "What file formats will I receive?",
      answer:
        "You'll receive all source files along with various export formats suitable for both print and digital use (AI, EPS, PDF, PNG, JPG, SVG, etc.), depending on your project requirements.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
              Frequently Asked Questions ❓
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Quick answers to common questions
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`group bg-slate-900/50 backdrop-blur-xl border rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? "border-violet-500/80 shadow-lg shadow-violet-500/20"
                  : "border-violet-500/20 hover:border-violet-500/40"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
              >
                <div className="flex items-start gap-3 flex-1">
                  <span className="text-violet-400 shrink-0 font-bold text-lg mt-0.5">
                    Q{index + 1}:
                  </span>
                  <h3 className="text-sm font-bold text-white group-hover:text-violet-300 transition-colors">
                    {faq.question}
                  </h3>
                </div>
                <IoChevronDown
                  className={`w-6 h-6 text-violet-400 shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 pl-14">
                  <div className="bg-linear-to-r from-violet-500/10 to-fuchsia-500/10 rounded-xl p-4 border-l-4 border-fuchsia-500">
                    <p className="text-gray-300 leading-relaxed">
                      <span className="text-sm text-fuchsia-400 font-bold">
                        A:
                      </span>{" "}
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
