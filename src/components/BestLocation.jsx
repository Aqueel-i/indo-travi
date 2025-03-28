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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Tight header section */}
      <div className="mb-4 px-4 sm:px-6 lg:px-0 ml-50 mb-5"> {/* Added matching horizontal padding */}
        <h2 className="text-xs font-bold text-gray-400 mb-0.5">Best Location</h2>
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-0 md:gap-2">
          <h3 className="text-2xl md:text-3xl text-gray-800">Indonesian tourism</h3>
          <p className="text-gray-600 max-w-md text-xs md:text-sm mb-5 md:mt-0 mr-40">
            Extraordinary natural beauty, enjoy the rich culture, and experience the friendliness of the local people.
          </p>
        </div>
      </div>

      {/* Card rows remain unchanged */}
      <div className="flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-6 mb-6 w-full">
          {destinations.slice(0, 2).map((destination, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group ${destination.fullWidth ? 'w-full md:w-[calc(50%-12px)]' : 'w-full md:w-[calc(25%-18px)]'}`}
            >
              <div className="h-64 w-full overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="text-lg font-semibold text-white mb-1">{destination.name}</h3>
                <p className="text-white font-medium text-sm">{destination.tour}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-6 w-full">
          {destinations.slice(2, 4).map((destination, index) => (
            <div
              key={index + 2}
              className={`relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group ${destination.fullWidth ? 'w-full md:w-[calc(50%-12px)]' : 'w-full md:w-[calc(25%-18px)]'}`}
            >
              <div className="h-64 w-full overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="text-lg font-semibold text-white mb-1">{destination.name}</h3>
                <p className="text-white font-medium text-sm">{destination.tour}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndoTravi;