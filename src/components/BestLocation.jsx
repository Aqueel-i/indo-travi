import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const IndoTravi = () => {
  const destinations = [
    {
      name: 'Bromo, East Java',
      tour: 'Bromo Tengger Tour',
      images: [
        'https://images.unsplash.com/photo-1687226012369-36ec24bec4c4?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1687303499347-83b91e3df660?auto=format&fit=crop&w=800&q=80',
      ],
      description: 'Explore the majestic Bromo volcano with Tengger cultural highlights.',
      fullWidth: true,
    },
    {
      name: 'Denpasar, Bali',
      tour: 'Bali Beach Tourism',
      images: [
        'https://images.unsplash.com/photo-1593332850105-492ca2779a98?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1578898884382-6a4b85c0e49c?auto=format&fit=crop&w=800&q=80',
      ],
      description: 'Relax at world-renowned beaches, surf the waves, and explore Balinese temples.',
      fullWidth: false,
    },
    {
      name: 'Lampung, South Sumatra',
      tour: 'Sumatra Tourism',
      images: [
        'https://images.unsplash.com/photo-1529528070131-eda9f3e90919?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1518684079-85b254bda8f4?auto=format&fit=crop&w=800&q=80',
      ],
      description: 'Discover the natural beauty of Sumatra and traditional Lampung life.',
      fullWidth: false,
    },
    {
      name: 'Yogyakarta, Central Java',
      tour: 'Borobudur Temple Tour',
      images: [
        'https://images.unsplash.com/photo-1630214801769-24784bfd2b9c?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1601040365486-f52d5623e9df?auto=format&fit=crop&w=800&q=80',
      ],
      description: 'Visit the iconic Borobudur temple and experience Javanese heritage.',
      fullWidth: true,
    },
  ];

  const [selectedDestination, setSelectedDestination] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Autoplay carousel for selected destination
  useEffect(() => {
    if (!selectedDestination) return;
    const interval = setInterval(() => {
      setCarouselIndex((prev) =>
        (prev + 1) % selectedDestination.images.length
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [selectedDestination]);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      if (!selectedDestination) return;
      setCarouselIndex((prev) => (prev + 1) % selectedDestination.images.length);
    },
    onSwipedRight: () => {
      if (!selectedDestination) return;
      setCarouselIndex((prev) =>
        (prev - 1 + selectedDestination.images.length) % selectedDestination.images.length
      );
    },
    trackMouse: true,
  });

  // Stats with animated counting
  const stats = [
    { label: 'Islands', value: 17000 },
    { label: 'Languages', value: 700 },
    { label: 'Volcanoes', value: 130 },
  ];

  // For animating stats container on scroll
  const containerControls = useAnimation();
  const { ref: containerRef, inView: containerInView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (containerInView) containerControls.start('visible');
  }, [containerInView, containerControls]);

  // AnimatedNumber component animates number counting up on demand
  const AnimatedNumber = ({ value, trigger }) => {
    const controls = useAnimation();
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
      if (trigger) {
        controls.start({
          count: value,
          transition: { duration: 2, ease: 'easeOut' },
        });
      } else {
        controls.set({ count: 0 });
        setDisplayValue(0);
      }
    }, [value, trigger, controls]);

    return (
      <motion.span
        animate={controls}
        initial={{ count: 0 }}
        onUpdate={(latest) => setDisplayValue(Math.floor(latest.count))}
      >
        {displayValue.toLocaleString()}
      </motion.span>
    );
  };

  // Track which stat is hovered to trigger animation
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 space-y-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h2 className="text-xs font-bold text-gray-400 mb-2">Best Location</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800">Indonesian Tourism</h3>
        <p className="text-gray-600 max-w-xl mx-auto mt-2">
          Extraordinary natural beauty, enjoy the rich culture, and experience the friendliness of the local people.
        </p>
      </motion.div>

      {/* Parallax cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {destinations.map((destination, index) => (
          <motion.div
            key={index}
            className={`relative cursor-pointer overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-xl ${
              destination.fullWidth ? 'md:col-span-2' : ''
            }`}
            whileHover={{ scale: 1.02 }}
            onClick={() => {
              setSelectedDestination(destination);
              setCarouselIndex(0);
            }}
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={destination.images[0]}
                alt={destination.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-6 flex flex-col justify-end">
              <h3 className="text-xl font-semibold text-white">{destination.name}</h3>
              <p className="text-white/90">{destination.tour}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stats section */}
      <motion.div
        ref={containerRef}
        className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center"
        initial="hidden"
        animate={containerControls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.3, when: "beforeChildren" },
          },
        }}
      >
        {stats.map((stat, index) => {
          // Animate stat on hover or scroll into view
          const isActive = containerInView || hoveredIndex === index;
          return (
            <motion.div
              key={index}
              className="bg-gray-100 rounded-lg py-8 shadow cursor-pointer select-none"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0,0,0,0.12)" }}
            >
              <h4 className="text-4xl font-bold text-indigo-600">
                <AnimatedNumber value={stat.value} trigger={isActive} />
              </h4>
              <p className="mt-2 text-sm text-gray-600">{stat.label}</p>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedDestination && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-20 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white bg-opacity-90 rounded-xl max-w-lg w-full p-6 relative shadow-lg backdrop-filter backdrop-blur-md"
            >
              <button
                onClick={() => setSelectedDestination(null)}
                className="absolute top-3 right-3 text-gray-600 hover:text-red-600 text-3xl font-bold leading-none"
                aria-label="Close modal"
              >
                &times;
              </button>

              {/* Carousel */}
              <div
                {...swipeHandlers}
                className="relative h-60 overflow-hidden rounded-lg mb-4 select-none"
              >
                {selectedDestination.images.map((img, idx) => (
                  <motion.img
                    key={idx}
                    src={img}
                    alt={`Slide ${idx + 1}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: idx === carouselIndex ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    loading="lazy"
                    style={{ pointerEvents: idx === carouselIndex ? 'auto' : 'none' }}
                  />
                ))}

                <button
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/40 text-white px-3 py-1 rounded-r-md select-none"
                  onClick={() =>
                    setCarouselIndex(
                      (carouselIndex - 1 + selectedDestination.images.length) % selectedDestination.images.length
                    )
                  }
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <button
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/40 text-white px-3 py-1 rounded-l-md select-none"
                  onClick={() =>
                    setCarouselIndex((carouselIndex + 1) % selectedDestination.images.length)
                  }
                  aria-label="Next image"
                >
                  ›
                </button>
              </div>

              <h3 className="text-xl font-bold mb-1">{selectedDestination.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{selectedDestination.tour}</p>
              <p className="text-gray-700">{selectedDestination.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default IndoTravi;
