"use client";
import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";

export function AccordionCustomStyles() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion
        open={open === 1}
        className={`mb-8 bg-[#FBF4FF] rounded-xl border border-[#EDCEFF] px-8 ${
          open === 1 ? "bg-gradient-to-r from-[#5936FF] to-[#BA2BFD]" : ""
        }`}
      >
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className={`border-b-0 transition-colors ${
            open === 1 ? "text-white hover:text-white" : ""
          }`}
        >
          <div className="flex justify-between w-full items-center">
            <h2>What is Material Tailwind?</h2>
            {open === 1 ? <FiArrowUpRight /> : <FiArrowDownRight />}
          </div>
        </AccordionHeader>
        <AccordionBody className="pt-0 text-white font-normal">
          Founded on the belief that every brand has the potential to thrive
          online, we combine creativity with advanced data analytics to unlock
          growth opportunities for businesses of all sizes. Whether you’re
          looking to boost your online visibility, drive qualified leads, or
          optimize conversions, our team of certified professionals has the
          skills and experience to elevate your brand.
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 2}
        className={`mb-8 bg-[#FBF4FF] rounded-xl border border-[#EDCEFF] px-8 ${
          open === 2 ? "bg-gradient-to-r from-[#5936FF] to-[#BA2BFD]" : ""
        }`}
      >
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className={`border-b-0 transition-colors ${
            open === 2 ? "text-white hover:text-white" : ""
          }`}
        >
          <div className="flex justify-between w-full items-center">
            <h2>What is Material Tailwind?</h2>
            {open === 2 ? <FiArrowUpRight /> : <FiArrowDownRight />}
          </div>
        </AccordionHeader>
        <AccordionBody className="pt-0 text-white font-normal">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 3}
        className={`mb-8 bg-[#FBF4FF] rounded-xl border border-[#EDCEFF] px-8 ${
          open === 3 ? "bg-gradient-to-r from-[#5936FF] to-[#BA2BFD]" : ""
        }`}
      >
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className={`border-b-0 transition-colors ${
            open === 3 ? "text-white hover:text-white" : ""
          }`}
        >
          <div className="flex justify-between w-full items-center">
            <h2>What is Material Tailwind?</h2>
            {open === 3 ? <FiArrowUpRight /> : <FiArrowDownRight />}
          </div>
        </AccordionHeader>
        <AccordionBody className="pt-0 text-white font-normal">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>

      <Accordion
        open={open === 4}
        className={`mb-8 bg-[#FBF4FF] rounded-xl border border-[#EDCEFF] px-8 ${
          open === 4 ? "bg-gradient-to-r from-[#5936FF] to-[#BA2BFD]" : ""
        }`}
      >
        <AccordionHeader
          onClick={() => handleOpen(4)}
          className={`border-b-0 transition-colors ${
            open === 4 ? "text-white hover:text-white" : ""
          }`}
        >
          <div className="flex justify-between w-full items-center">
            <h2>What is Material Tailwind?</h2>
            {open === 4 ? <FiArrowUpRight /> : <FiArrowDownRight />}
          </div>
        </AccordionHeader>
        <AccordionBody className="pt-0 text-white font-normal">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
    </>
  );
}
