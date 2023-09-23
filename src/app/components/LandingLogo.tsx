import Image from "next/image";
import playersLogo from "../resources/images/players-logo.png";

const LandingLogo = () => {
  return (
    <div className="flex justify-center items-center pt-32 pb-20">
      <Image
        src={playersLogo}
        alt={""}
        width={480}
        // height={683}
        className="border border-white"
      />
    </div>
  );
};
export default LandingLogo;
