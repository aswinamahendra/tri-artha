import { RiPhoneFill, RiMailFill } from "react-icons/ri";
import Socials from "./Socials";
import { FaLink } from "react-icons/fa";

const Topbar = () => {
  return (
    <section
      className="py-4 xl:h-16 xl:py-0 bg-gradient-to-t from-[#537dad] to-[#4b84c5] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        {/* phone, mail & socials */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="hidden xl:flex items-center gap-8">
            {/* phone */}
            <div className="flex items-center">
              <div
                className="w-8 h-8 text-white flex items-center 
              justify-center"
              >
                <RiPhoneFill />
              </div>
              <a className="font-medium text-white hover:scale-105 transition duration-200" href="https://api.whatsapp.com/send/?phone=6281770833134&text&type=phone_number&app_absent=0" target="_blank">+62 (813) 1895-2424</a>
            </div>
            {/* mail */}
            <div className="flex items-center">
              <div
                className="w-8 h-8 text-white flex items-center 
              justify-center"
              >
                <RiMailFill />
              </div>
              <p className="font-medium text-white">info@tri-artha.com</p>
            </div>
            {/* linktree */}
            <div className="flex items-center">
              <div
                className="w-8 h-8 text-white flex items-center 
              justify-center"
              >
                <FaLink />
              </div>
              <a className="font-medium text-white hover:scale-105 transition duration-200" href="https://linktr.ee/triarthamanunggal_?utm_source=linktree_profile_share&ltsid=0fffe884-4144-4d1a-81a4-17f5a8cab053" target="_blank">LinkTree</a>
            </div>
          </div>
          {/* socials */}
          <Socials
            containerStyles="flex items-center gap-8 mx-auto xl:mx-0"
            iconStyles="text-primary"
          />
        </div>
      </div>
    </section>
  );
};

export default Topbar;
