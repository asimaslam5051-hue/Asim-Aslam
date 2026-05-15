import { BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="mt-20  bg-black">

      <div className="mx-auto flex max-w-7xl items-center justify-center gap-12">

        <p className="text-center text-sm tracking-wide  text-white/40">
          Made by{" "}
          <span className="font-medium text-[#F46C38]">
            Asim Aslam
          </span>
        </p>

      </div>
      <div className="flex items-center md:justify-center justify-center mt-2">
        <a href="#" className="p-2  rounded-full  transition">

          <FaFacebook className="size-6 text-[#F46C38] " />
        </a>
        <a href="#" className="p-2  rounded-full transition">
          <BsTwitter className="size-6 text-[#F46C38]" />
        </a>
        <a
          href="https://www.linkedin.com/feed/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full p-2 transition"
        >
          <LiaLinkedin className="size-6 text-[#F46C38]" />
        </a>
        <a href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full  transition">
          < FaYoutube className="size-6 text-[#F46C38]" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;