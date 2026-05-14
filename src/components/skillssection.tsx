import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { FaCss } from "react-icons/fa6";
import { IoLogoHtml5 } from "react-icons/io";
const skills = [
  {
    name: "JavaScript",
    icon:<FaNodeJs />,
    color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  },
  {
    name: "React",
    icon:<FaReact />,
    color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  },
  {
    name: "TypeScript",
    icon:<TbBrandTypescript />,
    color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  },
  {
    name: "CSS",
    icon:<FaCss />,
    color: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  },
  {
    name: "HTML",
    icon:<IoLogoHtml5 />,
    color: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  },
  
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-4 bg-black"
    >
      {/* Left Gradient */}
      <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />

      

      {/* Marquee */}
      <div className="flex gap-5 animate-marquee whitespace-nowrap w-max">
        {[...skills, ...skills].map((skill, i) => (
          <div
            key={i}
            className={`group flex items-center gap-3 px-6 py-4 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:scale-105 ${skill.color}`}
          >
            {/* Icon */}
            <div className="flex items-center justify-center size-12 rounded-full bg-white/10">
              <span className="text-sm">{skill.icon}</span>
            </div>

            {/* Text */}
            <span className="font-semibold tracking-wide text-base">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;