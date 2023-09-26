import { gloock } from "@/app/fonts";
import styled from "styled-components";

export interface NavProps {
  className?: string;
}

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 2.25rem;
`;

export const NavItem = styled.li`
  font-size: 2rem;
  color: white;
  font-family: ${gloock.style.fontFamily};
`;

const NavContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: "transparent";
  z-index: 1000;
`;

export default NavContainer;
