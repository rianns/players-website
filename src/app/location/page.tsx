"use client";
import Hours from "@/components/Hours";
import MapBox from "@/components/MapBox";
import Title, { TitleVar } from "@/components/styles/Title";
import { OPENINGS } from "@/utils/data";
import React from "react";

const Location = () => {
  const googleMapsApiKey = "AIzaSyBODvVfzUrn0NWFCA1dCJYsTYDC74SA2BE";
  const center = { lat: -32.33278742369604, lng: 115.81538774825357 };

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
        <MapBox apiKey={googleMapsApiKey} center={center} />
      </article>
    </section>
  );
};
export default Location;
