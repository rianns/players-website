"use client";
import React from "react";
import Paper from "./styles/Paper";
import Prices from "./Prices";
import PricesContainer, { PricesWrapper } from "./styles/StyledPrices";

export type CutsType = {
  name: string;
  price: number;
};

const Service = ({ cuts }: { cuts: CutsType[] }) => {
  return (
    <PricesContainer>
      <PricesWrapper>
        <Prices cuts={cuts} />
        {/* depending on what the title is, hide the rest */}
      </PricesWrapper>
    </PricesContainer>
  );
};

export default Service;
