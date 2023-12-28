"use client";
import Image from "next/image";
import playersLogo from "../../public/resources/images/players-logo.png";
import Button from "./styles/Button";

const LandingLogo = () => {
  return (
    <>
      <Image
        src={playersLogo}
        alt={"Players Hero Logo"}
        width={480}
        // height={683}
      />
    </>
  );
};
export default LandingLogo;
