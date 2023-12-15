import React from "react";
import { CutsType } from "./Service";

const Prices: React.FC<{ cuts: CutsType[] }> = ({
  cuts,
}: {
  cuts: CutsType[];
}) => {
  return (
    <>
      {cuts.map((cut) => {
        return (
          <div key={cut.name} className="flexBetween">
            <p>{cut.name}</p>
            <p>{cut.price}</p>
          </div>
        );
      })}
    </>
  );
};

export default Prices;
