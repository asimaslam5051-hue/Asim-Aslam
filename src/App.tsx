import Contact from "./components/contactsection";
import Experience from "./components/experiencesection";
import FAQSection from "./components/faqsection";
import Herosection from "./components/herosection";
import Navbar from "./components/navbar";
import Projectcard from "./components/projectsection";
import TestimonialsSection  from "./components/testimonialsection";
import Skills from "./components/skillssection";
import Portfoliocard from "./components/ui/portfoliocard";

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      

      <section className=" relative w-full bg-black px-4 sm:px-6 py-24 text-white">
        
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-2 lg:gap-12">
          
          {/* LEFT SIDE */}
          <div className="w-full lg:w-[30%]  relative">
            
            {/* Sticky Card */}
            <div className="sticky top-10 self-start">
              <Portfoliocard />
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="w-full lg:w-[70%] space-y-10">
            
            <Herosection />
            <Projectcard />
            <Experience/>
            <TestimonialsSection/>
            <Skills/>
            <Contact />
            <FAQSection />

          </div>

        </div>
      </section>
    </>
  );
}

export default App;