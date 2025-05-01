import Link from "next/link"
import {FaLinkedin, FaTiktok} from "react-icons/fa"
import {RiInstagramFill} from "react-icons/ri";

const socials = [
    {
        icon: <RiInstagramFill />,
        path: "https://www.instagram.com/triarthamanunggal_/"
    },
    {
        icon: <FaTiktok />,
        path: "https://www.tiktok.com/@triarthamanunggal?_t=ZS-8vtvSf2qUJW&_r=1"
    },
    {
        icon: <FaLinkedin />,
        path: "https://www.linkedin.com/company/tri-artha-manunggal/posts/"
    },
];

const Socials = ({containerStyles, iconStyles}) => {
  return <div className={containerStyles}>
    {socials.map((item, index) => {
        return <Link href={item.path} key={index} className={`text-white hover:scale-125 transition duration-200 ${iconStyles}`} target="_blank" ><span>{item.icon}</span></Link>
    })}
  </div>
}

export default Socials