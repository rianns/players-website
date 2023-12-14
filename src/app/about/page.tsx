"use client";

import Barbers from "@/components/Barbers";
import Title from "@/components/styles/Title";
import Image from "next/image";

const About = () => {
  return (
    <section>
      <article className="about">
        <Title>About us</Title>
        <div className="about-bg flexCenter">
          <div className="about-desc-container">
            <p className="text-center text-white text-3xl leading-relaxed">
              Players Men&apos;s Hair Stylists at Stockland Baldivis is a
              one-stop-shop for male grooming and hairstyling. The staff are
              experienced in both modern hair styling and traditional barbering
              techniques. <br /> Players Men&apos;s Hairstylists takes both
              appointments and walk-in customers.
            </p>
          </div>
        </div>
      </article>
      <article className="about">
        <Title>Meet the Barbers</Title>
        <Barbers />
      </article>
    </section>
  );
};
export default About;
