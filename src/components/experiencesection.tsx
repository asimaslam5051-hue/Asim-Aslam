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
            link: "https://dashboard-j5z1.vercel.app/"
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
            link: "https://digi-vaulet.vercel.app/"

        },
    ];
    return (
        <section id="projects" className="bg-black w-full py-10">
            <div className="max-w-5xl mx-auto px-6">

                {/* Heading */}
                <div className="mb-12">
                    <h2 className="text-4xl text-center lg:text-8xl lg:text-start font-black leading-none text-white">
                        2 YEARS OF{" "}
                        <span className="text-[#B6B4BD33]">
                            EXPERIENCE
                        </span>
                    </h2>
                </div>

                {/* Blog Cards */}
                <div className="space-y-6">
                    {blogs.map((blog, index) => (
                        <a
                            key={index}
                            href={blog.link || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block border border-white/10 rounded-3xl p-6 hover:bg-white/5 transition"
                        >
                            <div className="flex items-start justify-between gap-6">

                                {/* LEFT CONTENT */}
                                <div className="flex-1">
                                    <h3 className="text-xl md:text-2xl font-bold text-white">
                                        {blog.title}
                                    </h3>

                                    <p className="text-[#998F8F] text-sm md:text-lg mt-4 max-w-2xl">
                                        {blog.desc}
                                    </p>

                                    <div className="mt-6 text-sm text-gray-500">
                                        {blog.date}
                                    </div>
                                </div>

                                {/* RIGHT ARROW */}
                                <div className="text-orange-500 text-3xl shrink-0">
                                    ↗
                                </div>

                            </div>
                        </a>
                    ))}
                </div>

            </div>
        </section>
    )


}
export default Experience;