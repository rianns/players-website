"use client";
import React, { useEffect, useRef, useState } from "react";
import NavContainer, { NavProps } from "../resources/styles/NavContainer";

interface NavState {
  isShrunk: boolean;
}

const Nav: React.FC<NavProps> = ({ className }) => {
  const [isShrunk, setIsShrunk] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const shrinkNav = () => {
      const navbar = navRef.current;
      if (navbar) {
        const scrollTop = window.scrollY;

        if (scrollTop > 0) {
          setIsShrunk(true);
        } else {
          setIsShrunk(false);
        }
      }
    };

    window.addEventListener("scroll", shrinkNav);

    return () => {
      window.removeEventListener("scroll", shrinkNav);
    };
  }, [navRef]);

  return (
    <NavContainer ref={navRef} className={className} isShrunk={isShrunk}>
      <div>
        <ul className="flex flex-row justify-evenly p-5 font-nav">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Location</li>
        </ul>
      </div>
    </NavContainer>
  );
};
export default Nav;
