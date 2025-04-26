"use client";
import Logo from "./Logo";
import Nav from "./Nav";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  return (
    <header className="w-full bg-white py-5 absolute xl:py-[30px] z-50">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:justify-between">
          {/* Logo */}
          <Logo />
          <div className="flex items-center gap-12">
            {/* nav & socials */}
            <Nav
              containerStyles="hidden xl:flex"
              listStyles="flex gap-6"
              linkStyles="text-primary font-primary text-lg tracking-[1.4px] 
              transition-all duration-300 cursor-pointer"
            />
            <ScrollLink to="contact" smooth>
              <button className="btn flex btn-accent mb-1 rounded-[25px] hover:scale-110 font-semibold transition duration-300">
                Get a Qoute
              </button>
            </ScrollLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
