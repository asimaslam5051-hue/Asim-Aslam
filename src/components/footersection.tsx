const Footer = () => {
  return (
    <footer className="mt-20  bg-black">
      
      <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-8">

        <p className="text-center text-sm tracking-wide text-white/40">
          Made by{" "}
          <span className="font-medium text-[#F46C38]">
            Asim
          </span>{" "}
          | Powered by{" "}
          <span className="font-medium text-[#F46C38]">
            React
          </span>{" "}
          & Tailwind CSS
        </p>

      </div>
    </footer>
  );
};

export default Footer;