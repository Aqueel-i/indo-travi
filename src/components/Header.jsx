import React, { useState } from "react";
import { FiCalendar, FiDollarSign, FiUsers, FiChevronDown } from "react-icons/fi";

const HeaderWithNavbar = () => {
    const [language, setLanguage] = useState("En");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleLanguage = () => {
        setLanguage(language === "En" ? "De" : "En");
    };

    return (
        <div className="relative min-h-screen">
            {/* Background Image */}
            <div className="absolute top-0 inset-0 -z-10 px-1">
                <div
                    className="w-full h-[85vh] bg-cover bg-center rounded-xl mx-auto max-w-[calc(100%-rem)] mt-1"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                        backgroundPosition: "center bottom"
                    }}
                >
                    <div className="absolute inset-0 from-black/10 to-white rounded-2xl" />
                </div>
            </div>

            {/* Transparent Navbar */}
            <nav className="relative bg-transparent ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                    <div className="flex justify-between h-16 items-center ">
                        <div className="flex-shrink-0 flex items-center mt-8 ">
                            <span className="text-xl font-bold text-white">INDOTRAVI</span>
                        </div>

                        <div className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2">
                            <div className="flex space-x-2 bg-gray bg-opacity-20 rounded-full p-2 backdrop-blur-sm mt-8">
                                <a href="#" className="px-5 py-1 text-sm font-medium rounded-full text-white hover:bg-gray-400 hover:bg-opacity-30 transition-colors">
                                    About
                                </a>
                                <a href="#" className="px-5 py-1 text-sm font-medium rounded-full text-white hover:bg-gray-400 hover:bg-opacity-30 transition-colors">
                                    Services
                                </a>
                                <a href="#" className="px-5 py-1 text-sm font-medium rounded-full text-white hover:bg-gray-400 hover:bg-opacity-30 transition-colors">
                                    Tour
                                </a>
                                <a href="#" className="px-5 py-1 text-sm font-medium rounded-full text-white hover:bg-gray-400 hover:bg-opacity-30 transition-colors">
                                    About
                                </a>
                                <a href="#" className="px-5 py-1 text-sm font-medium rounded-full text-white hover:bg-gray-400 hover:bg-opacity-30 transition-colors">
                                    Contact
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4 mt-8">
                            <div className="hidden md:flex items-center">
                                <button
                                    onClick={toggleLanguage}
                                    className="relative inline-flex items-center h-10 rounded-full w-17 bg-gray bg-opacity-20 backdrop-blur-sm transition-colors focus:outline-none"
                                >
                                    <span
                                        className={`${language === "En" ? "translate-x-7" : "translate-x-1"
                                            } inline-block w-9 h-8 transform bg-white rounded-full transition-transform shadow-sm`}
                                    />
                                    <span className="absolute left-3 text-xs font-medium text-black">De</span>
                                    <span className="absolute right-3 text-xs font-medium text-black">En</span>
                                </button>
                            </div>

                            <button className="bg-white bg-opacity-20 text-black px-8 py-2.5 rounded-full hover:bg-opacity-30 backdrop-blur-sm transition-colors text-sm font-medium">
                                Login
                            </button>

                            <div className="md:hidden flex items-center">
                                <button
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    className="text-white hover:text-gray-200 focus:outline-none"
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
                <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <div className="px-2 pt-2 pb-3 space-y-1 bg-white bg-opacity-90 rounded-lg mx-2">
                        <div className="flex flex-col space-y-1">
                            <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100">
                                About
                            </a>
                            <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100">
                                Services
                            </a>
                            <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100">
                                Tour
                            </a>
                            <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100">
                                About
                            </a>
                            <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100">
                                Contact
                            </a>
                        </div>
                        <div className="flex justify-between items-center px-3 py-2">
                            <button
                                onClick={toggleLanguage}
                                className="relative inline-flex items-center h-9 rounded-full w-16 bg-gray-200"
                            >
                                <span
                                    className={`${language === "En" ? "translate-x-7" : "translate-x-1"
                                        } inline-block w-7 h-7 transform bg-white rounded-full transition-transform shadow-sm`}
                                />
                                <span className="absolute left-2 text-xs">De</span>
                                <span className="absolute right-2 text-xs">En</span>
                            </button>
                            <button className="bg-blue-600 text-white px-5 py-1.5 rounded-full text-sm font-medium">
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
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Extraordinary natural and cultural charm
                        </h1>
                        <p className="text-xl text-white text-opacity-90 mb-12">
                            Exploring Indonesia is an unforgettable adventure.
                        </p>

                        <div className="flex flex-col md:flex-row justify-center items-center bg-gray bg-opacity-20 rounded-full p-1 mb-16 max-w-xl mx-auto shadow-md backdrop-blur-sm">
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

                        {/* Stats - Individual Boxes */}

                        <div className="flex justify-center gap-6 md:gap-10">
                            <div className="bg-white bg-opacity-90 rounded-lg p-4 shadow-md w-[200px] h-[75px] flex flex-col justify-center">
                                <p className="text-3xl font-bold text-gray-900">10M+</p>
                                <p className="text-gray-500 text-sm">Total Customers</p>
                            </div>
                            <div className="bg-white bg-opacity-90 rounded-lg p-4 shadow-md w-[200px] h-[75px] flex flex-col justify-center">
                                <p className="text-3xl font-bold text-gray-900">09+</p>
                                <p className="text-gray-500 text-sm">Years Of Experience</p>
                            </div>
                            <div className="bg-white bg-opacity-90 rounded-lg p-4 shadow-md w-[200px] h-[75px] flex flex-col justify-center">
                                <p className="text-3xl font-bold text-gray-900">12K</p>
                                <p className="text-gray-500 text-sm">Total Destinations</p>
                            </div>
                            <div className="bg-white bg-opacity-90 rounded-lg p-4 shadow-md w-[200px] h-[75px] flex flex-col justify-center">
                                <p className="text-3xl font-bold text-gray-900">5.0</p>
                                <p className="text-gray-500 text-sm">Average Rating</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderWithNavbar;