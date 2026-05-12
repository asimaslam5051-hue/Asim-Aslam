import React from 'react';

interface TestimonialProps {
  name: string;
  avatarUrl: string;
  feedback: string;
}

 const Testimonial:React.FC<TestimonialProps> = ({ name, avatarUrl, feedback }) => {
  return (
    <div className="flex flex-col p-6 min-w-[350px] max-w-[400px] h-full bg-[#2c2d2f] border border-white/5 rounded-xl shadow-lg">
      <div className="flex items-center gap-4 mb-4">
        <img 
          src={avatarUrl} 
          alt={name} 
          className="size-15 rounded-full object-cover border border-white/10"
        />
        <h6 className="font-['Outfit'] text-2xl font-medium text-white">
          {name}
        </h6>
      </div>
      <p className="font-['Outfit'] text-[18px] leading-relaxed text-[#d9d9d9]">
        {feedback}
      </p>
    </div>
  );
};
export default Testimonial