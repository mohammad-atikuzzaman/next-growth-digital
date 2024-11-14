import Image from "next/image";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import DesktopMenu from "./DesktopMenu";

const Navbar = () => {
  return (
    <nav className="bg-[#F7E6FF] sticky top-0 shadow z-10">
      <nav className=" container mx-auto py-4 flex items-center justify-between">
        <section className="flex items-center">
          <Image
            src="/logo.png"
            width={48}
            height={48}
            alt="next growth digital"
          />
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#5936FF] to-[#BA2BFD] text-transparent bg-clip-text ml-4">
            NextGrowth Digital
          </h2>
        </section>

        {/* menubar */}
        <section>
          <DesktopMenu />
        </section>

        {/* action button */}
        <button className="bg-gradient-to-r from-[#5936FF] to-[#BA2BFD] inline-flex items-center px-6 py-3 rounded-md font-semibold text-white">
          Contact Us <FiArrowUpRight className="text-xl ml-2" />
        </button>
      </nav>
    </nav>
  );
};

export default Navbar;
