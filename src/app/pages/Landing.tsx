import LandingLogo from "../components/LandingLogo";
import Nav from "../components/Nav";

const Landing = () => {
  return (
    <div className="min-w-screen min-h-screen">
      <div className="min-w-screen bg-landing bg-cover min-h-fit">
        <Nav />
        <LandingLogo />
      </div>
    </div>
  );
};
export default Landing;
