const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-black py-16 text-white"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* Heading */}
        <div className="mb-12">
          <h1 className="text-4xl font-black text-white md:text-6xl lg:text-7xl">
            LET'S WORK <br />
            <span className="text-[#B6B4BD33]">
              TOGETHER
            </span>
          </h1>
        </div>

        {/* Form */}
        <form
          className="
            rounded-[2rem]
            border
            border-white/10
            bg-white/5
            p-6
            lg:p-12 shadow-[0_0_50px_rgba(244,108,56,0.08)]
          "
        >

          {/* Inputs */}
          <div className="mb-5 grid grid-cols-1 gap-5 md:grid-cols-2">

            <input
              type="text"
              placeholder="First Name"
              className="
                w-full
                rounded-2xl
                border
                border-white/10
                bg-[#1A1A1A]
                px-5
                py-4
                text-white
                placeholder:text-gray-500
                outline-none
                transition-all
                duration-300
                focus:border-[#F46C38]
                focus:ring-2
                focus:ring-[#F46C38]/20
              "
              required
            />

            <input
              type="email"
              placeholder="contact@bundui.com"
              className="
                w-full
                rounded-2xl
                border
                border-white/10
                bg-[#1A1A1A]
                px-5
                py-4
                text-white
                placeholder:text-gray-500
                outline-none
                transition-all
                duration-300
                focus:border-[#F46C38]
                focus:ring-2
                focus:ring-[#F46C38]/20
              "
              required
            />
          </div>

          {/* Select */}
          <select
            className="
              mb-5
              w-full
              rounded-2xl
              border
              border-white/10
              bg-[#1A1A1A]
              px-5
              py-4
              text-gray-400
              outline-none
              transition-all
              duration-300
              focus:border-[#F46C38]
              focus:ring-2
              focus:ring-[#F46C38]/20
            "
            required
          >
            <option>Select Budget</option>
            <option>$3K</option>
            <option>$3K - $5K</option>
            <option>$5K - $10K</option>
            <option>$10K - $15K</option>
          </select>

          {/* Textarea */}
          <textarea
            rows={6}
            placeholder="Tell me about your project..."
            className="
              mb-6
              w-full
              resize-none
              rounded-2xl
              border
              border-white/10
              bg-[#1A1A1A]
              px-5
              py-4
              text-white
              placeholder:text-gray-500
              outline-none
              transition-all
              duration-300
              focus:border-[#F46C38]
              focus:ring-2
              focus:ring-[#F46C38]/20
            "
            required
          />

          {/* Button */}
          <button
            type="submit"
            className="
              w-full
              rounded-2xl
              bg-[#F46C38]
              px-6
              py-2
              text-lg
              font-semibold
              text-white
              transition-all
              duration-300
            "
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;