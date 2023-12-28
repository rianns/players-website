import LandingLogo from "@/components/LandingLogo";
import Button from "@/components/styles/Button";
import Image from "next/image";

export default function Home() {
  return (
    <div className={`landing flexCenter pt-36`}>
      <LandingLogo />
    </div>
  );
}
