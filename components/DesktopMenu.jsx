"use client";
import Link from "next/link";
// import { usePathname } from "next/navigation";
import React from "react";

const DesktopMenu = () => {
//   const path = usePathname();
  return (
    <ul className="flex items-center gap-4">
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/about"}>About</Link>
      </li>
      <li>
        <Link href={"/service"}>Service</Link>
      </li>
      <li>
        <Link href={"/testimonials"}>Testimonials</Link>
      </li>
      <li>
        <Link href={"/case-study"}>Case study</Link>
      </li>
    </ul>
  );
};

export default DesktopMenu;
