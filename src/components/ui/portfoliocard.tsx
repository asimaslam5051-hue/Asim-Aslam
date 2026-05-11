import { BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";
import { FaYoutube } from "react-icons/fa";
const Portfoliocard = () => {
    return (
        <div className=" fix relative bg-white p-8  overflow-hidden shadow-xl rounded-2xl max-w-xs mx-auto mt-14">
          
            {/*portfolio image */}
            <div className="relative flex justify-center ">
                <img
                    src="/images/image.png"
                    alt="portfolio"
                    className="w-60 h-60 object-cover rounded-2xl"
                />
            </div>
            {/*Bio*/}
            <div className="relative z-10 mt-6 text-center">
                <h2 className="text-3xl font-bold text-black  tracking-tight">
                    Asim Aslam
                </h2>
                <p className="text-lg text-gray-600 mt-12 leading-snug">  
                    A Web developer who has developed countless innovative solutions.
                </p>
                <div className="flex items-center md:justify-center justify-center gap-2 mt-4">
            <a href="#"  className="p-2  rounded-full  transition">

              <FaFacebook className="size-6 text-[#F46C38] " />
            </a>
            <a href="#" className="p-2  rounded-full transition">
              <BsTwitter className="size-6 text-[#F46C38]" />
            </a>
            <a href="#" className="p-2 rounded-full  transition">
              <LiaLinkedin className="size-6 text-[#F46C38]" />
            </a>
             <a href="#" className="p-2 rounded-full  transition">
              < FaYoutube  className="size-6 text-[#F46C38]" />
            </a>
          </div>
            </div>
        </div>
    )
}
export default Portfoliocard