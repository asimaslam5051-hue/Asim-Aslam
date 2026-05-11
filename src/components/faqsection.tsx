import { LuChevronUp, LuChevronDown } from "react-icons/lu";
import { useState } from "react";

type Item = {
  id: string;
  trigger: string;
  content: string;
};

const items: Item[] = [
  {
    id: "safety",
    trigger: "what services do you offer?",
    content:
      "I provided a range of vservices including product design,Web Development, and User experience(UX) consulting tailorder to meet your project needs.",
  },
  {
    id: "age",
    trigger: "What is your design process?",
    content: "my design process involves understanding client goals, conducting user,research,creating wireframes and prototypes and iterating based on feedback to ensure the final product meets user needs",

  },
  {
    id: "device",
    trigger: "How do you handle project timeline?",
    content: "i work closely with clients to establish clear timeline and milestons, ensuring that projects stay on track and delivered on time",
  },
  {
    id: "family",
    trigger: "Can you work with existing team?",
    content: "Absolutely! I can collaborate seamlessly with existing teams,integrating into your workflow to enhance design and development efforts.",
  },
  
  {
    id: "cancel",
    trigger: "What tools do you use?",
    content:
      "I utilize various tools for design and development including HTML, CSS, Javascript TaiwindCSS and React ensuring  high-quality outcomes for all projects.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section
      id="faqs"
      className="py-4  bg-black text-white"
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center md:text-left px-4">
          <h2 className="text-4xl text-white md:text-6xl mb-8  font-bold">
            Frequently
            Asked <br /><span className="text-[#F46C38]">Questions</span>
          </h2>
        </div>
        {/* Accordion */}
        <div className="space-y-4 text-white max-w-3xl mx-auto w-full">
          {items.map((item) => {
            const isOpen = open === item.id;

            return (
              <div
                key={item.id}
                className="border border-white/10 rounded-xl bg-[#B6B4BD33] overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : item.id)}
                  className="w-full flex justify-between items-center text-left font-semibold text-base sm:text-lg p-4 sm:p-5"
                >
                  <span className="pr-3">{item.trigger}</span>
                  <span className="text-xl shrink-0">
                    {isOpen ? <LuChevronUp /> : <LuChevronDown />}
                  </span>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  <p className="px-4 sm:px-5 pb-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;