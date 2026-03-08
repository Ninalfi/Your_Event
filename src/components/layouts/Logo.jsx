import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 sm:gap-3">
      <Image
        src="/assets/logo.png"
        alt="Your Event Logo"
        width={70}
        height={60}
        className="h-auto w-auto sm:h-12 md:h-14"
        priority
      />
      <h2 className="text-base sm:text-lg md:text-xl font-bold leading-tight text-gray-900 ">
        Your <span className="text-primary">Event</span>
      </h2>
    </Link>
  );
};

export default Logo;