"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import About from "@/app/about/page";
import { NAV_LINKS } from "@/utils/data";

const Nav: React.FC = () => {
  // const [isShrunk, setIsShrunk] = useState<boolean>(false);
  // const navRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const shrinkNav = () => {
  //     const navbar = navRef.current;
  //     if (navbar) {
  //       const scrollTop = window.scrollY;

  //       if (scrollTop > 0) {
  //         setIsShrunk(true);
  //       } else {
  //         setIsShrunk(false);
  //       }
  //     }
  //   };

  //   window.addEventListener("scroll", shrinkNav);

  //   return () => {
  //     window.removeEventListener("scroll", shrinkNav);
  //   };
  // }, [navRef]);

  // TODO: background show up when scrolled (useState?)

  return (
    <nav className="border border-black z-1000 flexEven p-6">
      {/* <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      small logo hidden initially, reveals on scroll down
      <Link href="/services">Services</Link>
      <Link href="/location">Location</Link> */}

      {NAV_LINKS.map((link) => (
        <Link href={link.href} key={link.key} className="navlinks">
          {link.label}
        </Link>
      ))}
    </nav>
  );
};
export default Nav;
