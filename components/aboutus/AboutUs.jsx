import React from "react";
import { AccordionCustomStyles } from "./AccordionCustomStyles";
import Image from "next/image";
import { FiArrowDownRight } from "react-icons/fi";

const AboutUs = () => {
  return (
    <section className="py-24 space-y-8">
      <header className="text-center container mx-auto">
        <h2 className="text-5xl font-semibold w-1/2 mx-auto text-[#211650] capitalize">
          nexgrowth Digital{" "}
          <span className="bg-gradient-to-r from-[#5936FF] to-[#BA2BFD] inline-block text-transparent bg-clip-text">
            About
          </span>{" "}
          Us
        </h2>
        <p className="text-lg font-medium text-[#676767] mt-6 w-3/4 mx-auto">
          A trustworthy company is one that consistently demonstrates integrity,
          reliability, and ethical behavior in its operations, interactions, and
          business practices
        </p>
      </header>
      <main className="container mx-auto flex gap-8">
        {/* about us acccourdian */}
        <section className="w-1/2">
          <AccordionCustomStyles />
        </section>
        <section className="w-1/2">
          <Image src="/image/about.png" alt="" height={400} width={600} />
          <button className="border border-[#5A36FF] text-[#5A36FF] text-lg font-medium px-8 py-3 rounded-lg inline-flex gap-2 items-center mt-8">
            Learn More <FiArrowDownRight className="text-xl" />
          </button>
        </section>
      </main>
    </section>
  );
};

export default AboutUs;
