import Image from "next/image";
import Link from "next/link";

const Logo = ({ light = false }) => {
  // determine the text color based on the light prop\
  const colorClass = light ? "text-white" : "text-primary"; // default to black
  return (
    <Link href="/" className="flex items-center font-primary text-2xl tracking-[4px] gap-[5px]">
      <Image src="/assets/logo.png" width={50} height={25} alt="logo" />
      <span className={colorClass}>TRI ARTHA MANUNGGAL</span>
    </Link>

  );
};

export default Logo;
