"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const DesktopMenu = () => {
  const path = usePathname()

  return (
    <ul className="flex items-center gap-4">
      <li className={path === "/" ? "font-medium text-[#5A36FF]": ""}>
        <Link href={"/"}>Home</Link>
      </li>
      <li className={path === "/about" ? "font-medium text-[#5A36FF]": ""}>
        <Link href={"/about"}>About</Link>
      </li>
      <li className={path === "/service" ? "font-medium text-[#5A36FF]": ""}>
        <Link href={"/service"}>Service</Link>
      </li>
      <li className={path === "/testimonials" ? "font-medium text-[#5A36FF]": ""}>
        <Link href={"/testimonials"}>Testimonials</Link>
      </li>
      <li className={path === "/case-study" ? "font-medium text-[#5A36FF]": ""}>
        <Link href={"/case-study"}>Case study</Link>
      </li>
    </ul>
  );
};

export default DesktopMenu;
