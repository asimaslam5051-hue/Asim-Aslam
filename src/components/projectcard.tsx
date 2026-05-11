import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Dashboard",
    image:
      "https://framerusercontent.com/images/4mYEXU91rLBNKIW9k6hZh16l7Q.jpeg",
    link: "https://dashboard-j5z1.vercel.app/",
  },
  {
    title: "SaaS Landing Page",
    image:
      "https://framerusercontent.com/images/5Ra4AFZmEJOkMGLAEjkRXt2oqF4.png",
    link: "https://landin-page-uvzp.vercel.app/",
  },
  {
    title: "Kid Vault Landing Page",
    image:
      "https://digi-vaulet.vercel.app/images/image.jpg",
    link: "https://digi-vaulet.vercel.app/",
  },
  {
    title: "Blog Page",
    image:
      "https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg",
    link: "https://blog-page-v1pw.vercel.app/",
  },
 
];

const Projectcard = () => {
  return (
    <section id="projects" className="bg-black w-full py-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-6xl font-bold text-white">
            Featured{" "}
            <span className="text-[#F46C38]">Projects</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="space-y-5">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-5 bg-[#B6B4BD14] border border-white/10 hover:border-[#F46C38] rounded-2xl p-4 transition-all duration-300"
            >
              {/* Image */}
              <div className="w-28 h-24 overflow-hidden rounded-xl shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>

              </div>

              {/* Arrow */}
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 -rotate-45">
                <ArrowRight className="w-6 h-6 text-[#F46C38]" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projectcard;