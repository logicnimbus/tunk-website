import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";
import tunkLogo from "@/images/logos/tunk-logo.svg";

const Logo = ({ className, props }) => {
  return (
    <Link href={"/"}>
      <Image src={tunkLogo} height="50" width="90" />
    </Link>
  );
};

export default Logo;
