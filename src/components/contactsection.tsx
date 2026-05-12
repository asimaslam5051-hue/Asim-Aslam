const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16  bg-black text-white"
    >
      <div className="max-w-7xl mx-auto px-8">
          <div className="text-center md:text-left px-8">
            <h1 className="text-4xl text-start lg:text-7xl lg:text-start text-white md:text-7xl   font-black">
               LET'S WORK<br />
              <span className="text-[#B6B4BD33]">TOGETHER</span>
             </h1>
          </div>   
        {/* Form */}
          <form className="rounded-3xl p-4 lg:p-12">

            {/* Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <input
                type="text"
                placeholder="First Name"
                className="w-full bg-[#B6B4BD33] border border-white/5 hover:border border-[#F46C38] rounded-xl px-5 py-3 text-white placeholder:text-gray-500 outline-none focus:border-orange-500 transition"
                required
              />

              <input
                type="email"
               placeholder="contact@bundui.com"
                className="w-full bg-[#B6B4BD33] border border-white/10 rounded-xl px-5 py-3 text-white placeholder:text-gray-500 outline-none focus:border-orange-500 transition"
                required
              />
            </div>

            {/* Select */}
            <select
              className="w-full bg-[#B6B4BD33] border border-white/10 rounded-xl px-5 py-3 text-gray-500 outline-none focus:border-orange-500 transition mb-5"
              required
            >
              <option className="bg-[#B6B4BD33]">Select...</option>
              <option>$3K</option>
              <option>$3k-$5k</option>
              <option>$5k-$10k</option>
              <option>$10k-$15k</option>
            </select>

            {/* Textarea */}
            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full bg-[#B6B4BD33] border border-white/10 rounded-xl px-5 py-3 text-white placeholder:text-gray-500 outline-none resize-none focus:border-orange-500 transition mb-6"
              required
            />

            {/* Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-[#F46C38]  text-white font-semibold transition-all duration-300 hover:scale-[1.02]"
            >
              Submit
            </button>
          </form>
        </div>
      
    </section>
  );
};

export default Contact;