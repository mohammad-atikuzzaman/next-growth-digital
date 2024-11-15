import React from "react";
import { AccordionCustomStyles } from "./AccordionCustomStyles";

const AboutUs = () => {
  return (
    <section className="py-24 space-y-8">
      <header className="text-center w-1/2 mx-auto">
        <h2 className="text-5xl font-semibold text-[#211650] capitalize">
          nexgrowth Digital{" "}
          <span className="bg-gradient-to-r from-[#5936FF] to-[#BA2BFD] inline-block text-transparent bg-clip-text">
            About
          </span>{" "}
          Us
        </h2>
        <p className="text-lg font-medium text-[#676767] mt-6">
          A trustworthy company is one that consistently demonstrates integrity,
          reliability, and ethical behavior in its operations, interactions, and
          business practices
        </p>
      </header>
      <main>
        <AccordionCustomStyles/>
        <section></section>
      </main>
    </section>
  );
};

export default AboutUs;
