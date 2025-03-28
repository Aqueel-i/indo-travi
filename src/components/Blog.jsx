import React from "react";

const BlogSection = () => {
  const blogPosts = [
    {
      date: "Nov 14, 2022",
      title: "2023 Travel Trends – what you need to know",
      excerpt: "2023 taught us valuable life lessons. Plans don't always work out, flexibility in life is key, a...",
      image: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
    {
      date: "Nov 18, 2022",
      title: "Jeep Adventure is a new attraction for tourists visiting Garut",
      excerpt: "Jeep Adventure is one of the tourist attractions that has been popular recently. The sensation...",
      image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1368&q=80",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-xl font-light text-gray-600 mb-2">Our Blog</h2>
        <h1 className="text-5xl  text-gray-800">Our travel memories</h1>
      </div>

      {/* Cards Container - Flex with Equal Sizing */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
        {blogPosts.map((post, index) => (
          <div 
            key={index} 
            className="flex-1 max-w-md bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
          >
            {/* Fixed-Height Image Container */}
            <div className="h-48 w-full overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Text Content (Same Padding for Both) */}
            <div className="p-6 flex flex-col h-48">
              <p className="text-gray-500 mb-2 text-sm">{post.date}</p>
              <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">{post.title}</h3>
              <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Capsule Button */}
      <div className="mt-12 text-center ">
        <button className="px-8 py-3 rounded-full bg-black text-white hover:bg-gray-600 transition-colors font-medium">
          View more
        </button>
      </div>
    </div>
  );
};

export default BlogSection;