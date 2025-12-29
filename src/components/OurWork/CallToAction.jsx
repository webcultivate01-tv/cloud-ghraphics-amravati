import React from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-20 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative">
          <div className="absolute inset-0 bg-linear-to-r from-violet-600 via-fuchsia-600 to-indigo-600 rounded-3xl blur-2xl opacity-30"></div>
          <div className="relative bg-slate-900/50 backdrop-blur-xl border border-violet-500/20 rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {/* bg-linear-to-r from-violet-400 */}
              <span className="text-white via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
                Like What You See?
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Let's create something amazing together! Get in touch to discuss
              your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-linear-to-r from-violet-600 via-fuchsia-600 to-indigo-600 rounded-xl font-semibold text-white hover:shadow-2xl hover:shadow-violet-500/50 hover:scale-105 transition-all duration-300"
              >
                Start Your Project 🚀
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 bg-slate-800/50 backdrop-blur-xl border border-violet-500/30 rounded-xl font-semibold text-white hover:border-violet-500/50 hover:scale-105 transition-all duration-300"
              >
                View Services 🎨
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
