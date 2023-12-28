import React, { ReactNode } from "react";
import Paper from "./styles/Paper";
import Image from "next/image";
import Barber, { BarberDesc, BarberName } from "./styles/Barber";
import barberPH from "../../public/barber.svg";

type BarberProps = {
  key: string;
  name: string;
  image: string;
  background: string;
};

const BarberCard = ({ name, image, background }: BarberProps) => {
  return (
    <Paper>
      <Barber>
        <Image
          src={image !== "" ? image : barberPH}
          alt={`Photo of ${name}`}
          className="w-auto"
        />
        <BarberName>{name}</BarberName>
        <BarberDesc>{background}</BarberDesc>
      </Barber>
    </Paper>
  );
};

export default BarberCard;
