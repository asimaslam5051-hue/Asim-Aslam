import { BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";
import { FaYoutube } from "react-icons/fa";
const Portfoliocard = () => {
    return (
        <div className=" fix relative bg-white p-8  justify-end overflow-hidden shadow-xl rounded-2xl max-w-xs mx-auto mt-14">

            {/*portfolio image */}
            <div className="relative flex justify-center">



                {/* Image Card */}
                <div
                    className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5  p-2"
                >
                    <img
                        src="/images/image.png"
                        alt="portfolio"
                        className=" h-80 w-75 rounded-[1.5rem] object-cover border border-4  "
                    />




                </div>
            </div>
            {/*Bio*/}
            <div className="relative z-10 mt-6 text-center">
                <h2 className="text-3xl font-black text-black  tracking-tight">
                    Asim Aslam
                </h2>
                <p className="text-md text-[#6A6B6E] mt-12 font-semibold leading-snug">
                    A Web developer who has developed countless innovative solutions.
                </p>
                <div className="flex items-center md:justify-center justify-center gap-2 mt-4">
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
            </div>
        </div>
    )
}
export default Portfoliocard