import React from "react";
import Paper from "./styles/Paper";

const ServiceHeader: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Paper className="flex-grow basis-1/3 text-center text-2xl">
      {title.toUpperCase()}
    </Paper>
  );
};

export default ServiceHeader;
