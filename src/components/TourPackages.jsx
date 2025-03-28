import React from "react";

const TourPackages = () => {
  const packages = [
    {
      id: 1,
      title: "Bali Tour Package",
      price: "$285",
      duration: "7 Days",
      rating: "4.9",
      date: "23 AUGUST - 29 AUGUST",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=380&q=80"
    },
    {
      id: 2,
      title: "Java Tour Package",
      price: "$218",
      duration: "5 Days",
      rating: "4.8",
      date: "23 AUGUST - 27 AUGUST",
      image: "https://images.unsplash.com/photo-1560840067-ddcaeb7831d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=380&q=80"
    },
    {
      id: 3,
      title: "Solo Tour Package",
      price: "$163",
      duration: "3 Days",
      rating: "4.6",
      date: "23 AUGUST - 25 AUGUST",
      image: "https://images.unsplash.com/photo-1566378246598-5b11a0d486cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=380&q=80"
    },
  ];

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white mb-25">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h2 className="text-xs font-bold text-gray-400">Tour Packages</h2>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mt-1">
            <h3 className="text-2xl md:text-3xl text-gray-800">Our Tourist Destination</h3>
            <p className="text-gray-600 max-w-md text-xs md:text-sm">
              Our tourist destinations offer an unrivaled blend of natural beauty and cultural richness
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 w-full max-w-[240px] mx-auto flex flex-col h-[380px]">
              <div className="relative h-[320px]">
                <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
                <div className="absolute top-3 left-3 backdrop-blur-sm bg-white/30 text-gray-800 text-xs font-medium px-2 py-0.5 rounded-full">
                  {pkg.duration}
                </div>
                <div className="absolute top-3 right-3 backdrop-blur-sm bg-white/30 text-gray-800 text-xs font-medium px-2 py-0.5 rounded-full flex items-center">
                  <svg className="w-3 h-3 mr-1 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {pkg.rating}
                </div>
              </div>
              <div className="backdrop-blur-sm bg-gray-500/30 p-3 mt-[-20px] relative z-10 rounded-t-lg rounded-b-lg mx-1 mb-0.5">
                <p className="text-white text-xs mb-1">{pkg.date}</p>
                <div className="flex justify-between items-center">
                  <h3 className="text-base font-bold text-white">{pkg.title}</h3>
                  <p className="text-lg font-bold text-white ml-2">{pkg.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="px-6 py-2 bg-black text-white font-medium rounded-full hover:bg-gray-700 transition-colors duration-300 text-sm">
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default TourPackages;