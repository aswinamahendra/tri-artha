import Link from "next/link"
import {FaDribbble, FaGithub, FaLinkedin} from "react-icons/fa"
import {RiInstagramFill} from "react-icons/ri";

const socials = [
    {
        icon: <RiInstagramFill />,
        path: "https://www.instagram.com/rzqdsyah/?__pwa=1"
    },
    {
        icon: <FaDribbble />,
        path: "https://dribbble.com/rizqysyahputra"
    },
    {
        icon: <FaGithub />,
        path: "https://github.com/RizqyDS"
    },
    {
        icon: <FaLinkedin />,
        path: "https://www.linkedin.com/in/rizqydwisyahputra/"
    },
];

const Socials = ({containerStyles, iconStyles}) => {
  return <div className={containerStyles}>
    {socials.map((item, index) => {
        return <Link href={item.path} key={index} className={`hover:scale-125 transition duration-200 ${iconStyles}`} target="_blank" ><span>{item.icon}</span></Link>
    })}
  </div>
}

export default Socials