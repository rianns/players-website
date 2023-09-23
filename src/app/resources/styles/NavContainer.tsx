import styled from "styled-components";

export interface NavProps {
  className?: string;
}

const NavContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: "transparent";
  transition: background-color 0.3s ease-in-out;
  z-index: 1000;

  &.shrunken {
    height: 50px;
    padding 10px;
  }

  ${({ className }) => className && `.${className} {}`}
`;

export default NavContainer;
