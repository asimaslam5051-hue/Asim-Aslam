

const stats = [
    {
        number: "+1",
        line1: "YEARS OF",
        line2: "EXPERIENCE",
    },
    {
        number: "+8",
        line1: "PROJECTS",
        line2: "COMPLETED",
    },
    {
        number: "+20",
        line1: "WORLDWIDE",
        line2: "CLIENTS",
    },
];
const Herosection = () => {
    return (
        <section id="home" className="bg-black text-white overflow-hidden py-12">
            <div className="container mx-auto px-6">
                {/*Heading */}
                <div className="max-w-4xl">
                    <h1 className="text-4xl text-center lg:text-8xl lg:text-start md:text-7xl font-black light-tight">
                        WEB <br />
                        <span className="text-[#B6B4BD33]">DEVELOPER</span>
                    </h1>
                    <p className="text-[#998F8F] text-lg mt-6 font-16px max-w-xl">
                        Passionate about creating modern, responsive, and visually appealing user
                        interfaces. Dedicated to crafting clean designs and smooth user experiences
                        that combine creativity, functionality, and performance in every project.
                    </p>
                </div>
                <div className="relative flex flex-col text-center lg:flex-row  gap-10 mt-6">
                {stats.map((item,index)=>
                  <div key={index}>
                    <h2 className="text-5xl md:text-6xl gap-6 font-bold">{item.number}</h2>
                    <p className="text-[#998F8F] mt-6">{item.line1}</p>
                    <p className="text-[#998F8F]">{item.line2}</p>
                  </div>
                )}
                </div>
            </div>
        </section>
    )
}
export default Herosection;