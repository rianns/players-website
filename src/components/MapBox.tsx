import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import React, { useRef } from "react";

interface GoogleMapProps {
  apiKey: string;
  center: { lat: number; lng: number };
}

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

const MapBox: React.FC<GoogleMapProps> = ({ apiKey, center }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const loadMap = async () => {
  //     await LoadScript({
  //       googleMapsApiKey: "AIzaSyBODvVfzUrn0NWFCA1dCJYsTYDC74SA2BE",
  //       libraries,
  //     });

  //     if (isLoaded) {
  //       const map = new window.google.maps.Map(mapRef.current, {
  //         center: { center },
  //         zoom: 15,
  //       });
  //     }
  //   };
  // }, []);

  console.log(apiKey);
  console.log(center);

  return (
    <LoadScript googleMapsApiKey={apiKey}>
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
