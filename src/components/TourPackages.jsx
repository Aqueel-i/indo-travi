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
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=380&q=80",
    },
    {
      id: 2,
      title: "Java Tour Package",
      price: "$218",
      duration: "5 Days",
      rating: "4.8",
      date: "23 AUGUST - 27 AUGUST",
      image:
        "https://images.unsplash.com/photo-1560840067-ddcaeb7831d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=380&q=80",
    },
    {
      id: 3,
      title: "Solo Tour Package",
      price: "$163",
      duration: "3 Days",
      rating: "4.6",
      date: "23 AUGUST - 25 AUGUST",
      image:
        "https://images.unsplash.com/photo-1566378246598-5b11a0d486cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=380&q=80",
    },
  ];

  return (
    <section className="py-12 px-6 sm:px-10 lg:px-16 bg-white mb-24">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10 text-center max-w-3xl mx-auto">
          <h2 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
            Tour Packages
          </h2>
          <h3 className="mt-2 text-4xl font-extrabold text-gray-900">
            Our Tourist Destination
          </h3>
          <p className="mt-3 text-gray-600 text-base sm:text-lg">
            Our tourist destinations offer an unrivaled blend of natural beauty
            and cultural richness.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-500 cursor-pointer max-w-[280px] mx-auto flex flex-col h-[380px]"
            >
              <div className="relative h-[320px] rounded-t-xl overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 backdrop-blur-md bg-white/40 text-gray-900 text-xs font-semibold px-3 py-1 rounded-full shadow">
                  {pkg.duration}
                </div>
                <div className="absolute top-3 right-3 backdrop-blur-md bg-white/40 text-gray-900 text-xs font-semibold px-3 py-1 rounded-full shadow flex items-center space-x-1">
                  <svg
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>{pkg.rating}</span>
                </div>
              </div>
              <div className="bg-gradient-to-t from-gray-900 via-gray-800 to-transparent p-5 rounded-b-xl mt-[-20px] relative z-10 flex flex-col justify-end h-[100px] text-white shadow-lg">
                <p className="text-xs tracking-wider mb-1 opacity-80">{pkg.date}</p>
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-extrabold truncate">{pkg.title}</h3>
                  <p className="text-lg font-bold">{pkg.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button
            type="button"
            className="inline-block px-8 py-3 bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-semibold rounded-full shadow-lg hover:from-indigo-700 hover:to-blue-600 transition-colors duration-300 text-base"
          >
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default TourPackages;
