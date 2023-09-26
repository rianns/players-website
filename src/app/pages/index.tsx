import LandingLogo from "../components/LandingLogo";
import Nav from "../components/Nav";

const Index = () => {
  return (
    <div className="min-w-screen min-h-screen border border-red-500">
      <div className="min-w-screen bg-landing bg-cover min-h-4/5">
        <Nav />
        <LandingLogo />
      </div>
    </div>
  );
};
export default Index;
