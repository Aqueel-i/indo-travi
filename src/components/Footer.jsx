import React from "react";
import { FiMail } from "react-icons/fi";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          {/* Left Group - About, Support, FAQ */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 flex-1">
            {/* About Column */}
            <div className="min-w-[150px]">
              <h3 className="font-bold text-lg mb-3">About</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-blue-600">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-600">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-600">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-600">Jobs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-600">In Press</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-600">Gallery</a></li>
              </ul>
            </div>

            {/* Support Column */}
            <div className="min-w-[150px]">
              <h3 className="font-bold text-lg mb-3">Support</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-blue-600">Contact us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-600">Online Chat</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-600">Whatsapp</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-600">Telegram</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-600">Ticketing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-600">Call Center</a></li>
              </ul>
            </div>

            {/* FAQ Column */}
            <div className="min-w-[150px]">
              <h3 className="font-bold text-lg mb-3">FAQ</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-blue-600">Account</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-600">Booking</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-600">Payments</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-600">Returns</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-600">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-600">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>

          {/* Spacer */}
          <div className="flex-1 hidden md:block"></div>

          {/* Newsletter Column */}
          <div className="md:w-[200%] md:max-w-[400px] mt-4 md:mt-0">
            <h3 className="font-bold text-lg mb-3">Newsletter</h3>
            <p className="mb-4 text-sm">Don't miss out on the exciting world of travel – subscribe now and embark on a journey of discovery with us.</p>

            {/* Search Bar with Email Icon */}
            <div className="relative mb-4">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <FiMail size={18} />
              </div>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500 pr-24"
              />
              <button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white px-4 py-1 rounded-full hover:bg-blue-700 transition-colors text-sm">
                Submit
              </button>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-end gap-4">
              <a href="#" className="text-gray-700 hover:text-black transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-700 hover:text-black transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-700 hover:text-black transition-colors">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm mt-15">
          ©2023 Indottavi, All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;