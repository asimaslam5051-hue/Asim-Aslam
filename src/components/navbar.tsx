import {
  Home,
  Folder,
  Briefcase,
  Wrench,
  Pencil,
} from "lucide-react";

import { useEffect, useState } from "react";

const navItems = [
  {
    name: "Home",
    icon: Home,
    link: "/home",
  },
  {
    name: "Projects",
    icon: Folder,
    link: "/projects",
  },
  {
    name: "Experience",
    icon: Briefcase,
    link: "/experience",
  },
  {
    name: "Tools",
    icon: Wrench,
    link: "/tools",
  },
  {
    name: "Thoughts",
    icon: Pencil,
    link: "/blog",
  },
];

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  /*
    RIGHT SIDE half scroll hone ke baad navbar move hoga
  */

  const startMove = 150;

  const topPosition =
    scrollY < startMove
      ? 40
      : Math.max(40 - (scrollY - startMove) * 0.25, -120);

  return (
    <nav
      style={{
        top: `${topPosition}px`,
      }}
      
      className="
        fixed
        left-1/2
        -translate-x-1/2
        z-50
        bg-white/5
        backdrop-blur-xl
        border border-white/10
        px-2
        py-1
        rounded-2xl
        transition-all
        duration-75
      "
    >
      <div className="flex items-center gap-1 sm:gap-2">
        {navItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <a
              key={index}
              href={item.link}
              className="group relative flex items-center justify-center"
            >
              {/* Tooltip */}
              <span
                className="
                  absolute
                  -top-11
                  scale-95
                  opacity-0
                  group-hover:opacity-100
                  group-hover:scale-100
                  transition-all
                  duration-300
                  whitespace-nowrap
                  rounded-lg
                  border
                  border-white/10
                  bg-black/60
                  px-3
                  py-1
                  text-xs
                  text-white
                  backdrop-blur-md
                "
              >
                {item.name}
              </span>

              {/* Icon */}
              <div
                className="
                  flex
                  h-10
                  w-10
                  sm:h-12
                  sm:w-12
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-transparent
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-white/20
                  hover:bg-white/10
                  hover:shadow-lg
                "
              >
                <Icon
                  className="h-5 w-5 sm:h-6 sm:w-6"
                  strokeWidth={2}
                />
              </div>
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;