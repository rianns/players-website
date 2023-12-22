"use client";
import Hours from "@/components/Hours";
import MapBox from "@/components/MapBox";
import Title, { TitleVar } from "@/components/styles/Title";
import { OPENINGS } from "@/utils/data";

const Location = () => {
  return (
    <section className="location">
      <article className="location-hours">
        <TitleVar>{OPENINGS.map((opening) => opening.title)}</TitleVar>
        {OPENINGS.map((opening) =>
          opening.hours.map((hour) => {
            return <Hours key={hour.day} {...hour} />;
          })
        )}
      </article>
      <article className="location-map">
        <MapBox />
      </article>
    </section>
  );
};
export default Location;
