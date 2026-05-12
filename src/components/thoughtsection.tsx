const Thought = () => {
 const blogs = [
  {
    title: "Mastering Modern UI Design Principles",
    desc: "Learn how clean layouts, spacing, typography, and visual hierarchy improve user experience in modern web applications.",
    date: "Apr 8, 2025",
  },
  {
    title: "Creating Responsive Interfaces with React.js",
    desc: "Discover how to build responsive and reusable UI components using React.js, Tailwind CSS, and modern frontend practices.",
    date: "Mar 15, 2026",
  },
  {
    title: "Designing High-Performance Dashboard Experiences",
    desc: "Explore techniques for designing fast, interactive, and visually balanced dashboard interfaces for modern platforms.",
    date: "April 20, 2026",
  },
  {
    title: "Future Trends in Web and Product Design",
    desc: "Understand how modern designers adapt to evolving UI trends, accessibility standards, and interactive user experiences.",
    date: "Jan 28, 2026",
  },
];

  return (
    <section id="projects" className="bg-black w-full py-10">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-4xl text-center lg:text-8xl lg:text-start font-black text-white">
            DESIGN{" "}
            <span className="text-[#B6B4BD33]">THOUGHTS</span>
          </h2>
        </div>

        {/* Blog Cards */}
        <div className="space-y-6">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-3xl p-6 hover:bg-white/5 transition"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {blog.title}
                  </h3>

                  <p className="text-[#998F8F] text-sm md:text-lg mt-4 max-w-2xl">
                    {blog.desc}
                  </p>
                </div>

                <div className="text-orange-500 text-3xl">
                  ↗
                </div>
              </div>

              <div className="flex justify-between mt-6 text-sm text-gray-500">
                <span>{blog.date}</span>
                <span>6 min read</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Thought;