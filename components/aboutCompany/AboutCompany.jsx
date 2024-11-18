import React from "react";
import AboutCompanyImage from "./AboutCompanyImage";
import AboutCompanyText from "./AboutCompanyText";
import AboutCard from "./AboutCard";

const AboutCompany = () => {
  return (
    <section className="bg-[#F6E7FF] py-28">
      <div className="text-center max-w-[60%] mx-auto">
        <h2 className="text-5xl font-semibold text-[#211650] capitalize">
          Why{" "}
          <span className="bg-gradient-to-r from-[#5936FF] to-[#BA2BFD] inline-block text-transparent bg-clip-text">
            Choose Us?
          </span>{" "}
          your company
        </h2>
        <p className="text-lg font-medium text-[#676767] mt-6">
          We’re Companies and their products/services have to earn trust
          gradually — and they do it by answering the question we ask ourselves
          before we
        </p>
      </div>
      <div className="grid grid-cols-2 items-center gap-8 container mx-auto mt-20">
        <AboutCompanyImage />
        <AboutCompanyText />
      </div>
      <div className="grid grid-cols-4 gap-6 container mx-auto mt-20">
        <AboutCard/>
        <AboutCard/>
        <AboutCard/>
        <AboutCard/>
      </div>
    </section>
  );
};

export default AboutCompany;
