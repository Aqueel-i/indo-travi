import React from "react";
import { FaSearch, FaTicketAlt, FaCreditCard, FaMapMarkedAlt } from "react-icons/fa";
import { FiCalendar, FiDollarSign, FiUsers, FiChevronDown } from "react-icons/fi";

const HowItWorks = () => {
  const steps = [
    {
      title: "Find your destination",
      description: "Embark on a journey to discover your dream destination, where adventure and relaxation await.",
      icon: <FaSearch className="text-blue-500" />
    },
    {
      title: "Book a ticket",
      description: "Ensure a smooth travel experience by booking tickets to your preferred destination via our booking platform",
      icon: <FaTicketAlt className="text-blue-500" />
    },
    {
      title: "Make payment",
      description: "We offer a variety of payment options to meet your preferences and ensure a hassle-free transaction process.",
      icon: <FaCreditCard className="text-blue-500" />
    },
    {
      title: "Explore destination",
      description: "You'll be immersed in a captivating tapestry of sights, sounds and tastes, as you wind your way through the ancient streets",
      icon: <FaMapMarkedAlt className="text-blue-500" />
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white mt-30 mb-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left side - Image with embedded capsule and text */}
          <div className="lg:w-1/2 relative rounded-lg"> {/* Added rounded-lg */}
            <img 
              src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=800&q=80" 
              alt="Travel experience"
              className="w-full h-auto rounded-lg object-cover"
            />
            
            {/* Overlay container for capsule and text */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent rounded-b-lg"> {/* Added rounded-b-lg */}
              {/* Capsule search bar */}
              <div className="flex flex-col md:flex-row justify-center items-center bg-gray bg-opacity-10 rounded-full p-1 mb-4 mx-auto shadow-md backdrop-blur-sm max-w-2xl">
                <div className="flex items-center px-6 py-3 relative">
                  <FiCalendar className="text-white mr-2 text-lg" />
                  <div>
                    <p className="text-sm font-medium text-white">Date</p>
                  </div>
                  <FiChevronDown className="ml-4 text-white text-lg" />
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-8 w-px bg-white bg-opacity-30 mx-2" />
                </div>

                <div className="flex items-center px-6 py-3 relative">
                  <FiDollarSign className="text-white mr-2 text-lg" />
                  <div>
                    <p className="text-sm font-medium text-white">Budget</p>
                  </div>
                  <FiChevronDown className="ml-4 text-white text-lg" />
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-8 w-px bg-white bg-opacity-30 mx-2" />
                </div>

                <div className="flex items-center px-6 py-3 relative">
                  <FiUsers className="text-white mr-2 text-lg" />
                  <div>
                    <p className="text-sm font-medium text-white">Guest</p>
                  </div>
                  <FiChevronDown className="ml-4 text-white text-lg" />
                </div>

                <button className="bg-white text-black rounded-full px-8 py-3 font-medium hover:bg-opacity-100 transition-colors flex items-center justify-center ml-3 text-base">
                  Search
                </button>
              </div>

              {/* Text paragraph */}
              <p className="text-white text-center max-w-2xl mx-auto text-lg">
                Embark on a journey to find your dream destination, where adventure and relaxation await, creating unforgettable memories along the way.
              </p>
            </div>
          </div>

          {/* Right side - Text content (unchanged) */}
          <div className="lg:w-1/2">
            <h2 className="text-sm font-semibold text-gray-500 mb-1">HOW IT WORKS</h2>
            <p className="text-5xl font-bold mb-8">
              One click for you
            </p>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="group p-4 rounded-lg transition-all duration-300 hover:bg-gray-50"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-white p-3 rounded-full shadow-sm group-hover:bg-gray-200 transition-colors duration-300">
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;