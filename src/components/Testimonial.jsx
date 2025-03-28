import React from "react";

const Testimonial = () => {
  return (
    <div className="relative max-w-6xl mx-auto px-12 mb-25"> {/* Reduced horizontal padding */}
      <div className="flex items-start gap-15"> {/* Reduced gap between columns */}
        {/* Left side with profile and arrows */}
        <div className="flex flex-col w-1/3"> {/* Set fixed width for left column */}
          <div className="flex items-center gap-4 mb-2">
            <div className="w-16 h-16 rounded-full bg-gray-300 overflow-hidden">
              <img 
                src="https://randomuser.me/api/portraits/men/32.jpg" 
                alt="Donald Sullivan"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <h3 className="font-bold text-gray-800">Donald Sullivan</h3>
              <p className="text-sm text-gray-600 mt-1">
                Founder Fiko
              </p>
            </div>
          </div>
          
          {/* Navigation arrows */}
          <div className="flex gap-3 mt-10 "> {/* Adjusted margin and position */}
            <button className="text-3xl text-gray-500 hover:text-gray-900 transition">
              ←
            </button>
            <button className="text-3xl text-gray-500 hover:text-gray-700 transition">
              →
            </button>
          </div>
        </div>
        
        {/* Right side with testimonial text */}
        <div className="flex-1 relative pt-1 pl-4"> {/* Added left padding */}
          {/* Double quote mark */}
          <div 
            className="absolute  left-0 text-gray-100 text-9xl font-serif z-0"
            style={{ 
              lineHeight: 0.5,
              fontFamily: '"Times New Roman", serif',
            }}
          >
            "
          </div>
          
          <p className="text-lg text-gray-700 leading-relaxed relative z-20">
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