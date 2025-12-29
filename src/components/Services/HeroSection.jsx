import React from "react";

const colorMap = {
  violet: {
    border: "border-violet-500/20 hover:border-violet-500/40",
    text: "text-violet-300 group-hover:text-violet-200",
    dot: "bg-violet-500/50",
    glow: "group-hover:from-violet-500/10 group-hover:to-violet-500/5",
  },
  fuchsia: {
    border: "border-fuchsia-500/20 hover:border-fuchsia-500/40",
    text: "text-fuchsia-300 group-hover:text-fuchsia-200",
    dot: "bg-fuchsia-500/50",
    glow: "group-hover:from-fuchsia-500/10 group-hover:to-fuchsia-500/5",
  },
  indigo: {
    border: "border-indigo-500/20 hover:border-indigo-500/40",
    text: "text-indigo-300 group-hover:text-indigo-200",
    dot: "bg-indigo-500/50",
    glow: "group-hover:from-indigo-500/10 group-hover:to-indigo-500/5",
  },
  pink: {
    border: "border-pink-500/20 hover:border-pink-500/40",
    text: "text-pink-300 group-hover:text-pink-200",
    dot: "bg-pink-500/50",
    glow: "group-hover:from-pink-500/10 group-hover:to-pink-500/5",
  },
  purple: {
    border: "border-purple-500/20 hover:border-purple-500/40",
    text: "text-purple-300 group-hover:text-purple-200",
    dot: "bg-purple-500/50",
    glow: "group-hover:from-purple-500/10 group-hover:to-purple-500/5",
  },
};

const HeroSection = () => {
  const serviceCategories = [
    { icon: "💡", label: "Brand Identity", color: "violet" },
    { icon: "📱", label: "Social Media", color: "fuchsia" },
    { icon: "🖼️", label: "Marketing Design", color: "indigo" },
    { icon: "👕", label: "Apparel Design", color: "pink" },
    { icon: "🏷️", label: "Product Labels", color: "purple" },
    { icon: "📦", label: "Packaging", color: "violet" },
  ];

  return (
    <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-16 px-4 sm:px-6 lg:px-12 overflow-hidden bg-slate-950">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[500px] bg-violet-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-fuchsia-600/20 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.03)_1px,transparent_1px)] bg-size-[50px_50px]" />
      </div>

      <div className="relative max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4">
          <span className="block bg-linear-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
            Services
          </span>
          <span className="block text-white mt-2">That Elevate Brands</span>
        </h1>

        <p className="text-gray-400 max-w-3xl mx-auto mb-12">
          From concept to creation, we deliver design solutions that captivate
          audiences and drive meaningful results.
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {serviceCategories.map((service, index) => {
            const styles = colorMap[service.color];

            return (
              <div
                key={index}
                className={`group relative bg-slate-900/40 backdrop-blur-sm
                border ${styles.border}
                rounded-xl sm:rounded-2xl
                p-4 lg:p-6
                transition-all duration-500`}
              >
                {/* Glow */}
                <div
                  className={`absolute inset-0 rounded-xl sm:rounded-2xl bg-linear-to-br
                  from-transparent to-transparent ${styles.glow}
                  transition-all duration-500`}
                />

                {/* Icon */}
                <div className="relative text-3xl mb-2">{service.icon}</div>

                {/* Label */}
                <p
                  className={`relative text-xs sm:text-sm font-semibold ${styles.text}`}
                >
                  {service.label}
                </p>

                {/* Corner Dot */}
                <div
                  className={`absolute top-2 right-2 w-2 h-2 rounded-full ${styles.dot}`}
                />
              </div>
            );
          })}
        </div>
      </div>
      
    </section>
  );
};

export default HeroSection;
