"use client"
import React from "react";
import { PiChecksBold } from "react-icons/pi";

const AboutCompanyText = () => {
  const steps = [
    {
      title: "Data-Driven Approach",
      description:
        "A data-driven approach is a methodology that involves using data analysis to make strategic decisions and guide an organization. This approach can help companies make better decisions.",
    },
    {
      title: "Custom Strategies Reality",
      description:
        "Custom strategies can be used in a variety of contexts, including marketing, trading, UI/UX & product design, and software development. You are easily one step ahead.",
    },
    {
      title: "100% Proven Results",
      description:
        "With a track record of success across various industries, we have helped businesses achieve higher rankings, increased traffic, and higher conversion rates.",
    },
    {
      title: "Solved Transparency & Reporting",
      description:
        "Transparency reporting is the practice of releasing documents that disclose information about how an organization operates, including how it enforces rules and policies.",
    },
  ];

  return (
    <div className="flex flex-col px-8 py-12">
      <div className="relative pl-8">
        {/* Vertical Line */}
        <div className="absolute left-12 top-0 bottom-0 w-0.5 bg-[#6749F5] "></div>

        {/* Steps */}
        {steps.map((step, index) => (
          <div key={index} className="flex items-start mb-12">
            {/* Step Icon */}
            <div className="relative flex-shrink-0">
              <div className="w-8 h-8 flex items-center justify-center  bg-[#6749F5] text-white rounded-full">
               <PiChecksBold/>
              </div>
            </div>

            {/* Step Content */}
            <div className="ml-6 text-left">
              <h3 className="text-2xl font-semibold text-[#211650]">{step.title}</h3>
              <p className="text-gray-600 mt-2">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutCompanyText;
