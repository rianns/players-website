"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import About from "@/app/about/page";
import { NAV_LINKS } from "@/utils/data";
import { usePathname } from "next/navigation";

const Nav: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className={`flexEven ${pathname === "/" ? "navbar-home" : "navbar"}`}>
      {NAV_LINKS.map((link) => (
        <Link href={link.href} key={link.key} className="navlinks">
          {link.label}
        </Link>
      ))}
    </nav>
  );
};
export default Nav;
