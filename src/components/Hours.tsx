import React from "react";

type HoursProps = {
  time: string;
  day: string;
};

const Hours = ({ time, day }: HoursProps) => {
  return (
    <div className="location-hours-in flex flexBetween">
      <p>{day}</p>
      <p>{time}</p>
    </div>
  );
};

export default Hours;
