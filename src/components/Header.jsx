import React, { useState, useEffect } from "react";
import { FiCalendar, FiDollarSign, FiUsers, FiChevronDown } from "react-icons/fi";

const HeaderWithNavbar = () => {
  const [language, setLanguage] = useState("En");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // For fade-in animations on mount
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "En" ? "De" : "En");
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute top-0 inset-0 -z-10 px-1">
        <div
          className="w-full h-[85vh] bg-cover bg-center rounded-xl mx-auto max-w-[calc(100%-1rem)] mt-1"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            backgroundPosition: "center bottom",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl" />
        </div>
      </div>

      {/* Transparent Navbar */}
      <nav className="relative bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center mt-8">
              <span
                className="text-xl font-bold text-white select-none"
                style={{ 
                  animation: mounted ? "fadeInSlideDown 0.7s ease forwards" : "none",
                  opacity: 0,
                }}
              >
                INDOTRAVI
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2">
              <div className="flex space-x-2 bg-gray-800 bg-opacity-30 rounded-full p-2 backdrop-blur-sm mt-8 shadow-lg">
                {["About", "Services", "Tour", "About", "Contact"].map((item, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="px-5 py-1 text-sm font-medium rounded-full text-white hover:bg-white hover:bg-opacity-20 transition-colors duration-300 ease-in-out transform hover:scale-110 hover:animate-bounce"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Right side controls */}
            <div className="flex items-center space-x-4 mt-8">
              {/* Language Toggle - Desktop */}
              <div className="hidden md:flex items-center">
                <button
                  onClick={toggleLanguage}
                  aria-label="Toggle language"
                  className="relative inline-flex items-center h-10 rounded-full w-20 bg-gray-700 bg-opacity-30 backdrop-blur-sm transition-colors focus:outline-none shadow-lg hover:bg-gray-600"
                >
                  <span
                    className={`inline-block w-10 h-8 rounded-full bg-white shadow-sm transform transition-transform duration-500 ease-in-out ${
                      language === "En" ? "translate-x-10" : "translate-x-1"
                    }`}
                  />
                  <span className="absolute left-4 text-xs font-semibold text-black select-none">De</span>
                  <span className="absolute right-4 text-xs font-semibold text-black select-none">En</span>
                </button>
              </div>

              {/* Login Button */}
              <button
                className="bg-white bg-opacity-20 text-black px-8 py-2.5 rounded-full hover:bg-opacity-40 backdrop-blur-sm transition-colors text-sm font-medium shadow-md hover:scale-110 transform duration-300 ease-in-out hover:shadow-lg"
                aria-label="Login"
              >
                Login
              </button>

              {/* Hamburger Menu - Mobile */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label="Toggle menu"
                  className="text-white hover:text-gray-300 focus:outline-none transition-colors duration-300"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
            isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pt-4 pb-3 space-y-3 bg-white bg-opacity-90 rounded-lg mx-4 shadow-lg">
            <div className="flex flex-col space-y-2">
              {["About", "Services", "Tour", "About", "Contact"].map((item, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="flex justify-between items-center px-3 py-2">
              <button
                onClick={toggleLanguage}
                aria-label="Toggle language"
                className="relative inline-flex items-center h-9 rounded-full w-16 bg-gray-300 shadow-md hover:bg-gray-400 transition-colors duration-300"
              >
                <span
                  className={`inline-block w-7 h-7 rounded-full bg-white shadow-sm transform transition-transform duration-500 ease-in-out ${
                    language === "En" ? "translate-x-7" : "translate-x-1"
                  }`}
                />
                <span className="absolute left-2 text-xs select-none">De</span>
                <span className="absolute right-2 text-xs select-none">En</span>
              </button>
              <button className="bg-blue-600 text-white px-5 py-1.5 rounded-full text-sm font-medium shadow-md hover:bg-blue-700 transition-colors duration-300">
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-16">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 text-center">
          <div className="max-w-3xl mx-auto">
            <h1
              className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight select-none opacity-0"
              style={{ animation: mounted ? "fadeInSlideUp 1s ease forwards 0.3s" : "none" }}
            >
              Extraordinary natural and cultural charm
            </h1>
            <p
              className="text-xl text-white text-opacity-90 mb-12 select-none opacity-0"
              style={{ animation: mounted ? "fadeInSlideUp 1s ease forwards 0.6s" : "none" }}
            >
              Exploring Indonesia is an unforgettable adventure.
            </p>

            {/* Search Capsules */}
            <div className="flex flex-col md:flex-row justify-center items-center bg-gradient-to-tr from-white/30 to-white/10 rounded-full p-1 mb-16 max-w-xl mx-auto shadow-lg backdrop-blur-md hover:from-white/40 hover:to-white/20 transition-colors duration-500">
              {/* Date Capsule */}
              <div className="flex items-center px-6 py-3 relative cursor-pointer group hover:scale-105 hover:shadow-lg transition-transform duration-300 shadow-lg rounded-full bg-gradient-to-br from-white/70 to-white/40 backdrop-filter backdrop-blur-md border border-white border-opacity-30 hover:border-opacity-60">
                <FiCalendar className="text-gray-800 mr-2 text-lg" />
                <div>
                  <p className="text-sm font-semibold text-gray-900 select-none">Date</p>
                </div>
                <FiChevronDown className="ml-4 text-gray-900 text-lg" />
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-8 w-px bg-gray-400 bg-opacity-30 mx-2" />
              </div>

              {/* Budget Capsule */}
              <div className="flex items-center px-6 py-3 relative cursor-pointer group hover:scale-105 hover:shadow-lg transition-transform duration-300 shadow-lg rounded-full bg-gradient-to-br from-white/70 to-white/40 backdrop-filter backdrop-blur-md border border-white border-opacity-30 hover:border-opacity-60 mx-3 md:mx-0">
                <FiDollarSign className="text-gray-800 mr-2 text-lg" />
                <div>
                  <p className="text-sm font-semibold text-gray-900 select-none">Budget</p>
                </div>
                <FiChevronDown className="ml-4 text-gray-900 text-lg" />
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-8 w-px bg-gray-400 bg-opacity-30 mx-2" />
              </div>

              {/* Guest Capsule */}
              <div className="flex items-center px-6 py-3 relative cursor-pointer group hover:scale-105 hover:shadow-lg transition-transform duration-300 shadow-lg rounded-full bg-gradient-to-br from-white/70 to-white/40 backdrop-filter backdrop-blur-md border border-white border-opacity-30 hover:border-opacity-60">
                <FiUsers className="text-gray-800 mr-2 text-lg" />
                <div>
                  <p className="text-sm font-semibold text-gray-900 select-none">Guest</p>
                </div>
                <FiChevronDown className="ml-4 text-gray-900 text-lg" />
              </div>

              {/* Search Button */}
              <button
                className="bg-white text-black rounded-full px-8 py-3 font-semibold hover:bg-opacity-100 transition-colors flex items-center justify-center ml-3 text-base shadow-lg hover:scale-110 transform duration-300"
                aria-label="Search"
              >
                Search
              </button>
            </div>

            {/* Stats - Individual Boxes */}
            <div className="flex justify-center gap-6 md:gap-10">
              {[ 
                { value: "10M+", label: "Total Customers" },
                { value: "09+", label: "Years Of Experience" },
                { value: "12K", label: "Total Destinations" },
                { value: "5.0", label: "Average Rating" },
              ].map(({ value, label }, idx) => (
                <div
                  key={idx}
                  className="bg-white bg-opacity-90 rounded-lg p-4 shadow-md w-[200px] h-[75px] flex flex-col justify-center
                    hover:scale-105 transition-transform duration-300 ease-in-out cursor-default select-none opacity-0"
                  style={{ animation: mounted ? `fadeInScale 0.6s ease forwards ${(idx + 1) * 0.2 + 0.8}s` : "none" }}
                >
                  <h3 className="text-2xl font-semibold text-black">{value}</h3>
                  <p className="text-sm font-medium text-gray-700">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes fadeInSlideDown {
          0% {
            opacity: 0;
            transform: translateY(-15px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInSlideUp {
          0% {
            opacity: 0;
            transform: translateY(15px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.85);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* Extra bounce on nav links hover */
        .hover\\:animate-bounce:hover {
          animation: bounce 0.6s ease forwards;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }
      `}</style>
    </div>
  );
};

export default HeaderWithNavbar;
