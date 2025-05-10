import {
  RiArrowRightLine,
  RiMailFill,
  RiMapPin2Fill,
  RiPhoneFill,
} from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="mt-16 xl:mt-32 border-t-4 border-accent">
      <div className="container mx-auto">
        <div className="py-16 xl:py-[100px] flex flex-col xl:flex-row gap-[60px] xl:gap-[30px]">
          {/* logo & text */}
          <div className="flex-1">
            <Link href="/" className="flex mb-6">
              <Image src="/assets/logo.png" width={220} height={48} alt="" />
            </Link>
            <p className="text-border max-w-[270px] text-primary">
              Professional in Technical Services for Calibration and Medical, NDT, Repair and Training.
            </p>
          </div>
          {/* contact */}
          <div className="flex-1 text-border">
            <h4 className="h4 text-primary mb-10 font-bold uppercase">Contact</h4>
            <ul className="flex flex-col gap-6">
              <li className="flex items-center gap-4">
                <RiMapPin2Fill className="text-accent text-xl" />
                <p className="text-primary">15315 Serpong, Indonesia</p>
              </li>
              <li className="flex items-center gap-4">
                <RiPhoneFill className="text-accent text-xl" />
                <p className="text-primary">+62 817-7083-3134</p>
              </li>
              <li className="flex items-center gap-4">
                <RiMailFill className="text-accent text-xl" />
                <p className="text-primary">info@tri-artha.com</p>
              </li>
            </ul>
          </div>
          {/* newsletter */}
          <div className="flex-1 text-border">
            <h4 className="h4 text-primary mb-10 font-bold uppercase">
              Newsletter
            </h4>
            <p className="mb-9 text-primary">Subscribe to Our Newsletter for the Latest Updates and Offers</p>
            {/* input */}
            <div className="relative max-w-[370px] te">
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-white border border-gray-400  
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
      <div className="mx-auto xl:px-10 py-12 flex flex-col gap-6 xl:flex-row items-center justify-center bg-accent">
        <p className="text-white font-semibold">Copyright &copy; 2025 All rights reserved.</p>
        <Socials
          containerStyles="flex gap-6 text-white"
          iconStyles="hover:text-white transition-all"
        />
      </div>
    </footer>
  );
};

export default Footer;
