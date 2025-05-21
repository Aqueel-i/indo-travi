import React from "react";

const Testimonial = () => {
  return (
    <div className="relative max-w-5xl mx-auto px-6 md:px-12 mb-24">
      <div className="flex flex-col md:flex-row items-start gap-10 md:gap-16">
        {/* Left side */}
        <div className="flex flex-col w-full md:w-1/3 bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full border-2 border-indigo-500 overflow-hidden hover:scale-105 transition-transform duration-300">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Donald Sullivan"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold text-indigo-700 text-lg">Donald Sullivan</h3>
              <p className="text-sm text-gray-500 mt-1 tracking-wide">Founder, Fiko</p>
            </div>
          </div>

          {/* Navigation arrows */}
          <div className="flex gap-6 mt-auto pt-4 border-t border-gray-200 justify-start">
            <button
              aria-label="Previous testimonial"
              className="text-3xl text-indigo-400 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded transition-transform duration-300 transform hover:scale-110"
            >
              ←
            </button>
            <button
              aria-label="Next testimonial"
              className="text-3xl text-indigo-400 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded transition-transform duration-300 transform hover:scale-110"
            >
              →
            </button>
          </div>
        </div>

        {/* Right side */}
        <div className="flex-1 relative pt-2 md:pt-0 md:pl-8">
          {/* Quote mark */}
          <div
            className="absolute top-0 left-0 text-indigo-100 text-[8rem] font-serif select-none pointer-events-none -z-10"
            style={{ lineHeight: 0.6, fontFamily: '"Times New Roman", serif' }}
          >
            “
          </div>

          <p className="text-lg leading-relaxed text-gray-700 relative z-10">
            This travel website is very informative and easy to use. I like how they present various
            destination options and travel packages with clear details. Offering pictures and destination
            descriptions helps me decide where I want to visit. Additionally, the ability to compare
            prices and reviews from other users is very helpful in decision making.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
