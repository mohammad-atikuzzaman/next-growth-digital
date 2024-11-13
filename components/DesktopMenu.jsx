"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const DesktopMenu = () => {
  const path = usePathname();
  return (
    <ul className="flex items-center gap-4">
      <li>
        <Link
          href={"/"}
          className={path == "/" ? "text-[#5A36FF] font-semibold" : ""}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href={"/about"}
          className={path == "/about" ? "text-[#5A36FF] font-semibold" : ""}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          href={"/service"}
          className={path == "/service" ? "text-[#5A36FF] font-semibold" : ""}
        >
          Service
        </Link>
      </li>
      <li>
        <Link
          href={"/testimonials"}
          className={
            path == "/testimonials" ? "text-[#5A36FF] font-semibold" : ""
          }
        >
          Testimonials
        </Link>
      </li>
      <li>
        <Link
          href={"/case-study"}
          className={
            path == "/case-study" ? "text-[#5A36FF] font-semibold" : ""
          }
        >
          Case study
        </Link>
      </li>
      <li>
        <Link
          href={"/blog"}
          className={path == "blog" ? "text-[#5A36FF] font-semibold" : ""}
        >
          Blog
        </Link>
      </li>
    </ul>
  );
};

export default DesktopMenu;
