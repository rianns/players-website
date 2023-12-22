import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import React, { useEffect, useRef } from "react";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: -32.33278742369604,
  lng: 115.81538774825357,
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

const MapBox = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${
      process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    }&libraries=${libraries.join(",")}`;
    script.async = true;
    script.onerror = () => console.error("Google Maps script failed to load.");
    document.body.appendChild(script);
  }, []);

  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string}
    >
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={15}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapBox;
