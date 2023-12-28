import LandingLogo from "@/components/LandingLogo";

const Temp = () => {
  return (
    <div className="flex flexCenter temp">
      <LandingLogo />
      <div className="flex flex-col bg-dark p-16 rounded-lg opacity-80">
        <h2 className="text-3xl">Website under construction!</h2>
        <p>
          Please visit our barbershop at Stockland Baldivis, 20 Settlers Ave,
          Baldivis WA 6171
        </p>
      </div>
    </div>
  );
};
export default Temp;
