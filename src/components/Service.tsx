import React from "react";
import Paper from "./styles/Paper";

type ServiceProps<T extends CutsTypes> = {
  title: string;
  cuts: T[];
};

type CutsTypes = {
  name: string;
  price: number;
};

const Service = ({ title, cuts }: ServiceProps<CutsTypes>) => {
  return (
    <div>
      <Paper>{title}</Paper>
      <div>
        {cuts.map((cut) => {
          return (
            <div key={cut.name}>
              {cut.name}
              {cut.price}
            </div>
          );
        })}
      </div>

      {/* depending on what the title is, hide the rest */}
    </div>
  );
};

export default Service;
