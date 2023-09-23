"use client";

import Nav from "../components/Nav";

const About = () => {
  return (
    <div className="flex flex-col h-screen w-screen pt-20">
      <h1 className="text-center">About us</h1>
      <div className="bg-about-bg bg-cover my-16">
        <div className="p-16 bg-dark opacity-50 mx-80 my-16">
          <p className="text-center text-white font-text text-2xl">
            Players Men&apos;s Hair Stylists at Stockland Baldivis is a
            one-stop-shop for male grooming and hairstyling. The staff are
            experienced in both modern hair styling and traditional barbering
            techniques. <br /> Players Men&apos;s Hairstylists takes both
            appointments and walk-in customers.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
