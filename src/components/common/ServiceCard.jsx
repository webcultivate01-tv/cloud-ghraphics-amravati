import React from "react";

const ServiceCard = ({ icon, title, description, gradient, features }) => {
  return (
    <div className="group relative h-full">
      {/* Hover Glow Effect */}
      <div
        className={`absolute -inset-0.5 bg-linear-to-br ${gradient} rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500`}
      ></div>

      {/* Card */}
      <div className="relative h-full bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 overflow-hidden transition-all duration-500 group-hover:border-white/30 group-hover:transform group-hover:-translate-y-2">
        {/* Background Gradient on Hover */}
        <div
          className={`absolute inset-0 bg-linear-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        ></div>

        {/* Shine Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute top-0 -left-full h-full w-1/2 bg-linear-to-r from-transparent via-white/10 to-transparent skew-x-[-25deg] group-hover:left-full transition-all duration-1000"></div>
        </div>

        {/* Content */}
        <div className="relative space-y-6">
          {/* Icon Container */}
          <div className="relative inline-flex">
            {/* Animated ring */}
            <div
              className={`absolute inset-0 bg-linear-to-br ${gradient} rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
            ></div>
            <div
              className={`absolute -inset-1 bg-linear-to-br ${gradient} rounded-2xl blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-500`}
            ></div>

            {/* Icon box */}
            <div
              className={`relative w-16 h-16 bg-slate-800/50 backdrop-blur-sm border-2 border-white/20 rounded-xl flex items-center justify-center text-4xl group-hover:border-white/40 group-hover:bg-linear-to-br group-hover:${gradient} transition-all duration-500 shadow-lg`}
            >
              <span className="relative z-10">{icon}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-linear-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
            {description}
          </p>

          {/* Features */}
          {features && features.length > 0 && (
            <ul className="space-y-3 pt-4 border-t border-white/10">
              {features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-all duration-300"
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  <div
                    className={`w-6 h-6 bg-linear-to-br ${gradient} rounded-lg mr-3 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Learn More Link */}
          <div className="pt-6 flex flex-wrap sm:flex-nowrap gap-4">
            {/* Learn More Button */}
            {/* <a
              href="/contact"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-sm font-semibold text-white hover:bg-gradient-to-r hover:${gradient} hover:border-transparent group-hover:gap-4 transition-all duration-300 hover:shadow-lg whitespace-nowrap`}
            >
              <span>Order Now</span>
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </a> */}

            {/* Order Now Button */}
            <a
              href="/contact"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${gradient} text-sm font-semibold text-white border border-transparent hover:opacity-90 transition-all duration-300 shadow-lg whitespace-nowrap`}
            >
              <span>Order Now</span>
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Corner Accent */}
        <div
          className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-br ${gradient} opacity-0 group-hover:opacity-20 blur-2xl rounded-full transition-opacity duration-500`}
        ></div>
        <div
          className={`absolute bottom-0 left-0 w-24 h-24 bg-linear-to-tr ${gradient} opacity-0 group-hover:opacity-20 blur-2xl rounded-full transition-opacity duration-500`}
        ></div>
      </div>
    </div>
  );
};

export default ServiceCard;
