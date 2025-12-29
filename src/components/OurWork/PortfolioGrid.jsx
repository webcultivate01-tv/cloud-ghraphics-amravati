import React from "react";

const PortfolioGrid = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-white to-fuchsia-400 bg-clip-text text-transparent">
              Our Creative Portfolio
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto px-4">
            Explore our diverse collection of successful projects.
          </p>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 space-y-4">
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img
              src="work7.webp"
              alt="img-1"
              className="h-auto max-w-full object-cover object-top"
            />
          </div>
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img
              src="work8.webp"
              alt="img-2"
              className="h-auto max-w-full object-cover object-top"
            />
          </div>
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img
              src="work9.webp"
              alt="img-3"
              className="h-auto max-w-full object-cover object-top"
            />
          </div>
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img
              src="work11.webp"
              alt="img-4"
              className="h-auto max-w-full object-cover object-top"
            />
          </div>
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img
              src="work10.webp"
              alt="img-5"
              className="h-auto max-w-full object-cover object-top"
            />
          </div>
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img
              src="work12.webp"
              alt="img-6"
              className="h-auto max-w-full object-cover object-top"
            />
          </div>
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img
              src="work13.webp"
              alt="img-7"
              className="h-auto max-w-full object-cover object-top"
            />
          </div>
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img
              src="work3.webp"
              alt="img-8"
              className="h-auto max-w-full object-cover object-top"
            />
          </div>
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img
              src="https://readymadeui.com/images/sunscreen-img-3.webp"
              alt="img-9"
              className="h-auto max-w-full object-cover object-top"
            />
          </div>
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img
              src="work14.webp"
              alt="img-10"
              className="h-auto max-w-full object-cover object-top"
            />
          </div>
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img
              src="https://readymadeui.com/images/face-body-cream-img-2.webp"
              alt="img-11"
              className="h-auto max-w-full object-cover object-top"
            />
          </div>
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img
              src="work5.webp"
              alt="img-12"
              className="h-auto max-w-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
