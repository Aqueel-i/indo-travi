import React from "react";

const BlogSection = () => {
  const blogPosts = [
    {
      date: "Nov 14, 2022",
      title: "2023 Travel Trends – what you need to know",
      excerpt:
        "2023 taught us valuable life lessons. Plans don't always work out, flexibility in life is key, a...",
      image:
        "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
    {
      date: "Nov 18, 2022",
      title: "Jeep Adventure is a new attraction for tourists visiting Garut",
      excerpt:
        "Jeep Adventure is one of the tourist attractions that has been popular recently. The sensation...",
      image:
        "https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1368&q=80",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-xl font-light text-gray-600 mb-2 uppercase tracking-wide">
          Our Blog
        </h2>
        <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
          Our travel memories
        </h1>
      </div>

      {/* Cards Container */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-10">
        {blogPosts.map((post, index) => (
          <article
            key={index}
            className="flex-1 max-w-md bg-white rounded-3xl shadow-md border border-gray-100 overflow-hidden transform transition-shadow duration-300 hover:shadow-xl"
          >
            {/* Image Container with hover scale */}
            <div className="h-48 w-full overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Text Content */}
            <div className="p-6 flex flex-col h-48">
              <time className="text-gray-500 mb-2 text-sm tracking-wide" dateTime={post.date}>
                {post.date}
              </time>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 leading-snug">
                {post.title}
              </h3>
              <p className="text-gray-700 line-clamp-3 flex-grow leading-relaxed">
                {post.excerpt}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* View More Button */}
      <div className="mt-12 text-center">
        <button
          className="px-10 py-3 rounded-full bg-black text-white font-semibold hover:bg-gray-700 shadow-md hover:shadow-lg transition-colors duration-300"
          aria-label="View more blog posts"
        >
          View more
        </button>
      </div>
    </section>
  );
};

export default BlogSection;
