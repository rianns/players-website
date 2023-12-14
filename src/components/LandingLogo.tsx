"use client";
import Image from "next/image";
import playersLogo from "../../public/resources/images/players-logo.png";
import Button from "./styles/Button";

const LandingLogo = () => {
  return (
    <div>
      <Image
        src={playersLogo}
        alt={""}
        width={560}
        // height={683}
      />
    </div>
  );
};
export default LandingLogo;
