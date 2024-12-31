import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 12.9716, // Default to Bangalore
  lng: 77.5946,
};

const Map = ({ setLocation }) => {
  const [marker, setMarker] = useState(center);

  const handleClick = (event) => {
    const newLocation = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };
    setMarker(newLocation);
    setLocation(newLocation);
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCdMO5HlHZqLXqrCA4_BjqmsF0DEpbiAks">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onClick={handleClick}
      >
        <Marker position={marker} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;