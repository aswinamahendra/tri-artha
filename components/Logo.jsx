import Link from "next/link"

const Logo = ({light = false}) => {
  // determine the text color based on the light prop\
  const colorClass = light ? "text-white" : "text-primray"; // default to black
  return <Link href="/" className="font-primary text-2xl tracking-[4px]">
  <span className={colorClass}>Rizqy Dwi Syahputra</span></Link>
}

export default Logo