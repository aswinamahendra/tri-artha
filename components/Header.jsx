"use client";
import Logo from "./Logo";
import Nav from "./Nav";
import { Link as ScrollLink } from "react-scroll";
import NavMobile from "./NavMobile";

const Header = () => {
  return (
    <header className="bg-white py-4 sticky top-0">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />
          <div className="flex items-center gap-12">
            {/* navbar */}
            <Nav
              containerStyles="hidden xl:flex"
              listStyles="flex gap-6"
              linkStyles="text-primary font-primary text-lg tracking-[1.4px] 
              transition-all duration-300 cursor-pointer"
            />
            {/* nav mobile */}
            <div className="xl:hidden">
              <NavMobile />
            </div>
            {/* btn */}
            <ScrollLink to="contact" smooth>
              <button className="hidden btn xl:flex btn-accent mb-1 rounded-[25px] hover:scale-110 font-semibold transition duration-300">
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
