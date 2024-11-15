import Link from "next/link";
import React from "react";
import { FiArrowUpRight, FiArrowDownRight } from "react-icons/fi";
import "./styles.css"

const HeroText = () => {
  return (
    <section className="w-[58%] space-y-8">
      <h3 className="text-[#BA2CFD] border border-[#BA2CFD] font-semibold latter rounded-3xl py-3 px-6 inline-block -tracking-tighter uppercase bg-[#EDCEFF]">
        Nextgrowth Digital international provides
      </h3>
      <h2 className="font-bold text-6xl capitalize leading-tight text-[#0E0925">
        Grow your{" "}
        <span className="bg-gradient-to-r from-[#5936FF] to-[#BA2BFD] inline-block text-transparent bg-clip-text">
          business
        </span>
        with data-driven advertising{" "}
        <span className="bg-gradient-to-r from-[#5936FF] to-[#BA2BFD] inline-block text-transparent bg-clip-text">
          solution
        </span>
        than deliver
      </h2>
      <p className="text-[#676767] text-lg">
        Elevate your business with results-driven Paid Media Ads, Strategic
        Digital Marketing, Stunning UI/UX Design, and High-Performance Website
        Development, get 4 step follow and benefit your best service.
      </p>

      <menu className="space-x-5">
        <Link
          className="bg-gradient-to-r from-[#5936FF] to-[#BA2BFD] px-8 py-4 font-semibold text-lg text-white rounded-md  inline-flex items-center gap-2"
          href="/consultation"
        >
          Free Consultation
          <FiArrowUpRight className="text-xl"/>
        </Link>
        <Link
          className="px-8 py-4 rounded-md border border-[#5936FF] text-lg font-semibold text-[#5936FF] inline-flex items-center gap-2 hover:bg-gradient-to-r from-[#5936FF] to-[#BA2BFD] hover:text-white transition-all duration-500 delay-100"
          href="/service"
        >
          Our Service
          <FiArrowDownRight className="text-xl"/>
        </Link>
      </menu>
    </section>
  );
};

export default HeroText;
