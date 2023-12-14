import { BARBERS } from "@/utils/data";
import React, { ReactNode } from "react";
import BarberCard from "./BarberCard";

const Barbers = () => {
  return (
    <div className="flexStart mx-48 mb-24 scroll-smooth gap-x-10 overflow-x-scroll overflow-y-hidden overscroll-contain p-4">
      {BARBERS.map((barber) => {
        const { key: barberKey, ...barbers } = barber;
        return <BarberCard key={barberKey} {...barbers} />;
      })}
    </div>
  );
};

export default Barbers;
