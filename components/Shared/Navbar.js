import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-[#8D72E1] text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Image src="/logo.png" alt="" width={70} height={70}></Image>
        </div>
        <ul className="flex gap-5 justify-center my-3 md:my-5">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/#service">
            <li>Service</li>
          </Link>
        </ul>
        <ul>
          <Link href="/login">
            <li>Login</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
