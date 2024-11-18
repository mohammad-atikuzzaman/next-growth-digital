"use client"
import React from "react";
import CountUp from "react-countup";

const AboutCard = () => {
  return (
    <div className="p-14 rounded-lg bg-[#efe5f5] shadow-md flex items-center justify-center gap-4 hover:scale-105 hover:bg-purple-100 transition-all">
      <CountUp start={0} end={100} delay={0}>
        {({ countUpRef }) => (
          <h2 className='text-[#6749F5] text-5xl font-bold'>
            <span ref={countUpRef} />+
          </h2>
        )}
      </CountUp>
      <p className="font-semibold text-gray-600">
        Happy <br /> Client
      </p>
    </div>
  );
};

export default AboutCard;
