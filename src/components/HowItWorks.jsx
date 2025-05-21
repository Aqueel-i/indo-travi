import React from "react";
import {
  FaSearch,
  FaTicketAlt,
  FaCreditCard,
  FaMapMarkedAlt,
} from "react-icons/fa";
import {
  FiCalendar,
  FiDollarSign,
  FiUsers,
  FiChevronDown,
} from "react-icons/fi";
import { motion } from "framer-motion";

const stepVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const HowItWorks = () => {
  const steps = [
    {
      title: "Find your destination",
      description:
        "Embark on a journey to discover your dream destination, where adventure and relaxation await.",
      icon: <FaSearch className="text-blue-500 text-xl" />,
    },
    {
      title: "Book a ticket",
      description:
        "Ensure a smooth travel experience by booking tickets to your preferred destination via our booking platform",
      icon: <FaTicketAlt className="text-blue-500 text-xl" />,
    },
    {
      title: "Make payment",
      description:
        "We offer a variety of payment options to meet your preferences and ensure a hassle-free transaction process.",
      icon: <FaCreditCard className="text-blue-500 text-xl" />,
    },
    {
      title: "Explore destination",
      description:
        "You'll be immersed in a captivating tapestry of sights, sounds and tastes, as you wind your way through the ancient streets",
      icon: <FaMapMarkedAlt className="text-blue-500 text-xl" />,
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white mt-30 mb-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left - Image and overlay */}
          <motion.div
            className="lg:w-1/2 relative rounded-lg overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=800&q=80"
              alt="Travel experience"
              className="w-full h-auto rounded-lg object-cover"
            />

            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent rounded-b-lg">
              {/* Glassy Capsule Search Bar */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex flex-col md:flex-row justify-center items-center rounded-full p-1 mb-4 mx-auto shadow-lg backdrop-blur-md bg-white/10 border border-white/30 transition-all duration-300 hover:shadow-2xl max-w-2xl"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Date */}
                <div className="flex items-center px-6 py-3 relative text-white">
                  <FiCalendar className="mr-2 text-lg" />
                  <p className="text-sm font-medium">Date</p>
                  <FiChevronDown className="ml-4 text-lg" />
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-8 w-px bg-white/30 mx-2" />
                </div>
                {/* Budget */}
                <div className="flex items-center px-6 py-3 relative text-white">
                  <FiDollarSign className="mr-2 text-lg" />
                  <p className="text-sm font-medium">Budget</p>
                  <FiChevronDown className="ml-4 text-lg" />
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-8 w-px bg-white/30 mx-2" />
                </div>
                {/* Guest */}
                <div className="flex items-center px-6 py-3 relative text-white">
                  <FiUsers className="mr-2 text-lg" />
                  <p className="text-sm font-medium">Guest</p>
                  <FiChevronDown className="ml-4 text-lg" />
                </div>

                <button className="bg-white text-black rounded-full px-8 py-3 font-medium hover:bg-opacity-90 transition-colors flex items-center justify-center ml-3 text-base hover:scale-105">
                  Search
                </button>
              </motion.div>

              {/* Overlay Text */}
              <motion.p
                className="text-white text-center max-w-2xl mx-auto text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
              >
                Embark on a journey to find your dream destination, where adventure and relaxation await, creating unforgettable memories along the way.
              </motion.p>
            </div>
          </motion.div>

          {/* Right - Steps */}
          <div className="lg:w-1/2">
            <motion.h2
              className="text-sm font-semibold text-gray-500 mb-1"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              HOW IT WORKS
            </motion.h2>
            <motion.p
              className="text-5xl font-bold mb-8"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              One click for you
            </motion.p>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="group p-4 rounded-lg transition-all duration-300 hover:bg-gray-50 cursor-pointer"
                  custom={index}
                  variants={stepVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="bg-white p-3 rounded-full shadow-sm group-hover:bg-gray-200 transition-colors duration-300"
                    >
                      {step.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
