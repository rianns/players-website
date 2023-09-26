"use client";
import React, { useEffect, useRef, useState } from "react";
import NavContainer, {
  NavItem,
  NavList,
  NavProps,
} from "../resources/styles/NavContainer";

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

  // TODO: background show up when scrolled (useState?)

  return (
    <NavContainer>
      <NavList>
        <NavItem>Home</NavItem>
        <NavItem>About</NavItem>
        {/* small logo hidden initially, reveals on scroll down */}
        <NavItem>Services</NavItem>
        <NavItem>Location</NavItem>
      </NavList>
    </NavContainer>
  );
};
export default Nav;
