import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src="/assets/logo.png"
        alt="Your Event Logo"
        width={70}
        height={60}
        className="h-auto w-auto"
        priority
      />
      <h2 className="text-xl font-bold text-gray-900">
        Your <span className="text-primary">Event</span>
      </h2>
    </Link>
  );
};

export default Logo;