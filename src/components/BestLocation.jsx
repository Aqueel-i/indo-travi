import React from 'react';

const IndoTravi = () => {
  const destinations = [
    {
      name: 'Bromo, East Java',
      tour: 'Bromo Tengger Tour',
      image: 'https://images.unsplash.com/photo-1687226012369-36ec24bec4c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      fullWidth: true
    },
    {
      name: 'Denpasar, Bali',
      tour: 'Bali Beach Tourism',
      image: 'https://images.unsplash.com/photo-1593332850105-492ca2779a98?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      fullWidth: false
    },
    {
      name: 'Lampung, South Sumatra',
      tour: 'Sumatra Tourism',
      image: 'https://images.unsplash.com/photo-1529528070131-eda9f3e90919?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      fullWidth: false
    },
    {
      name: 'Yogyakarta, Central Java',
      tour: 'Borobudur Temple Tour',
      image: 'https://images.unsplash.com/photo-1630214801769-24784bfd2b9c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      fullWidth: true
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header section with responsive spacing */}
      <div className="mb-8 lg:mb-12">
        <h2 className="text-xs font-bold text-gray-400 mb-2">Best Location</h2>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-8">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
            Indonesian tourism
          </h3>
          <p className="text-gray-600 text-sm md:text-base max-w-md">
            Extraordinary natural beauty, enjoy the rich culture, and experience the friendliness of the local people.
          </p>
        </div>
      </div>

      {/* Responsive card grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {destinations.map((destination, index) => (
          <div
            key={index}
            className={`relative rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg ${
              destination.fullWidth ? 'md:col-span-2' : ''
            }`}
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-xl font-semibold text-white mb-1">{destination.name}</h3>
              <p className="text-white/90 font-medium">{destination.tour}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndoTravi;