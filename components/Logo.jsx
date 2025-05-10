import Image from "next/image";
import Link from "next/link";

const Logo = ({ light = false }) => {
  // determine the text color based on the light prop\
  const colorClass = light ? "text-white" : "text-primary"; // default to black
  return (
    <Link href="/" className="flex items-center font-primary text-3xl tracking-[1px] gap-[5px]">
      <Image src="/assets/logo.png" width={60} height={35} alt="logo" />
      <span className={colorClass}>PT. TRI ARTHA MANUNGGAL</span>
    </Link>

  );
};

export default Logo;
