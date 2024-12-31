import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import AddressForm from "./AddressForm";

const LocationSelector = () => {
  const [selectedLocation, setSelectedLocation] = useState({
    lat: 37.7749,
    lng: -122.4194,
  });
  const [address, setAddress] = useState("");

  const handleSave = (fullAddress) => {
    console.log("Saved Address:", fullAddress);
  };

  return (
    <div>
      <h2>Select Your Location</h2>
      <LoadScript googleMapsApiKey="AIzaSyCdMO5HlHZqLXqrCA4_BjqmsF0DEpbiAks">
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "400px" }}
          zoom={12}
          center={selectedLocation}
          onClick={(e) => {
            setSelectedLocation({
              lat: e.latLng.lat(),
              lng: e.latLng.lng(),
            });
          }}
        >
          <Marker position={selectedLocation} />
        </GoogleMap>
      </LoadScript>
      <AddressForm selectedAddress={selectedLocation} onSave={handleSave} />
    </div>
  );
};

export default LocationSelector;