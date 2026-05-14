const Experience = () => {
  const blogs = [
    {
      title: "Starting and Growing a Career in Web Development",
      desc: "As the internet continues to develop and grow exponentially, jobs related to the industry do too.",
      date: "Apr 8, 2025",
     
    },
    {
      title: "Create a Modern Blog Page in React TSX",
      desc: "Learn how to build responsive and reusable blog pages using React.js, TypeScript, and component-based architecture.",
      date: "Mar 15, 2026",
      link: "https://blog-page-v1pw.vercel.app/",
      
    },
    {
      title: "Building High-Performance Dashboards with Node.js",
      desc: "Learn how Node.js powers fast, scalable, and real-time dashboard applications for modern web platforms.",
      date: "April 20, 2026",
      link: "https://dashboard-j5z1.vercel.app/",
      
    },
    {
      title: "Modern UI Design Patterns in React.js",
      desc: "Explore how developers can create responsive, reusable, and visually engaging interfaces using React.js and modern design systems.",
      date: "Jan 28, 2026",
      
    },
    {
      title: "Building High-Converting SaaS Landing Pages",
      desc: "Learn how modern SaaS landing pages improve user engagement, increase conversions, and deliver clean user experiences.",
      date: "Mar 15, 2026",
      link: "https://landin-page-uvzp.vercel.app/",
      
    },
    {
      title: "Designing the Kidvalute Learning Platform",
      desc: "Explore the process of creating an interactive and visually engaging landing page for the Kidvalute educational platform.",
      date: "Apr 2, 2026",
      link: "https://digi-vaulet.vercel.app/",
     
    },
  ];

  return (
    <section id="experience" className="w-full bg-black py-10">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-14">
          <h2 className="text-4xl text-center lg:text-6xl lg:text-start font-black leading-none text-white">
            2 YEARS OF<br/>
            <span className="text-[#B6B4BD33]">
              EXPERIENCE
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div className="space-y-6">
          {blogs.map((blog, index) => (
            <a
              key={index}
              href={blog.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border border-white/10 rounded-3xl p-6 hover:bg-[#F46C38] hover:border-white/5 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">

              

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">

                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-black transition">
                        {blog.title}
                      </h3>

                      <p className="text-[#998F8F] text-sm md:text-base mt-4 leading-relaxed group-hover:text-white max-w-2xl">
                        {blog.desc}
                      </p>

                      <div className="mt-6 text-sm text-gray-500 group-hover:text-white ">
                        {blog.date}
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="hidden md:flex items-center justify-center w-14 h-14 rounded-full bg-[#F46C38] text-white text-2xl group-hover:bg-white group-hover:text-[#F46C38] transition">
                      ↗
                    </div>

                  </div>
                </div>

              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;