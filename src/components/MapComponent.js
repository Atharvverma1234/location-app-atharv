import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapComponent = ({ location, onLocationChange }) => {
  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };

  const defaultCenter = {
    lat: location?.lat || 12.971598, // Default latitude (e.g., Bangalore)
    lng: location?.lng || 77.594566, // Default longitude
  };

  const handleMapClick = (e) => {
    const newLocation = {
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    };
    onLocationChange(newLocation);
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCdMO5HlHZqLXqrCA4_BjqmsF0DEpbiAks">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={defaultCenter}
        zoom={15}
        onClick={handleMapClick}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
