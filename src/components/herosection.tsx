

const stats = [
    {
        number: "+2",
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
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold light-tight">
                        Web <br />
                        <span className="text-[#B6B4BD33]">Developer</span>
                    </h1>
                    <p className="text-gray-600 text-lg mt-6 max-w-xl">
                        Passionate about creating modern, responsive, and visually appealing user
                        interfaces. Dedicated to crafting clean designs and smooth user experiences
                        that combine creativity, functionality, and performance in every project.
                    </p>
                </div>
                <div className="relative flex flex-row sm:flex-row  gap-10 mt-6">
                {stats.map((item,index)=>
                  <div key={index}>
                    <h2 className="text-5xl md:text-6xl font-semibold">{item.number}</h2>
                    <p className="text-gray-600 mt-6">{item.line1}</p>
                    <p className="text-gray-600">{item.line2}</p>
                  </div>
                )}
                </div>
            </div>
        </section>
    )
}
export default Herosection;