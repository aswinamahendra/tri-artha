import {
  RiArrowRightLine,
  RiMailFill,
  RiMapPin2Fill,
  RiPhoneFill,
} from "react-icons/ri";
import Logo from "./Logo";
import Link from "next/link";
import Image from "next/image";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="mt-16 xl:mt-32 bg-primary">
      <div className="container mx-auto">
        <div className="py-16 xl:py-[100px] flex flex-col xl:flex-row gap-[60px] xl:gap-[30px]">
          {/* logo & text */}
          <div className="flex-1">
            <Link href="/" className="flex mb-6">
              <Image src="/assets/logo.png" width={230} height={48} alt="" />
            </Link>
            <p className="text-border max-w-[270px] text-white">
              Lorem Ipsum dolor sit amet consectetur
            </p>
          </div>
          {/* contact */}
          <div className="flex-1 text-border">
            <h4 className="h4 text-white mb-10 font-bold uppercase">Contact</h4>
            <ul className="flex flex-col gap-6">
              <li className="flex items-center gap-4">
                <RiMapPin2Fill className="text-accent text-xl" />
                <p className="text-white">15315 Serpong, Indonesia</p>
              </li>
              <li className="flex items-center gap-4">
                <RiPhoneFill className="text-accent text-xl" />
                <p className="text-white">+62 (813) 1895 2424</p>
              </li>
              <li className="flex items-center gap-4">
                <RiMailFill className="text-accent text-xl" />
                <p className="text-white">15315 Serpong, Indonesia</p>
              </li>
            </ul>
          </div>
          {/* newsletter */}
          <div className="flex-1 text-border">
            <h4 className="h4 text-white mb-10 font-bold uppercase">
              Newsletter
            </h4>
            <p className="mb-9 text-white">Subscribe to Our Newsletter for the Latest Updates and Offers</p>
            {/* input */}
            <div className="relative max-w-[370px]">
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-white  
              h-16 w-full pl-7 rounded-full outline-none flex items-center"
              />
              <button
                className="bg-accent w-12 h-12 absolute right-2 top-2 
              text-white rounded-full text-xl flex items-center justify-center hover:scale-125 transition duration-300"
              >
                <RiArrowRightLine />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* copyright */}
      <div className="container mx-auto xl:px-0 py-12 flex flex-col gap-6 xl:flex-row items-center justify-between">
        <p className="text-white">Copyright &copy; 2025 All rights reserved.</p>
        <Socials
          containerStyles="flex gap-6 text-white"
          iconStyles="hover:text-accent transition-all"
        />
      </div>
    </footer>
  );
};

export default Footer;
